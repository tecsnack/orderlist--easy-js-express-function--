exports.handler = async (event) => {
    const action = event.action;
    let responseMessage = "";

    if (action === "addOrder") {
        const orderText = event.orderText;
        if (orderText) {
            // Here you can add Groceries
            if (!global.orderList) {
                global.orderList = [];
            }
            global.orderList.push(orderText);
            responseMessage = "Add Groceries";
        } else {
            responseMessage = "Try again!";
        }
    } else if (action === "clearOrders") {
        // delete 
        if (global.orderList) {
            global.orderList = [];
        }
        responseMessage = "Groceries deleted";
    } else {
        responseMessage = "Bip..Bupp..";
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: responseMessage }),
    };
};
