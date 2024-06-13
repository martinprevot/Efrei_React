import React from 'react';
import planning from './planning';

const Planning = () => {
    return (
        <div>
            <h2>Emploi du temps</h2>
            {planning.map((item, index) => (
                <div key={index}>
                    <h3>Classe: {item.classe}</h3>
                    <ul>
                        {item.planning.map((course, idx) => (
                            <li key={idx}>
                                <strong>Matière:</strong> {course.subject}<br />
                                <strong>Heure de début:</strong> {new Date(course.start_datetime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}<br />
                                <strong>Heure de fin:</strong> {new Date(course.end_datetime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}<br />
                                <strong>Professeur:</strong> {course.fk_professeur}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Planning;
