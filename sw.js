var CACHE_NAME = 'restaurant-reviews-v1';
var urlsToCache = [
  '/',
  '/assets/css/style.css',
  '/assets/img/1.jpg',
  '/assets/img/1-sm.jpg',
  '/assets/img/2.jpg',
  '/assets/img/2-sm.jpg',
  '/assets/img/3.jpg',
  '/assets/img/3-sm.jpg',
  '/assets/img/4.jpg',
  '/assets/img/4-sm.jpg',
  '/assets/img/5.jpg',
  '/assets/img/5-sm.jpg',
  '/assets/img/6.jpg',
  '/assets/img/6-sm.jpg',
  '/assets/img/7.jpg',
  '/assets/img/7-sm.jpg',
  '/assets/img/8.jpg',
  '/assets/img/8-sm.jpg',
  '/assets/img/9.jpg',
  '/assets/img/9-sm.jpg',
  '/assets/img/10.jpg',
  '/assets/img/10-sm.jpg',
  '/assets/js/dbhelper.js',
  '/assets/js/main.js',
  '/assets/js/restaurant_info.js',
  '/index.html',
  '/restaurant.html',
  '/restaurant.html?id=1',
  '/restaurant.html?id=2',
  '/restaurant.html?id=3',
  '/restaurant.html?id=4',
  '/restaurant.html?id=5',
  '/restaurant.html?id=6',
  '/restaurant.html?id=7',
  '/restaurant.html?id=8',
  '/restaurant.html?id=9',
  '/restaurant.html?id=10'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });