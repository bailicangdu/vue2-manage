import fetch from '@/config/fetch'

const cityGuess = () => fetch('GET', '/v1/cities', {
	type: 'guess'
});

const addShop = data => fetch('POST', '/shopping/addShop', {...data});

/**
 * 获取搜索地址
 */

const searchplace = (cityid, value) => fetch('GET', '/v1/pois', {
	type: 'search',
	city_id: cityid,
	keyword: value
});

export { cityGuess, addShop, searchplace }

