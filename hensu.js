// 変数宣言

// -----------varによる再宣言-------------
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// -----------letによる再宣言-------------※エラー出る
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

// -----------constによる再宣言-------------※エラー出る
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

// -----------varによる再代入----------------
// var nickname = "taro"
// console.log(nickname)
// nickname ="jiro"
// console.log(nickname)

// -----------letによる再代入----------------
// let nickname ="taro"
// console.log(nickname)
// nickname ="ichiro"
// console.log(nickname)

// -----------constによる再代入--------------※エラー出る
// const nickname ="taro"
// console.log(nickname)
// nickname ="ichiro"
// console.log(nickname)

// -----------スコープ---------------
// var str = "webcamp" //グローバルスコープ

// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
// }

// foo()
// console.log(y)


// function foo() {
//     let x = "webcamp"
//     {
//         let y = "hello webcamp"
//     }
//     console.log(x)
//     console.log(y)
// }

// foo()

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// console.log(i)

// --------------巻き上げ---------------

// ver str = "webcamp"

// function foo() {
//     var str
//     console.log(str)
//     str = "dmm webcamp"
//     console.log(str)
// }

// foo()