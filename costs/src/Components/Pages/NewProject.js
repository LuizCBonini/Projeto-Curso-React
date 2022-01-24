import { useNavigate } from 'react-router-dom'

import ProjectForm from '../Project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {

  const history = useNavigate()

  function createPoste(project) {
    
    // Initialize cost and services
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringfy(project),
    }).then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      //redirect
    })
    .catch(err => console.log(err))
  }

  return(
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPoste} btnText="Criar Projeto"/>
    </div>
  )
  }
  export default NewProject