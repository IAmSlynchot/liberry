import { API, Storage } from 'aws-amplify';
import { listNotes } from "../graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "../graphql/mutations";

export const fetchNotes = async (setNotes) => {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await Storage.get(note.name);
          note.image = url;
        }
        return note;
      })
    );
    setNotes(notesFromAPI);
}

export const createNote = async(event, setNotes) => {
  event.preventDefault();
  const form = new FormData(event.target);
  const image = form.get("image");
  const data = {
    name: form.get("name"),
    description: form.get("description"),
    image: image.name,
  };
  if (!!data.image) await Storage.put(data.name, image);
  await API.graphql({
    query: createNoteMutation,
    variables: { input: data },
  });
  fetchNotes(setNotes);
  event.target.reset();
}

export const deleteNote = async ({ id, name }, notes, setNotes) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
  await Storage.remove(name);
  await API.graphql({
    query: deleteNoteMutation,
    variables: { input: { id } },
  });
}