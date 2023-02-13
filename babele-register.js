
Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		
		Babele.get().register({
			module: 'pokerole-babele-zh-tw',
			lang: 'zh-tw',
			dir: 'compendium'
		});
	}
});