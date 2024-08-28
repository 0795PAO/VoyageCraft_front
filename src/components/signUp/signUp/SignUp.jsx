import FormateForm from "../form/FormateForm";
import { useState } from "react";


const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    username: "",
    password: "",
  });

  const [isTyping, setIsTyping] = useState({
    firstName: false,
    lastName: false,
    age: false,
    username: false,
    password: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setIsTyping({
      ...isTyping,
      [name]: true,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setIsTyping({
      ...isTyping,
      [name]: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div className="bg-primary p-8 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <FormateForm
            label="First name"
            id="first-name"
            name="firstName"
            placeholder="Jane"
            pattern="^[A-Z][a-z]*$"
            required={true}
            hint="First name must start with an uppercase letter."
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            showHint={isTyping.firstName} 
          />

          <FormateForm
            label="Last name"
            id="last-name"
            name="lastName"
            placeholder="Smith"
            pattern="^[A-Z][a-z]*$"
            required={true}
            hint="Last name must start with an uppercase letter."
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            showHint={isTyping.lastName} 
          />

          <FormateForm
            label="Age"
            id="age"
            name="age"
            type="number"
            placeholder="25"
            required={true}
            minLength={2}
            pattern="^(1[6-9]|[2-9][0-9]|100)$"
            hint="Age must be between 16 and 100."
            value={formData.age}
            onChange={handleChange}
            onBlur={handleBlur}
            showHint={isTyping.age} 
          />

          <FormateForm
            label="Username"
            id="username"
            name="username"
            placeholder="janesmith"
            minLength={3}
            pattern="\w{3,16}"
            required={true}
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            showHint={isTyping.username} 
          />

          <FormateForm
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="********"
            pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            required={true}
            hint="Must be at least 8 characters, include one uppercase letter, one number, and one special character."
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            showHint={isTyping.password} 
          />
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            Create U
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-white">
        You already have an account?
      </p>
    </div>
  );
};

export default SignUp;

