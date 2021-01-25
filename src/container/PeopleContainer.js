import PersonCard from '../components/PersonCard'

export default function PeopleContainer({people}) {

  const personData = people.map(person => {
    return <PersonCard key={person.id} {...person}/>
  })

  return (
    <div className="people-container">
      {personData}
    </div>
  );
}


