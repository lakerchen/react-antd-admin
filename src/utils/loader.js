import Bundle from 'common/Bundle';

export default const loader = (container,props) => (
  <Bundle load={container}>
    {(Comp) => <Comp {...props}/>}
  </Bundle>
)