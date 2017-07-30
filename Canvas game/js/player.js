var player1 = {
  
  animation: sprite ({
    number: 0,
    ticksPerFrame:0,
    numberOfFrames:3,
    direction:1,
    context:temporaryContext,
    width:90,
    height: 120,
    image: charactersImage,
  }),
};



function sprite(options){

		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1,
      direction = options.direction || 1;
    that.direction = options.direction || 1;
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		that.update = function () {
            tickCount += 1;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;

                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };

		that.render = function () {
      console.log(frameIndex);

		  // Clear the canvas
		  that.context.clearRect(0, 0, that.width/3, that.height/4);

		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    (options.number+frameIndex) * that.width / numberOfFrames,
        that.direction*that.height/4,
		    that.width / numberOfFrames,
		    that.height/4,
		    0,
		    0,
		    that.width / numberOfFrames,
		    that.height/4);
		};


		return that;
	}
