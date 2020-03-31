import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function EditAccount(props) {
  const [account, setAccount] = useState(
    props.accounts.filter(acc => acc.id == props.match.params.id)[0]
  );

  const editAccount = () => {
    props.editAccount(account);
    props.history.push('/');
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 offset-1'>
          <h2 className='display-4 m-4'>Edit Account</h2>
          <div className='row'>
            <div className='col-10 offset-1'>
              <input
                onChange={e => {
                  setAccount({ ...account, name: e.target.value });
                }}
                value={account.name}
                type='text'
                name='name'
                id='name'
                placeholder='name'
                className='form-control'
              />
              <br />
              <input
                onChange={e => {
                  setAccount({ ...account, lastname: e.target.value });
                }}
                value={account.lastname}
                type='text'
                name='lastname'
                id='lastname'
                placeholder='lastname'
                className='form-control'
              />
              <br />
              <input
                onChange={e => {
                  setAccount({ ...account, phone: e.target.value });
                }}
                value={account.phone}
                type='text'
                name='phone'
                id='phone'
                placeholder='phone'
                className='form-control'
              />
              <br />
              <input
                onChange={e => {
                  setAccount({ ...account, email: e.target.value });
                }}
                value={account.email}
                type='email'
                name='email'
                id='email'
                placeholder='email'
                className='form-control'
              />
              <br />
              <button
                onClick={editAccount}
                className='btn btn-info form-control'
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(EditAccount);
