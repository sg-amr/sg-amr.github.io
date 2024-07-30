// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeUpTrigger').each(function () { //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 100; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
            // 画面内に入ったらfadeInというクラス名を追記
        } else {
            $(this).removeClass('fadeUp');
            // 画面外に出たらfadeInというクラス名を外す
        }
    });

    //関数でまとめることでこの後に違う動きを追加することが出来ます
    $('.fadeDownTrigger').each(function () { //fadeInDownTriggerというクラス名が
        var elemPos = $(this).offset().top - 50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeDown');
            // 画面内に入ったらfadeDownというクラス名を追記
        } else {
            $(this).removeClass('fadeDown');
            // 画面外に出たらfadeDownというクラス名を外す
        }
    });


}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
$(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

if(window.location.pathname === "/") {
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 50,//この数値を変更すると幾何学模様の数が増減できる
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#777777"//色
        },
        "shape": {
            "type": "polygon",//形状はpolygonを指定
            "stroke": {
                "width": 0,
            },
            "polygon": {
                "nb_sides": 3//多角形の角の数
            },
            "image": {
                "width": 190,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.664994832269074,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 2.2722661797524872,
                "opacity_min": 0.08115236356258881,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#000000",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,//この数値を小さくするとゆっくりな動きになる
            "direction": "none",//方向指定なし
            "random": false,//動きはランダムにしない
            "straight": false,//動きをとどめない
            "out_mode": "out",//画面の外に出るように描写
            "bounce": false,//跳ね返りなし
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 961.4383117143238
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        }
    },
    "retina_detect": true
});}

var unit = 100,
    canvasList, // キャンバスの配列
    info = {}, // 全キャンバス共通の描画情報
    colorList; // 各キャンバスの色情報

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
function init() {
    info.seconds = 0;
    info.t = 0;
    canvasList = [];
    colorList = [];
    // canvas1個めの色指定
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(['#a0e09c', '#70c96b', '#47ab42']);//重ねる波の色設定
    // 各キャンバスの初期化
    for (var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
        canvas.height = 200;//波の高さ
        canvas.contextCache = canvas.getContext("2d");
    }
    // 共通の更新処理呼び出し
    update();
}

function update() {
    for (var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        // 各キャンバスの描画
        draw(canvas, colorList[canvasIndex]);
    }
    // 共通の描画情報の更新
    info.seconds = info.seconds + .003;
    info.t = info.seconds * Math.PI;
    // 自身の再起呼び出し
    setTimeout(update, 0);
}

/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
    // 対象のcanvasのコンテキストを取得
    var context = canvas.contextCache;
    // キャンバスの描画をクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    //波の重なりを描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
    drawWave(canvas, color[0], 0.7, 3, 0);//0.5⇒透過具合50%、3⇒数字が大きいほど波がなだらか
    drawWave(canvas, color[1], 0.6, 2, 250);
    drawWave(canvas, color[2], 0.4, 1.6, 100);
}

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(canvas, color, alpha, zoom, delay) {
    var context = canvas.contextCache;
    context.fillStyle = color;//塗りの色
    context.globalAlpha = alpha;
    context.beginPath(); //パスの開始
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ
    context.lineTo(0, canvas.height); //パスをCanvasの左下へ
    context.closePath() //パスを閉じる
    context.fill(); //波を塗りつぶす
}

/**
 * Function to draw sine
 * 
 * The sine curve is drawn in 10px segments starting at the origin. 
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height / 2);
    var yAxis = 0;
    var context = canvas.contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t + (-yAxis + i) / unit / zoom;
        y = Math.sin(x - delay) / 3;
        context.lineTo(i, unit * y + xAxis);
    }
}

init();
