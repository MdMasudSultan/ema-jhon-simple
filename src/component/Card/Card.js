import React from 'react';

const Card = (props) => {
    const card = props.card
    let total = 0;
    for (let i = 0; i < card.length; i++) {
        const product = card[i];
        total = total + product.price
        }

        let shipping = 0;
        if (total > 35) {
            shipping = 0;
        }
        else if(total > 15){
            shipping = 4.22
        }
        else if(total>0){
            shipping = 12.99
        }

        const tex = (total/10).toFixed(2)
        const grandTotal = (total + shipping + Number(tex)).toFixed(2)
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Item Order : {card.length}</p>
            <p>Shipping Cost :{shipping}</p>
            <p>Tex : {tex}</p>
            <h3>Total Price :{grandTotal}</h3>
        </div>
    );
};

export default Card;