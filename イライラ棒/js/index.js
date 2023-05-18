//スタートボタン
let start = document.getElementById("start");

//停止ボタン
let stop = document.getElementById("stop");

//失敗時のリセットボタン
let reset = document.getElementById("reset");

//成功時の再スタートボタン
let restart = document.getElementById("restart");

//失敗時に表示する画面
const failed = document.getElementById('failed');

//成功時に表示する画面
const clear = document.getElementById('clear');

//壁や障害物
const spans = document.querySelectorAll('span');

//レベル低ボタン
let low = document.getElementById("level_L");

//レベル高ボタン
let high = document.getElementById("level_H");

//動くバー1
let one = document.getElementById("one");
//動くバー2
let two = document.getElementById("two");
//動くバー3
let three = document.getElementById("three");
//動くバー4
let four = document.getElementById("four");
//プレイの有無
playing = false;


//バーを止める関数
low.onclick = function() {
    one.classList.remove("up3")
    two.classList.remove("up")
    three.classList.remove("up2")
    four.classList.remove("down")
}
//バーを動かす関数
high.onclick = function() {
    one.classList.add("up3")
    two.classList.add("up")
    three.classList.add("up2")
    four.classList.add("down")
}


//スタートボタン
start.onclick = function() {
    playing = true;
}

//ゴールボタンを押したらクリア画面表示
stop.onclick = function() {
    if (playing) {
        clear.classList.remove('hidden_c');
        playing = false;
    }
}

//成功のもう一度ボタン
restart.onclick = function() {
    clear.classList.add("hidden_c");
}

//失敗のもう一度ボタン
reset.onclick = function() {
    failed.classList.add('hidden_f');
}


//壁の当たり判定
spans.forEach(function(span) {
    span.onmouseover = function() {
        if (playing) {
            failed.classList.remove('hidden_f');
            playing = false;
        }
    }
});