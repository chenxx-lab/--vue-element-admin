
//当前视口宽度
let nowClientWidth = document.documentElement.clientWidth;
  
//换算方法
function nowSize(val,initWidth=1920){
    return val * (nowClientWidth/initWidth);
}
export {  
        nowSize
    }  