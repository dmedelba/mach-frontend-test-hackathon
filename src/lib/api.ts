import fetch from 'isomorphic-unfetch';

const pingApi = async () => {
  try {
    const response = await fetch('/api/ping');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default pingApi;