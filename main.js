const fragmentProduct = document.createDocumentFragment();

const fragmentCart = document.createDocumentFragment();

const fruit = document.querySelector('.individualFruit');

const fruitsContainer = document.querySelector('.fruitsContainer');

const templateCart = document.querySelector('.templateAccount')

const HTMLCart = document.querySelector('.account');

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
        } else {
            cart[index].quantity++;
            // console.log(cart[index].price * f.quantity);
        }
        printCart(cart);
        // console.log(cart);

        // console.log(f.price);
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

        // console.log(clone.querySelector('.increase'));
        
        document.querySelector('.spanTotal').textContent = ''
        
        fragmentCart.appendChild(clone)
    } )
    HTMLCart.appendChild(fragmentCart)
}

const btnIncrease = (e)=>{
    // console.log('sumaste', e.target);

    cart = cart.map(item =>{
        console.log(item);
        if(item.name == e.target.dataset.id){
            item.quantity++
        }
        return item
    })

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

    printCart(cart);
}
