import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-primary p-4 rounded-lg w-full max-w-xl">
        <form className="space-y-1">
          <div>
            <label className="block text-white mb-1">Preferred Climate</label>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 bg-white p-2 rounded">
              <input type="text" className="flex-grow p-2 border-none outline-none font-bold text-black" placeholder="¿What climate do you prefer for your trips?" />
              <select className="bg-yellow-500 text-black p-2 rounded appearance-none pr-8 h-full flex items-center justify-center" style={{ backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"%3E%3Cpath fill-rule="evenodd" d="M5.707 7.293a1 1 0 00-1.414 1.414L10 14.414l5.707-5.707a1 1 0 00-1.414-1.414L10 11.586 5.707 7.293z" clip-rule="evenodd" /%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.90rem center', backgroundSize: '1.50rem', backgroundPosition: 'right 0.1rem center' }}>
                <option>Sunny</option>
                <option>Cloudy</option>
                <option>Rainy</option>
                <option>Cold</option>
                <option>Warm</option>
                <option>Tropical</option>
                <option>Snowy</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-white mb-1">Preferred Landscape/Scenery</label>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 bg-white p-2 rounded">
              <input type="text" className="flex-grow p-2 border-none outline-none font-bold text-black" placeholder="¿What kind of scenery do you enjoy the most?" />
              <select className="bg-yellow-500 text-black p-2 rounded appearance-none pr-8 h-full flex items-center justify-center" style={{ backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"%3E%3Cpath fill-rule="evenodd" d="M5.707 7.293a1 1 0 00-1.414 1.414L10 14.414l5.707-5.707a1 1 0 00-1.414-1.414L10 11.586 5.707 7.293z" clip-rule="evenodd" /%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.90rem center', backgroundSize: '1.50rem', backgroundPosition: 'right 0.1rem center' }}>
                <option>Beach</option>
                <option>Mountains</option>
                <option>Forest</option>
                <option>Desert</option>
                <option>Urban/Cities</option>
                <option>Countryside</option>
                <option>Lakes/Rivers</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-white mb-1">Type of Tourism</label>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 bg-white p-2 rounded">
              <input type="text" className="flex-grow p-2 border-none outline-none font-bold text-black" placeholder="¿What type of tourism do you prefer??" />
              <select className="bg-yellow-500 text-black p-2 rounded appearance-none pr-8 h-full flex items-center justify-center" style={{ backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"%3E%3Cpath fill-rule="evenodd" d="M5.707 7.293a1 1 0 00-1.414 1.414L10 14.414l5.707-5.707a1 1 0 00-1.414-1.414L10 11.586 5.707 7.293z" clip-rule="evenodd" /%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.90rem center', backgroundSize: '1.50rem', backgroundPosition: 'right 0.1rem center' }}>
                <option>Cultural</option>
                <option>Adventure</option>
                <option>Relaxation</option>
                <option>Nature</option>
                <option>Nightlife</option>
                <option>Family-friendly</option>
                <option>Shopping</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-white mb-1">Preferred Activities</label>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 bg-white p-2 rounded">
              <input type="text" className="flex-grow p-2 border-none outline-none font-bold text-black" placeholder="¿What activities are you most interested in during your travels?" />
              <select className="bg-yellow-500 text-black p-2 rounded appearance-none pr-8 h-full flex items-center justify-center" style={{ backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"%3E%3Cpath fill-rule="evenodd" d="M5.707 7.293a1 1 0 00-1.414 1.414L10 14.414l5.707-5.707a1 1 0 00-1.414-1.414L10 11.586 5.707 7.293z" clip-rule="evenodd" /%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.90rem center', backgroundSize: '1.50rem', backgroundPosition: 'right 0.1rem center' }}>
                <option>Hiking</option>
                <option>Swimming</option>
                <option>Sightseeing</option>
                <option>Shopping</option>
                <option>museums</option>
                <option>festivals</option>
                <option>gastronomy</option>
                <option>Water sports</option>
                <option>Skiing</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-white mb-1">Travel Duration</label>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 bg-white p-2 rounded">
              <input type="text" className="flex-grow p-2 border-none outline-none font-bold text-black" placeholder="¿How long do you typically like your trips to be?" />
              <select className="bg-yellow-500 text-black p-2 rounded appearance-none pr-8 h-full flex items-center justify-center" style={{ backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"%3E%3Cpath fill-rule="evenodd" d="M5.707 7.293a1 1 0 00-1.414 1.414L10 14.414l5.707-5.707a1 1 0 00-1.414-1.414L10 11.586 5.707 7.293z" clip-rule="evenodd" /%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.90rem center', backgroundSize: '1.50rem', backgroundPosition: 'right 0.1rem center' }}>
                <option>1-3 days</option>
                <option>4-7 days</option>
                <option>1-2 weeks</option>
                <option>2 weeks or more</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-white mb-1">Travel Companionse</label>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 bg-white p-2 rounded">
              <input type="text" className="flex-grow p-2 border-none outline-none font-bold text-black" placeholder="¿Who do you usually travel with?" />
              <select className="bg-yellow-500 text-black p-2 rounded appearance-none pr-8 h-full flex items-center justify-center" style={{ backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"%3E%3Cpath fill-rule="evenodd" d="M5.707 7.293a1 1 0 00-1.414 1.414L10 14.414l5.707-5.707a1 1 0 00-1.414-1.414L10 11.586 5.707 7.293z" clip-rule="evenodd" /%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.90rem center', backgroundSize: '1.50rem', backgroundPosition: 'right 0.1rem center' }}>
                <option>Solo</option>
                <option>Couple</option>
                <option>Family</option>
                <option>Pets</option>
                <option>Friends</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-white mb-1">Budget Preferences</label>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 bg-white p-2 rounded">
              <input type="text" className="flex-grow p-2 border-none outline-none font-bold text-black" placeholder="¿What is your typical travel budget per day?" />
              <select className="bg-yellow-500 text-black p-2 rounded appearance-none pr-8 h-full flex items-center justify-center" style={{ backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"%3E%3Cpath fill-rule="evenodd" d="M5.707 7.293a1 1 0 00-1.414 1.414L10 14.414l5.707-5.707a1 1 0 00-1.414-1.414L10 11.586 5.707 7.293z" clip-rule="evenodd" /%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.90rem center', backgroundSize: '1.50rem', backgroundPosition: 'right 0.1rem center' }}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-white mb-1">Accessibility Needs</label>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 bg-white p-2 rounded">
              <input type="text" className="flex-grow p-2 border-none outline-none font-bold text-black" placeholder="¿Do you have any accessibility needs or requirements?" />
              <select className="bg-yellow-500 text-black p-2 rounded appearance-none pr-8 h-full flex items-center justify-center" style={{ backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"%3E%3Cpath fill-rule="evenodd" d="M5.707 7.293a1 1 0 00-1.414 1.414L10 14.414l5.707-5.707a1 1 0 00-1.414-1.414L10 11.586 5.707 7.293z" clip-rule="evenodd" /%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.90rem center', backgroundSize: '1.50rem', backgroundPosition: 'right 0.1rem center' }}>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-white mb-1">Special Interests</label>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 bg-white p-2 rounded">
              <input type="text" className="flex-grow p-2 border-none outline-none font-bold text-black" placeholder="¿Do you want to include any other plans in the trip?" />
              <select className="bg-yellow-500 text-black p-2 rounded appearance-none pr-8 h-full flex items-center justify-center" style={{ backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"%3E%3Cpath fill-rule="evenodd" d="M5.707 7.293a1 1 0 00-1.414 1.414L10 14.414l5.707-5.707a1 1 0 00-1.414-1.414L10 11.586 5.707 7.293z" clip-rule="evenodd" /%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.90rem center', backgroundSize: '1.50rem', backgroundPosition: 'right 0.1rem center' }}>
                <option>Wine tasting</option>
                <option>Photography</option>
                <option>Yoga</option>
                <option>crafts</option>
                <option>Eco-tourism</option>
                <option>Historical exploration</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-white mb-1">Preferred Travel Dates/Seasons</label>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 bg-white p-2 rounded">
              <input type="text" className="flex-grow p-2 border-none outline-none font-bold text-black" placeholder="¿Do you have a preferred travel season or specific dates in mind?" />
              <select className="bg-yellow-500 text-black p-2 rounded appearance-none pr-8 h-full flex items-center justify-center" style={{ backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"%3E%3Cpath fill-rule="evenodd" d="M5.707 7.293a1 1 0 00-1.414 1.414L10 14.414l5.707-5.707a1 1 0 00-1.414-1.414L10 11.586 5.707 7.293z" clip-rule="evenodd" /%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.90rem center', backgroundSize: '1.50rem', backgroundPosition: 'right 0.1rem center' }}>
                <option>Spring</option>
                <option>Summer</option>
                <option>Autumn</option>
                <option>Winter</option>
                <option>Specific date</option>
              </select>
            </div>
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
