const fragmentProduct = document.createDocumentFragment();
const fragmentCart = document.createDocumentFragment();
const fruit = document.querySelector('.individualFruit');
const fruitsContainer = document.querySelector('.fruitsContainer');
const templateCart = document.querySelector('.templateAccount')
const HTMLCart = document.querySelector('.account');
const footer = document.querySelector('.footer');
const footerTemplate = document.querySelector('.footerTemplate');

document.addEventListener('click', (e)=>{
    // console.log(e.target.matches('.priceAndButtons div .decrease'));

    if(e.target.matches('.priceAndButtons div .increase')){
        btnIncrease(e)
    }

    if(e.target.matches('.priceAndButtons div .decrease')){
        btnDecrease(e)
    }
})

let cart = []

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
    },

    {
        id: 4,
        name : 'Pera 🍐',
        price : 80,
        quantity : 1
    },

    {
        id: 5,
        name : 'Kiwi 🥝',
        price : 400,
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
            document.querySelector('footer').style.display = 'flex'
            if(f.quantity === 0){
                f.quantity++
            }
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
        clone.querySelector('.currentPrice').textContent = 'precio: $' + (p.price * p.quantity);

        clone.querySelector('.decrease').dataset.id = p.name;
        clone.querySelector('.increase').dataset.id = p.name;
        
        // document.querySelector('.spanTotal').textContent = ''
        
        fragmentCart.appendChild(clone)
    } )
    HTMLCart.appendChild(fragmentCart)

    if(cart.length === 0){
        document.querySelector('footer').style.display = 'none'
    }

    printFooter()

    // console.log(cart);
}

const printFooter = ()=>{
    footer.textContent = ""
    const total = cart.reduce( 
        (acc, current)=> acc + current.quantity * current.price, 0)

    const clone = footerTemplate.content.cloneNode(true);

    clone.querySelector('.spanTotal').textContent = total;

    footer.appendChild(clone);
}

const btnIncrease = (e)=>{
    // console.log('sumaste', e.target);

    cart = cart.map(item =>{
        if(item.name == e.target.dataset.id){
            item.quantity++
        }
        return item
    })

    printFooter()
    printCart(cart);
}

const btnDecrease = (e)=>{
    // console.log('restaste', e.target.dataset.id);

    cart = cart.filter(item =>{
        if(item.name === e.target.dataset.id){
            if(item.quantity > 0){
                item.quantity--                
            } if(item.quantity === 0) return
            return item
        } else {return item}
    })

    printFooter()
    // console.log(cart);
    printCart(cart);
}