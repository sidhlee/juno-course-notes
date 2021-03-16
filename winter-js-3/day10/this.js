const outerObj = {
  logThis() {
    return this;
  },
  arrowThis: () => {
    return this;
  },
  innerObj: {
    logThis() {
      return this;
    },
    arrowThis: () => {
      return this;
    },
    enclosingFunc() {
      return () => this;
    },
  },
};

console.log(outerObj.logThis() === outerObj);
console.log(outerObj.arrowThis() === Window); // Window
console.log(outerObj.innerObj.logThis() === outerObj.innerObj); // innerObj
console.log(outerObj.innerObj.arrowThis() === Window); // Window
console.log(outerObj.innerObj.enclosingFunc()() === outerObj.innerObj); // innerObj
