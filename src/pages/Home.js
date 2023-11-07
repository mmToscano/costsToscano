import styles from './Home.module.css';
import savings from '../img/savings.svg';
import LinkButton from '../components/layout/LinkButton';
import React, {useEffect, useState} from 'react';

function Home(){

    
    

    return(
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newProject" text="Criar projeto"/>
            <img src={savings} alt="Costs"/>
            
            
        </section>
    )
}

export default Home;

/*


    const [data, setData] = useState([]);

    useEffect(() => {
        const restCall = async () => {
            const resp = await fetch("http://localhost:9000/url");
            const resposta = await resp.json();
            console.log(JSON.stringify(resposta));

            setData(resposta);
        }

        restCall();
    }, [])

    no html:
    <div className={styles.test}>
                {data.length > 0 && (
                    <ul>
                    {data.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                    </ul>
                )}
            </div>
*/