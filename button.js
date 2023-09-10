var syncerSounds = {
  flag: {},
  currentTime: null,
};

// IFrame Player APIの読み込み
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/**
 * YouTubeプレーヤーの読み込みを行う
 */

// プレーヤー挿入箇所のidを指定
var player;
// プレーヤーの読み込み
// 初回起動時はvideoIdで指定した動画のセットのみ行う（再生ボタンを押すまでFLVはロードされない）
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: "AeB6SOvka44",
    playerVars: {
      enablejsapi: 1,
      playsinline: 1,
    },
    events: {
      //'onReady': onPlayerReady,
      //'onStateChange': onPlayerStateChange
    },
  });
}

/**
 * 動画の準備が完了したときに呼び出されるメソッド
 * @param {*} event
 */
function onPlayerReady(event) {
  // 動画をミュートにしてから再生する（この場合はスマホでも自動再生可能）
  event.target.mute();
  event.target.playVideo();
}

/**
 * プレーヤーの状態が変化したときに呼び出されるメソッド
 */
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    // ここに処理を記述する
    done = true;
  }
}

/**
 * 動画の再生を開始する
 */
function playVideo() {
  player.playVideo();
}
/**
 * 再生中の画を一時停止する
 */
function pauseVideo() {
  player.pauseVideo();
}
/**
 * 現在の動画の読み込みを停止する
 */
function stopVideo() {
  player.stopVideo();
}
/**
 * プレーヤーをミュートにする
 */
function muteVideo() {
  player.mute();
}
/**
 * プレーヤーのミュートを解除する
 */
function unMuteVideo() {
  player.unMute();
}

document.addEventListener("DOMContentLoaded", function () {
  /** @var ボタン要素のクラス名 */
  var soundButtonClassName = "sounds";
  /** @var 音声ファイルがあるフォルダ。末尾に `/` を含む */
  var soundsBasePath = "https://www.natorisana.love/sounds/";
  /** @var 停止ボタンに付ける ID */
  var stopButtonId = "stop-button";

  /** @var ユーチューブ動画ボタン要素のクラス名 */
  var soundYoutubeButtonClassName = "youtube-sounds";
  /** @var ユーチューブプレーヤー形式のURL。主な形式は「http://www.youtube.com/v/VIDEO_ID?version=3」 */
  var mediaContentUrl = "";
  /** @var ユーチューブプレーヤー形式のURLの先頭部分。 */
  var firstUrl = "https://www.youtube.com/embed/";
  /** @var ユーチューブ動画のID部分 */
  var dataId = "";
  /** @var ユーチューブプレーヤーのパラメータ。IFrame Player APIの有効化・対応ブラウザでの自動再生・iOS端末でのインライン再生を有効化している */
  var playParam = "?enablejsapi=1&autoplay=1&playsinline=1";
  /** @var ユーチューブ動画の再生開始時間。nullの場合動画の最初から再生される */
  var dataStart = null;
  /** @var ユーチューブ動画の再生終了時間。nullの場合動画の最後まで再生される */
  var dataEnd = null;

  var sounds = document.getElementsByClassName(soundButtonClassName);

  for (var i = 0, l = sounds.length; l > i; i++) {
    sounds[i].onclick = function () {
      var file = this.getAttribute("data-file");

      // 一度生成したエレメントは生成しない
      if (
        typeof syncerSounds.flag[file] == "undefined" ||
        syncerSounds.flag[file] != 1
      ) {
        var audio = document.createElement("audio");

        audio.id = file;

        if (audio.canPlayType("audio/mp3")) {
          audio.src = soundsBasePath + file + ".mp3";
        }

        document.body.appendChild(audio);
      }

      // 初回再生以外だったら音声ファイルを巻き戻す
      stopCurrentSound();

      document.getElementById(file).play();

      syncerSounds.currentTime = file;

      // 初回再生が終わった判定用に[syncerSounds.flag]の値を0から1に変更する
      // エレメントを何度も生成しないようにするため
      syncerSounds.flag[file] = 1;

      return false;
    };
  }

  /**
   * 前回の音声を停止する
   */
  function stopCurrentSound() {
    var currentSound = document.getElementById(syncerSounds.currentTime);

    if (currentSound != null) {
      currentSound.pause();
      currentSound.currentTime = 0;
    }
  }

  /**
   * 停止ボタンをクリックした時のイベントを登録する
   * @returns {boolean}
   */
  document.getElementById(stopButtonId).onclick = function () {
    stopCurrentSound();
    pauseVideo();
    return false;
  };

  /**
   * YouTube動画ボタンクリック時の処理
   */
  var youtubeSounds = document.getElementsByClassName(
    soundYoutubeButtonClassName,
  );
  for (var i = 0, l = youtubeSounds.length; l > i; i++) {
    youtubeSounds[i].onclick = function () {
      dataId = this.getAttribute("data-id");
      dataStart = this.getAttribute("data-start");
      dataEnd = this.getAttribute("data-end");

      // YouTubeプレーヤー形式のURLを作成
      mediaContentUrl = firstUrl + dataId + playParam;

      // 指定された動画をプレーヤーに読み込む
      player.loadVideoByUrl(mediaContentUrl, dataStart, dataEnd);
    };
  }
});
