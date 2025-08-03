import { useEffect, useState } from "react";
import  FakeEvents  from "../components/fakeEvents";
import EventDetailViewModal from "../components/EventDetailView";

const EventsMaker = () => {

  const [events, setEvents] = useState([]);
  const [eventDetail, setEventDetail] =  useState(null)

  useEffect(() => {
    const initial = Array.from({ length: 10 }, () => FakeEvents());
    setEvents(initial);

    const interval = setInterval(()=>{
      setEvents((prev)=>
      [FakeEvents(), ...prev.slice(0,9)]
      )
    },5000)

    return () => clearInterval(interval)
  }, []);

  return (
    <div className="max-w-8xl mx-auto space-y-6 grid grid-cols-2 gap-x-12">
      {events.map((event, index) => (
        <div
          onClick={()=>setEventDetail({...event})}
          key={index}
          className="bg-white rounded-2xl cursor-pointer shadow-md overflow-hidden flex flex-col md:flex-row transition-all hover:shadow-lg"
        >
          <img
            src={event.image}
            alt="event"
            className="h-64 md:h-48 md:w-64 object-cover"
          />
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-1 text-gray-800">{event.title}</h2>
              <p className="text-gray-500 text-sm mb-2">👤 Hosted by: {event.host}</p>
              <p className="text-gray-500 text-sm">📍 {event.location}</p>
              <p className="text-gray-500 text-sm">🕒 {event.datetime}</p>
            </div>
            <div className="mt-3 text-sm text-blue-600 font-semibold">
              🧑‍🤝‍🧑 {event.participants} participants
            </div>
          </div>
        </div>
      ))}
      {eventDetail && <EventDetailViewModal event={eventDetail} onClose={()=>setEventDetail(null)}/>}
    </div>
  );
}

export default EventsMaker;
