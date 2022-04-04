import axios from "axios";
import { useEffect, useState } from "react";
import { GiBookshelf } from "react-icons/gi";
import styled from "styled-components";
import Books from "./Books";

export default function Library() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState("");

  useEffect(() => {
    var reg = new RegExp(book);

    var result = books.map((bk) => {
      return reg.test(bk.title) || reg.test(bk.author)
        ? { ...bk, show: true }
        : { ...bk, show: false };
    });

    setBooks(result);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book]);

  useEffect(() => {
    async function gettingBooks() {
      await axios
        .get("https://vorwartsapi.herokuapp.com/books")
        .then((result) => {
          result = result.data.data.map((bk) => {
            return { ...bk, show: true };
          });
          setBooks(result);
        });
    }

    gettingBooks();
  }, []);

  return (
    <Container>
      <Title>
        <GiBookshelf />
        Library
      </Title>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          placeholder="book's name"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>
      {books.length !== 0 && <Books books={books} />}
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h2`
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  margin-top: 0.5rem;
`;

const Input = styled.input`
  border-radius: 7px;
  padding: 0.5rem;
  font-family: Inconsolata;
  outline: none;
  margin-right: 1rem;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.5rem;
  border: none;
  background-color: #141414;
  font-weight: 900;
  color: white;
  font-family: Inconsolata;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
`;
