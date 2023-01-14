import { skateList } from '../data/skateList'
import '../styles/ShoppingList.css'




function ShoppingList() {

    const uniqueCategories = []
    skateList.forEach(skate => {
        if (!uniqueCategories.includes(skate.category)) {
            uniqueCategories.push(skate.category)
        }
    });

    return (
        <div>
            <ul>
                {
                    uniqueCategories.map((cat, id) => (
                        <li key={id}>{cat}, {id}</li>
                    ))
                }
            </ul>

            <ul className='wg-skate-list'>
                {
                    skateList.map((skate) => (
                        <li key={skate.id} className='wg-skate-item'>
                            {skate.name} {skate.isBestSale ? <span>🔥</span> : null}
                            {skate.isSpecialOffer ? <div className='wg-sales'>SOLDE</div> : null}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ShoppingList