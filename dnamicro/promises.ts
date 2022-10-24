interface User {
  id: string;
  name: string;
  address_id: string;
}

interface Address {
  id: string;
  name: string;
}

const users: User[] = [
  {
    id: 'user_1',
    name: 'John',
    address_id: '',
  },
  {
    id: 'user_2',
    name: 'John',
    address_id: 'address_1',
  },
  {
    id: 'user_3',
    name: 'John',
    address_id: 'address_2',
  },
];

const addresses = [
  {
    id: 'address_1',
    name: 'Address 1',
  },
  {
    id: 'address_1',
    name: 'Address 1',
  },
];

// Promises
const getUser = (id: string) => {
  return new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      const matched_user = users.find((user) => user.id === id);
      if (!matched_user) reject('No users found');
      resolve(matched_user!);
    }, 1000);
  });
};

const getAddress = (id: string) => {
  return new Promise<Address | undefined>((resolve, reject) => {
    setTimeout(() => {
      const matched_address = addresses.find((user) => user.id === id);
      if (!matched_address) reject('No address found');
      resolve(matched_address);
    }, 1000);
  });
};

// Promise way
getUser('user_1')
  .then((user) => {
    console.log('User found:', user);

    getAddress(user?.address_id).then((address) => {
      if (!address) {
        console.log('No address found');
        return;
      }

      console.log('Address found:', address);
    });
  })
  .catch((error) => {
    console.log('Error:', error);
  });
