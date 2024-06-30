import React from 'react';
import { motion } from 'framer-motion'; 
import useFetch from '../hooks/useFetch';
import '../styles/Books.css';

const Books = () => {
  const { data, loading, error } = useFetch('https://openlibrary.org/subjects/science_fiction.json?limit=10');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div className="container">
      <h1>Books</h1>
      <ul>
        {data.works.map(book => (
          <motion.li 
            key={book.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{book.title}</h2>
            <p>{book.authors.map(author => author.name).join(', ')}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
