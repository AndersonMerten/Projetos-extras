var player1 = {
  animation: sprite ({
    number: 6,
    ticksPerFrame:0,
    numberOfFrames:3,
    direction:1,
    context:temporaryContext,
    width:90,
    height: 120,
    image: charactersImage,
    position: {
      x:0,
      y:0,
      with:30,
      height:30
    },
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
    that.position = options.position;
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
		  // Clear the canvas
		  that.context.clearRect(options.position.x, options.position.y-3, 30, 36);

		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    (options.number+frameIndex) * that.width / numberOfFrames,
        that.direction*that.height/4,
		    that.width / numberOfFrames,
		    that.height/4,
		    options.position.x,
		    options.position.y,
		    that.width / numberOfFrames,
		    that.height/4);
		};


		return that;
	}
