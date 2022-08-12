import {useState} from 'react'

function RatingSelect({select}) {
  const [selected, setSelected] = useState(10)

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  return(
    <ul className="rating">
      <li>
        <input 
          type="radio" 
          name="rating" 
          id="num1" 
          value="1" 
          onChange={handleChange} 
          checked={selected === 1} />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input 
          type="radio" 
          name="rating" 
          id="num2" 
          value="2" 
          onChange={handleChange} 
          checked={selected === 2} />
        <label htmlFor="num2">2</label>
      </li>
    </ul>
  )
}

export default RatingSelect