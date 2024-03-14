import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, name } = props;

    return (
        <>
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'abosolute',
                        right: '0'
                    }
                    }>
                        <span className="badge rounded-pill bg-danger">{name}</span></div>
                    <img src={!imageUrl ? "https://th.bing.com/th/id/OIP.9azIn2wnpMw7MMK0UEv5nAHaE9?rs=1&pid=ImgDetMain" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_black" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsItem;

