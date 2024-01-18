import React, { useEffect, useState } from 'react';
import key from '../config/token';
import { useParams } from 'react-router-dom';
const URL = 'https://api.spotify.com';

const Track = () => {
  
  const [tracks, setTracks] = useState([]);
  const params = useParams(); // used to read router parameters
  const [view, setView] = useState(false);
  const searchTracks = async () => {
    await fetch(`${URL}/v1/artists/${params.artistId}/top-tracks?market=IN`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(out => { setTracks(out.tracks);  console.log(out)})
      .catch(err => console.error(err.message));
  }
  
  useEffect(() => { searchTracks() }, []);
  const trackIcon = (url) => {
    if (!url) {
      return <strong className='text-danger'>No Tracks</strong>
    }
    else {
      return <strong className='text-success'>Tracks</strong>;
    }
  }

  const msToTime = (ms) => {
    let mSec = ms % 1000;
    let sec = Math.floor((ms/1000)%60)
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col">
            <h1 className="display-3 text-success text-center">Track</h1>
        </div>
      </div>

      <div className="row">
        {
          tracks.map((item, index) => {
            const { id, name, album, preview_url, duration_ms } = item;
            return (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4" key={index}>
                {
                  view ? (
                    <div className="card">
                    <img src={album ? album.images[0].url : ' '} alt="" className='img-fluid card-img-top' style={{ height: '300px'}} />
                    <div className="card-body">
                      <h5 className="text-success text-center">
                       {name}
                      </h5>
                    </div>
                    <div className="card-footer">
                    <div className="card-body">
                     {trackIcon(preview_url)}
                    </div>
                    </div>
                 </div>
                  ) : (
                      <ul className="list-group">
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-md-3 col-sm-3">
                              <img src={album ? album.images[0].url : ''} alt="no image" />
                            </div>
                            <div className="col-md-6 col-sm-6 text-center">
                            </div>
                            <div className="col-md-3 col-sm-3">
                            </div>
                          </div>
                        </li>
                      </ul>
                  )
               }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Track
