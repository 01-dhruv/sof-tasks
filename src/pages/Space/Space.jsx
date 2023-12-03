// import React, { useState, useEffect } from 'react';
// import YouTube from 'react-youtube';
// import axios from 'axios';

// const YouTubeVideos = () => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState('');

//   useEffect(() => {
//     // Replace 'YOUR_API_KEY' with your actual YouTube Data API key
//     const API_KEY = 'AIzaSyBRjWY9J8Y2WoMRKyvJtry6f80SrKHYLjs';

//     // Fetch video data from the YouTube Data API (for example, the most popular videos)
//     axios
//       .get(
//         `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=US&key=${API_KEY}`
//       )
//       .then((response) => {
//         const videoIds = response.data.items.map((item) => item.id);
//         setVideos(videoIds);
//       })
//       .catch((error) => {
//         console.error('Error fetching YouTube videos:', error);
//       });
//   }, []);

//   // Handle video selection
//   const handleVideoSelect = (videoId) => {
//     setSelectedVideo(videoId);
//   };

//   return (
//     <div className="youtube-videos-container">
//       <div className="video-list">
//         {videos.map((videoId) => (
//           <div
//             key={videoId}
//             className="video-item"
//             onClick={() => handleVideoSelect(videoId)}
//           >
//             <img
//               src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
//               alt={`Video thumbnail for ${videoId}`}
//             />
//           </div>
//         ))}
//       </div>
//       <div className="video-player">
//         {selectedVideo && (
//           <YouTube videoId={selectedVideo} opts={{ width: '640', height: '360' }} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default YouTubeVideos;





// Working for firebase upload
// import { useState } from 'react';
// import { storage } from '../../firebase'; // Import your Firebase storage instance
// // import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import './Videos.css'

// function MediaUpload() {
//   const [file, setFile] = useState(null);
//   const [url, setUrl] = useState('');
//   const [showInput, setShowInput] = useState(false);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleUpload = () => {
//     if (file) {
//       const storageRef = storage.ref();
//       const fileRef = storageRef.child(file.name);

//       fileRef.put(file).then((snapshot) => {
//         // File successfully uploaded.
//         snapshot.ref.getDownloadURL().then((downloadURL) => {
//           setUrl(downloadURL);
//         });
//       });
//     }
//   };

//   return (
//     <div className='videos'>

//       <div className='top-right'>
//         <button onClick={() => setShowInput(true)}>Upload</button>
//       </div>
//       {showInput && (
//         <div>
//           <input type="file" onChange={handleFileChange} />
//           <button onClick={handleUpload}>Upload File</button>
//         </div>
//       )}
//       {url && <img src={url} alt="Uploaded" style={{ maxWidth: '300px', maxHeight: '300px' }} />}

//     </div>
//   );
// }


// export default MediaUpload;


















// import { useState } from 'react';
// import { storage } from '../../firebase'; // Import your Firebase storage instance
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import storage functions  
// import './Videos.css';

// function MediaUpload() {
//   const [file, setFile] = useState(null);
//   const [url, setUrl] = useState('');
//   const [showInput, setShowInput] = useState(false);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleUpload = () => {
//     if (file) {
//       const storageRef = storage.ref();
//       const fileRef = ref(storageRef, file.name);
  
//       // Upload the file to Firebase Storage.
//       uploadBytes(fileRef, file).then((snapshot) => {
//         // File successfully uploaded.
  
//         // Get the download URL of the uploaded file.
//         getDownloadURL(snapshot.ref).then((downloadURL) => {
//           // Set the `url` state variable to the download URL.
//           setUrl(downloadURL);
//         });
//       });
//     }
//   };

//   return (
//     <div className='videos'>

//       <div className='top-right'>
//         <button onClick={() => setShowInput(true)}>Upload</button>
//       </div>
//       {showInput && (
//         <div>
//           <input type="file" onChange={handleFileChange} />
//           <button onClick={handleUpload}>Upload File</button>
//         </div>
//       )}
//       {url && <img src={url} alt="Uploaded" style={{ maxWidth: '300px', maxHeight: '300px' }} />}

//     </div>
//   );
// }

// export default MediaUpload;



// Working for images upload and display
// import { useState, useEffect } from 'react';
// import { storage } from '../../firebase'; // Import your Firebase storage instance
// import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage'; // Import storage functions
// import './Videos.css';

