(function(global) {
	
	var Spectrum = function() {
		this.chartImage = new Image();
		this.barWidth = 3;
	};
	
	Spectrum.prototype.chartImage;
	Spectrum.prototype.barWidth;
	Spectrum.prototype.setChartImage = function(imagePath) {
		this.chartImage.src = imagePath;
	};
	Spectrum.prototype.draw = function(canvas, spectrums) {
		var context = canvas.getContext('2d');
		var i, x, y, len;
		
		// clear
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		// draw
		len = spectrums.length;
		for(i=0; i<len; i++) {
			x = (i / len) * canvas.width;
			y = (1 - (spectrums[i] / 255)) * canvas.height;
			
			context.drawImage(this.chartImage,
				0, y, this.barWidth, canvas.height - y,
				x, y, this.barWidth, canvas.height - y
			);
			
		}
	};
	
	global.Spectrum = Spectrum;
	
})(window);
