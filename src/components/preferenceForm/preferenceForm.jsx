import { useState } from 'react';
import { savePreferences } from '@/services/preferenceService';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

const PreferenceForm = () => {
  const [formData, setFormData] = useState({
    climate: '',
    scenery: '',
    tourismType: '',
    tripDuration: '',
    budget: '',
    accessibility: '',
    familyFriendly: ''  
  });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const preferences = Object.keys(formData).map((key) => ({
        preference_type: getPreferenceType(key),
        preference_value: formData[key]
      }));


      await savePreferences(preferences);
      setMessage('Preferences saved successfully.');
      setTimeout(() => {
        navigate('/destinations');  
      }, 2000);
    } catch (error) {
      console.error('Error during preferences submission:', error);
      setError('An error occurred while saving preferences. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getPreferenceType = (key) => {
    const mapping = {
      climate: 'climate',
      scenery: 'landscape',
      tourismType: 'tourism_type',
      tripDuration: 'trip_duration',
      budget: 'cost_level',
      accessibility: 'accessibility',
      familyFriendly: 'family_friendly'
    };
    return mapping[key];
  };


  return (
      <div className="bg-primary p-4 rounded-lg w-full max-w-sm mx-auto">
        {error && <div className="text-red-500">{error}</div>}
        {message && <div className="text-green-500">{message}</div>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Preferred Climate */}
          <label htmlFor="climate" className="block text-white text-sm font-bold mb-2">Preferred Climate</label>
          <div className="relative">
            <select
              id="climate"
              name="climate"
              value={formData.climate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10"
            >
              <option value="">Select...</option>
              <option value="Sunny">Sunny</option>
              <option value="Cloudy">Cloudy</option>
              <option value="Rainy">Rainy</option>
              <option value="Cold">Cold</option>
              <option value="Warm">Warm</option>
              <option value="Tropical">Tropical</option>
              <option value="Snowy">Snowy</option>
            </select>
          </div>

          {/* Preferred Scenery */}
          <label htmlFor="scenery" className="block text-white text-sm font-bold mb-2">Preferred Scenery</label>
          <div className="relative">
            <select
              id="scenery"
              name="scenery"
              value={formData.scenery}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10"
            >
              <option value="">Select...</option>
              <option value="Beach">Beach</option>
              <option value="Mountains">Mountains</option>
              <option value="Forest">Forest</option>
              <option value="Desert">Desert</option>
              <option value="Urban">Urban/Cities</option>
              <option value="Countryside">Countryside</option>
              <option value="Lakes/Rivers">Lakes/Rivers</option>
            </select>
          </div>

          {/* Type of Tourism */}
          <label htmlFor="tourismType" className="block text-white text-sm font-bold mb-2">Type of Tourism</label>
          <div className="relative">
            <select
              id="tourismType"
              name="tourismType"
              value={formData.tourismType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10"
            >
              <option value="">Select...</option>
              <option value="Cultural">Cultural</option>
              <option value="Adventure">Adventure</option>
              <option value="Relaxation">Relaxation</option>
              <option value="Nature">Nature</option>
              <option value="Nightlife">Nightlife</option>
              <option value="Family-friendly">Family-friendly</option>
              <option value="Shopping">Shopping</option>
            </select>
          </div>

          {/* Travel Duration */}
          <label htmlFor="tripDuration" className="block text-white text-sm font-bold mb-2">Travel Duration</label>
          <div className="relative">
            <select
              id="tripDuration"
              name="tripDuration"
              value={formData.tripDuration}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10"
            >
              <option value="">Select...</option>
              <option value="1-3 days">1-3 days</option>
              <option value="4-7 days">4-7 days</option>
              <option value="1-2 weeks">1-2 weeks</option>
              <option value="2 weeks or more">2 weeks or more</option>
            </select>
          </div>

          {/* Budget Preferences */}
          <label htmlFor="budget" className="block text-white text-sm font-bold mb-2">Budget Preferences</label>
          <div className="relative">
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10"
            >
              <option value="">Select...</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Accessibility Needs */}
          <label htmlFor="accessibility" className="block text-white text-sm font-bold mb-2">Accessibility Needs</label>
          <div className="relative">
            <select
              id="accessibility"
              name="accessibility"
              value={formData.accessibility}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10"
            >
              <option value="">Select...</option>
              <option value="True">Yes</option>
              <option value="False">No</option>
            </select>
          </div>

          {/* Family-Friendly */}
          <label htmlFor="familyFriendly" className="block text-white text-sm font-bold mb-2">Family-Friendly</label>
          <div className="relative">
            <select
              id="familyFriendly"
              name="familyFriendly"
              value={formData.familyFriendly}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10"
            >
              <option value="">Select...</option>
              <option value="True">Yes</option>
              <option value="False">No</option>
            </select>
          </div>

          <div className="flex justify-center p-5">
            <Button type="submit" variant="secondary" disabled={loading}>
              {loading ? 'Loading...' : 'Next'}
            </Button>
          </div>
        </form>
      </div>
  );
};

export default PreferenceForm;