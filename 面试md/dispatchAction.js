function dispatchAction(queen,action){
    //queue 更新队列，环状链表
    const update = {
        action,
        next:null
    }
    const pedding=queen.pedding
    if(pedding==null){
      update.next = update
    }else {
      update.next = pedding.next
      pedding.next = update
    }
    queen.pedding = update
  }
  
  let queue = {pedding:null}
  dispatchAction(queue,'action1')
  dispatchAction(queue,'action2')
  console.log(queue,'queue2')
  dispatchAction(queue,'action3')
  console.log(queue,'queue3')
  
  dispatchAction(queue,'action4')
  
  console.log(queue,'queue4')
  
  const peddingQueue = queue.pedding
  // if(peddingQueue!==null){
  //     let first = peddingQueue.next
  //     let update = first
  //     do{
  //       console.log(update)
  //       update = update.next
  //     }while(update!=first)
  // }

  function updateReducer(reducer,initialArg){
    let hook = updateWorkInProgressHook()
    const queen = hook.queen
    let current = currentHook
    const pendingQueen = queen.pedding
    if(pendingQueen!=null){
      let first = pendingQueen.next
      let newState = current.memoiizedState
      let update = first
      do{
        const action = update.action
        newState = reducer(newState,action)
        update = update.next
      }while(update!==null&&update!=first)
      hook.memoiizedState = newState
      const dispacth = dispatchAction.bind(null,fiber,queen)
    }
  }