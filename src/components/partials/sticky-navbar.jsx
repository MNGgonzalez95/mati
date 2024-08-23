import Link from "next/link";


function StickyNavbar ( { cartItems } ) {
    function getQtyTotal ( items ) {

        return 0;
    }

    return (
        <div className="sticky-navbar">
            <div className="sticky-info">
                <Link href="/"><i className="icon-home"></i>Home</Link>
            </div>
            <div className="sticky-info">
                <Link href="/shop" className=""><i className="icon-bars"></i>Categories</Link>
            </div>
            <div className="sticky-info">
            </div>
            <div className="sticky-info">
                <Link href="/pages/login" className=""><i className="icon-user-2"></i>Account</Link>
            </div>
            <div className="sticky-info">
                <Link href="/pages/cart" className="">
                    <i className="icon-shopping-cart position-relative">
                        <span className="cart-count badge-circle">{ getQtyTotal( cartItems ) }</span>
                    </i>Cart
                </Link>
            </div>
        </div>
    )
}

function mapStateToProps ( state ) {
    return {
        cartItems: state.cartlist.cart ? state.cartlist.cart : []
    }
}

export default ( StickyNavbar );