<template id="">
  <div class="">
    <iframe id="sketch" src="./static/MarvinJs/editor.html"
	style="overflow: hidden; min-width: 500px; min-height: 450px; border: 1px solid darkgray;"  />
  </div>
</template>
<script>
  // import MarvinJSUtil from '../../assets/MarvinJs/lib/marvin/js/marvinjslauncher.js'
  export default {
    created () {
      var marvinSketcherInstance
      var data = "\n\n\n" +
          " 28 30  0  0  0  0            999 V2000\n" +
          "    4.5080   -1.2375    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    3.0791   -2.8876    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    4.5080    2.0625    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    3.7935    2.4751    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    4.5080    1.2375    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    3.7935    3.3001    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    5.2224    2.4751    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    3.0791    2.0625    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    5.2224    0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    3.7935    0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    3.0791    3.7126    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    4.5080   -0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    5.2224    0.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    3.7935    0.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    5.2224    3.3001    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    5.9370    2.0625    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    3.0791    1.2375    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    2.3645    2.4751    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    3.7935   -2.4751    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    3.7935   -1.6500    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    5.9370    3.7126    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    6.6515    2.4751    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    2.3645    0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    1.6500    2.0625    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    6.6515    3.3001    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    1.6500    1.2375    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    3.0791   -3.7126    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "    2.3645   -2.4751    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n" +
          "  1 12  1  0  0  0  0\n" +
          "  1 20  1  0  0  0  0\n" +
          "  2 19  1  0  0  0  0\n" +
          "  2 27  1  0  0  0  0\n" +
          "  2 28  1  0  0  0  0\n" +
          "  3  4  2  0  0  0  0\n" +
          "  3  5  1  0  0  0  0\n" +
          "  3  7  1  0  0  0  0\n" +
          "  4  6  1  0  0  0  0\n" +
          "  4  8  1  0  0  0  0\n" +
          "  5  9  2  0  0  0  0\n" +
          "  5 10  1  0  0  0  0\n" +
          "  6 11  1  0  0  0  0\n" +
          "  7 15  2  0  0  0  0\n" +
          "  7 16  1  0  0  0  0\n" +
          "  8 17  2  0  0  0  0\n" +
          "  8 18  1  0  0  0  0\n" +
          "  9 13  1  0  0  0  0\n" +
          " 10 14  2  0  0  0  0\n" +
          " 12 13  2  0  0  0  0\n" +
          " 12 14  1  0  0  0  0\n" +
          " 15 21  1  0  0  0  0\n" +
          " 16 22  2  0  0  0  0\n" +
          " 17 23  1  0  0  0  0\n" +
          " 18 24  2  0  0  0  0\n" +
          " 19 20  1  0  0  0  0\n" +
          " 21 25  2  0  0  0  0\n" +
          " 22 25  1  0  0  0  0\n" +
          " 23 26  2  0  0  0  0\n" +
          " 24 26  1  0  0  0  0\n" +
          "M  END\n";

      MarvinJSUtil.getEditor("#sketch").then(function(sketcherInstance) {
      	marvinSketcherInstance = sketcherInstance;
        var p = MarvinJSUtil.getEditor("#sketch")
        p.then(function (sketcherInstance) {
            sketcherInstance.importStructure("mol", data).catch(function (error) {
                alert(error)
            });
        }, function (error) {
            alert("Cannot retrieve sketcher instance from iframe:" + error)
        })
      }, function(error) {
      	alert("Loading of the sketcher failed"+error);
      })
    }
  }
</script>
