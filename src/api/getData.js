import fetch from '@/config/fetch'

/**
 * 登陆
 */

const login = data => fetch('/admin/login', data, 'POST');

/**
 * 退出
 */

const signout = () => fetch('/admin/singout');

/**
 * api请求量
 */

const apiCount = date => fetch('/statis/api/' + date + '/count');

/**
 * 所有api请求量
 */

const apiAllCount = () => fetch('/statis/api/all/count');


/**
 * 所有api请求信息
 */

const apiAllRecord = () => fetch('/statis/api/all');

/**
 * 用户注册量求量
 */

const userCount = date => fetch('/statis/user/' + date + '/count');

/**
 * 某一天订单数量
 */

const orderCount = date => fetch('/statis/order/' + date + '/count');


/**
 * 超级管理员列表
 */

const adminList = data => fetch('/admin/all', data);

/**
 * 超级管理员列表
 */

const adminCount = () => fetch('/admin/count');

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


/**
 * category 种类列表
 */

const foodCategory = (latitude, longitude) => fetch('/shopping/v2/restaurant/category');

/**
 * 获取餐馆列表
 */

const getResturants = data => fetch('/shopping/restaurants', data);

/**
 * 获取餐馆详细信息
 */

const getResturantDetail = restaurant_id => fetch('/shopping/restaurant/' + restaurant_id);

/**
 * 获取餐馆数量
 */

const getResturantsCount = () => fetch('/shopping/restaurants/count');

/**
 * 更新餐馆信息
 */

const updateResturant = data => fetch('/shopping/updateshop', data, 'POST');

/**
 * 删除餐馆
 */

const deleteResturant = restaurant_id => fetch('/shopping/restaurant/' + restaurant_id, {}, 'DELETE');

/**
 * 获取食品列表
 */

const getFoods = data => fetch('/shopping/v2/foods', data);

/**
 * 获取食品数量
 */

const getFoodsCount = data => fetch('/shopping/v2/foods/count', data);


/**
 * 获取menu列表
 */

const getMenu = data => fetch('/shopping/v2/menu', data);

/**
 * 获取menu列表
 */

const getMenuById = category_id => fetch('/shopping/v2/menu/' + category_id);

/**
 * 更新食品信息
 */

const updateFood = data => fetch('/shopping/v2/updatefood', data, 'POST');

/**
 * 删除食品
 */

const deleteFood = food_id => fetch('/shopping/v2/food/' + food_id, {}, 'DELETE');

/**
 * 获取用户列表
 */

const getUserList = data => fetch('/v1/users/list', data);

/**
 * 获取用户数量
 */

const getUserCount = data => fetch('/v1/users/count', data);

/**
 * 获取订单列表
 */

const getOrderList = data => fetch('/bos/orders', data);

/**
 * 获取订单数量
 */

const getOrderCount = data => fetch('/bos/orders/count', data);

/**
 * 获取订单数量
 */

const getUserInfo = user_id => fetch('/v1/user/' + user_id);

/**
 * 获取订单数量
 */

const getAddressById = address_id => fetch('/v1/addresse/' + address_id);


export {login, signout, apiCount, apiAllCount, apiAllRecord, userCount, orderCount, adminList, adminCount, cityGuess, addShop, searchplace, getCategory, addCategory, addFood, foodCategory ,getResturants, getResturantDetail, getResturantsCount, updateResturant, deleteResturant, getFoods, getFoodsCount, getMenu, updateFood, getMenuById, deleteFood, getUserList, getUserCount, getOrderList, getOrderCount, getUserInfo, getAddressById}

