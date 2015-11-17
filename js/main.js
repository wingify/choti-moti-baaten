(function() {
	function navigate(url) {
		location.href = url;
	}

	window.addEventListener('keyup', function (e) {
		if (!window.urls) { return true; }
		if (e.keyCode === 37 && urls.previous) {
			navigate(urls.previous);
		}
		if (e.keyCode === 39 && urls.next) {
			navigate(urls.next);
		}
	});

})();