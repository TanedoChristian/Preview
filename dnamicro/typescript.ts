// Start: Generics
interface Group<T> {
  id: string;
  name: string;
  items: T[];
}

interface Person {
  id?: string;
  first_name: string;
  last_name: string;
}

const people_group: Group<Person> = {
  id: 'group1',
  name: 'People Group',
  items: [
    {
      first_name: 'John',
      last_name: 'Doe',
    },
    {
      first_name: 'Alice',
      last_name: 'Doe',
    },
  ],
};

const colors_group: Group<string> = {
  id: 'group2',
  name: 'Red',
  items: ['#ffebee', '#ffcdd2'],
};

const getData = <T>(items: string[]) => {
  return items as T[];
};

const users = getData<Person>(['user_1', 'user_2', 'user_3']);
const colors = getData<string>(['user_1', 'user_2', 'user_3']);
// End: Generics

// Start: Utility Types
interface Todo {
  id: string;
  title: string;
  content: string;
}

const createTodo = (todo: Todo) => {};

const updateTodo = (todo: Omit<Todo, 'id' | 'title'>) => {};

const removeTodo = (todo: Pick<Todo, 'id'>) => {};

const users_collection: Record<string, Person> = {
  user_1: {
    id: 'user_1',
    first_name: 'John',
    last_name: 'Doe',
  },
  user_2: {
    id: 'user_2',
    first_name: 'Mary',
    last_name: 'Smith',
  },
  user_3: {
    id: 'user_2',
    first_name: 'Mary',
    last_name: 'Smith',
  },
};
// End: Utility Types
