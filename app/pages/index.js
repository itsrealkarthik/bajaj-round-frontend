import { useState } from 'react';
import ApiForm from '../components/ApiForm';
import FilterResponse from '../components/FilterResponse';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [responseData, setResponseData] = useState(null);

  return (
    <div className={styles.container}>
      <h1>JSON Processor</h1>
      <ApiForm setResponseData={setResponseData} />
      {responseData && <FilterResponse responseData={responseData} />}
    </div>
  );
}
