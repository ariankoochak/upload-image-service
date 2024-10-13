import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addedNewFile } from "../../utils/store/slices/fileUploadCount";

export default function UploadButton() {
    const [image, setImage] = useState(null);
    const [status,setStatus] = useState('');
    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        setImage(e.target.files[0]);
    };
    const handleClickUpload = (e) => {
        const api = "http://localhost:3000/upload/";
        const form = new FormData();
        form.append("image", image);
        axios({
            headers: {
                "content-type": "multipart/form-data",
            },
            withCredentials: true,
            data: form,
            method: "post",
            url: api,
        })
            .then((response) => {
                if(response.status === 201){
                    setStatus('image uploaded successfully');
                    setImage(null);
                    dispatch(addedNewFile());
                }
            })
            .catch((error) => {
                setStatus("image not uploaded");
            });
    };
    return (
        <>
            <h2>{status}</h2>
            <input type="file" onChange={handleChangeInput}/>
            <button onClick={handleClickUpload}>uploadImage</button>
        </>
    );
}
