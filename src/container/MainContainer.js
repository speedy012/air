import { useEffect, useState } from 'react'

import PageInfo from '../components/PageInfo'
import PeopleContainer from './PeopleContainer'
import Search from '../components/Search'
import data from '../mockData.json'

export default function MainContainer() {

  const [people, setPeople] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPeople, setFilteredPeople] = useState([])


  useEffect (() => {
    setPeople(data)
  }, [])

  useEffect (() => {
    const filteredArray = [...people].filter(person => {
      return person.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    setFilteredPeople(filteredArray)

  },[searchTerm, people])


  const getTerm = (value) => {
    setSearchTerm(value)
  }

  const clearSearch = () => {
    console.log('hit')
    setSearchTerm('')
    setPeople(people)
  }

  return (
    <>
      <div className="main-container">
        <PageInfo/>
        <Search getTerm={getTerm} searchTerm={searchTerm} clearSearch={clearSearch} />
        <PeopleContainer people={filteredPeople}/>
      </div>
    </>
  );
}


