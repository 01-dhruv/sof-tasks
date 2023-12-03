import { useState, useEffect, useRef } from 'react';
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import './Videos.css';

function Videos({theme}) {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [feedVideos, setFeedVideos] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const touchStartTime = useRef(0);

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
        });
      });
    } else {
      setUrl('');
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10; // Skip 10 seconds forward
    }
  };

  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10; // Skip 10 seconds backward
    }
  };

  const handleTouchStart = () => {
    // Record the start time when a touch starts
    touchStartTime.current = Date.now();
  };

  const handleTouchEnd = () => {
    // Calculate the duration of the touch
    const touchDuration = Date.now() - touchStartTime.current;

    if (touchDuration < 300) {
      // Detect a double-tap (adjust the threshold as needed)
      togglePlayPause();
    }
  };

  // Event listeners for double-clicks on right and left sides
  const handleDoubleClickRight = () => {
    skipForward();
  };

  const handleDoubleClickLeft = () => {
    skipBackward();
  };

  useEffect(() => {
    const refreshFeed = async () => {
      const videos = await getAllVideos();
      setFeedVideos(videos);
    };
    refreshFeed();
  }, []);

  const getAllVideos = async () => {
    const storageRef = ref(storage);
    const files = await listAll(storageRef);
    const videoUrls = [];

    await Promise.all(
      files.items.map(async (item) => {
        const downloadURL = await getDownloadURL(item);
        if (item.name.endsWith('.mp4') || item.name.endsWith('.webm') || item.name.endsWith('.ogg')) {
          videoUrls.push(downloadURL);
        }
      })
    );

    return videoUrls;
  };

  return (
    <div className="videos">
      {url && (
        <div>
          <video
            ref={videoRef}
            controls
            style={{ maxWidth: '300px', maxHeight: '300px' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            <button onClick={skipBackward}>Skip Backward</button>
            <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            <button onClick={skipForward}>Skip Forward</button>
          </div>
        </div>
      )}

      <div className="container">
        {feedVideos.map((videoUrl, index) => (
          <div key={index} className={`video-disp ${theme.weather === 'Clear' && theme.timeOfDay === 'day' ? 'weather-clear' : 'weather-bad'}`}>
            <video
              controls
              style={{ maxWidth: '300px', maxHeight: '300px' }}
              onDoubleClick={togglePlayPause}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
