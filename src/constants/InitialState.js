import uuidv1 from 'uuid/v1';

const initialState = {
  books: [
    { id: uuidv1(), title: 'Life of Action', category: 'Action' },
    { id: uuidv1(), title: 'Becoming', category: 'Biography' },
    { id: uuidv1(), title: 'Sapiens: A Brief History of Humankind', category: 'History' },
    { id: uuidv1(), title: 'Dracula', category: 'Horror' },
    { id: uuidv1(), title: 'The Very Hungry Caterpillar', category: 'Kids' },
    { id: uuidv1(), title: 'Microverse', category: 'Learning' },
    { id: uuidv1(), title: 'Dune', category: 'Sci-Fi' },
  ],
};

export default initialState;