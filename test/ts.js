import {translation} from "../src/services/translations/translations.services.js";

translation('Hello World')
.then(result => {
    console.log(result)
})
.catch(e => {
    console.error(e)
})