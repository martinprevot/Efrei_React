import React, { useState } from 'react';
import notes from "./note";

const Note = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserSelect = (userId) => {
        setSelectedUser(userId);
    };

    return (
        <div>
            <h1>Sélectionnez un utilisateur pour afficher ses notes :</h1>
            <ul>
                {notes.map((userNotes, index) => (
                    <li key={index}>
                        <button onClick={() => handleUserSelect(userNotes.user)}>
                            Utilisateur {userNotes.user}
                        </button>
                    </li>
                ))}
            </ul>

            {selectedUser && (
                <div>
                    <h2>Notes de l'utilisateur {selectedUser} :</h2>
                    <ul>
                        {notes
                            .find(userNotes => userNotes.user === selectedUser)
                            ?.notes.map((note, index) => (
                                <li key={index}>
                                    <strong>{note.matiere}: </strong>{note.note}
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Note;
