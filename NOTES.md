# Lambda Notes API v3
- A note has this basic format:

```js
  {
    "tags": ["tag", "otherTag"],
    "title": "Note Title",
    "textBody": "Note Body",
  }
```

- There is also an "\_id" attribute, which is a long string of numbers and letters. It is automatically assigned by the server and will be returned as part of the data.


> GET `/api/notes/all` \

a `GET` request to this route will return a list of all the notes.

> GET `/api/notes/ + noteID` \

a `GET` request to this route (with "id" replaced by the note ID) will return the note with the specified ID.

> POST `/api/notes/create`

a `POST` request to this route with the title and text in the req.body will create a new note. The response from the server will be the ID of the new note.

> PUT `/api/notes/edit/ + noteID, noteObject, { headers: { 'Content-Type': 'application/json' }}`

a `PUT` request to this route with the title and text in the req body will edit the note with the specified ID. The response from the server will be the updated note object.

> DELETE `/api/notes/delete/ + id`

a `DELETE` request to this route will delete the note with the specified ID.









