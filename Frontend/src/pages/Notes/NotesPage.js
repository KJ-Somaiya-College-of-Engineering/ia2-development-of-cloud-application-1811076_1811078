import React, { useState, useRef} from "react";
import Header from "../../components/Note/Header";
import Footer from "../../components/Footer/Footer";
import CreateArea from "../../components/Note/CreateArea";
import { useHistory } from 'react-router-dom';

import './Note.css';
import Modal from "../../utils/Modal";
import NotesGrid from "../../components/Note/NotesGrid";


const NotesPage = () => {
    const history = useHistory();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const refreshRef = useRef(null);

    const refreshNotes = (email, token) => {
        refreshRef.current(email, token);
    }

    const redirectOnLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("NOCTokenDetails");    
        history.go("/login");
    }

    return (
        <div>
            <Header setIsModalVisible={setIsModalVisible} />
            <CreateArea refreshNotes={refreshNotes}/>
            {isModalVisible 
                &&
                <div className="modalContainer">
                    <Modal setIsModalVisible={setIsModalVisible} redirectOnLogout={redirectOnLogout}/>
                </div>
                }
            <div className="notesWrapper">
                <NotesGrid refreshRef={refreshRef}/>
            </div>
            <Footer /> 
        </div>
    );
}

export default NotesPage;