import '../styles/Cart.css'

function Cart() {
    const prixCruser = 10
    const prixLongboard = 15
    const prixStreet = 10

    return (
        <div className="wg-cart">
            Panier
            <ul>
                <li>Cruser : {prixCruser}</li>
                <li>Longboard : {prixLongboard}</li>
                <li>Street : {prixStreet} </li>
            </ul>
            Total : {prixCruser + prixLongboard + prixStreet}

        </div>
    )
}

export default Cart