# JavaScript Modules

## CORS Error when opening Script importing modules

> loading a file from your filesystem doesn’t return the CORS Allow-whatever-whatever... header when the file is loaded, so the browser doesn’t allow it to be loaded. This only applies to type="module" `<scripts>` , which is why we haven't encountered this before. _Brent_
