import React from "react";
import { useParams, useNavigate } from 'react-router-dom'


const Detail = ({ Todo }) => {

    const { id } = useParams()
    const navigate = useNavigate()


    const detail = Todo.filter(item => {
        if (item.id === id) {
            return item
        }
    })

    console.log(detail)
    return (
        <div className="container">
            <div className="row  detail_text">
                <div className="offset-md-3 col-md-6">
                    <div className="header">
                        <h1>Detail</h1>
                    </div>
                    <p id="detail">{detail[0].title}</p>
                    <button className="btn btn-primary home_button" onClick={() => navigate("/")}>Home</button>
                </div>
            </div>
        </div>
    )
}


export default Detail;