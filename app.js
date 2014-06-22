$(document).ready(function() {
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	var audioContext = new AudioContext();
	
	// analyser
	musicAnalyser = audioContext.createAnalyser();
	musicAnalyser.fftSize = 256;
	micAnalyser = audioContext.createAnalyser();
	micAnalyser.fftSize = 256;
	
	// element
	musicSpectrumCanvas = $('#musicSpectrumCanvas')[0];
	micSpectrumCanvas = $('#micSpectrumCanvas')[0];
	
	// connect
	var music = audioContext.createMediaElementSource($('#music')[0])
	music.connect(musicAnalyser);
	music.connect(audioContext.destination);
	
	//==============================================================
	musicSpectrum = new Spectrum();
	musicSpectrum.setChartImage("img/spectrum-music.png");
	micSpectrum = new Spectrum();
	micSpectrum.setChartImage("img/spectrum-mic.png");
	
	// updateCanvas() @global
	updateCanvas = function() {
		var musicSpectrums = new Uint8Array(musicAnalyser.frequencyBinCount);
		musicAnalyser.getByteFrequencyData(musicSpectrums);
		
		// call
		musicSpectrum.draw(musicSpectrumCanvas, musicSpectrums);
		micSpectrum.draw(micSpectrumCanvas, musicSpectrums);  // !!
	};
	
	//==============================================================
	setInterval("updateCanvas()", 50);
	
});
