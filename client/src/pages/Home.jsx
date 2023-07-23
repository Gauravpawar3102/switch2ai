import React, { useState } from 'react';
// import { useResumeDetailsQuery } from '../services/resumeApi';

function Home(id) {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  // const { data, error, isLoading, isFetching, isSuccess } =
  //   useResumeDetailsQuery('6417137389a326c6eae7ee7a');
  return (
    <div className="home-container bg-red-50 flex flex-col  ">
      {/* {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>Fetching</h2>}
      {error && <h2>something went wrong</h2>}
      {isSuccess && (
        <>
     
          {JSON.stringify(data.basicDetails.fullName, undefined, 2)}
        </>
      )} */}
    </div>
  );
}

export default Home;
