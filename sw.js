// 裏方担当（サービスワーカー）のプログラム
self.addEventListener('push', function(event) {
    const data = event.data.json();
    const title = "🔔 狙い撃ち通知";
    const options = {
        body: data.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/179/179386.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/179/179386.png'
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});
