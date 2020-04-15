import React, {useState} from 'react';
import {Badge, Headline, List, Searchbar} from 'react-native-paper';

import {ChoresButton} from '../atoms/chores-button.atom';

const ChoresList = () => {
  const [searchQuery, setSearchQuery] = useState(true);

  const _onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <Headline>All Chores</Headline>
      <Searchbar
        placeholder="Filter tags..."
        onChangeText={_onChangeSearch}
        value={searchQuery}
      />
      <List.Item
        title="First Item"
        left={(props) => <Badge>3.00</Badge>}
        right={(props) => <ChoresButton icon="check" color="#000" />}
      />
    </>
  );
};

export default ChoresList;
