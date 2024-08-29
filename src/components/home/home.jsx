import React, { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    climate: '',
    scenery: '',
    tourismType: '',
    activities: '',
    tripDuration: '',
    travelWith: '',
    budget: '',
    accessibility: '',
    interests: '',
    travelSeason: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-primary p-4 rounded-lg w-full max-w-sm mx-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="climate" className="block text-white text-sm font-bold mb-2">What type of climate do you prefer for your trips?</label>
          <div className="relative">
            <select
              id="climate"
              name="climate"
              value={formData.climate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10">
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

          <label htmlFor="scenery" className="block text-white text-sm font-bold mb-2">What kind of scenery do you enjoy the most?</label>
          <div className="relative">
            <select
              id="scenery"
              name="scenery"
              value={formData.scenery}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10">
              <option value="">Select...</option>
              <option value="Beach">Beach</option>
              <option value="Mountains">Mountains</option>
              <option value="Forest">Forest</option>
              <option value="Desert">Desert</option>
              <option value="Urban/Cities">Urban/Cities</option>
              <option value="Countryside">Countryside</option>
              <option value="Lakes/Rivers">Lakes/Rivers</option>
            </select>
          </div>

          <label htmlFor="tourismType" className="block text-white text-sm font-bold mb-2">What type of tourism do you prefer?</label>
          <div className="relative">
            <select
              id="tourismType"
              name="tourismType"
              value={formData.tourismType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10">
              <option value="">Select...</option>
              <option value="Cultural">Cultural (Museums, historical sites)</option>
              <option value="Adventure">Adventure (Hiking, extreme sports)</option>
              <option value="Relaxation">Relaxation (Beaches, spas)</option>
              <option value="Nature">Nature (National parks, wildlife)</option>
              <option value="Nightlife">Nightlife (Bars, clubs)</option>
              <option value="Family-friendly">Family-friendly</option>
              <option value="Shopping">Shopping</option>
            </select>
          </div>

          <label htmlFor="activities" className="block text-white text-sm font-bold mb-2">What activities are you most interested in during your travels?</label>
          <div className="relative">
            <select
              id="activities"
              name="activities"
              value={formData.activities}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10">
              <option value="">Select...</option>
              <option value="Hiking">Hiking</option>
              <option value="Swimming">Swimming</option>
              <option value="Sightseeing">Sightseeing</option>
              <option value="Shopping">Shopping</option>
              <option value="Visiting museums">Visiting museums</option>
              <option value="Attending local events or festivals">Attending local events or festivals</option>
              <option value="Dining and culinary experiences">Dining and culinary experiences</option>
              <option value="Water sports">Water sports (e.g., kayaking, snorkeling)</option>
              <option value="Skiing/Snowboarding">Skiing/Snowboarding</option>
            </select>
          </div>

          <label htmlFor="tripDuration" className="block text-white text-sm font-bold mb-2">How long do you typically like your trips to be?</label>
          <div className="relative">
            <select
              id="tripDuration"
              name="tripDuration"
              value={formData.tripDuration}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10">
              <option value="">Select...</option>
              <option value="1-3 days">1-3 days</option>
              <option value="4-7 days">4-7 days</option>
              <option value="1-2 weeks">1-2 weeks</option>
              <option value="2 weeks or more">2 weeks or more</option>
            </select>
          </div>

          <label htmlFor="travelWith" className="block text-white text-sm font-bold mb-2">Who do you usually travel with?</label>
          <div className="relative">
            <select
              id="travelWith"
              name="travelWith"
              value={formData.travelWith}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10">
              <option value="">Select...</option>
              <option value="Solo">Solo</option>
              <option value="Couple/Partner">Couple/Partner</option>
              <option value="Family (with children)">Family (with children)</option>
              <option value="Pets">Pets</option>
              <option value="Friends">Friends</option>
            </select>
          </div>

          <label htmlFor="budget" className="block text-white text-sm font-bold mb-2">What is your typical travel budget per day?</label>
          <div className="relative">
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10">
              <option value="">Select...</option>
              <option value="Low">Low (Backpacking, hostels)</option>
              <option value="Medium">Medium (Hotels, mid-range restaurants)</option>
              <option value="High">High (Luxury hotels, fine dining)</option>
            </select>
          </div>

          <label htmlFor="accessibility" className="block text-white text-sm font-bold mb-2">Do you have any accessibility needs or requirements?</label>
          <div className="relative">
            <select
              id="accessibility"
              name="accessibility"
              value={formData.accessibility}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10">
              <option value="">Select...</option>
              <option value="Yes">Yes (Wheelchair accessible, etc.)</option>
              <option value="No">No</option>
            </select>
          </div>

          <label htmlFor="interests" className="block text-white text-sm font-bold mb-2">Are there any specific interests or hobbies you would like to include in your travel plans?</label>
          <div className="relative">
            <select
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10">
              <option value="">Select...</option>
              <option value="Wine tasting">Wine tasting</option>
              <option value="Photography">Photography</option>
              <option value="Yoga/Wellness">Yoga/Wellness</option>
              <option value="Local crafts/Artisan workshops">Local crafts/Artisan workshops</option>
              <option value="Eco-tourism">Eco-tourism</option>
              <option value="Historical exploration">Historical exploration</option>
            </select>
          </div>

          <label htmlFor="travelSeason" className="block text-white text-sm font-bold mb-2">Do you have a preferred travel season or specific dates in mind?</label>
          <div className="relative">
            <select
              id="travelSeason"
              name="travelSeason"
              value={formData.travelSeason}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-white text-black pr-10">
              <option value="">Select...</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Specific date range">Specific date range (free text)</option>
            </select>
          </div>

          <div className="flex justify-center p-5">
            <button type="submit" className="bg-yellow-500 text-black px-8 py-3 rounded">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
