const fragmentProduct = document.createDocumentFragment();

const fragmentCart = document.createDocumentFragment();

const fruit = document.querySelector('.individualFruit');

const fruitsContainer = document.querySelector('.fruitsContainer');

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

fruits.forEach( (f)=>{
    const clone = fruit.content.firstElementChild.cloneNode(true);

    clone.querySelector('.fruitName').textContent = f.name;
    clone.querySelector('.fruitPrice').textContent = '$' + f.price;

    clone.querySelector('button').addEventListener('click', ()=>{
        console.log(f.name + 'ejecutado');

        const index = cart.findIndex( (item) => item.id === f.id );

        if(index === -1){
            cart.push(f)
        } else {
            cart[index].quantity++;
        }

        console.log(cart);
    })

    fragmentProduct.appendChild(clone)
} )

fruitsContainer.appendChild(fragmentProduct)