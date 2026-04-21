import { useState, useEffect } from 'react';
import axios from 'axios';

function Page() {
  const [status, setStatus] = useState({});

  useEffect(() => {
    axios.get('/api/status')
      .then(response => {
        setStatus(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Estado de la aplicación</h1>
      <p>Service: {status.service}</p>
      <p>Status: {status.status}</p>
      <p>Version: {status.version}</p>
    </div>
  );
}

export default Page;