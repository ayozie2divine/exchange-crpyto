import React from 'react'
import React, { useState } from "react";
import axios from "axios";
import { Button, Typography } from "@mui/material";
import './GetPage.css'
// import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import './GetPage.css'

const Posts = () => {
  const [getInfo, setGetInfo] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = useState(true);
  // const override = {
  //   display: "block",
  //   margin: "200px auto",
  //   borderColor: "black",
  // };

  React.useEffect(() => {
    const getPost = async () => {
      let url = 
      "https://fullstack-student-backend.onrender.com/api/products";

      try {
        setLoading(true);
        const res = await axios.get(url);
        console.log(res.data);
        setGetInfo(res.data);

        // const fiveInfo = res.data.slice(0, 5);
        // console.log("fivedata", fiveInfo);
        // setGetInfo(fiveInfo);
        setLoading(false);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, []);

  if (loading)
    return (
      // <ClipLoader
      //   loading={loading}
      //   cssOverride={override}
      //   size={150}
      //   aria-label="Loading Spinner"
      //   data-testid="loader"
      // />
      <>loading</>
    );
  if (error) return <h1 style={{ color: "red" }}>
    ERROR: {error}</h1>;
  return (
    <div>
      {getInfo.map((info, index) => (
        <ol key={index}>
 <li style={{ textAlign: "center" }}>
  User unique id: {info.userId}</li>

<Typography variant="h5" style={{ color: "red" }}>
            Title: {info.title}
          </Typography>
<Typography variant="h6">{info.body}</Typography>
          <Link to={`/posts/${info.id}`}>
            {" "}
            <Button>Click Here</Button>{" "}
          </Link>
        </ol>
      ))}
    </div>
  );
};

export default Posts;
