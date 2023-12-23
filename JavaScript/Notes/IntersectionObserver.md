# InterserctionObserver

ref: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

- observer
  - callback:
    - entries: Array of IntersectionObserverEntry
    - observer: IntersectionObserver
  - options
    - root: Element
    - rootMargin: String
    - threshold: Number or Array of Number

```js
const callback = (entries, observer) => {
  entries.forEach(entry => {
    console.log(entry);
  });
};
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};
const observer = new IntersectionObserver(callback, options);
observer.observe(target);
```


## Lazy Loading Images
By default, JavaScript is loaded synchronously.
With lazy loading, you can load JavaScript asynchronously.
- First, load the text content and low resolution images.
- Then, load the JavaScript and high resolution images.