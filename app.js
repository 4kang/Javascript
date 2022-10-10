// let 変数名 = 内容;
// let hello = "Hello World"

// alert = 任意のテキストメッセージをポップアップで画面に表示する
// alert(hello);


// 足し算
// alert(4 + 3);

// 引き算
// alert(8 - 5);

// 掛け算
// alert(2 * 6);

// 割り算
// alert(10 / 2);

// alert('Hello' + 'World');


// if文
// let orange = 100;
// let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い')
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段')
// } else{
//   alert('みかんの値段がりんごより高い')
// }


// while文
// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1 ;
// }

// alert('2をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + "回です");


// 関数
// function 関数名(){
//   処理内容
// }
// メイン部分
// let alertString;
// alertString = addString("WebCamp");

// 作成した関数を呼び出す
// alert(alertString);

// 作成した関数
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }


// prompt =入力ダイアログを表示し、ユーザーに入力を促すことができる
// let promptStr = prompt('何か好きな文字を入力してください')

// alert(promptStr);


// 複数の関数を定義する
// let user_hand = prompt('じゃんけんに手をグー、チョキ、パーから選んでください');

// alert('あなたの選んだ手は' +　user_hand + 'です。');


// じゃんけんの手を入力してもらうプロンプト欄を生成
// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');

// じゃんけんの手をランダムに作成する関数を呼び出す
// let js_hand = getJShand();

// ユーザーの手とJavascriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
// let judge = winLose(user_hand, js_hand);

// 結果を表示する
// alert('あなたの選んだ手は' + user_hand + 'です。¥nJavaScriptの選んだ手は' + js_hand + 'です。¥n結果は' + judge + 'です。');

// ランダムでじゃんけんの手を作成する関数


// ユーザの手とJavascriptのじゃんけんの手を比べる関数
// function winLose(user, js){
  // let winLoseStr;

  // if(user == "グー"){
    // if(js == "グー"){
      // winLoseStr = "あいこ";
    // } else if(js == "チョキ"){
      // winLoseStr = "勝ち";
    // } else if(js == "パー"){
      // winLoseStr = "負け";
    // }
  // } else if(user == "チョキ"){
    // if(js == "グー"){
      // winLoseStr = "負け";
//    } else if(js == "チョキ"){
//      winLoseStr = "あいこ";
//    } else if(js == "パー"){
//      winLoseStr = "勝ち";
//    }
//  }　else if(user == "パー"){
//    if(js == "グー"){
//      winLoseStr = "勝ち";
//    } else if(js == "チョキ"){
//      winLoseStr = "負け";
//    } else if(js == "パー"){
//      winLoseStr = "あいこ";
//    }
//  }

//  return winLoseStr;
//}


// $('body').html('<h1>Hello JQuery!!</h1>');
// セレクタ……body
// メソッド……html
// パラメータ……'<h1>Hello JQuery!!</h1>'
// bodyタグ内のHTMLを、<h1>Hello JQuery!!</h1>で書き換えなさい
// $(document).ready(function (){
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });


let js_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
while ((user_hand != "グー")&&(user_hand !="チョキ")&&(user_hand != "パー")&&(user_hand != null)) {
  alert('グー・チョキ・パーのいずれかを入力してください');
  user_hand = prompt('じゃんけんの手をグー・チョキ・パーから選んでください');
}
let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。¥nJavaScriptの選んだ手は' + js_hand + 'です。¥n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand;
  if (js_hand_num == 0) {
    hand = "グー";
  } else if (js_hand_num == 1){
    hand = "チョキ";
  } else if (js_hand_num == 2){
    hand = "パー";
  }
  return hand;
}

function winLose(user,js){
  
}