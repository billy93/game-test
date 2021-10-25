
(() => {
    
    // SceneManager_goto = SceneManager.goto;
    // SceneManager.goto = function(sceneClass) {
    //     SceneManager_goto.call(this, Scene_SplashScreens);
    // };

    Scene_Boot.videoPlaying = false;
    
    Scene_Boot.prototype.startNormalGame = function() {
        this.checkPlayerLocation();
        DataManager.setupNewGame();
        Window_TitleCommand.initCommandPosition();
        // this.createMessageWindow();
    };
    
    Scene_Boot.prototype.update = function(){
        if(TouchInput.isClicked()){
            this.videoPlaying = true;
            if(!Video.isPlaying()){
                Video.play("movies/opening.webm");
            }
        }

        if(this.videoPlaying){
            if(!Video.isPlaying()){
                SceneManager.goto(Scene_Title);
            }
        }
    }    

    // Scene_Boot.prototype.createMessageWindow = function() {
    //     const rect = this.messageWindowRect();
    //     this._messageWindow = new Window_Message(rect);
    //     $gameMessage.add("Hello");
    //     this.addWindow(this, this._messageWindow);
    // };
    
    // Scene_Boot.prototype.messageWindowRect = function() {
    //     const ww = Graphics.boxWidth;
    //     const wh = this.calcWindowHeight(4, false) + 8;
    //     const wx = (Graphics.boxWidth - ww) / 2;
    //     const wy = 0;
    //     return new Rectangle(wx, wy, ww, wh);
    // };
})();
