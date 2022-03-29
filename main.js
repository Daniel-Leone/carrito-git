const fragment = document.createDocumentFragment();

const fruit = document.querySelector('.individualFruit');

const fruitsContainer = document.querySelector('.fruitsContainer')

const fruits = [
    {
        name : 'Banana 🍌',
        price : 300,
        quantity : 1
    },

    {
        name : 'Manzana 🍏',
        price : 100,
        quantity : 1
    },

    {
        name : 'Sandía 🍉',
        price : 200,
        quantity : 1
    }
]

fruits.forEach( (f)=>{
    const clone = fruit.content.firstElementChild.cloneNode(true);

    clone.querySelector('.fruitName').textContent = f.name;
    clone.querySelector('.fruitPrice').textContent = f.price;

    fragment.appendChild(clone)
} )

fruitsContainer.appendChild(fragment)