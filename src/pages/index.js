import React, { useState, useEffect } from "react";
import { Inter } from 'next/font/google';
import { fetchNotes, createNote, deleteNote } from '../lib/api';
import Gallery from '../components/gallery';
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  TextField,
  View,
} from '@aws-amplify/ui-react';

const inter = Inter({ subsets: ['latin'] })

const Home = ({ children, data }) => {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchNotes(setNotes);
  }, []);

  const handlePhotoUpdate = (() => {
    // TODO pass updated info from gallery back to api and pass thie function to gallery as prop
  });

  const submitModal = (
  <div className="overlay">
    <View as="form" margin="3rem 0" onSubmit={() => createNote(event,setNotes)}>
      <Flex direction="row" justifyContent="center">
        <TextField
          name="name"
          placeholder="Note Name"
          label="Note Name"
          labelHidden
          variation="quiet"
          required
        />
        <TextField
          name="description"
          placeholder="Note Description"
          label="Note Description"
          labelHidden
          variation="quiet"
          required
        />
        <View
          name="image"
          as="input"
          type="file"
          style={{ alignSelf: "end" }}
          />
        <Button type="submit" variation="primary">
          Create Note
        </Button>
        <button className="close-btn" onClick={() => setShowModal(false)}>X</button>
      </Flex>
    </View>
  </div>);
  return (
    <div>
      { (showModal) ? submitModal : null }
      <h1 id="home-page-title">My LiBerry</h1>
      <Gallery photoData={notes} />
      <button className="addPhotos-btn" onClick={() => setShowModal(true)}>+</button>
    </div>
  );
}

export default Home;
