class App {
  constructor() {
    this.el = document.getElementById('app');
    this.up = document.getElementById('up');
    this.down = document.getElementById('down');
    const target = {}
    this.handler = {
      set(target, name, value){
        if(value > 10) {
          console.log('over')
          return target[name]
        }
        if(value < 0) {
          return target[name]
        }
        target[name] = value;
        return target[name]
      },
      get(target, name, value) {
        return target[name]
        //this.render()
      },
      has(target,name) {
        console.log('has', {target, name})
        console.log('reflect', Reflect.has(target,name))
        return Reflect.has(target,name)
      },
      deleteProperty(target, value) {
        //console.log({target, value})
        //throw 'you cannot delete by yourself'
      },
      isExtensible(target) {
        console.log('isExtensible', target)
        return true
      },
      ownKeys(target) {
        console.log('ownKeys', target)
        return true
      }
    };
    this.proxy = new Proxy(target, this.handler)
    this.proxy.num = 5
    this.render()
    this.onClickUp()
    this.onClickDown()
  }
  
  onClickUp() {
    this.up.onclick = () => {
      this.check()
      console.log('onCLick!')
      this.proxy.num = this.proxy.num + 1
      this.render()
    }
  }
  
  onClickDown() {
    this.down.onclick = () => {
      this.proxy.num = this.proxy.num - 1
      this.render()
    }
  }
  
  check() {
    //Object.getOwnPropertyNames(this.proxy)
    //Object.isExtensible(this.proxy)
    //delete this.proxy.num
    console.log('num' in this.proxy);
    console.log(this.proxy)
  }
  
  render() {
    this.el.innerHTML = `<div>number: ${this.proxy.num}</div>`
  }
}

new App()