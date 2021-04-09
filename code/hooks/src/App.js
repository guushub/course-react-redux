import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Route from './components/Route'
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'Favorige JS lib'
    },
    {
        title: 'How do you use React?',
        content: 'Create components'
    }
]

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <div className="ui container">
                <Route path="/">
                    <Accordion items={items} />
                </Route>
                <Route path="/list">
                    <Search />
                </Route>
                <Route path="/dropdown">
                    <Dropdown 
                        label="Select a color"
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
                </Route>
                <Route path="/translate">
                    <Translate />
                </Route>
            </div>
        </div>
    );
};
