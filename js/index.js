"use strict";

window.onload = () =>{
    let video = document.querySelector('#camera');
    let canvas = document.querySelector('#picture');
    let shutter = document.querySelector('#shutter');

    /* カメラ設定 */
    const set = {
        video: {
            width: 375,
            height: 400,
            facingMode: "user" /* フロントカメラを使用する */
            // facingMode: {exact: "environment"} /* リアカメラを使用する */
        }
    };

    // カメラを<video>と同期させる
    navigator.mediaDevices.getUserMedia(set)
    .then((stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = (e) => {
            video.play();
        };
    })
    .catch( (err) => {
        console.log(err.name + ": " + err.message);
      });

    // シャッターボタン
    shutter.onclick = () =>{
       const context = canvas.getContext("2d");
       
    // 映像を一時停止する
       video.pause();

    // 0.5秒後に映像を再開
       setTimeout(() => {
           video.play();
       }, 500);

    // canvasに撮った映像を描画
       context.drawImage(video, 0, 0, canvas.width, canvas.height);
    }
}