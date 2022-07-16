import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'vale',
    role: 'seller'
  },
  {
    username: 'zulema',
    role: 'seller'
  },
  {
    username: 'jorge',
    role: 'customer'
  },

];


const rta= _.groupBy( data, (item) => item.role);
