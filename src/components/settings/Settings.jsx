import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormateForm from "@/components/signUp/form/FormateForm"; 

const Settings = () => {
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

    const [showModal, setShowModal] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const navigate = useNavigate(); 

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

    const handleDeleteUser = () => {
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        setShowModal(false);
        setAlertMessage("Usuario eliminado");
        setTimeout(() => {
            setAlertMessage("");
            navigate('/login'); 
        }, 3000);
        console.log("User deleted");
    };

    const handleCancelDelete = () => {
        setShowModal(false);
    };

    return (
        <div className="relative bg-white p-8 shadow-lg">
            {alertMessage && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white p-4 rounded-lg shadow-lg z-50">
                    <p className="text-center text-lg font-semibold">{alertMessage}</p>
                </div>
            )}
            
            <form onSubmit={handleSubmit}>
                <div className="space-y-1">
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
                        className="w-full justify-center bg-yellow-500 py-1.5"
                    >
                        Update
                    </button>
                </div>
            </form>
            <div className="flex justify-center py-1.5">
                <button 
                    type="button" 
                    className="bg-yellow-500 text-black px-8 py-3"
                    onClick={handleDeleteUser}
                >
                    Delete User
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-primary p-4 rounded-lg text-center" style={{ width: '300px', height: '280px' }}>
                        <h2 className="text-lg text-white font-semibold mb-4">Delete User</h2>
                        <p className="text-white mb-6">Are you sure you want to delete the user?</p>
                        <div className="flex justify-around">
                            <button 
                                className="bg-yellow-500 text-black px-2 w-10" 
                                onClick={handleConfirmDelete}
                            >
                                Yes
                            </button>
                            <button 
                                className="bg-yellow-500 text-black px-2 py-2 w-30" 
                                onClick={handleCancelDelete}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Settings;
