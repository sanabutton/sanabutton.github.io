import SanabuttonClient from "./SanabuttonClient/SanabuttonClient";
import { HttpClient } from "./SanabuttonClient";

document.addEventListener("DOMContentLoaded", async () => {
  const buttonsRaw = await new SanabuttonClient(HttpClient.create()).buttons();
  const buttonsFlat: string[] = [];
  for (const stream of buttonsRaw) {
    for (const buttonsLine of stream) {
      for (const button of buttonsLine) {
        buttonsFlat.push(button["file-name"]);
      }
    }
  }

  await play(buttonsFlat);
});

async function play(buttons: string[]) {
  const buttonName = buttons.shift();
  if(buttonName == null) {
    return;
  }

  console.log(buttonName);
  const audio = new Audio("https://www.natorisana.love/sounds/" + buttonName + ".mp3");

  audio.addEventListener("ended", async () =>{
    await play(buttons);
  });

  console.log("start play: " + buttonName);
  await audio.play();
}
