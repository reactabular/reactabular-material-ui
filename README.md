[![build status](https://secure.travis-ci.org/reactabular/reactabular-material-ui.svg)](http://travis-ci.org/reactabular/reactabular-material-ui) [![bitHound Score](https://www.bithound.io/github/reactabular/reactabular-material-ui/badges/score.svg)](https://www.bithound.io/github/reactabular/reactabular-material-ui) [![codecov](https://codecov.io/gh/reactabular/reactabular-material-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/reactabular/reactabular-material-ui)

# reactabular-material-ui - Reactabular wrapper for material-ui

TODO

## Example

```jsx
/*
import * as Table from 'reactabular-table';
import components from 'reactabular-material-ui';
*/

const rows = [
  {
    id: 100,
    name: 'John'
  },
  {
    id: 101,
    name: 'Jack'
  }
];

const columns = [
  {
    property: 'name',
    header: {
      label: 'Name'
    }
  }
];

<Table.Provider
  columns={columns}
  components={components}
>
  <Table.Header />

  <Table.Body rows={rows} rowKey="id" />
</Table.Provider>
```

## License

MIT. See LICENSE for details.

