export const isAuthenticated = (user) => {
    return (!Object.keys(user).length == 0)
    // return true
}