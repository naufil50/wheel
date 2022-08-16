import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { NOTES } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NotesList from "./NotesList";
import NotesMenuBar from "./NotesMenuBar";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="flex">
      <NotesMenuBar showMenu={showMenu} />
      <Container>
        <Header
          title="All Notes"
          actionBlock={
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add Note"
              icon="ri-add-line"
            />
          }
          menuBarToggle={() => {
            setShowMenu(!showMenu);
          }}
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <NotesList notes={NOTES} onDelete={() => setShowDeleteAlert(true)} />
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
        )}
      </Container>
    </div>
  );
};

export default Notes;
