export const loggedIn = (state) => {
    return state.token !== null
}

export const CartTotalPrice = (state) => {
    let Totals = 0

    state.cart.forEach(item => {
        Totals += item.price * item.quantity
    });
    return Totals
}