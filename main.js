const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// queue sprite sheet for download
ASSET_MANAGER.queueDownload("./sprites/coin.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	/* 
	*  add sprite class to game engine so the draw and update 
	*  methods will be called
	*/
	gameEngine.addEntity(new Sprite(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
