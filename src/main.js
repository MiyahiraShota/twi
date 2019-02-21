const prompts = require("prompts");
const Twitter = require('twitter');
const TwiConfig = require('./config/twitter_config.json');

class Twi {
    constructor() {
        this.questions = [
            {
                type: "text",
                name: "tweet",
                message: "なんていう？"
            }
        ]

        this.main = this.main.bind(this)

        // init
        this.main()
    }

    async main() {
        try {
            const client = await new Twitter(TwiConfig);
            const response =  await prompts(this.questions);
            const result = client.post('statuses/update', {status: response.tweet});
        } catch (error) {
            throw error;
        }
    }

}

new Twi();
