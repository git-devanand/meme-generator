import React from "react";
import memesData from "../memesData";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    console.log(allMemes)

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    return (
        <main className="meme">
            <form className="form">
                <input 
                    type="text" 
                    placeholder="Top Text"
                    className="form-input"
                />
                <input 
                    type="text"
                    placeholder="Buttom Text"
                    className="form-input"
                />
                <button
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Generate a meme image
                </button>
            </form>
            <img src={meme.randomImage} alt="meme" className="meme-image" />
        </main>
    );
}