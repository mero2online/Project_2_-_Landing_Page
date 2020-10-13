# Landing Page Project

## Main Object

The object from this project is to **convert** this page from a _static_ page to an _interactive_ one.


## Objects

***Change page behavior***

1- Navigation is built dynamically as an unordered list by JS.

2- Section and navigation menu (Active State)
* It should be clear which section is being viewed while scrolling through the page.

3- Scroll to Anchor
* When clicking an item from the navigation menu, the link should scroll to the appropriate section.

## Project page

To see the project page [Click here](https://mero2online.github.io/Project_2_-_Landing_Page/)

### Issues

1- Hover on the element on the touch screen hover be sticky on tap

- To avoid this issue add this media quairy for devices that can hover (desktops, laptops, non touch screen).

```
@media (hover: hover) {
    .class:hover {
    }
}
```
2- When hover over button the tooltip visible correctly on desktop but on the touch screen not visible correctly

- To avoid this issue hide the tooltip on the touch screen and add this media quairy 
```
@media (pointer: coarse) {
  .class:hover: {
    display: none;
  }
}
```

---
### License

Landing Page Project is Copyright © 2020 Udaciy.
It is open source project, and redistributed under the terms specified in the
[LICENSE] file.

[license]: https://github.com/mero2online/Project_2_-_Landing_Page/blob/master/LICENSE
