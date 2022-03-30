const fragmentProduct = document.createDocumentFragment();

const fragmentCart = document.createDocumentFragment();

const fruit = document.querySelector('.individualFruit');

const fruitsContainer = document.querySelector('.fruitsContainer');

const templateCart = document.querySelector('.templateAccount')

const HTMLCart = document.querySelector('.account');

const cart = []

const fruits = [
    {
        id: 1,
        name : 'Banana 🍌',
        price : 300,
        quantity : 1
    },

    {
        id: 2,
        name : 'Manzana 🍏',
        price : 100,
        quantity : 1
    },

    {
        id: 3,
        name : 'Sandía 🍉',
        price : 200,
        quantity : 1
    }
]

// PRODUCTOS PINTADOS DE FORMA DINÁMICA

fruits.forEach( (f)=>{
    const clone = fruit.content.firstElementChild.cloneNode(true);

    clone.querySelector('.fruitName').textContent = f.name;
    clone.querySelector('.fruitPrice').textContent = '$' + f.price;

    clone.querySelector('button').addEventListener('click', ()=>{

        const index = cart.findIndex( (item) => item.id === f.id );

        if(index === -1){
            cart.push(f)
        } else {
            cart[index].quantity++;
        }
        printCart(cart);
    })

    fragmentProduct.appendChild(clone)
} )

fruitsContainer.appendChild(fragmentProduct)

// FINAL DEL PINTADO DE PRODUCTOS



const printCart = (arrayCart)=>{
    HTMLCart.textContent = '';

    arrayCart.forEach( (p)=>{
        const clone = templateCart.content.firstElementChild.cloneNode(true);

        clone.querySelector('.fruitSelected').textContent = p.name;
        clone.querySelector('.amount').textContent = p.quantity;
        clone.querySelector('.currentPrice').textContent = '$' + p.price;

        fragmentCart.appendChild(clone)
    } )
    HTMLCart.appendChild(fragmentCart)
}
