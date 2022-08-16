import React from "react";

import { Table } from "neetoui";

import { CONTACTS_COLUMNS, CONTACTS_ROWS } from "./constants";

const ContactsList = () => (
  <Table
    columnData={CONTACTS_COLUMNS}
    currentPageNumber={1}
    defaultPageSize={10}
    handlePageChange={() => {}}
    onRowClick={() => {}}
    onRowSelect={() => {}}
    rowData={CONTACTS_ROWS}
  />
);

export default ContactsList;
