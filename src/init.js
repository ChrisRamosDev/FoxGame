import game from "./gameState";

// setup internal game clock
const TICK_RATE = 3000;

const init = async () => {
  console.log("starting game");

  let nextTimeToTick = Date.now();

  //closure
  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
};

init();
