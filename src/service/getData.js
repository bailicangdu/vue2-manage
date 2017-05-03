import fetch from '@/config/fetch'

var cityGuess = () => fetch('GET', '/v1/cities', {
	type: 'guess'
});


