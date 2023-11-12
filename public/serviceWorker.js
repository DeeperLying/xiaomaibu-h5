self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      // 安装时添加缓存，指定请求
      return cache.addAll(['/a', '/b'])
    })
  )
})

self.addEventListener('activate', function(event) {
  console.log('Service Worker activate', event)
})

self.addEventListener('message', function(event) {
  console.log('onMessage', event)
  event.source.postMessage({
    title: 1
  })
})

self.clients.matchAll().then((client) => {
  console.log(client, '[--') // []
})

self.addEventListener('fetch', (event) => {
  // console.log('Fetch', event.request)
  event.respondWith(
    caches.match(event.request).then((res) => {
      // console.log(res, 'cache store 里面的数据')
      return (
        res ||
        fetch(event.request)
          .then((responese) => {
            const responeseClone = responese.clone()
            caches.open('v1').then((cache) => {
              cache.put(event.request, responeseClone)
            })
            return responese
          })
          .catch((err) => {
            console.log(err)
          })
      )
    })
  )
})
