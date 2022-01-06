import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('please install metamask');
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        // getAllTransactions();
      } else {
        console.log('no accounts found');
      }
    } catch (error) {
      console.error(error);
      throw new Error('no ethereum object.');
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('please install metamask');
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
      throw new Error('no ethereum object.');
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert('please install metamask');
      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = getEthereumContract();
      // get the data from the form
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ connectWallet, currentAccount, sendTransaction, formData, setFormData, handleChange }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
