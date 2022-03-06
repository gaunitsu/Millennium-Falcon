
/* Les assets, on pourra plus tard ajouter des sons et des musiques */
const assetsToLoadURLs = {
    asteroiddouble: { url: 'assets/images/astéroide.png' }, 
    asteroidrond: { url: 'assets/images/astéroide1.png' }, 
    asteroidlong: { url: 'assets/images/astéroide2.png' }, 
    deathstar: { url: 'assets/images/deathstar.png' },
    destroyer: { url: 'assets/images/destroyer.png' },
    faucon: { url: 'assets/images/milleniumcondorcartoon.png' },
    tie: { url: 'assets/images/tiefightercartoon.png' },
    bossfinal: { url: 'assets/images/bossfinalsw.png' },
    chewie: { url: 'assets/images/chewie.png' },
    ecrandeathstar: { url: 'assets/images/ecrandeathstar.png' },
    ecrandestroyer: { url: 'assets/images/ecrandestroyer.png' },
    ecrangameover: { url: 'assets/images/ecrangameover.jpg' },
    ecrantiefighter: { url: 'assets/images/ecrantiefighter2.jpg' },
    startimage: { url: 'assets/images/hanstartimage.jpg' },
    rulesimage: { url: 'assets/images/rulesimage.png' },
    lifeicon: { url: 'assets/images/lifeicon.png' },
    
  };
  
  function loadAssets(callback) {
    // here we should load the souds, the sprite sheets etc.
    // then at the end call the callback function
    loadAssetsUsingHowlerAndNoXhr(assetsToLoadURLs, callback);
  }
  
  // You do not have to understand in details the next lines of code...
  // just use them!
  
  /* ############################
      BUFFER LOADER for loading multiple files asyncrhonously. The callback functions is called when all
      files have been loaded and decoded 
   ############################## */
  function isImage(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }
  
  function isAudio(url) {
    return url.match(/\.(mp3|ogg|wav)$/) != null;
  }
  
  function loadAssetsUsingHowlerAndNoXhr(assetsToBeLoaded, callback) {
    var assetsLoaded = {};
    var loadedAssets = 0;
    var numberOfAssetsToLoad = 0;
  
    // define ifLoad function
    var ifLoad = function () {
      if (++loadedAssets >= numberOfAssetsToLoad) {
        callback(assetsLoaded);
      }
      console.log("Loaded asset " + loadedAssets);
    };
  
    // get num of assets to load
    for (var name in assetsToBeLoaded) {
      numberOfAssetsToLoad++;
    }
  
    console.log("Nb assets to load: " + numberOfAssetsToLoad);
  
    for (name in assetsToBeLoaded) {
      var url = assetsToBeLoaded[name].url;
      console.log("Loading " + url);
      if (isImage(url)) {
        assetsLoaded[name] = new Image();
  
        assetsLoaded[name].onload = ifLoad;
        // will start async loading.
        assetsLoaded[name].src = url;
      } else {
        // We assume the asset is an audio file
        console.log(
          "loading " + name + " buffer : " + assetsToBeLoaded[name].loop
        );
        assetsLoaded[name] = new Howl({
          urls: [url],
          buffer: assetsToBeLoaded[name].buffer,
          loop: assetsToBeLoaded[name].loop,
          autoplay: false,
          volume: assetsToBeLoaded[name].volume,
          onload: function () {
            if (++loadedAssets >= numberOfAssetsToLoad) {
              callback(assetsLoaded);
            }
            console.log("Loaded asset " + loadedAssets);
          },
        }); // End of howler.js callback
      } // if
    } // for
  } // function