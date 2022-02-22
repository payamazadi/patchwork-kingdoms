import { useEffect, useState, setLoading } from 'react'

export default function Gallery() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch('api/gallery')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [data])


  return (

    <div className="flex flex-col py-2">
      {data}
      <div>hello</div>
      }
    </div>

  )
}
