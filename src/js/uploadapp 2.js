const IPFS = require('ipfs-mini');
const ipfs = new IPFS({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});



uploadFile = () => {
  const file = document.getElementById('input').files[0];
  console.log(file.result)
  let reader = new window.FileReader();
  reader.readAsArrayBuffer(file);
  reader.onloadend = () => convertToBuffer(reader);
  

  convertToBuffer = async(reader) => {
    //file is converted to a buffer to prepare for uploading to IPFS
      const buffer = await Buffer.from(reader.result);
      console.log(reader)
      console.log(reader.result)
    //set this buffer -using es6 syntax
      //setState({buffer});
 //   console.log(data1);\
 ipfs.add(buffer, (err,hash) => {
      if (err) {
          return console.log(err)
      }
      
      $('#hashvalue').text(hash);
      $('#ipfslinktitle').text('Your IPFS Link');
      $('#ipfslink').text('https://ipfs.infura.io/ipfs/' + hash);


      
      
      });
  };

};

submitFile = () => {
$('#hashvalue').text('');
$('#ipfslink').text('');
$('#ipfslinktitle').text('');
     
  console.log("Submitted!")

};
/*
testFile = () => {
  
  console.log("Submitted!")

const file = document.getElementById('filepy').files[0];
//let photo = document.getElementById("image-file").files[0];  // file from input
let req = new XMLHttpRequest();
let formData = new FormData();

formData.append("file", file);    
let url = "http://localhost:5001/testPy";                            
req.open("POST", url, true);
req.send(formData);
  
  };*/