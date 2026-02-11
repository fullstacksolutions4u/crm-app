import {parentPort} from "worker_threads"

  let count = 0;

    for(let i=0;i<50000000000;i++){
      count +=i;
    }



parentPort.postMessage(count)