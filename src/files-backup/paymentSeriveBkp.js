const {Cashfree} = require("cashfree-pg");





async function initiatePaymentGateway(orderId){

    const order = await findOrderById(orderId)
    
    //parameters for CashFree API
    const order_amount = order.totalPrice
    const order_currency = "INR"
    const customer_details = {
        customer_id:order.user._id,
        customer_name:order.user.firstName+" "+order.user.lastName,
        customer_email:order.user.email,
        customer_phone:"9924253037"
    }
    const return_url = "http://localhost:3000/"

    
    Cashfree.XClientId = 'TEST10246574e8380a8d779514f5393747564201';
    Cashfree.XClientSecret = 'cfsk_ma_test_b06dfed8ec4aff40e5af351aebdc01bf_44f27811'
    Cashfree.XEnvironment = Cashfree.Environment.SANDBOX

    const request = {
        order_amount,
        order_currency,
        customer_details,
        order_meta:{
            return_url
        },
        order_note:""
    }

  

    const response = await  Cashfree.PGCreateOrder("2023-08-01", request)
    const data = response.data
    const orderDetails = {
        order:order,
        paymentData:data
    }

    console.log("--->",orderDetails)
    return orderDetails
}


async function checkPaymentStatus(orderId){

    const url =`https://sandbox.cashfree.com/pg/orders/${orderId}`

    const headers = {
        'accept': 'application/json',
        'x-api-version': '2023-08-01',
        'x-client-id': 'TEST10246574e8380a8d779514f5393747564201',
        'x-client-secret': 'cfsk_ma_test_b06dfed8ec4aff40e5af351aebdc01bf_44f27811'
      };

    try {
        const response = await fetch(url,{method:'GET',headers:headers})
        if(!response.ok){
            throw new Error(`HTTP error : ${response.status}`)
        }
        const data = await response.json()
        console.log(data)

        return data
    } catch (error) {
        console.error('Error: ',error)
    }
}

module.exports = {initiatePaymentGateway,checkPaymentStatus}