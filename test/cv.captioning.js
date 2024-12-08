import {getCaptioning} from "../src/services/coputer_vision/captioning.services.js";

const imageUrl = "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=800";

getCaptioning(imageUrl)
.then((caption)=>{
    console.log("Follow to img:",caption);
})
.catch((error)=>{
    console.error("Error:",error.message);
})