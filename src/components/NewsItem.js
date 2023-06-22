import React from 'react'

export default function NewsItem (props) {

    let { title, desc, imgUrl, url, author, date , source} = props;

    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:1}}>
            {source}
          </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" target='_blank' href={url} className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }