import { useEffect, useState, setLoading } from 'react'

export default function Gallery() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('api/gallery')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data)
        setData(data.data)
        // setData([{image: "/a1.jpg", hash: "123"}, {image: "/a2.jpg", hash: "321"}, {image: "/a3.jpg", hash: "456"}])
      })
  }, []);

  

  return (
    <div className="flex flex-col py-2">
    {data.map((props) => (
      <div key={props.key}>{props.key} {props.image}</div>
      
    ))}
      <div>hello</div>
    </div>

  )
}
