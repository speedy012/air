

export default function Search({getTerm, searchTerm, clearSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Type a name..."
        value={searchTerm}
        onChange={e => getTerm(e.target.value)}
      />
      <button onClick={clearSearch} type="button"> Clear Search</button>
    </div>
  );
}


