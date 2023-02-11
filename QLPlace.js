const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql

const cartDetails = new GraphQLObjectType({
    name: "cart",
    fields: {
        itemId: {
            type: GraphQLString
        },
        itemName: {
            type: GraphQLString
        },
        category: {
            type: GraphQLString
        },
        price: {
            type: GraphQLString
        }
    },
})

const placeOrderType = new GraphQLObjectType({
    name: "placeOrderModel",
    fields: {
        orderId: {
            type: GraphQLString
        },
        user: {
            type: new GraphQLObjectType({
                name: "userData",
                fields: {
                    userId: {
                        type: GraphQLString
                    },
                    userName: {
                        type: GraphQLString
                    },
                    cart: {
                        type: new GraphQLList(cartDetails)
                    }
                },
            })
        },
        deliveryDetails: {
            type: new GraphQLObjectType({
                name: "DeliveryPerson",
                fields: {
                    deliveryPersonId: {
                        type: GraphQLString
                    },
                    deliveryPersonName: {
                        type: GraphQLString
                    },
                    deliveryLocation: {
                        type: GraphQLString
                    }
                },
            }),
        },
        noOfItems: {
            type: GraphQLString
        },
        totalAmount: {
            type: GraphQLString
        },
        isDeleted: {
            type: GraphQLString
        }
    }
})

module.exports = placeOrderType;
