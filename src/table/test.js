/**
 * Object.keys()
 * Object.values()
 */

let data = {
    name: 'zhangyuhong',
    age: [1, 2],
    height: 20,
    weigth: 100,
    sex: 'gile'

}
var A = Object.keys(data)
var B = Object.values(data)
console.log(A)
console.log(B)

A.forEach((key) => {
    console.log(this[key])
})

// [
//     { key: "2", name: "报告", age: "London No. 1 Lake Park", address: "2018年11月11号", tags: "2018年11月12号" },
//     { key: "3", name: "演讲", age: "Sidney No. 1 Lake Park", address: "2018年11月11号", tags: "2018年11月12号" }
// ].filter((item) => {

//     if (item.key > 2) {
//         console.log(item)
//     }
// }, (thisValue) => {
//     console.log(this.thisValue)
// })