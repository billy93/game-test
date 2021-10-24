
(() => {
    
    // SceneManager_goto = SceneManager.goto;
    // SceneManager.goto = function(sceneClass) {
    //     SceneManager_goto.call(this, Scene_SplashScreens);
    // };

    Scene_Boot.prototype.startNormalGame = function() {
        this.checkPlayerLocation();
        DataManager.setupNewGame();
        Video.play("movies/opening.webm");
        Window_TitleCommand.initCommandPosition();
    };
    
    Scene_Boot.prototype.update = function(){
        if(!Video.isPlaying()){
            SceneManager.goto(Scene_Title);
        }
    }    
})();
