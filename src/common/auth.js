export const auth = {
    getSelf: () => {
        return sessionStorage.self && JSON.parse(sessionStorage.self)
    },
    logout: (cb) => {
    // sessionStorage.loggedIn = false
    delete sessionStorage.loggedIn
    delete sessionStorage.self
    if (cb) cb()
    // this.onChange(false)
    },
    loggedIn: () => {
    return !!sessionStorage.loggedIn
    },
    onChange: () => {}
}