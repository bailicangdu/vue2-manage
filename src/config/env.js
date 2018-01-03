/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */
let baseUrl = ''; 
let routerMode = 'history';
let baseImgPath;

if (process.env.NODE_ENV == 'development') {
	  baseUrl = 'http://localhost:8002';
    baseImgPath = 'http://localhost:8002/img/';
}else{
	  baseUrl = 'http://cangdu.org:8001';
    baseImgPath = 'http://cangdu.org:8001/img/';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}