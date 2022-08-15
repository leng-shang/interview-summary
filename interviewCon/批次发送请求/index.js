
const allRequest = [
    "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=1",
    "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=2",
    "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=3",
    "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=4",
    "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=5",
    "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=6",
    "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=7",
    "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=8",
    "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=9",
    "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=10",
  ];
  
  function sendRequest(urls, max, callbackFunc) {
    const REQUEST_MAX = max;
    const TOTAL_REQUESTS_NUM = urls.length;
    const blockQueue = [];                    // 等待排队的那个队列
    let currentReqNumber = 0;                 // 现在请求的数量是
    let numberOfRequestsDone = 0;             // 已经请求完毕的数量是
    const results = new Array(TOTAL_REQUESTS_NUM).fill(false); // 所有请求的返回结果，先初始化上
  
    async function init() {
      // {1} 
      for (let i = 0; i < urls.length; i++) {
        console.log("现在i是： " + i + " 正请求：" + urls[i]);
        request(i, urls[i]);
      }
    }
  
    async function request(index, reqUrl) {   // 这个index传过来就是为了对应好哪个请求，
                                              // 放在对应的results数组对应位置上的，保持顺序
      // {2}
      if (currentReqNumber >= REQUEST_MAX) {
        console.log(
          "currentReqNumber: " + currentReqNumber + 
          " ----REQUEST_MAX : " + REQUEST_MAX + 
          " ---- url: " + reqUrl);
        // {3}
        await new Promise((resolve) => blockQueue.push(resolve)); // 阻塞队列增加一个 Pending 状态的 Promise， 
                                                                  // 进里面排队去吧，不放你出来，不resolve你，你就别想进行下面的请求
        console.log("第"+ i +"个请求等待结束： 即将开始执行：" + reqUrl);
      }
      reqHandler(index, reqUrl); // {4}
    }
  
    async function reqHandler(index, reqUrl) {
      currentReqNumber++; // {5}
      try {
        const result = await fetch(reqUrl);
        results[index] = result;
      } catch (err) {
        results[index] = err;
      } finally {
        currentReqNumber--;
        numberOfRequestsDone++;
        console.log(
          "done request: " +
            reqUrl +
            "  and currentReqNumber: " +
            currentReqNumber +
            "    .blockQueue.length => " +
            blockQueue.length
        );
        if (blockQueue.length) {
          // 每完成一个就从阻塞队列里剔除一个
          blockQueue[0](); // 将最先进入阻塞队列的 Promise 从 Pending 变为 Fulfilled
          blockQueue.shift();
          console.log(
            "消灭一个blockQueue第一个阻塞后，排队数为 : " + blockQueue.length
          );
        }
        if (numberOfRequestsDone === TOTAL_REQUESTS_NUM) {
          callbackFunc(results);
        }
      }
    }
  
    init();
  }
  
  sendRequest(allRequests, 2, (result) => console.log(result));