// function MediaUpload() {
//   const [file, setFile] = useState(null);
//   const [url, setUrl] = useState('');
//   const [showInput, setShowInput] = useState(false);
//   const [feedImages, setFeedImages] = useState([]);


//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleUpload = () => {
//     if (file) {
//       const storageRef = ref(storage, file.name); // Use ref function directly
//       uploadBytes(storageRef, file).then((snapshot) => {
//         // File successfully uploaded.
//         getDownloadURL(snapshot.ref).then((downloadURL) => {
//           setUrl(downloadURL);
//         });
//       });
//     }
//   };



//   useEffect(() => {
//     getAllImages().then((imageUrls) => {
//       setFeedImages(imageUrls);
//     });
//   }, []);

//   const getAllImages = async () => {
//     const storageRef = ref(storage);
//     const images = await listAll(storageRef);

//     const imageUrls = await Promise.all(images.items.map(async (item) => {
//       return getDownloadURL(item);
//     }));

//     return imageUrls;
//   };


  

//   return (
//     <div className='videos'>
//       <div className='top-right'>
//         <button >Feed</button>
//         <button onClick={() => setShowInput(true)}>Upload</button>
//       </div>
//       {showInput && (
//         <div>
//           <input type="file" onChange={handleFileChange} />
//           <button onClick={handleUpload}>Upload File</button>
//         </div>
//       )}
//       {url && <img src={url} alt="Uploaded" style={{ maxWidth: '300px', maxHeight: '300px' }} /> }
//         { url && <p>File Uploaded Successfully</p> }

//         {/* {feedImages.map((imageUrl, index) => (
//         <div key={index}>
//           <img src={imageUrl} alt={`Feed Image ${index}`}  style={{ maxWidth: '300px', maxHeight: '300px' }} />
//         </div>
//       ))} */}

// {feedImages.map((imageUrl, index) => (
//   <div key={index} style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
//     <img src={imageUrl} alt={`Feed Image ${index}`} style={{ maxWidth: '300px', maxHeight: '300px' }} />
//   </div>
// ))}



//     </div>
//   );
// }

// export default MediaUpload;








// import { useState, useEffect } from 'react';
// import { storage } from '../../firebase'; // Import your Firebase storage instance
// import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage'; // Import storage functions
// import './Videos.css';

// function MediaUpload() {
//   const [file, setFile] = useState(null);
//   const [url, setUrl] = useState('');
//   const [showInput, setShowInput] = useState(false);
//   const [feedImages, setFeedImages] = useState([]);
//   const [feedVideos, setFeedVideos] = useState([]);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleUpload = () => {
//     if (file) {
//       const storageRef = ref(storage, file.name);
//       uploadBytes(storageRef, file).then((snapshot) => {
//         getDownloadURL(snapshot.ref).then((downloadURL) => {
//           setUrl(downloadURL);
//         });
//       });
//     }
//   };

//   useEffect(() => {
//     getAllMedia().then(({ images, videos }) => {
//       setFeedImages(images);
//       setFeedVideos(videos);
//     });
//   }, []);

//   const getAllMedia = async () => {
//     const storageRef = ref(storage);
//     const files = await listAll(storageRef);

//     const imageUrls = [];
//     const videoUrls = [];

//     await Promise.all(files.items.map(async (item) => {
//       const downloadURL = await getDownloadURL(item);
//       if (item.name.endsWith('.jpg') || item.name.endsWith('.jpeg') || item.name.endsWith('.png')) {
//         imageUrls.push(downloadURL);
//       } else if (item.name.endsWith('.mp4') || item.name.endsWith('.webm') || item.name.endsWith('.ogg')) {
//         videoUrls.push(downloadURL);
//       }
//     }));

//     return { images: imageUrls, videos: videoUrls };
//   };

//   return (
//     <div className='videos'>
//       <div className='top-right'>
//         <button>Feed</button>
//         <button onClick={() => setShowInput(true)}>Upload</button>
//       </div>
//       {showInput && (
//         <div>
//           <input type="file" accept="image/*, video/*" onChange={handleFileChange} />
//           <button onClick={handleUpload}>Upload File</button>
//         </div>
//       )}
//       {url && (
//         <>
//           {url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') ? (
//             <img src={url} alt="Uploaded" style={{ maxWidth: '300px', maxHeight: '300px' }} />
//           ) : (
//             <video controls style={{ maxWidth: '300px', maxHeight: '300px' }}>
//               <source src={url} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           )}
//         </>
//       )}

//       <div className='container'>

