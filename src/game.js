import * as PIXI from "pixi.js";

const MIN_AR = 1;    // lowest possible aspect ratio
const MAX_AR = 2.39; // highest possible aspect ratio

// calculates an appropriate viewport within the bounds of MIN_AR & MAX_AR
function bestViewport() {
	let w = window.innerWidth,
		h = window.innerHeight;

	let ar = w / h;

	if (ar > MAX_AR)
		w = h * MAX_AR;
	if (ar < MIN_AR)
		h = w;

	return { width: Math.trunc(w), height: Math.trunc(h) };
}

let game = new PIXI.Application();

// resizes the renderer's view and centres the canvas onscreen
window.onresize = () => {
	let vp = bestViewport();
	game.renderer.resize(vp.width, vp.height);
	
	game.renderer.view.style.left = ((window.innerWidth - vp.width) / 2) + "px";
	game.renderer.view.style.top = ((window.innerHeight - vp.height) / 2) + "px";
};
window.onresize();

document.body.appendChild(game.view);
