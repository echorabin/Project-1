export default function addTodo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
        <label htmlFor="description">Description</label>
        <textarea id="description"></textarea>

        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
