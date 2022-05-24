import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  // data value
const [File, setFile] = useState(null)
const [FilePrev, setFilePrev] = useState(null)


const onChangePicture = e => {

   

  // mengecek adakah file apa tidak 
  if (e.target.files[0]) {
    // set file yang sudah ada kesalam use State
    setFile(e.target.files[0]);
    //  inisiai untuk merender data file yang sudah di upload
    const reader = new FileReader();
    // melakukan proses render dan di simpan dalam value
    reader.addEventListener("load", () => {
      setFilePrev(reader.result);
    });
    // melakuan render berdasrakan image yang di pilih
    reader.readAsDataURL(e.target.files[0]);
  }
};


// fungsi menggiram gambar
const postToApi =()=>{
  const FileHandle = File
  var FormData = require('form-data');
  var data = new FormData();
  data.append('name', 'inovarr');
  data.append('category', 'small');
  data.append('price', '100000');
  data.append('status', 'true');
  data.append('image', FileHandle);
  
  var config = {
    method: 'post',
    url: 'https://rent-cars-api.herokuapp.com/admin/car',
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(response.data);
    console.log(response);
   
      alert(response.statusText)
    
  })
  .catch(function (error) {
    console.log(error);
  });
  


}



  return (
    <div className="App">
      <h1>ini input file </h1>
      <img width={100} height={100} src={FilePrev}/>
      <input onChange={(e)=>{onChangePicture(e)}} type="file"/>
      <button onClick={()=>{postToApi()}}>Upload</button>
    </div>
  );
}

export default App;
