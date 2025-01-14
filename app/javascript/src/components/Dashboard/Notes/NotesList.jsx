import React from "react";

import { Clock, MenuHorizontal } from "neetoicons";
import { Typography, Tag, Dropdown, Avatar } from "neetoui";

const NotesList = ({ notes, onDelete }) => (
  <div className="mt-2 flex w-full flex-col">
    {notes.map(note => (
      <div
        className="mb-4 w-full border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
        key={note.id}
      >
        <div className="flex justify-between">
          <Typography style="h2">{note.title}</Typography>
          <Dropdown icon={MenuHorizontal} buttonStyle="text">
            <li>Edit</li>
            <li onClick={onDelete}>Delete</li>
          </Dropdown>
        </div>
        <div className="mb-3">
          <Typography style="body1">{note.description}</Typography>
        </div>
        <hr></hr>
        <div className="mt-5 flex justify-between">
          <Tag label={note.execution_status} />
          <div className="flex items-center space-x-2">
            <Clock size="15" />
            <Typography style="body1">
              {note.status} {note.created_at}
            </Typography>
            <Avatar
              size="small"
              user={{
                name: note.created_by,
              }}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default NotesList;
