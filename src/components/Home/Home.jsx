import { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function Home() {
  const [data, setData] = useState([]);
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=10")
      .then((res) => res.json())
      .then((data) => setImgData(data));
  }, []);

  return (
    <div className="pt-8 flex ">
      <div className="left-container md:w-[70%] border-r-2">
        <div className="card-wrapper flex flex-col md:flex-row gap-5 flex-wrap justify-center">
          {data.map((user, index) => (
            <Card
              key={index}
              user={user}
              img={imgData[index]}
            />
          ))}
        </div>
      </div>
      <div className="right-container md:w-[30%]"></div>
    </div>
  );
}
