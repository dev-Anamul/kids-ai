import { useState } from "react";
import "./App.css";
import axios from "axios";
import Bubble from "./spinners/Bubble";

function App() {
  const [file, setFile] = useState<FileList | null>();
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [character, setCharacter] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<string>();
  const [error, setError] = useState<string>();

  const handleButtonClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // set loading to true
    setLoading(true);

    //  prepare form data
    const formData = new FormData();
    formData.append("file", file?.[0] as File);
    formData.append("name", name);
    formData.append("age", age);
    formData.append("main_character", character);
    formData.append("story_duration", duration);
    formData.append("language", language);

    // call the api
    axios
      .post("https://ai.pixfar.com/upload/", formData)
      .then((res) => setData(res?.data))
      .catch((error) => {
        console.log(error);
        setError("Error fetching data");
      })
      .finally(() => setLoading(false));
  };

  console.log(error);

  return loading ? (
    <Bubble />
  ) : (
    <>
      <form onSubmit={handleButtonClick}>
        <label htmlFor="name">
          name
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="age">
          age
          <input
            id="age"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="character">
          Main Character
          <input
            id="character"
            type="text"
            value={character}
            onChange={(e) => setCharacter(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="duration">
          Story Duration
          <input
            id="duration"
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="language">
          Language
          <input
            id="language"
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </label>
        <br />

        <label htmlFor="file">
          File
          <input
            id="file"
            type="file"
            onChange={(e) => setFile(e.target.files)}
          />
        </label>
        <br />

        <button type="submit">Click</button>
      </form>

      {/* content portion */}
      {data && <p>{data}</p>}
    </>
  );
}

export default App;