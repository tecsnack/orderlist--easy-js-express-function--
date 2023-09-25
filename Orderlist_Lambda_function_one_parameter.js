exports.handler = async (event) => {
    const action = event.action;
    let responseMessage = "";

    switch (action) {
        case "addOrder":
            const orderText = event.orderText;
            if (orderText) {
                // "addOrder" 
                if (!global.orderList) {
                    global.orderList = [];
                }
                global.orderList.push(orderText);
                responseMessage = "Add Groceries";
            } else {
                responseMessage = "Give it a try!";
            }
            break;

        case "clearOrders":
            // "clearOrders"
            if (global.orderList) {
                global.orderList = [];
            }
            responseMessage = "Groceries deleted";
            break;

        default:
            responseMessage = "Bip..Bup..";
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: responseMessage }),
    };
};
