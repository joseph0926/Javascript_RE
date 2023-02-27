class Product {
  title = "DEFAULT";
  desc;
  price;

  constructor(title, desc, price) {
    this.title = title;
    this.desc = desc;
    this.price = price;
  }
  // 생성자
  // 생성자는 보통의 메서드처럼 어떤 인자도 받을수있다.
  // 또한, 생성자는 받은 인자들에 대한 값을 지정할 수 있다
  // 생성자에서의 this는 클래스를 참조한다
  // (this.title -> 클래스 필드에 존재하는 속성)
}
// 클래스 생성 -> class 클래스명 {청사진}

class ElementAttr {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHook, shouldRender = true) {
    this.hook = renderHook;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootEl = document.createElement(tag);
    if (cssClasses) {
      rootEl.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      attributes.forEach((att) => {
        rootEl.setAttribute(att.name, att.value);
      });
    }
    document.getElementById(this.hook).append(rootEl);
    return rootEl;
  }
}

class ShoppingCart extends Component {
  items = [];

  constructor(renderHook) {
    super(renderHook);
  }

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total Amount: \$${this.totalAmout.toFixed(2)}</h2>`;
  }

  get totalAmout() {
    const sum = this.items.reduce((prevValue, currentItem) => {
      return prevValue + currentItem.price;
    }, 0);
    return sum;
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    // const cartEl = document.createElement("section");
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
      <h2>Total Amount: \$${0}</h2>
      <button>Order</button>
    `;
    this.totalOutput = cartEl.querySelector("h2");
    // return cartEl;
  }
}

class ProductItem extends Component {
  constructor(product, renderHook) {
    super(renderHook, false);
    this.product = product;
    this.render();
  }

  addToCartHandler() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement("li", "product-item");
    // const prodEl = document.createElement("li");
    // prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.desc}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const addToCartBtn = prodEl.querySelector("button");
    addToCartBtn.addEventListener("click", this.addToCartHandler.bind(this));
  }
}

class ProductList extends Component {
  /* products = [
    new Product("Messi", "dummy1 text!!!", 19.99),
    // 클래스 기반으로 객체를 만드는 방법 -> new 클래스명()
    // 이러면 위에서 정의한 class의 구조를 가진 객체가 반환된다
    new Product("Pedri", "dummy2 text!!!", 9.99),
  ];
 */
  #products = [];

  constructor(renderHook) {
    super(renderHook, false);
    this.render();
    this.fetchProducts();
  }

  fetchProducts() {
    this.#products = [new Product("Messi", "dummy1 text!!!", 19.99), new Product("Pedri", "dummy2 text!!!", 9.99)];
    this.renderProducts();
  }

  renderProducts() {
    for (const product of this.#products) {
      new ProductItem(product, "prod-list");
      // prodList.append(prodEl);
    }
  }

  render() {
    this.createRootElement("ul", "product-list", [new ElementAttr("id", "prod-list")]);
    if (this.#products && this.#products.length > 0) {
      this.renderProducts();
    }
  }
}

class Shop extends Component {
  constructor() {
    super();
  }

  render() {
    // const renderHook = document.getElementById("app");

    new ShoppingCart("app");
    new ProductList("app");

    // renderHook.append(cartEl);
    // renderHook.append(prodListEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
