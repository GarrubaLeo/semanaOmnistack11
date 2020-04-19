import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {headers: { Authorization: ongId }})
            .then(res => { setIncidents(res.data) })
            .catch(err => console.log(err))
    })

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incidents.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{incident.value}</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#A8A8B3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}