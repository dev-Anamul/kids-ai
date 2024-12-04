import axios from "axios";
import { useState } from "react";
import "./App.css";
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
    <div className="main-body">
      <div className="main-body2">
        <form onSubmit={handleButtonClick}>
          <label htmlFor="name">
            name
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type name"
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
              placeholder="Type age"
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
              placeholder="Type character"
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
              placeholder="Type duration"
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
              placeholder="Type language"
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
      </div>
      {!data && (
        <p
          style={{
            fontFamily: "roboto",
            color: "#2b2b2b",
            fontSize: 15,
            lineHeight: 1.2,
          }}
        >
          {data} Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          quae eligendi tempore quidem beatae sed quisquam nostrum reiciendis
          ad? Nisi recusandae repudiandae enim dolore quisquam nam facilis
          perspiciatis quae ducimus molestias. Recusandae hic, unde sed atque
          odit illo amet quidem! Perferendis voluptas sapiente culpa omnis esse.
          Impedit aut adipisci recusandae qui voluptatum unde, perferendis nemo
          ut doloribus eum iure ab accusamus sed, obcaecati, quia tempore
          praesentium suscipit quis consequatur nesciunt eaque! Totam iste sit
          porro fuga ab veniam at quam blanditiis ipsam! Ex ipsa molestias
          veritatis iste. Natus rerum autem veritatis, consequatur praesentium
          esse molestiae, amet omnis eligendi nam architecto sequi, perferendis
          inventore distinctio aliquam vel recusandae laboriosam totam ipsum
          sint accusamus? Adipisci facere iure laboriosam error impedit suscipit
          neque! Commodi facere repellendus, pariatur corrupti aliquid modi,
          iusto itaque reprehenderit iste architecto nemo consectetur aliquam,
          illo libero voluptatem. Unde alias assumenda vero cum natus asperiores
          recusandae magnam ex ad quas sint necessitatibus, dolorum error
          doloribus nisi rerum? Iste, odio blanditiis incidunt aspernatur
          voluptas, ut quisquam reiciendis ad dicta facere, ipsa laborum
          nesciunt debitis eos maxime reprehenderit harum. At labore ipsam
          quaerat debitis nulla doloribus architecto ad sequi odio libero
          accusamus excepturi, dolore voluptate qui laudantium quia iure dicta
          quis tempora, voluptatibus praesentium repellat sit nisi officia.
          Earum, fugit, natus deleniti ullam praesentium hic quisquam corrupti
          ipsam voluptatem veritatis iure nesciunt fuga asperiores. Deserunt
          eligendi voluptates praesentium possimus quibusdam repudiandae ipsa
          officia reiciendis? Soluta sed aliquam, magni nobis cupiditate omnis
          assumenda excepturi explicabo ipsum corrupti quam quae veritatis
          laboriosam modi doloribus id reiciendis nihil pariatur minus vel
          voluptatum! Vero, animi. Recusandae suscipit, in, architecto similique
          minima fugiat pariatur labore fugit nulla veritatis aspernatur
          asperiores autem quas esse quos? Neque a harum pariatur quaerat vero
          illum autem repellat, ipsa eum fuga! Eligendi ipsam unde cupiditate
          voluptatum iure libero aut, minus ipsa. Saepe quos, optio eum id ad,
          omnis alias ullam necessitatibus accusamus, iusto harum ut temporibus!
          Vero, hic. Accusamus dolorem similique, laboriosam ad, error dolorum
          commodi assumenda itaque vitae fuga sit, cum odit. Vero, illum fugiat.
          Sunt, corporis perferendis? Laboriosam facere excepturi id eius ipsum,
          nemo magni nisi doloremque vero et. Nihil ea quis rem dolorum harum
          illo saepe. Voluptatem adipisci officiis quibusdam porro deserunt
          consequatur laborum natus quasi vero veritatis, rerum velit sint
          beatae in odio, debitis, ut laudantium quod fugit quidem minus. Itaque
          distinctio consequuntur enim voluptates fuga hic est, omnis illo,
          incidunt placeat non! Dolore maxime laborum voluptas consequatur
          officia, quas, sint totam obcaecati dicta repellendus pariatur ullam
          commodi nihil placeat blanditiis temporibus quisquam beatae enim
          nostrum. Possimus ad fugit suscipit sint porro aut harum similique ex
          voluptate. Asperiores praesentium quibusdam iusto tenetur optio
          laborum blanditiis et ratione quod corrupti possimus doloribus,
          voluptatibus magni ad perspiciatis sit doloremque omnis dicta nemo
          iste placeat facere accusantium hic nulla? Labore iste error commodi
          magnam, adipisci molestiae consectetur praesentium repudiandae
          ratione, dolor vel, rerum quod eius id. Quos dolores harum accusantium
          quis pariatur ipsa repudiandae! Quos, id quia atque obcaecati
          repudiandae praesentium! Dicta expedita quisquam enim porro
          perferendis laboriosam fuga alias neque.
        </p>
      )}
    </div>
  );
}

export default App;
