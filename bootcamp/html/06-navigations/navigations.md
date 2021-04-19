# Navigation

- [Course Note](https://github.com/HackerYou/bootcamp-notes/blob/master/css/navigations.md)

## Skip Link

Provide a skip link to the main content so that SR users don't have to skip over 100 links before reaching the main content.

`https://www.canada.ca/en.html`

```html
<nav>
  <ul id="wb-tphp" class="wb-init wb-disable-inited">
    <li class="wb-slc">
      <a class="wb-sl" href="#wb-cont">Skip to main content</a>
    </li>
    <li class="wb-slc">
      <a class="wb-sl" href="#wb-info">Skip to "About government"</a>
    </li>

    <li class="wb-slc">
      <a class="wb-sl" href="?wbdisable=true" rel="alternate"
        >Switch to basic HTML version</a
      >
    </li>
  </ul>
</nav>
```

`bom.com`
```html
<a class="show-on-focus skip-nav" target="_self" href="#skip-nav" data-ana-apply-intent="false" data-meta="primary-skip-nav--link" data-ana="skip navigation" data-di-id="di-id-d0bde646-716c7ad6">Skip navigation</a>
```

