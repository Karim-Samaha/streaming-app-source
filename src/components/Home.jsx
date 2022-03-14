import { useEffect, useState } from "react"

const Hero = () => {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIndex(index !== 2 ? index + 1 : 0)
        }, 5000)
        return () => clearTimeout(timeOut);
    }, [index])

    const backgroundImg = [
        "assets/breakingbad.jpg",
        "assets/houseofcards.jpg",
        "assets/gameofthrones.jfif"
    ]

    return <section className="cursor" >
        {backgroundImg.map((img, i) => {
            return <img style={{transform: `translateX(${-100 * index}%)`}}
             key={i} src={`./${img}`} alt="" />
        })}
    </section>
        
    
}

export default Hero