import { useEffect, useState } from 'react';
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { AiFillPlayCircle } from 'react-icons/ai'
import { useGlobalContext } from '../context';
import Loading from './loading';
import { Link } from 'react-router-dom';
const Series = () => {
    const { whiteTheme, arabic, list,
        addToListFunction,
        removeFromList,
         } = useGlobalContext();
       
    const [horror, setHorror] = useState([]);
    const [action, setAction] = useState([]);
    const [drama, setDrama] = useState([]);
    const [comedy, setComedy] = useState([]);
    const [fantasy, setFantasy] = useState([]);
    const [romance, setRomance] = useState([]);
    const [thriller, setThriller] = useState([]);
    const [mystery, setMystery] = useState([]);
    const [loading, setLoading] = useState(true)
    // Getting Data
    let getData = async (category, setingFunction) => {
        try {
            let array = [];
            const response = await fetch("https://api.tvmaze.com/schedule/full");
            const data = await response.json();
            data.map((item) => item._embedded.show)
                .filter((item) => item.genres.includes(category))
                .map((item) => array.push(item))
            const key = 'id'
            const newArray = [...new Map(array.map(item => [item[key], item])).values()];
            setingFunction(newArray)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    //Calling Functions
    useEffect(() => {
        getData("Horror", setHorror)
        getData("Action", setAction)
        getData("Drama", setDrama)
        getData("Comedy", setComedy)
        getData("Fantasy", setFantasy)
        getData("Romance", setRomance)
        getData("Thriller", setThriller)
        getData("Mystery", setMystery)
        
    }, [])




    //handleScroll
    const forward = (category) => {
        document.getElementById(category).scrollLeft += 1000
    }
    const backword = (category) => {
        document.getElementById(category).scrollLeft += -1000
    }

    let ids = list.map((item) => item.id)
    const seriesCategories = [
        {
            name: "Horror",
            cssName: "horror",
            arabicName: "رعب",
            data: horror
        },
        {
            name: "Action",
            cssName: "action",
            arabicName: "حركه",
            data: action
        },
        {
            name: "Drama",
            cssName: "drama",
            arabicName: "دراما",
            data: drama
        },
        {
            name: "Comedy",
            cssName: "comedy",
            arabicName: "كوميدي",
            data: comedy
        },
        {
            name: "Fantasy",
            cssName: "fantasy",
            arabicName: "خيال",
            data: fantasy
        },
        {
            name: "Romance",
            cssName: "romance",
            arabicName: "رومانسي",
            data: romance
        },
        {
            name: "Thriller",
            cssName: "thriller",
            arabicName: "قصه مثيره",
            data: thriller
        },
        {
            name: "Mystery",
            cssName: "mystery",
            arabicName: "غموض",
            data: mystery
        },
    ]
    if (loading) {
        return <Loading />
    }

    return <section className="seriesSection">
        {seriesCategories.map((item, index) => {
            const { name, arabicName, data, cssName } = item;
            return <div className='category-container' key={index}>
                <h2 className="title">{arabic ? arabicName : name}</h2>
                <IoIosArrowForward style={{ backgroundColor: whiteTheme ? "black" : "white", color: whiteTheme ? "white" : "black" }}
                    onClick={() => forward(name)} className={`${cssName}-arrowRight`} size="500px" />
                <IoIosArrowBack style={{ backgroundColor: whiteTheme ? "black" : "white", color: whiteTheme ? "white" : "black" }}
                    onClick={() => backword(name)} className={`${cssName}-arrowLeft`} size="500px" />
                <div style={{ backgroundColor: whiteTheme ? "silver" : "black", color: whiteTheme ? "black" : "silver" }}
                    id={name} className="seriesList">
                    {data.map((item, index) => {
                        const { image, name, id } = item
                        return <div key={id} className='seriesContainer'>
                            <img className="seriesImg" src={image ? image.medium : "https://picsum.photos/200"} />
                            <h3 className="seriesName">{name}</h3>
                            <div className='buttons'>
                                {ids.includes(id) ?
                                    <div className='addToList'><span className='addToListText'>Remove from List</span>
                                        <IoMdRemoveCircleOutline className='removeFromList'
                                            onClick={() => removeFromList(id)} /></div> :
                                    <div className='addToList'> <span className='addToListText'>Add to list</span>
                                        <IoMdAddCircleOutline
                                            onClick={() => addToListFunction(name, image.medium, id)}
                                            className='addToList' /></div>}
                                <Link to={`/series/${id}`}><div className='play'><span className='playText'>Play</span><AiFillPlayCircle
                                    className='play' /></div></Link>

                            </div>


                        </div>
                    })}
                </div>
            </div>
        })}
    </section>
}

export default Series