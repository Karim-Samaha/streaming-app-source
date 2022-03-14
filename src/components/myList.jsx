import { useState } from "react";
import { useGlobalContext } from "../context";
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { AiFillPlayCircle } from 'react-icons/ai'
import { Link } from "react-router-dom";
const MyList = () => {
    const { whiteTheme, list, removeFromList } = useGlobalContext()
    if (list.length <= 0) {
        return <section style={{ color: whiteTheme ? "black" : "silver" }} className="emptyList">
            <h2>Your List is empty</h2>
        </section>
    }

    return <section style={{ color: whiteTheme ? "black" : "silver" }} className="listSection">
        {list.map((item) => {
            const { name, id, image } = item;
            return <div className="listItemContainer">
                <div className='seriesContainer'>
                    <img className="seriesImg" src={image} alt="series img" />
                    <h3 className="seriesName">{name}</h3>
                    <div className='buttons'>
                        <div className='addToList'><span className='addToListText'>Remove from List</span>
                            <IoMdRemoveCircleOutline className='removeFromList'
                                onClick={() => removeFromList(id)} /></div>
                        <Link to={`/series/${id}`}><div className='play'><span className='playText'>Play</span><AiFillPlayCircle
                            className='play' /></div></Link>

                    </div>
                </div>
            </div>
        })}
    </section >
}

export default MyList;