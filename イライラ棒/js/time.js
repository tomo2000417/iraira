'use strict'; {
    let time = 0;
    let timerLabel = document.getElementById('time');
    let startBtn = document.getElementById('start');
    let stopBtn = document.getElementById('stop');
    let resetBtn = document.getElementById('reset');
    let restartBtn = document.getElementById("restart")
    let id; // setTimeoutから返される値を入れる変数


    // STARTボタン
    function start() {
        // スタートボタンを押せないようにする（これをしないと何回もスタートボタン押せてしまう）
        startBtn.disabled = true;
        // timeをsetTimeoutで設定したミリ秒ごとに1プラスする
        time++;

        //分・秒・ミリ秒を計算
        let min = Math.floor(time / 100 / 60)
        let sec = Math.floor(time / 100);
        let mSec = time % 100;
        // 分・秒・ミリ秒が１桁の場合は、先頭に０をつける
        if (min < 10) min = '0' + min;
        if (sec >= 60) sec = sec % 60; // 秒が60秒以上になった場合の処理（60になったら0になる）
        if (sec < 10) sec = '0' + sec;
        if (mSec < 10) mSec = '0' + mSec;

        // timerLabelを更新
        timerLabel.innerHTML = min + ':' + sec + ':' + mSec;
        // setTimeoutでstart関数をループさせるイメージ？
        id = setTimeout(start, 10);
    }

    // STOPボタン
    function stop() {
        clearTimeout(id);
        startBtn.disabled = false;
        if (time < 600) {
            msg.innerHTML = "Sランク";
            return false;
        } else if (time < 900) {
            msg.innerHTML = "Aランク";
            return false;
        } else if (time < 1200) {
            msg.innerHTML = "Bランク";
            return false;
        } else {
            msg.innerHTML = "Cランク";
            return false;
        }
    }
    // RESETボタン
    function reset() {
        // 停止する
        clearTimeout(id);
        // タイムを0に戻す
        time = 0;
        // タイマーラベルをリセット
        timerLabel.innerHTML = '00:00:00';
        // スタートボタンを押せるようにする
        startBtn.disabled = false;
    }

    // クリックした時の処理
    startBtn.addEventListener('click', start, false); // STARTボタン
    stopBtn.addEventListener('click', stop, false); // STOPボタン
    resetBtn.addEventListener('click', reset, false); // RESETボタン
    restartBtn.addEventListener('click', reset, false); // restartボタン


}