import React, {useEffect, useContext, useState} from 'react'
import {API_BASE_ROUTE, REQUEST_HEADERS} from '../../config/serverConfig';
import UserProvider from "../../context/user.provider";
import axios from "axios";
import Note from "../../components/Note/Note";

export default function NotesGrid(props) {
    const userData = useContext(UserProvider.context);
    const [alert, setAlert] = useState(false);

    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        props.refreshRef.current = fetchAllNotes;
    }, []);

    const deleteNote = async(noteId) => {
        const response = await axios.delete(`${API_BASE_ROUTE}/note/${noteId}`, {headers:{'x-access-token':userData.accessToken, ...REQUEST_HEADERS}})
        if(response && response.status === 200){
            await fetchAllNotes(userData.email, userData.accessToken);
        }
    } 

    const fetchAllNotes = async (email, token) => {
        const config = {
            headers:{
                'x-access-token':token, 
                ...REQUEST_HEADERS
            },
            data: {
                "email": userData.email
            }
        }
        const response = await axios.get(`${API_BASE_ROUTE}/${email}/note/all`, config)
        if(response){
            const notes = response.data.notes;
            setNotes(notes);
        }  
    }
    
    const updateFavourite = async(noteId, newIsFavourite) => {
        const payload = {email: userData.email, noteId:noteId, isFavourite:newIsFavourite}
        const response = await axios.put(`${API_BASE_ROUTE}/note/${noteId}/updateFavourite`, payload, {headers:{'x-access-token':userData.accessToken, ...REQUEST_HEADERS}})
        if(response && response.status === 200){
            await fetchAllNotes(userData.email, userData.accessToken);
        }
    }


    useEffect(() => {
        if(alert) {
            setTimeout(() => {
            setAlert(false);
            }, 100)
        }
        }, [alert]);

    useEffect(()=>{ 
        const getNotes = async() => {
            try{
                const config = {
                    headers:{
                        'x-access-token':userData.accessToken, 
                        ...REQUEST_HEADERS
                    },
                    data: {
                        "email": userData.email
                    }
                }
                const response = await axios.get(`${API_BASE_ROUTE}/${userData.email}/note/all`, config)
                if(response){
                    const notes = response.data.notes;
                    setNotes(notes);
                }  
            }catch(e){
                console.log(e);
                console.log(e.response);
            }
        }
        if(userData.accessToken){
            getNotes();
            setIsLoading(false);
        }
    },[userData.accessToken, userData.email]);

    return (
        <div>
            {isLoading && <h3 style={{textAlign:"center", alignItems:"center"}}>Loading...</h3>}
            {!isLoading && notes.length === 0 && <h3 style={{textAlign:"center", alignItems:"center"}}>You don't have any notes!</h3>}
            {!isLoading && notes.map((noteItem, index) => {
                return (
                <Note
                    key={noteItem.noteId}
                    id={noteItem.noteId}
                    title={noteItem.title}
                    content={noteItem.content}
                    creationDate={noteItem.creationDate}
                    isFavourite={noteItem.isFavourite}
                    onDelete={deleteNote}
                    setAlert={setAlert}
                    updateFavourite={updateFavourite}
                />
                );
            })}
        </div>
    )
}
