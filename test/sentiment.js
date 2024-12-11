import {getSentiment} from "../src/services/text_analytics/sentiment.service.js";


getSentiment('its good boy')
.then(res => {
    console.log(res)
})
.catch(error => {
    console.error(error)
})