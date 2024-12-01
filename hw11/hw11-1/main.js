const cartsDiv = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
        const { carts } = cartsObject;
        console.log(carts);

        for (const cart of carts) {
            const div = document.createElement('div');
            div.classList.add('cart-container');

            const withInfo = document.createElement('div');
            withInfo.innerText = `
                "total": ${cart.total}, 
                "discountedTotal": ${cart.discountedTotal}, 
                "userId": ${cart.userId}, 
                "totalProducts": ${cart.totalProducts}, 
                "totalQuantity": ${cart.totalQuantity}
            `;

            // Создаём список продуктов
            const ol = document.createElement('ol');
            for (const cartElement of cart.products) {
                const li = document.createElement('li');
                li.innerText = `
                "id": ${cartElement.id},
                "title": ${cartElement.title},
                "price": ${cartElement.price},
                "quantity": ${cartElement.quantity},
                "total": ${cartElement.total},
                "discountPercentage": ${cartElement.discountPercentage},
                "discountedTotal": ${cartElement.discountedTotal}             
                `;
                const img = document.createElement('img');
                img.src = cartElement.thumbnail
                img.alt = cartElement.title;
                img.style.width = '100px';


                li.appendChild(img);
                ol.appendChild(li);
            }

            div.appendChild(withInfo);
            div.appendChild(ol);

            cartsDiv.appendChild(div);
        }
    })
