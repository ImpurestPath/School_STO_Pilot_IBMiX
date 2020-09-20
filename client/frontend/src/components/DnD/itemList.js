import React, { useState } from 'react';
// import { data } from './data';
import Item from './itemComponent';
import './dnd_style.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function ItemList(props) {
    const [wishes, setWishes] = useState(props.data);

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination ||
            (destination.droppableId === source.droppableId
                && destination.index === source.index)) return;

        const new_wishes = wishes;
        const element = new_wishes[source.index];

        new_wishes.splice(source.index, 1);
        new_wishes.splice(destination.index, 0, element);
        setWishes(new_wishes);
    }

    return (
        <div >
            <div className={'prioritet_header_block'}>
                <p className={'prioritet_text'}>Приоритетно</p>
                <p className={'prioritet_text'}>Не приоритетно</p>
            </div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId={'droppable-1'} direction={'horizontal'}>
                    {provided => (
                        <div
                            className='block'
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            style={{ display: 'flex', flexFlow: 'row wrap', height: 'auto' }}>
                            {wishes.map((item, index) => <Item item={item} index={index} stars={props.data.length} key={item.name + '_sprestay'} />)}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

            </DragDropContext>
        </div >);
}

export default ItemList;
