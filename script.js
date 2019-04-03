window.addEventListener('load', event => {
  if('serviceWorker' in navigator) {
    console.log('支持')
    window.navigator.serviceWorker
      .register('/sw.js', {
        scope: '/'
      })
      .then(registration => {
        console.log('注册成功', registration.update)
        // let sw;
        // if(registration.installing) {
        //   sw = registration.installing
        //   console.log('安装中')
        // } else if (registration.waiting) {
        //   sw = registration.waiting
        //   console.log('等待中')
        // } else if (registration.active) {
        //   sw = registration.active
        //   console.log('激活')
        // }
  
        // if(sw) {
        //   sw.addEventListener('statechange', e => {
        //     console.log('sw状态变化为', e.target.state)
        //   })
        // }
      })
      .catch(error => {
        console.log('注册失败', error.message)
      })
  } else {
    console.log('不支持')
  }
})