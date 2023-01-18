export const handleFadeWithDelay = (delay = 0, className) => {
	return function (entries, obesrver) {
		if (entries[0].isIntersecting) {
			setTimeout(() => {
				entries[0].target.className = className;
				return obesrver.unobserve(entries[0].target);
			}, delay);
		}
	};
};

export const defaultOptions = {
	rootMargin: '0px',
	threshold: 0.5,
};

export const IntersectionInitizalize = (el, delay = 0, className, options = defaultOptions) => {
	if (el) {
		let obesrver = new IntersectionObserver(handleFadeWithDelay(delay, className), options);
		obesrver.observe(el);
	}
};
