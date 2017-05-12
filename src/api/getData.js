import fetch from '@/config/fetch'


/**
 * 获取定位城市
 */

const cityGuess = () => fetch('/v1/cities', {
	type: 'guess'
});

/**
 * 添加商铺
 */

const addShop = data => fetch('/shopping/addShop', data, 'POST');

/**
 * 获取搜索地址
 */

const searchplace = (cityid, value) => fetch('/v1/pois', {
	type: 'search',
	city_id: cityid,
	keyword: value
});

/**
 * 获取当前店铺食品种类
 */

const getCategory = restaurant_id => fetch('/shopping/getcategory/' + restaurant_id);

/**
 * 添加食品种类
 */

const addCategory = data => fetch('/shopping/addcategory', data, 'POST');
/**
 * 添加食品
 */

const addFood = data => fetch('/shopping/addfood', data, 'POST');


export { cityGuess, addShop, searchplace, getCategory, addCategory, addFood }

