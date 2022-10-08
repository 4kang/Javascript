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
var str = "webcamp" //グローバルスコープ

function foo() {
    console.log(str)
    var y = "hello" //関数スコープ
}

foo()
console.log(y)