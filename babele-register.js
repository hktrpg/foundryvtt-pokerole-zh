
Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		console.log('Babele is active. Registering module translations')
		Babele.get().register({
			module: 'pokerole-babele-zh',
			lang: 'zh-tw',
			dir: 'compendium'
		});
	}
});