import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addedNewFile } from "../../utils/store/slices/fileUploadCount";

export default function UploadButton() {
    const [image, setImage] = useState(null);
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
                    setImage(null);
                    dispatch(addedNewFile());
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <input type="file" onChange={handleChangeInput}/>
            <button onClick={handleClickUpload}>uploadImage</button>
        </>
    );
}
