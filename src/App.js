import React,{useState} from 'react';

import './App.scss';
import Header from './components/headers/';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

export default function App() {
  
  const [data, setData] = useState();
  const [requestParams, setRequestParams] = useState({});

  const callApi = async (requestParams) => {
    await fetch(requestParams.url, {
      method: requestParams.method,
    }).then((response) => {
        return response.json();
      }).then((data) => {
        setData(data);
      });
    setRequestParams(requestParams);
  };

    return (
      <>
      <Header />
      <Form callApi={callApi} />
      <div className="requestInfo">
        <p>Request Method: {requestParams.method}</p>
        <p>URL: {requestParams.url}</p>
      </div>
      <Results data={data} />
      <Footer />
    </>
    );
}
