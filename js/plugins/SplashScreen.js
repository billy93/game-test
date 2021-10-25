
(() => {
    


    // SceneManager_goto = SceneManager.goto;
    // SceneManager.goto = function(sceneClass) {
    //     SceneManager_goto.call(this, Scene_Title);
    // };

    Scene_Boot.prototype.startNormalGame = function() {
        this.checkPlayerLocation();
        DataManager.setupNewGame();
        // SceneManager.goto(Scene_Title);
        // Window_TitleCommand.initCommandPosition();
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

    /*
    function Scene_SplashScreens() {
        this.initialize(...arguments);
    }

    Scene_SplashScreens.prototype = Object.create(Stage.prototype);
    Scene_SplashScreens.prototype.constructor = Scene_SplashScreens;

    Scene_SplashScreens.prototype.initialize = function() {
        Stage.prototype.initialize.call(this);
    }

    Scene_SplashScreens.prototype.videoPlaying = false;
    
    Scene_SplashScreens.prototype.start = function() {
        Scene_Base.prototype.start.call(this);
        this.startNormalGame();
    }
    
    Scene_SplashScreens.prototype.startNormalGame = function() {
        this.checkPlayerLocation();
        DataManager.setupNewGame();
        Window_TitleCommand.initCommandPosition();
    
        // this.createMessageWindow();
        // Game_Interpreter.prototype.command101.call(this, ["Evil", 7, 0, 2, "Mysterious Dev"]);
    };
    
    Scene_SplashScreens.prototype.update = function(){
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
    */

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
