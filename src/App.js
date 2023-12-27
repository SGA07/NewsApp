import "./App.css";
import { useState, useEffect } from "react";
import searchBG from "./searchBG.jpg";
import NewsCard from "./components/NewsCard/NewsCard";
import axios from "axios";
import { Container, Divider } from "@mui/material";
import SearchBox from "./components/searchBox/searchBox";

function App() {
  const [newsArray, setNewsArray] = useState([]);
  const [category, setCategory] = useState("general");
  const [topic, setTopic] = useState("");
  const [totalResults, setTotalResults] = useState();
  const [newsCount, setNewsCount] = useState(20);
  //const temp = `https://newsapi.org/v2/everything?q=${topic}&from=${Startdate}&sortBy=${category}&apiKey=${process.env.REACT_API_KEY_NEWSAPI}`;
  const fetchNews = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&q=${topic}&apiKey=${process.env.REACT_APP_KEY_NEWSAPI}&pageSize=${newsCount}&category=${category}`
    );
    setNewsArray(res.data.articles);
    setTotalResults(res.data.totalResults);
    console.log(res);
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  }, [newsCount]);
  //console.log(admins);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Container maxWidth="md" className="content">
        <div className="search">
          <img src={searchBG} alt="BackgroundImage" className="BGimg"></img>
          <div className="searchBox">
            <SearchBox
              setTopic={setTopic}
              fetchNews={fetchNews}
              setCategory={setCategory}
            ></SearchBox>
          </div>
        </div>
        <Divider variant="horizontal" />
        {newsArray.map(
          (news) => (
            <NewsCard newsItem={news} key={news.title}></NewsCard>
          )
          //console.log(news._id)
        )}
        {newsCount <= totalResults && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <hr /> */}
            <br />
            <button
              className="loadmore"
              onClick={() => {
                setNewsCount(newsCount + 20);
              }}
            >
              Load More
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
