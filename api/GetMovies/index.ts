import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const data = [
        {
            plot: 'バケモノの子供がいるねん',
            title: 'バケモノの子',
            poster: 'https://images-na.ssl-images-amazon.com/images/I/81Xag0zglmL.jpg'
        },
        {
            plot: '千尋の親が豚になんねん',
            title: '千と千尋の神隠し',
            poster: 'https://www.ghibli.jp/images/chihiro.jpg'
        },
        {
            plot: 'Harrison Ford kills robots',
            title: 'Blade Runner',
            poster: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg'
        }
    ];

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: data
    };

};

export default httpTrigger;
