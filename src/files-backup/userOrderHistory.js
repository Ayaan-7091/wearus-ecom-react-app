async function userOrderHistory(userId){
    try {
        const orders = Order.find({user:userId,orderStatus:'PLACED'})
        .populate({path:'orderItems',populate:{path:'product'}}).lean()
        return orders
    } catch (error) {
        throw new Error(error.message)
    }
}
