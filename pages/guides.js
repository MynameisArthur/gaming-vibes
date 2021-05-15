import {useContext, useEffect} from 'react';
import styles from '../styles/Guides.module.css';
import AuthContext from '../stores/authContext';

export default function Guides() {
    // const {user, authReady} = useContext(AuthContext);
    useEffect(() => {
        fetch('/.netlify/functions/guides')
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);
    return (
        <div className={styles.guides}>
            <h2>All Guides</h2>
        </div>
    );
}
