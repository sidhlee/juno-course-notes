# Cross Browser Testing

- [Course Note](https://github.com/HackerYou/bootcamp-notes/blob/master/css/cross-browser-testing.md)

## The four Ws

- Where - [Stat Counter](http://gs.statcounter.com/browser-market-share/desktop-tablet-console/worldwide#monthly-201901-201906-map).

> In 2020, Chrome is the most widely used browser internationally. Each region has their own most used browsers, and the top three should be tested. Also keep in mind that those in more remote areas may have slower internet connections and that should be considered when testing.

- Who

- What: What type of website are you building?

- When:
  - How long will your website be up?
  - Will it be updated often or
  - will it not be checked on for a couple months or years? If the website isn't going to be checked on often, ensure the code is future proofed with code that isn't in the experimental phase or hasn't been rendered obsolete (for example, `<center>` is no longer a valid tag in HTML5 and all centered items should be centered with CSS only).

If you are working on a project for a client or other stake-holders it's important to gather information about which browsers they need you to support.

- account for cross-browser testing time as well as time to fix any bugs that are discovered in this testing process.
- consider which operating systems are being supported. Browsers may behave differently on a mac vs a windows machine.
- It's worth noting that your site doesn't need to look the same on 100% of all browsers.
