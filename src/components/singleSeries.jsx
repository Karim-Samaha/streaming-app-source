
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context";
import Loading from "./loading";
const SingleSeries = () => {
    const { whiteTheme } = useGlobalContext();
    const [singleSeries, setSingleSeries] = useState([]);
    const [loading, setLoading] = useState(true)
    const { id } = useParams();


    useEffect(() => {
        const fithingData = async (id) => {
            const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
            const data = await response.json();
            setSingleSeries([data]);
            setLoading(false)
        }

        fithingData(id);
    }, [])

    if(loading) {
        return <Loading />
    }

    return <section style={{ color: whiteTheme ? "black" : "silver" }} className="singleSeries">
        {singleSeries.map((item) => {
            const { name, image, summary } = item;
            return <div 
                className="singleSeriesContainer">
                <div className="sectionOne">
                    <img src={image ? image.original : "https://picsum.photos/200"} alt="" />
                    
                </div>
                <div className="sectionTwo">
                    <h1>{name}</h1>
                    <p>{summary.substring(3, summary.length - 5).replace(/<\/?[^>]+(>|$)/g, "")}</p>
                </div>
            </div>
        })}
        <video className="video" src="../assets/video.mov"  controls >
            
        </video>
    </section>
}
export default SingleSeries