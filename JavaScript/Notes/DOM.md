# DOM

document: the whole HTML document
- Access the whole document: `document.documentElement`
- Access the head: `document.head`
- Access the body: `document.body`
- Access an ID: `document.getElementById('id')`
- Access all elements with a tag: `document.getElementsByTagName('tag')`
- Access all elements with a class: `document.getElementsByClassName('class')`
- Access all elements with a selector: `document.querySelector('selector')`
- Access all elements with a selector: `document.querySelectorAll('selector')`
  - difference between querySelector and querySelectorAll
    - querySelector: returns the first element that matches the selector
    - querySelectorAll: returns all elements that match the selector

### Styles
- for element.style
  - it works for inline styles
  - the styles in CSS file cannot be accessed by element.style, it can only be accessed by getComputedStyle
    ```js
    element.style.backgroundColor = '#fff';
    console.log(element.style.backgroundColor); // #fff
    console.log(element.style.color); // empty string since we didn't set the color
    console.log(getComputedStyle(element).color); // getComputedStyle will return every style
    ```
- for document
  - we can set the style for the whole document by document.documentElement.style.setProperty:
    ```js
    document.documentElement.style.setProperty('--color-primary', 'orangered');
    ```

### Attributes
- standard attributes
  - we can access the standard attributes by `element.attribute`: `img.src`, `a.href`
  - **set attributes**: `element.attribute = 'xxx'`
- non-standard attributes
  - suppose we have customized attributes: `designer="xxx"`, then we can access it by `element.getAttribute('designer')`
  - in this case, `element.designer` will return undefined
  - if we don't have customized attributes, then `element.getAttribute('designer')` will return null
  - **set attributes**: `element.setAttribute('designer', 'xxx')`

```js
const link = document.querySelector('.nav__link--btn');
console.log(link.href); // returns the absolute path
console.log(link.getAttribute('href')); // returns the relative path
```

#### Data Attributes
Data in the element:
- `data-xxx="xxx"`: data attributes
- `dataset.xxx`: access the data attributes

```html
<div class="nav__link--btn" data-id="1">Link 1</div>
```

```js
const link = document.querySelector('.nav__link--btn');
console.log(link.dataset.id); // 1
```


### Classes
- `element.classList.add('class')`: add a class
- `element.classList.remove('class')`: remove a class
- `element.classList.toggle('class')`: if the class exists, remove it; if the class does not exist, add it
- `element.classList.contains('class')`: check if the class exists, returns true or false

### Event Handler
[Event.md](Notes/Event.md)

### DOM Traversing
- go downwards:
  - `el.children`: returns all the children elements
  - `el.firstElementChild`: returns the first child element
  - `el.lastElementChild`: returns the last child element
- go upwards:
  - `el.parentElement`: returns the parent element
  - `el.closest('selector')`: returns the closest element that matches the selector
- go sideways:
  - `el.previousElementSibling`: returns the previous sibling element
  - `el.nextElementSibling`: returns the next sibling element
  - `el.parentElement.children`: returns all the siblings elements

