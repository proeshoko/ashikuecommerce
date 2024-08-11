import React from "react"

function Projec(id,image,title) {
  return (
    <div className="card" key={id}>
        <div className="card-header">
            <img src={image} width={210} height={300}/>
        </div>
        <div className="card-body">
            <h4>{title}</h4>
        </div>
    </div>
  )
}

export default Projec;