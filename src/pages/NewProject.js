import { useNavigate } from 'react-router-dom';

import ProjectForm from '../components/project/ProjectForm';
import styles from './NewProject.module.css'

function NewProject(){

    const navigate = useNavigate();

    function createPost(project) {
        // initialize with costs and services

        project.cost = 0;
        project.servies = [];

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(project) 
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            navigate("/projects", { message: "Projeto criado com sucesso!" });
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para adicionar serviços</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar projeto'/>
        </div>
    )
}

export default NewProject;