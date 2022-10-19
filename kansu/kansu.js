// 関数を使って繰り返し処理をまとめる
// function 関数名(引数) {
  // 処理
  // retune 戻り値;
// }

// 例
// function addString(strA){
  // let addStr = "Hello" + strA; //変数名「addStr」に、「Hello 」の文字列と、関数の引数「strA」に設定されている文字列を結合しています
  // return addStr;
// }

// 作成した関数を呼び出す
// メイン部分

// alert('Hello wolrd');

// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
//   alert('グー・チョキ・パーのいずれかを入力して下さい');
//   user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// }
// let js_hand = getJShand();
// let judge = winLose(user_hand, js_hand);

// if (user_hand != null){
//   alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
// } else {
//   alert("またチャレンジしてね")
// }

// function getJShand(){
//   let js_hand_num = Math.floor(Math.random() * 3);
//   let hand;
//   if (js_hand_num == 0){
//     hand = "グー";
//   } else if (js_hand_num == 1){
//     hand = "チョキ";
//   } else if (js_hand_num == 2){
//     hand = "パー";
//   }
//   return hand;
// }

// function winLose(user, js){
//   let winLoseStr;
//   if (user == "グー"){
//     if (js == "グー"){
//       winLoseStr = "あいこ";
//     } else if (js == "チョキ"){
//       winLoseStr = "勝ち";
//     } else if (js == "パー"){
//       winLoseStr = "負け";
//     }
//   } else if (user == "チョキ"){
//     if (js == "グー"){
//       winLoseStr = "負け";
//     } else if (js == "チョキ"){
//       winLoseStr = "あいこ";
//     } else if (js == "パー"){
//       winLoseStr = "勝ち";
//     }
//   } else if (user == "パー"){
//     if (js == "グー"){
//       winLoseStr = "勝ち";
//     } else if (js == "チョキ"){
//       winLoseStr = "負け";
//     } else if (js == "パー"){
//       winLoseStr = "あいこ";
//     }
//   }
//   return winLoseStr;
// }

// let hello = "4+5";
// alert(4 + 5);

// let orange = 100;
// let apple = 120;

// if (orange < apple) {
//   alert('みかんの値段がりんごより安い');
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// } else {
//   alert('みかんの値段がりんごより高い');
// }




// ------------このプログラムでは、「1」を基準に「2」を掛け続けた場合、何回で「100」を超えるかを測定しています。-------
// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて'+ max + 'を超えるのに必要だった回数は' + count + '回です');

// let alertString;
// alertString = addString("WebCamp");

// alert(alertString);

// function addString(srtA){
//   let addStr = "Hello " + srtA
//   return addStr;
// }

// let promptStr = prompt('何か好きな文字を入力してください');
// alert(promptStr);

let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');

alert('あなたの選んだ手は' + user_hand + 'です');