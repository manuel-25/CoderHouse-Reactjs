import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"



function CartWidget () {
    const {getTotalItemsInCart, getSubtotalPrice} = useContext(cartContext)
    let color = { color: '#fff' }

    return (
        <div className="widget-container">
             <div className="widget-link"><FontAwesomeIcon icon={faCartShopping} style={color} /></div>
             <div className="widget-details">
                <span className="widgetCounter">
                    {getTotalItemsInCart() !== 0 ? getTotalItemsInCart() + " - ": null}
                    <span className="widget__counter--price">{"$" + getSubtotalPrice()}</span>
                </span>
             </div>
        </div>
    )
}

export default CartWidget