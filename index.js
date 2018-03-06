
function propDefaults(defaults) {
  const handler = {
    get (obj, prop) {
      return Reflect.get(obj, prop) || defaults[prop];
    }
  };
  return new Proxy({}, handler);
}

function log() {
  const isin = 'name' in myObj ? 'is in' : 'is not in';
  console.log(`name = "${myObj.name}" (name ${isin} myObj)`);
}

const myObj = propDefaults({name: "noname"});
myObj.val = { fuck: 'it' }


// trying it out
log();                // name = "noname" (name is not in myObj)
myObj.name = 'Bob';
log();                // name = "Bob" (name is in myObj)
delete myObj.name;
log(); 
console.log('expand', myObj)
console.log('expand name', myObj.val)