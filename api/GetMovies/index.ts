import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const CosmosClient = require("@azure/cosmos").CosmosClient ;

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    context.log('HTTP Trigger processed a request!');

    let cosmosClient = new CosmosClient(process.env['CosmosConnectionString']);
    let database = cosmosClient.database('movies');
    let container = database.container('movies');
    let {resources} = (await container.items.query('SELECT *').fetchAll());

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: resources
    };

};

export default httpTrigger;
