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

const getUser = (id: string, onSuccess?: (user?: User) => void) => {
  setTimeout(() => {
    const matched_user = users.find((user) => user.id === id);
    onSuccess?.(matched_user);
  }, 1000);
};

const getAddress = (id: string, onSuccess: (address?: Address) => void) => {
  setTimeout(() => {
    const matched_address = addresses.find((item) => item.id === id);
    onSuccess(matched_address);
  }, 1000);
};

// Callback way
getUser('user_1', (user) => {
  if (!user) {
    console.log('No user found');
    return;
  }

  getAddress(user.address_id, (address) => {
    if (!address) {
      console.log(`No address found for ${user.name}`);
      return;
    }

    console.log({
      user,
      address,
    });
  });
});
