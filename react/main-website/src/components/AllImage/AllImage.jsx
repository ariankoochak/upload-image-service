import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useSelector } from 'react-redux';
import DeleteButton from '../DeleteButton/DeleteButton';



export default function AllImage() {
    const [images,setImages] = useState([]);
    const fileUploadCount = useSelector((store) => store.fileUploadCount.fileUploadCount);
    useEffect(() => {
        const api = "http://localhost:3000/get-data/";
        axios({
            withCredentials: true,
            method: "get",
            url: api,
        })
            .then((response) => {
                if (response.status === 200) {
                    setImages(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [fileUploadCount]);

    const renderImages = ()=>{
        return images.map((imageName)=>{
            return <div key={imageName}>
                <img src={`http://localhost:3000/upload/${imageName}`} alt="" width={200}/>
                <DeleteButton imageName={imageName}/>
            </div>
        })
    }
  return (
    <div>{renderImages()}</div>
  )
}
