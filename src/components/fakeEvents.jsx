const fakeEventsDetails = [
  {
    title: "Event Hackathon",
    host: "Dev Team",
    location: "Mumbai",
    participants: 342,
    id: 1,
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "INCUVERSE 1.0",
    host: "Vidyavihar University",
    location: "UP",
    participants: 620,
    id: 2,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AI Summit",
    host: "SVIT",
    location: "Bangalore",
    participants: 789,
    id: 3,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Gujcost",
    host: "Gujarat Govt.",
    location: "Gujarat",
    participants: 510,
    id: 4,
    image: "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "IDEATHON",
    host: "NM University",
    location: "Mumbai",
    participants: 468,
    id: 5,
    image: "https://images.unsplash.com/photo-1634836023845-eddbfe9937da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Launchpad",
    host: "Maharahtra Govt.",
    location: "Maharashtra",
    participants: 397,
    id: 6,
    image: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "CodeSpark India",
    host: "KBN College",
    location: "Vijayawada",
    participants: 236,
    id: 7,
    image: "https://plus.unsplash.com/premium_photo-1664299935896-8b7638a6f105?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Code Relay 4.0",
    host: "IIT Bhubaneswar",
    location: "Bhubaneswar",
    participants: 724,
    id: 8,
    image: "https://images.unsplash.com/photo-1593486544625-13ef2368e43a?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "CodeFury 8.0",
    host: "UVCE University",
    location: "Bangalore",
    participants: 157,
    id: 9,
    image: "https://plus.unsplash.com/premium_photo-1726754457459-d2dfa2e3a434?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Blockchainthon",
    host: "Proptelligence Technologies",
    location: "Mumbai",
    participants: 517,
    id: 10,
    image: "https://images.unsplash.com/photo-1525567565596-82d85bef8fb6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "IdeationX 2.0",
    host: "SBI Life",
    location: "Hyderabad",
    participants: 375,
    id: 11,
    image: "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?q=80&w=1050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Innvathon",
    host: "NITR",
    location: "Rourkela",
    participants: 497,
    id: 12,
    image: "https://images.unsplash.com/photo-1668796319088-214d6a82d54b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Buildathon",
    host: "Chandigrah College",
    location: "Chandigarh",
    participants: 734,
    id: 13,
    image: "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Smart India Hackathon",
    host: "Indian Govt.",
    location: "Delhi NCR",
    participants: 3478,
    id: 14,
    image: "https://images.unsplash.com/photo-1637249805971-59d7b9319df3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


const FakeEvents = () => {
    const len = fakeEventsDetails.length
    const base = fakeEventsDetails[Math.floor(Math.random() * len)]
    return {
        ...base,
        datetime: Date()
    }
}

export default FakeEvents