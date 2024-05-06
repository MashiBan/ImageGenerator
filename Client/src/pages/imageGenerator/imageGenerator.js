import { useState } from "react";
import { Navbar } from "../../common/navbar/navbar";

export const ImageGenerator = () => {
    const [searchText, setSearchText] = useState("");
    const [imageSrc, setImageSrc] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1200px-Sunflower_from_Silesia2.jpg");

    const textChange = (val) => {
        setSearchText(val);
    }

    const getData = async () => {
        const req = await fetch('http://localhost:1400/api/image-generator', {
            method: "POST",
            body: JSON.stringify({
                searchText: searchText,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await req.json();
        setImageSrc(data.image);
    }

    return (
        <div>
            <Navbar/>
            <div className="image-generator-main-container">
                <h2>Image Generator</h2>
                <div className="image-container">
                <img width='340px' height='340px' src={imageSrc}></img>
                </div>
                <div className="search-container">
                    <input onChange={(e) => { textChange(e.target.value) }} />
                    <button onClick={()=>{getData()}}>Generate</button>
                    
                </div>
            </div>
        </div>
    )
}
