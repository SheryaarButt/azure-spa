import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const CosmosClient = require("@azure/cosmos").CosmosClient ;

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    context.log('HTTP Trigger processed a request!');

    let cosmosClient = new CosmosClient('AccountEndpoint=https://sheryaar-movies.documents.azure.com:443/;AccountKey=U0rvCZedgHuavmpkOXJFYzUVLpdMDaKOejw52Eje2DiqSflAsvrzy1kDmWLG89EE00ZAWiWwDo22GjhjJFWZog==;');
    let database = cosmosClient.database('movies');
    let container = database.container('movies');
    let {resources} = (await container.items.query('SELECT *').fetchAll());

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: resources
    };

};

export default httpTrigger;
