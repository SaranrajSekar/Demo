const graphql = require('graphql')
const service = require('./Service/placeService.js')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLID } = graphql;

const placeType = require('./Models/QLPlace.js');

const rootQuery = new GraphQLObjectType({
    name: "Query",
    fields: {
        placeOrder: {
            type: new GraphQLList(placeType),
            args: {
                limit: {
                    type: graphql.GraphQLInt
                },
                offset: {
                    type: graphql.GraphQLInt
                }
            },
            resolve: async (_, args) => {
                try {
                    const { limit, offset } = args;
                    const dataset = await service.getAllOrder();
                    var result = [];
                    if (limit != undefined && offset != undefined) {
                        for (let i = 0; i <= dataset.length; i++) {
                            if (i >= offset) {
                                result.push(dataset[i]);
                            }
                            
                            if (limit && result.length === limit) {
                                break;
                            }
                        }
                        return result;
                    } else {
                        return dataset;
                    }
                } catch (err) {
                    console.log(err);
                }
            },
        },
        placeOrderById: {
            type: placeType,
            args: {
                orderId: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: async (_, args) => {
                try {
                    const data = await service.getOrderById(args);
                    return data;
                } catch (err) {
                    console.log(err);
                }
            }
        },
    },
})

const rootMutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createOrder: {
            type: placeType,
            args: {
                orderId: { type: GraphQLString },
                user: {
                    type: new GraphQLNonNull(GraphQLString),
                    userId: { type: GraphQLString },
                    userName: { type: GraphQLString },
                    cart: [
                        {
                            itemId: { type: GraphQLString },
                            itemName: { type: GraphQLString },
                            category: { type: GraphQLString },
                            price: { type: GraphQLString }
                        }
                    ]
                },
                deliveryDetails: {
                    type: new GraphQLNonNull(GraphQLString),
                    deliveryPersonId: { type: GraphQLString },
                    deliveryPersonName: { type: GraphQLString },
                    deliveryLocation: { type: GraphQLString }
                },
                noOfItems: { type: GraphQLString },
                totalAmount: { type: GraphQLString },
                isDeleted: { type: GraphQLString }
            },
            resolve: async (_, args) => {
                try {
                    return await service.savePlaceOrder(args);
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: rootQuery,
    mutation: rootMutation
})