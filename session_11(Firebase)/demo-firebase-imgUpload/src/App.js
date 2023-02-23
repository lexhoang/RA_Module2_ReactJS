import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { storage } from './firebase';
import { useEffect, useState } from 'react';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  // Tạo storage lưu trữ từ dịch vụ của firebase
  const imagesListRef = ref(storage, 'images/');

  const uploadFile = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  }


  //Lấy dữ liệu trả về firebase
  useEffect(() => {
    listAll(imagesListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);


  return (
    <div className="App">
      <div className='col-4 my-5'>
        <input type="file"
          className="form-control"
          onChange={(e) => {
            setImageUpload(e.target.files[0])
          }}
        />
      </div>

      <button className='btn btn-info' onClick={uploadFile}>Upload Image</button>
      {
        imageUrls.map((url, index) => {
          return (
            <div key={index}>
              <img src={url} alt="" />
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
