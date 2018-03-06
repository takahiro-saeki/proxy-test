
const objectWillCreate = () => console.log('Object will create');
const objectDidCreate = () => console.log('Object did create');
const handler = {
  construct(target, args) {
    objectWillCreate();
    const result = new target(...args);
    objectDidCreate();
    return result;
  }
}

class target {
  constructor(name, lastname, address) {
    console.log('Hits constructor');
    this.name = name;
    this.lastname = lastname;
    this.address = address;
  }
}

const ContactProxy = new Proxy(target, handler);

const contact = new ContactProxy('Foo', 'Bar', 'Baz');