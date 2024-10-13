import React from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { deletedFile } from '../../utils/store/slices/fileUploadCount';

export default function DeleteButton({imageName}) {
    const dispatch = useDispatch();
    const handleClickDeleteButton = ()=>{
        const api = `http://localhost:3000/upload/${imageName}`;
        axios({
            withCredentials: true,
            method: "delete",
            url: api,
        })
            .then((response) => {
                dispatch(deletedFile());
            })
            .catch((error) => {
                console.log(error);
            });
    }
  return (
    <button onClick={handleClickDeleteButton}>delete image</button>
  )
}
