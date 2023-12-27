import React from "react";
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import "./searchBox.css";
import { CiSearch } from "react-icons/ci";
const SearchBox = ({ setTopic, fetchNews, setCategory }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Search for latest news headlines</h1>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <FormControl className="inputh">
          <Input
            aria-describedby="my-helper-text"
            placeholder="Eg. Apple, ElonMusk"
            className="inputp"
            onChange={(e) => setTopic(e.target.value)}
          />
        </FormControl>
        <FormControl style={{ width: "140px", backgroundColor: "white" }}>
          <InputLabel id="category"></InputLabel>
          <Select
            labelId="category"
            //   value={category}
            onChange={(e) => setCategory(e.target.value)}
            defaultValue="general"
          >
            <MenuItem value={"buisness"}>Buisness</MenuItem>
            <MenuItem value={"entertainment"}>Entertainment</MenuItem>
            <MenuItem value={"general"}>General</MenuItem>
            <MenuItem value={"health"}>Health</MenuItem>
            <MenuItem value={"science"}>Science</MenuItem>
            <MenuItem value={"sports"}>Sports</MenuItem>
            <MenuItem value={"technology"}>Technology</MenuItem>
          </Select>
        </FormControl>
        <div
          style={{
            backgroundColor: "white",
            textAlign: "center",
            width: "50px",
          }}
        >
          <CiSearch fontSize={"40px"} cursor={"pointer"} onClick={fetchNews} />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
