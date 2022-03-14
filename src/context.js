import React, { useState, useContext, useEffect } from "react";



const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [settingSection, setIsSettingSection] = useState(false);
    const [whiteTheme, setWhiteTheme] = useState(false);
    const [blackTheme, setBlackTheme] = useState(true);
    const [arabic, setArabic] = useState(false);
   

    //List Page Data
    const getLocalstorageData = () => {
        const data = localStorage.getItem("myList");
        if (data) {
            return JSON.parse(localStorage.getItem("myList"))
        } else {
            return [];
        }
    }
    const [list, setList] = useState(getLocalstorageData());
    const addToListFunction = (name, img, id) => {
        let obj = {
            name: name,
            image: img,
            id: id
        }
        list.push(obj)
        const key = 'id'
        const newList = [...new Map(list.map(item => [item[key], item])).values()];
        localStorage.setItem("myList", JSON.stringify(newList))
        setList(getLocalstorageData())
    }
    const removeFromList = (id) => {
        setList(list.filter((item) => item.id !== id))        
    }
    useEffect(() => {
        localStorage.setItem("myList", JSON.stringify(list))
        
    }, [list])

    //Changing Themes Function
    const whiteThemeFunction = () => {
        setBlackTheme(false)
        setWhiteTheme(true)
    }
    const blackThemeFunction = () => {
        setWhiteTheme(false)
        setBlackTheme(true)
    }



    //Changing Themes
    useEffect(() => {


        if (whiteTheme) {
            setBlackTheme(false)
            //Changing elements Color
            document.body.style.backgroundColor = "white";
           

        }
        if (blackTheme) {
            setWhiteTheme(false)
            document.body.style.backgroundColor = "#171616"

        }

    }, [whiteTheme, blackTheme])
    



    return <AppContext.Provider value={{
        settingSection,
        setIsSettingSection,
        whiteTheme,
        setWhiteTheme,
        blackTheme,
        setBlackTheme,
        whiteThemeFunction,
        blackThemeFunction,
        arabic,
        setArabic,
        list,
        addToListFunction,
        removeFromList,
        
    }} >
        {children}
    </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext);
}


export { AppContext, AppProvider };