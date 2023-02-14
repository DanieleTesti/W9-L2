import { Component, useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = (props) => {
  // state = {
  //   searchQuery: "",
  //   selectedBook: null,
  // };

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState("");

  const changeSelectedBook = (asin) => {
    setSelectedBook(asin);
  };
  // changeSelectedBook = (asin) => {
  //   this.setState({
  //     selectedBook: asin,
  //   })
  // }

  return (
    <>
      <Row>
        <Col md={8}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Search a book</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => changeSelectedBook(e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {props.books
              .filter((b) =>
                b.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((b) => (
                <Col xs={12} md={4} key={b.asin}>
                  <SingleBook
                    book={b}
                    selectedBook={selectedBook}
                    changeSelectedBook={changeSelectedBook}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={setSelectedBook} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
