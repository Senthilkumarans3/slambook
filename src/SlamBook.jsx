import React, { useState } from 'react';
import './SlamBook.css';

const SlamBook = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    gender: '',
    address: '',
    college: '',
    hobbies: '',
    favoriteFood: '',
    dream: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, formData]);
    setFormData({
      name: '',
      nickname: '',
      gender: '',
      address: '',
      college: '',
      hobbies: '',
      favoriteFood: '',
      dream: '',
      message: '',
    });
  };

  return (
    <div className="container">
      <header>
        <h1>SlamBook</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Nickname:</label>
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
        />

        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <label>College:</label>
        <input
          type="text"
          name="college"
          value={formData.college}
          onChange={handleChange}
        />

        <label>Hobbies:</label>
        <input
          type="text"
          name="hobbies"
          value={formData.hobbies}
          onChange={handleChange}
        />

        <label>Favorite Food:</label>
        <input
          type="text"
          name="favoriteFood"
          value={formData.favoriteFood}
          onChange={handleChange}
        />

        <label>Your Dream:</label>
        <input
          type="text"
          name="dream"
          value={formData.dream}
          onChange={handleChange}
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Add Entry</button>
      </form>

      <h2>Entries:</h2>
      <ul className="entries-list">
        {entries.map((entry, index) => (
          <li key={index}>
            <strong>Name:</strong> {entry.name} <br />
            <strong>Nickname:</strong> {entry.nickname} <br />
            <strong>Gender:</strong> {entry.gender} <br />
            <strong>Address:</strong> {entry.address} <br />
            <strong>College:</strong> {entry.college} <br />
            <strong>Hobbies:</strong> {entry.hobbies} <br />
            <strong>Favorite Food:</strong> {entry.favoriteFood} <br />
            <strong>Dream:</strong> {entry.dream} <br />
            <strong>Message:</strong> {entry.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlamBook;
