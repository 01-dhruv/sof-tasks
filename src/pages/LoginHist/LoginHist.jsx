import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginHistory } from '../../actions/LoginHist';
import './LoginHist.css'

const LoginHist = () => {
  const dispatch = useDispatch();
  const { history, loading, error } = useSelector((state) => state.loginHistoryReducer || {}); // Ensure state.loginHistory is an object
  console.log(history)
  console.log(loading)
  console.log(error)
  useEffect(() => {
    dispatch(fetchLoginHistory());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {history && (
        <div>
          <h2 className='title'>Login History</h2>
          <ul>
            {history.map((entry) => (
              <li key={entry._id}>
                <p>User ID: {entry.userId}</p>
                <p>IP Address: {entry.ipAddress}</p>
                <p>User Agent: {entry.userAgent}</p>
                <p>Timestamp: {entry.timestamp}</p>
                {/* Add more fields as needed */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LoginHist;
