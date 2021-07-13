
// export function Map(){
//     let ak=BHQv3DPkrzRxeNmTkvg6nhX3GRrsuvhG;
//     return new Promise(function (resolve, reject) {
//       window.init = function () {
//         resolve(BMap)
//       }
//       var script = document.createElement("script");
//       script.type = "text/javascript";
//       script.src = "http://api.map.baidu.com/api?v=2.0&ak="+ak+"&callback=init";
//       script.onerror = reject;
//       document.head.appendChild(script);
//     })
//   }
  
//封装百度地图API BMapGL
export function Map() {
    let ak='BHQv3DPkrzRxeNmTkvg6nhX3GRrsuvhG';
    return new Promise(function(resolve, reject) {
      window.init = function() {
        // eslint-disable-next-line
        resolve(BMapGL)
      }
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `http://api.map.baidu.com/api?v=1.0&type=webgl&ak=${ak}&callback=init`
      document.head.appendChild(script)
    })
}