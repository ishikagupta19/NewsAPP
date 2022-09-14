import React from "react";
import { useState } from "react";
import axios from "axios";
import './Home.css';

function Home() {
  const [data, setData] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://saurav.tech/NewsAPI/top-headlines/category/general/in.json"
      )
      .then((response) => {
        setData(response.data.articles);
      });
  };
  return (
    <>
      <div className="container my-4">
        <button className="btn btn-dark" onClick={getNews} style={{marginTop:"10vh"}}>
          Fetch News
        </button>
      </div>
      <div className="container">
        <div className="row">
          {data.map((value) => {
            return (
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" style={{fontSize:"20px", paddingTop:"5vh", fontWeight:"900"}}>{value.title}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  
                    <td style={{fontSize:"15px", fontWeight:"400", display:"flex"}}>{value.description}</td>
                    <br/>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
