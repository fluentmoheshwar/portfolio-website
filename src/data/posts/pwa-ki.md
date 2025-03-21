---
lang: bn
title: Progressive Web Apps (PWA) কি, কেন, কিভাবে?
description: Progressive Web Apps (PWA) কি, কেন, কিভাবে?
publishDate: 2025-03-22
draft: false
keywords: progressive web apps, pwa, workbox, mobile apps, desktop apps, web apps, web development
socialImage: /social_images/posts/pwa-ki.png
---

## PWA কি?

সহজ ভাবে বলতে গেলে PWA হচ্ছে এমন Web Apps যা install করা যায়। (browser অথবা app store থেকে) এবং offline এ কাজ করতে পারে।

## কেন PWA?

- PWA offline এ কাজ করে।

- নোটিফিকেশন: PWA অ্যাপগুলি আপনাকে নোটিফিকেশন পাঠাতে পারে।

- অ্যাপ-এর মতো অভিজ্ঞতা (App-like experience): PWA অ্যাপগুলিকে আপনি আপনার ফোনের হোম স্ক্রিনে আইকন হিসাবে রাখতে পারেন, তাই এগুলি অ্যাপের মতো কাজ করে।

- স্মাটফোন এবং ডেস্কটপ উভয়ের জন্যই: PWA অ্যাপগুলি স্মার্টফোন এবং ডেস্কটপ উভয় device এ কাজ করে।

- অ্যাপ্লিকেশনের আপডেট স্বয়ংক্রিয়ভাবে হয়: PWA অ্যাপগুলির আপডেট স্বয়ংক্রিয়ভাবে হয়।

- Shortcuts: PWA Native App এর মত Shortcuts create করতে পারে।

## PWA কিভাবে তৈরি করব?

PWA তৈরি করার জন্য নিচের criteria গুলি fulfill করা লাগবে:

- HTTPS হতে হবে।

- Responsive হতে হবে।

এগুলো ঠিকঠাক থাকলে আমরা PWA তৈরি করার কাজ শুরু করে দিতে পারি।

PWA তৈরি করার জন্য প্রথমে একটি webmanifest তৈরি করে HTML file এ link করে দিতে হবে।

```html
<head>
  <link rel="manifest" href="./manifest.webmanifest" />
</head>
```

এরপর আমরা একটি service worker তৈরি করে তা register করে দিতে হবে।

Service Worker এ মূলত আমরা offline experience handle করে থাকি। Service Worker তৈরির জন্য আমরা workbox নামের একটি library ব্যবহার করতে পারি।

Service Worker main JavaScript file এ লেখা যাবে না। আলাদা একটা file এ লিখে main file থেকে register করতে হবে।

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
} else {
  console.log("Your browser doesn't support PWA");
}
```

App Store গুলোতে publish এর জন্য [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap) (Android only) অথবা [PWABuilder](https://pwabuilder.com) ব্যবহার করতে পারি।

Some useful resources:

<https://web.dev/progressive-web-apps>

<https://docs.pwabuilder.com/>

Post টি পড়ার জন্য ধন্যবাদ।
