import {getCaptioning} from "../src/services/coputer_vision/captioning.services.js";

const imageUrl = "https://ninydev.com/wp-content/uploads/2024/05/ai-7-segment.jpeg";

getCaptioning(imageUrl)
.then((caption)=>{
    console.log("Follow to img:",caption);
})
.catch((error)=>{
    console.error("Error:",error.message);
})