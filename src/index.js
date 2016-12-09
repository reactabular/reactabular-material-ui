import React from 'react';
import {
  Table,
  TableBody,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const tableHeaderWrapper = ({ children }) => (
  <Table>
    <TableBody>{children}</TableBody>
  </Table>
);
tableHeaderWrapper.propTypes = {
  children: React.PropTypes.any
};
const tableBodyWrapper = ({ children }) => (
  <Table>
    <TableBody displayRowCheckbox={false}>{children}</TableBody>
  </Table>
);
tableBodyWrapper.propTypes = {
  children: React.PropTypes.any
};

const materialTableComponents = {
  table: 'div',
  header: {
    wrapper: tableHeaderWrapper,
    row: TableRow,
    cell: TableHeaderColumn
  },
  body: {
    wrapper: tableBodyWrapper,
    row: TableRow,
    cell: TableRowColumn
  }
};

export default materialTableComponents;
