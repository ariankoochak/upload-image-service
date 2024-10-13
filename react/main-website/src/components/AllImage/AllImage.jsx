import React, { useEffect, useState } from 'react'
import axios from "axios";


export default function AllImage() {
    const [images,setImages] = useState([]);
    useEffect(()=>{
        const api = "http://localhost:3000/get-data/";
        axios({
            withCredentials: true,
            method: "get",
            url: api,
        })
            .then((response) => {
                if (response.status === 200) {
                    setImages(response.data)
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },[])

    const renderImages = ()=>{
        return images.map((imageName)=>{
            return <div key={imageName}>
                <img src={`http://localhost:3000/upload/${imageName}`} alt=""/>
            </div>
        })
    }
  return (
    <div>{renderImages()}</div>
  )
}
