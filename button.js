var syncerSounds = {
  flag: {},
  currentTime: null
};

document.addEventListener("DOMContentLoaded", function () {

  /** @var ボタン要素のクラス名 */
  var soundButtonClassName = "sounds";
  /** @var 音声ファイルがあるフォルダ。末尾に `/` を含む */
  var soundsBasePath = "/sounds/";
  /** @var 停止ボタンに付ける ID */
  var stopButtonId = "stop-button";

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
    return false;
  };
});
