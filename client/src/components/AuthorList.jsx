import "react";

function AuthorList({ authors, handleDelete }) {
    // console.log("props", props);

  return (
    <>
      <h3>Author List</h3>
      <ul>
        {authors.map((author, index) => (
            <li key={index} style={styles.authorItem}>
                <h4>{author.name}</h4>
                <p>{author.description}</p>
                <button onClick={() => handleDelete(author._id)} style={styles.removeButton}>
                Remove
                </button>
            </li>
            ))}
      </ul>
    </>
  );
}

const styles = {
    title: {
      color: '#333',
    },
    todoList: {
      listStyle: 'none',
      padding: '0',
    },
    authorItem: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px',
      border: '1px solid #ddd',
      marginBottom: '8px',
    },
    removeButton: {
      padding: '4px',
      cursor: 'pointer',
      color: 'red',
    }
};

export default AuthorList;