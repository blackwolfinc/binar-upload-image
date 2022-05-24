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
 


}



  return (
    <div className="App">
      <h1>ini input file </h1>
      <img width={100} height={100} src={FilePrev}/>
      <input onChange={(e)=>{} type="file"/>
      <button onClick={()=>{}}>Upload</button>
    </div>
  );
}

export default App;
