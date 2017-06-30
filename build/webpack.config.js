'use strict';
const CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
let HtmlwebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

//自定义主题
let theme = require('../theme.js');

let env = process.env.NODE_ENV;

const webpackConfig =  {};

webpackConfig.entry =  {
  'assets/main': './src/main.js',
  'assets/vendor': ['promise-polyfill', 'whatwg-fetch']
};

webpackConfig.output = {
    path: resolve('dist'), //打包后的文件存放的地方
    publicPath: '/',
    filename: '[name]-[hash:5].js', //打包后输出文件的文件名
    chunkFilename: 'assets/[name].[chunkhash:5].chunk.js'
}

webpackConfig.module = {
  rules: [
    {
      test: /\.js$/, 
      exclude: /node_modules/,
      use : {
        loader: 'babel-loader', 
        options: {
          presets: ['es2015', 'stage-2'],
        }
      }
    }, 
  ]
}

webpackConfig.module.rules.push(
  { test: /\.woff(\?.*)?$/,  use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
  { test: /\.woff2(\?.*)?$/, use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
  { test: /\.otf(\?.*)?$/, use: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype' },
  { test: /\.ttf(\?.*)?$/, use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
  { test: /\.eot(\?.*)?$/, use: 'file-loader?prefix=fonts/&name=[path][name].[ext]' },
  { test: /\.svg(\?.*)?$/, use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
  { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=8192&name=assets/images/[hash:8].[name].[ext]' }
)

//set NODE_ENV=production&&babel-node bin/compile中，&&前面不能有空格，否则env === 'production'为false
//开发环境使用ExtractTextPlugin插件，会导致语法错误没法提示
if(env === 'production'){
  webpackConfig.module.rules.push({
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader', 
      use: ['css-loader', 'postcss-loader']
    })
  })

  webpackConfig.module.rules.push({
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'postcss-loader', `less-loader?{modifyVars:${JSON.stringify(theme)}}`]
    })
  })
}else{
  webpackConfig.module.rules.push({
    test: /\.css$/,
    use: ['style-loader','css-loader','postcss-loader']
  })
  webpackConfig.module.rules.push({
    test: /\.less$/,
    use: ['css-loader', 'postcss-loader', `less-loader?{modifyVars:${JSON.stringify(theme)}}`]
  })
}

webpackConfig.resolve = {
  alias: {
    containers: path.resolve(__dirname, '../src/containers/'),    
    components: path.resolve(__dirname, '../src/components/'),    
    constants: path.resolve(__dirname, '../src/constants/'),    
    layouts: path.resolve(__dirname, '../src/layouts/'),    
    middleware: path.resolve(__dirname, '../src/middleware/'),    
    modules: path.resolve(__dirname, '../src/modules/'),    
    res: path.resolve(__dirname, '../src/res/'),    
    routes: path.resolve(__dirname, '../src/routes/'),    
    store: path.resolve(__dirname, '../src/store/'),    
    images: path.resolve(__dirname, '../src/res/images'),    
    utils: path.resolve(__dirname, '../src/utils/')   
  }
};

if(env !== 'production'){
  webpackConfig.devServer = {
    host: '0.0.0.0', //加上这个配置才能让别人访问你的本地服务器
    contentBase: './dist', //本地服务器所加载的页面所在的目录
    port: 8989,
    historyApiFallback: true, //不跳转
    hot: true, //实时刷新
    https : false,
    noInfo : true,
    //代理到json-server的端口，模拟后端接口
    proxy: {
      '/api/*': {
        target: 'http://localhost:8787',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api/': '/'
        },
      }
    }
  };
}

webpackConfig.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        require('autoprefixer')//调用autoprefixer插件
      ]               
    }
  }), 
  new webpack.LoaderOptionsPlugin({
    options: {
      babel : {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-runtime', ['import', {
          libraryName: 'antd',
          style: true
        }]]
      }             
    }
  }), 
  //see => https://github.com/webpack/docs/wiki/list-of-plugins#commonschunkplugin
  new CommonsChunkPlugin({
    name: 'assets/main',
    filename: 'assets/common-[hash:5].js',
    children : true,
    minChunks: 3
  }),
  //see => https://github.com/webpack/docs/wiki/list-of-plugins#uglifyjsplugin
  new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      drop_console: true,
      compress: {
        warnings: false,   //把打包的时候控制台的很多warning忽略掉，免得刷屏
      },
  }),
  //see => https://github.com/webpack/docs/wiki/list-of-plugins#htmlwebpackplugin-
  new HtmlwebpackPlugin({
    filename: 'index.html',
    favicon : 'src/res/favicon.ico',
    template: 'src/index.html',
    chunks: ['assets/vendor', 'assets/main']
  }),

  new webpack.DefinePlugin({
    __DEV__: env === 'development',
    __TEST__: env === 'test',
    __PRD__ : env === 'production'
  }),
];

if(env === 'production'){
  //see => https://www.npmjs.com/package/extract-text-webpack-plugin
  webpackConfig.plugins.push(
    new ExtractTextPlugin('[name]-[hash:5].css', {
      allChunks : true
    })
  )
  webpackConfig.plugins.push(
    new webpack.DefinePlugin({
      __DEV__: env === 'development',
      __TEST__: env === 'test',
      __PRD__ : env === 'production',
      'process.env': {
         NODE_ENV: JSON.stringify("production") 
      }
    })
  )
  webpackConfig.plugins.push(
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/example'),
      to: path.resolve(__dirname, '../dist/example'),
    }])
  )
}

module.exports = webpackConfig;
