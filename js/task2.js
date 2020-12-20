const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];
// Варіант 1
// const toggleUserState = (allUsers, userName, callback) => {
//   return new Promise((resolve) => {
//     const updatedUsers = allUsers.map((user) =>
//       user.name === userName ? { ...user, active: !user.active } : user
//     );

//     resolve(updatedUsers);
//   });
// };

// Варіант 2
const toggleUserState = (allUsers, userName, callback) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );

  return Promise.resolve(updatedUsers);
};

const logger = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);

//==============================Завдання==============================
/*
 * Переписати функцію toggleUserState() так, щоб вона не використовувала callback-функцію callback,
 * а приймала всього два параметри allUsers та userName і повертала проміс.
 */

// const users = [
//   { name: "Mango", active: true },
//   { name: "Poly", active: false },
//   { name: "Ajax", active: true },
//   { name: "Lux", active: false },
// ];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map((user) =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );

//   callback(updatedUsers);
// };

// const logger = (updatedUsers) => console.table(updatedUsers);

/*
 * Працює так
 */
// toggleUserState(users, "Mango", logger);
// toggleUserState(users, "Lux", logger);

/*
 * Повинно працювати так
 */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);
