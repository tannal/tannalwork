self.addEventListener('message', function(e) {

 var data = e.data;

 console.log(data);

 switch (data.cmd) {

  case 'average':

   var result = calculateAverage(data.data); // 某个数值数组中计算平均值的函数

   self.postMessage(result);

   break;

  default:

   self.postMessage('Unknown command');

 }

}, false);


function calculateAverage(array) {
        return array.reduce((acc, cur) => acc + cur, 0) / array.length;
}
