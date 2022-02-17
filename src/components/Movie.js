import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export function Movie({ banner, title, rating, summary,deletebutton,id }) {

  
  const [like, setlike] = useState(0);
  const [dislike, dellike] = useState(0);

  const [show, setshow] = useState(false);
  // const summarystyles ={
  //     display : show  ? "block": "none",
  // 
  const history =useHistory();
  return (
    <div>
      <div  id='movie-card' className="card mt-sm-3">
        <img src={banner} className="card-img-top " alt="..."></img>
        <div className="card-body">
          <div className="title-rating">
            <h5 className="card-title">{title}{show === true ? <KeyboardArrowUpIcon onClick={() => { setshow(!show); }}></KeyboardArrowUpIcon> : <KeyboardArrowDownIcon onClick={() => { setshow(!show); }}></KeyboardArrowDownIcon> }</h5>
            
            <p className="card-text">{rating}<i class="bi bi-star-half"></i></p>
          </div>
          
          <div className="edit-info-delete">
            <i className="bi bi-pencil-fill text-success" onClick={()=>history.push(`/movies/edit/${id}`)}></i>
            <i onClick={() =>   { history.push(`/movies/${id}`)}} class="bi bi-info-circle text-primary"></i><br></br>
            <div className='delete-button text-danger'>{deletebutton}</div>
          </div>
          
          
          {/* <p style={summarystyles} className="card-text">{summary}</p> */}
          {show ? <p className="card-text">{summary}</p> : ""}

          <div className='like'>
            <button className='btn like-button'><i onClick={() => { setlike(like + 1); }} className='fa fa-thumbs-o-up'><h6>{like}</h6></i></button>

            <button className='btn dislike-button'><i onClick={() => { dellike(dislike + 1); }} className='fa fa-thumbs-o-down'><h6>{dislike}</h6></i></button>
          </div>
        </div>
      </div>

    </div>

  );
}
