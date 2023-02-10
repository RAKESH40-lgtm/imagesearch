import { useState } from 'react'
import axios from "axios"
import './imgsearch.css'

const ImgSearch = () => {
    const [initialImg, setImg] = useState({})
    const imageFound = (e) => {
        e.preventDefault()
        const options = {
            method: 'GET',
            url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
            params: { q: `${e.target.value}`, pageNumber: '1', pageSize: '10', autoCorrect: 'true' },
            headers: {
                'X-RapidAPI-Key': '722b63c4e6mshf62bb7a42bea911p142453jsnefe04d892f7a',
                'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {

            setImg(response.data)
        }).catch(function (error) {
            console.log(error);
        });

    }
    let imgs=initialImg.value
    console.log(imgs)
    // imgs.map((imgs,ids)=>{
    //     return(
    //         console.log(imgs.url)
    //     )
    // })
    return (
        <>
            <header>
                <h1>React Photo Search</h1>
                <p className='bookmark'>BookMarks</p>
            </header>
            <div className="searchBar">
                <input type="text" name="search" onChange={imageFound} id="" placeholder="search free resolution images" /></div>
            <div className="searchBtn">
                <button>search</button>
            </div>
            <div>
                {/* {
                    initialImg.map((imgs, idx) => {
                        return (
                            <img src={imgs.values.url.imageWebSearchUrl} alt="thanks to rapid api" />
                        )
                    })
                } */}
            </div>

        </>
    )
}
export default ImgSearch