import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import AccountsTable from './components/AccountsTable/AccountsTable';
import AddAccount from './components/AddAccount/AddAccount';
import EditTable from './components/EditTable/EditTable';
import EditAccount from './components/EditAccount/EditAccount';

function App() {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: 'Milos',
      lastname: 'Stojanovic',
      phone: '11-11-11',
      email: 'stojanovic@gmail.com'
    },
    {
      id: 2,
      name: 'Ivan',
      lastname: 'Mitic',
      phone: '22-22-22',
      email: 'iva@gmail.com'
    },
    {
      id: 3,
      name: 'Sanja',
      lastname: 'Stosic',
      phone: '33-33-33',
      email: 'sanja@gmail.com'
    }
  ]);

  const deleteAccount = id => {
    const newCopyAccount = accounts.filter(account => {
      return account.id !== id;
    });
    setAccounts(newCopyAccount);
  };

  const addNewAccountToSate = account => {
    setAccounts([...accounts, account]);
  };

  const editAccount = acc => {
    let accountPossition = accounts.map(account => account.id).indexOf(acc.id);
    accounts[accountPossition] = acc;
    setAccounts(accounts);
  };

  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/'>
        <AccountsTable accounts={accounts} />
      </Route>
      <Route path='/add'>
        <AddAccount addNewAccountToSate={addNewAccountToSate} />
      </Route>
      <Switch>
        <Route path='/edit/:id'>
          <EditAccount accounts={accounts} editAccount={editAccount} />
        </Route>
        <Route path='/edit'>
          <EditTable accounts={accounts} deleteAccount={deleteAccount} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
