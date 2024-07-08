"use client"
import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';

// Example Scheduler component
function Scheduler() {
  const [events, setEvents] = useState([]);

  // Function to add a random event
  const addEvent = () => {
    const newEvent = {
      id: events.length + 1,
      title: `Event ${events.length + 1}`,
      day: Math.floor(Math.random() * 7), // Random day (0-6)
      startHour: Math.floor(Math.random() * 24), // Random start hour (0-23)
      endHour: Math.floor(Math.random() * 24) + 1, // Random end hour (1-24)
    };
    setEvents([...events, newEvent]);
  };

  // Calculate the maximum number of hours for any event to determine grid height
  const maxHours = events.reduce((max, event) => Math.max(max, event.endHour), 0);

  return (
    <div className="scheduler bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-4">Scheduler</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={addEvent}
      >
        Add Random Event
      </button>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between">
          {Array.from({ length: maxHours }).map((_, hourIndex) => (
            <div key={hourIndex} className="flex-1 flex items-center justify-end pr-2">
              {hourIndex + 1}
            </div>
          ))}
        </div>
        <div className="flex justify-between ml-8">
          {Array.from({ length: 7 }).map((_, dayIndex) => (
            <div key={dayIndex} className="w-16 text-center">
              Day {dayIndex + 1}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 ml-8">
          {Array.from({ length: 7 }).map((_, dayIndex) => (
            <div key={dayIndex} className="relative">
              {Array.from({ length: maxHours }).map((_, hourIndex) => (
                <div key={hourIndex} className="relative">
                  <div className="absolute inset-0 bg-white opacity-50"></div>
                  {events.map((event) =>
                    event.day === dayIndex && hourIndex >= event.startHour && hourIndex < event.endHour ? (
                      <Transition
                        key={event.id}
                        show={true} // Example of using transition for animations
                        enter="transition-opacity duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div
                          className="absolute left-0 right-0 bg-blue-500 text-white text-xs py-1 px-2 rounded-lg shadow-md"
                          style={{
                            top: `${hourIndex * (100 / maxHours)}%`, // Adjust height based on hours
                          }}
                        >
                          {event.title}
                        </div>
                      </Transition>
                    ) : null
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Scheduler />
    </div>
  );
}

export default App;
