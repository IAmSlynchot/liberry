import React, { useState, useEffect } from "react";
import { Inter } from 'next/font/google';
import { getCuratedPhotos, fetchNotes, createNote, deleteNote } from '../lib/api';
import Gallery from '../components/gallery';
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';

const inter = Inter({ subsets: ['latin'] })

const Home = ({ children, data }) => {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchNotes(setNotes);
  }, []);

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
      <Heading level={2}>My LiBerry</Heading>
      <View margin="3rem 0">
      {notes.map((note) => (
        <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Text as="strong" fontWeight={700}>
            {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            {note.image && (
            <Image
                src={note.image}
                alt={`visual aid for ${notes.name}`}
                style={{ width: 400 }}
            />
            )}
            <Button variation="link" onClick={() => deleteNote(note, notes, setNotes)}>
            Delete note
            </Button>
        </Flex>
        ))}
      </View>
      <button className="addPhotos-btn" onClick={() => setShowModal(true)}>+</button>
    </div>
  );
}

export default Home;
