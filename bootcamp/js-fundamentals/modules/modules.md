# JavaScript Modules

## CORS Error when opening Script importing modules

> loading a file from your filesystem doesn’t return the CORS Allow-whatever-whatever...(`Access-Control-Allow-Origin`) header when the file is loaded, so the browser doesn’t allow it to be loaded. This only applies to type="module" `<scripts>` , which is why we haven't encountered this before. _- Brent_
