export default {
    login(username, password) {
        return new Promise(function (reslove) {
            setTimeout(function () {
                reslove(username, password)
            }, 2000)
        })
    },
    storeItem(key, value) {
        localStorage.setItem(key, value)
    },
    remove(key) {
        localStorage.removeItem(key)
    }

}