//         {feedImages.map((imageUrl, index) => (
//           // <div key={index} style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
//           <div key={index} className='image-disp'>
//             <img src={imageUrl} alt={`Feed Image ${index}`} style={{ maxWidth: '300px', maxHeight: '300px' }} />
//           </div>
//         ))}
//         {feedVideos.map((videoUrl, index) => (
//           // <div key={index} style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
//           <div key={index} className='video-disp'>
//             <video controls style={{ maxWidth: '300px', maxHeight: '300px' }}>
//               <source src={videoUrl} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         ))}

//       </div>

//     </div>
//   );
// }

// export default MediaUpload;
















// import { useState, useEffect } from 'react';
// import { storage } from '../../firebase';
// import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
// import './Videos.css';

// function MediaUpload() {
//   const [file, setFile] = useState(null);
//   const [url, setUrl] = useState('');
//   const [showInput, setShowInput] = useState(false);
//   const [feedImages, setFeedImages] = useState([]);
//   const [feedVideos, setFeedVideos] = useState([]);
//   const [showFeed, setShowFeed] = useState(false);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleUpload = () => {
//     if (file) {
//       const storageRef = ref(storage, file.name);
//       uploadBytes(storageRef, file).then((snapshot) => {
//         getDownloadURL(snapshot.ref).then((downloadURL) => {
//           setUrl(downloadURL);
//           setShowInput(false); // Hide the upload input
//           setShowFeed(true); // Show the feed
//         });
//       });
//     }
//   };

//   useEffect(() => {
//     getAllMedia().then(({ images, videos }) => {
//       setFeedImages(images);
//       setFeedVideos(videos);
//     });
//   }, [showFeed]); // Reload the feed when showFeed changes

//   const getAllMedia = async () => {
//     const storageRef = ref(storage);
//     const files = await listAll(storageRef);

//     const imageUrls = [];
//     const videoUrls = [];

//     await Promise.all(files.items.map(async (item) => {
//       const downloadURL = await getDownloadURL(item);
//       if (item.name.endsWith('.jpg') || item.name.endsWith('.jpeg') || item.name.endsWith('.png')) {
//         imageUrls.push(downloadURL);
//       } else if (item.name.endsWith('.mp4') || item.name.endsWith('.webm') || item.name.endsWith('.ogg')) {
//         videoUrls.push(downloadURL);
//       }
//     }));

//     return { images: imageUrls, videos: videoUrls };
//   };

//   const toggleFeed = () => {
//     if (!showInput) {
//       setShowFeed(!showFeed);
//     }
//   };

//   return (
//     <div className='videos'>
//       <div className='top-right'>
//         <button onClick={toggleFeed}>Feed</button>
//         <button onClick={() => setShowInput(true)}>Upload</button>
//       </div>
//       {showInput && (
//         <div>
//           <input type="file" accept="image/*, video/*" onChange={handleFileChange} />
//           <button onClick={handleUpload}>Upload File</button>
//         </div>
//       )}
//       {url && (
//         <>
//           {url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') ? (
//             <img src={url} alt="Uploaded" style={{ maxWidth: '300px', maxHeight: '300px' }} />
//           ) : (
//             <video controls style={{ maxWidth: '300px', maxHeight: '300px' }}>
//               <source src={url} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           )}
//         </>
//       )}

//       <div className='container'>
//         {showFeed &&
//           feedImages.map((imageUrl, index) => (
//             <div key={index} className='image-disp'>
//               <img src={imageUrl} alt={`Feed Image ${index}`} style={{ maxWidth: '300px', maxHeight: '300px' }} />
//             </div>
//           ))}
//         {showFeed &&
//           feedVideos.map((videoUrl, index) => (
//             <div key={index} className='video-disp'>
//               <video controls style={{ maxWidth: '300px', maxHeight: '300px' }}>
//                 <source src={videoUrl} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default MediaUpload;













import { useState, useEffect, useCallback } from 'react';
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
// import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
// import { getFirestore} from 'firebase/firestore';

import './Space.css';

