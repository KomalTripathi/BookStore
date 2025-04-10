import React, { useState } from "react";

// Task 1: TextUpdater Component
const TextUpdater = () => {
  const [text, setText] = useState("");
  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2">You typed: {text}</p>
    </div>
  );
};

// Task 2: Form with console logging
const InputForm = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input Value:", input);
  };
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        className="border p-2 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 ml-2 rounded">
        Submit
      </button>
    </form>
  );
};

// Task 3: UserCard Component
const UserCard = ({ name, email }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border w-64">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

// Task 4: Button Component
const StyledButton = () => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      onClick={() => console.log("Button clicked!")}
    >
      Click Me
    </button>
  );
};

// Task 5: LoginForm Component
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(Email: ${email}\nPassword: ${password});

  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4 w-72 border rounded-lg shadow-md">
      <input
        type="email"
        className="border p-2 rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 rounded"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
        Login
      </button>
    </form>
  );
};

const App = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <TextUpdater />
      <InputForm />
      <UserCard name="Ayushi Sharma" email="ayushisharma@gmail.com" />
      <StyledButton />
      <LoginForm />
    </div>
  );
};

export default App;