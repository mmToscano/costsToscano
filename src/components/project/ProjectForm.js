import {useEffect, useState} from 'react';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css'

function ProjectForm({btnText, handleSubmit, projectData}){

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {}); // um if está acontecendo aqui

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
    .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault(); //vai prevenir o refresh padrão que a página dá quando um submit é feito.
        console.log(project)
        //handleSubmit(project);
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value }) //não entendo essa linha
    }

    function handleCategory(e) {
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }}) //não entendo essa linha
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange} value={project.name ? project.name.id : ''}/>
            <Input type="number" text="Nome do projeto" name="budget" placeholder="Insira o orçamento total" handleOnChange={handleChange} value={project.budget ? project.budget.id : ''}/>
            <Select name="Category_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''}/>
            <SubmitButton text="Criar Projeto"/>
           
        </form>
    )
}

export default ProjectForm;