function MediaUpload( {theme} ) {
  const [file, setFile] = useState(null);
  // const [text, setText] = useState('');
  // const db = getFirestore();

  const [url, setUrl] = useState('');
  const [showUploadButtons, setShowUploadButtons] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [feedImages, setFeedImages] = useState([]);
  const [feedVideos, setFeedVideos] = useState([]);
  // const [feedText, setFeedText] = useState([]);
  const [showFeed, setShowFeed] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      const storageRef = ref(storage, file.name);
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
          setShowInput(false); // Hide the upload input
          setShowFeed(true); // Show the feed
        });
      });
    }
    else{
      setUrl(''); // Reset the URL when no file is selected
    }
  };

  // const handleTextChange = (e) => {
  //   setText(e.target.value);
  // };

  // const handleTextUpload = async () => {
  //   if (text) {
  //     // Add the text to Firebase Firestore
  //     const docRef = await addDoc(collection(db, 'textCollection'), {
  //       content: text,
  //     });
  //     setFeedText([...feedText, { id: docRef.id, content: text }]);
  //     setText(''); // Clear the text input
  //   }
  // };


  // useEffect(() => {
  //   // Load text content from Firebase Firestore
  //   const loadTextContent = async () => {
  //     const textCollection = collection(db, 'textCollection');
  //     const querySnapshot = await getDocs(textCollection);
  //     const texts = [];
  //     querySnapshot.forEach((doc) => {
  //       texts.push({ id: doc.id, content: doc.data().content });
  //     });
  //     setFeedText(texts);
  //   };

  //   loadTextContent();
  // }, []);
  // const refreshFeed = async () => {
  //   const { images, videos } = await getAllMedia();
  //   setFeedImages(images);
  //   setFeedVideos(videos);
  // };

  // const getAllMedia = async () => {
    const getAllMedia = useCallback(async () => {    
    const storageRef = ref(storage);
    const files = await listAll(storageRef);

    const imageUrls = [];
    const videoUrls = [];

    await Promise.all(files.items.map(async (item) => {
      const downloadURL = await getDownloadURL(item);
      if (item.name.endsWith('.jpg') || item.name.endsWith('.jpeg') || item.name.endsWith('.png')) {
        imageUrls.push(downloadURL);
      } else if (item.name.endsWith('.mp4') || item.name.endsWith('.webm') || item.name.endsWith('.ogg')) {
        videoUrls.push(downloadURL);
      }
    }));

    return { images: imageUrls, videos: videoUrls };
  }, []);


  const refreshFeed = useCallback(async () => {
    const { images, videos } = await getAllMedia();
    setFeedImages(images);
    setFeedVideos(videos);
  }, [getAllMedia]);

  useEffect(() => {
    refreshFeed(); // Load the initial feed data
  }, [showFeed, refreshFeed]); // Reload the feed when showFeed changes




  const toggleUploadButtons = () => {
    setShowUploadButtons(!showUploadButtons);
  };

  



  const toggleFeed = () => {
    if (!showInput) {
      setShowFeed(!showFeed);
    }
  };

  return (
    <div className='videos'>
      <div className='top-right'>
        <button onClick={toggleFeed}>Feed</button>
        <button onClick={toggleUploadButtons}>Upload</button>
      </div>
      {showUploadButtons && (
        <div>
          <input type="file" accept="image/*, video/*" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload File</button>
          {/* <textarea placeholder="Enter your text" value={text} onChange={handleTextChange} />
          <button onClick={handleTextUpload}>Upload Text</button> */}
        </div>
      )}
{url && (
  <>
    {file.type.startsWith('image/') ? (
      <div className='upload'>
        <img src={url} alt="Uploaded" className='preview' />
        <h5>Image Successfully uploaded</h5>
      </div>
    ) : (
      <video controls style={{ maxWidth: '300px', maxHeight: '300px' }}>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
  </>
)}


      <div className='container'>
        {showFeed &&
          feedImages.map((imageUrl, index) => (
            // <div key={index} className='image-disp'>
            <div key={index} className={`image-disp ${theme.weather === 'Clear' && theme.timeOfDay === 'day' ? 'weather-clear' : 'weather-bad'}`}>
              <img src={imageUrl} alt={`Feed Img ${index}`} style={{ maxWidth: '300px', maxHeight: '300px' }} />
            </div>
          ))}
        {showFeed &&
          feedVideos.map((videoUrl, index) => (
            // <div key={index} className='video-disp'>
            <div key={index} className={`image-disp ${theme.weather === 'Clear' && theme.timeOfDay === 'day' ? 'weather-clear' : 'weather-bad'}`}>
              <video controls style={{ maxWidth: '300px', maxHeight: '300px' }}>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        {/* {showFeed &&
          feedText.map((text, index) => (
            <div key={index} className='text-disp'>
              {text}
            </div>
          ))} */}
      </div>
    </div>
  );
}

export default MediaUpload;
