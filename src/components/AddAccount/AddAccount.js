import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';

function AddAccount(props) {
  const [newAccount, setNewAccount] = useState({
    id: '',
    name: '',
    lastname: '',
    phone: '',
    email: ''
  });

  const addNewAccount = () => {
    props.addNewAccountToSate(newAccount);
    props.history.push('/');
  };

  const idInput = useRef();

  useEffect(() => {
    idInput.current.focus();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 offset-1'>
          <h2 className='display-4 m-4'>Add Account</h2>
          <div className='row'>
            <div className='col-10 offset-1'>
              <input
                onChange={e => {
                  setNewAccount({ ...newAccount, id: e.target.value });
                }}
                type='text'
                ref={idInput}
                placeholder='id'
                className='form-control'
              />
              <br />
              <input
                onChange={e => {
                  setNewAccount({ ...newAccount, name: e.target.value });
                }}
                type='text'
                placeholder='name'
                className='form-control'
              />
              <br />
              <input
                onChange={e => {
                  setNewAccount({ ...newAccount, lastname: e.target.value });
                }}
                type='text'
                placeholder='lastname'
                className='form-control'
              />
              <br />
              <input
                onChange={e => {
                  setNewAccount({ ...newAccount, phone: e.target.value });
                }}
                type='text'
                name='phone'
                id='phone'
                placeholder='phone'
                className='form-control'
              />
              <br />
              <input
                onChange={e => {
                  setNewAccount({ ...newAccount, email: e.target.value });
                }}
                type='email'
                placeholder='email'
                className='form-control'
              />
              <br />
              <button
                onClick={addNewAccount}
                className='btn btn-primary form-control'
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(AddAccount);
