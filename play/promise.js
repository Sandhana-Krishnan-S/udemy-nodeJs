let a = 0, b = 1

const fun = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                if (number > 0) resolve("Wow")
                else reject("ew")
            })
    }, 1500);
}
setTimeout(() => {
    fun(b).then(
        text => console.log(text)
    ).catch(
        text => console.log(text)
    )
}, 2000);
