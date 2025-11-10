import EverRidesvg from "../../assets/EverRidesvg"

export const users = [
  {
    id: 1,
    name: "Everide",
    isCompany: true,
    avatar: <EverRidesvg/>,
    lastMessage: "On Everide, we buy and sell used gear among enthusiasts.",
  },
  // {
  //   id: 2,
  //   name: "John Doe",
  //   isCompany: false,
  //   avatar: null,
  //   lastMessage: "Hey, how are you doing?",
  // },
  // {
  //   id: 3,
  //   name: "Sarah Smith",
  //   isCompany: false,
  //   avatar: null,
  //   lastMessage: "Can we meet tomorrow?",
  // },
  // {
  //   id: 4,
  //   name: "Imran Khan",
  //   isCompany: false,
  //   avatar: null,
  //   lastMessage: "How can we help you today?",
  // },
  // {
  //   id: 5,
  //   name: "Mike Johnson",
  //   isCompany: false,
  //   avatar: null,
  //   lastMessage: "Thanks for the info!",
  // },
]

export const conversations = {
  1: [
    {
      id: 101,
      text: "How it works 👋",
      sender: "company",
      timestamp: "2023-05-15T10:00:00Z",
    },
    {
      id: 102,
      text: "On Everide, we buy and sell used gear among enthusiasts. It's simple, fast, and good for the planet ♻️ Interested in an item? Ask your seller questions, make them an offer 🎁 Is the sale finalized? Print the slip, track the package, access your wallet, then leave a review 👍 Buy. Sell. Let's keep riding.",
      sender: "company",
      timestamp: "2023-05-15T10:01:00Z",
    },
    {
      id: 103,
      text: "For any questions, our customer service is here for you 👋",
      sender: "company",
      timestamp: "2023-05-15T10:02:00Z",
    },
  ],
  2: [
    {
      id: 201,
      text: "Hey, how are you doing?",
      sender: "user",
      timestamp: "2023-05-15T11:00:00Z",
    },
    {
      id: 202,
      text: "I'm good, thanks for asking! How about you?",
      sender: "me",
      timestamp: "2023-05-15T11:01:00Z",
    },
    {
      id: 203,
      text: "Doing well! Just wanted to catch up.",
      sender: "user",
      timestamp: "2023-05-15T11:02:00Z",
    },
  ],
  3: [
    {
      id: 301,
      text: "Can we meet tomorrow?",
      sender: "user",
      timestamp: "2023-05-15T12:00:00Z",
    },
    {
      id: 302,
      text: "Sure, what time works for you?",
      sender: "me",
      timestamp: "2023-05-15T12:01:00Z",
    },
    {
      id: 303,
      text: "How about 2pm at the coffee shop?",
      sender: "user",
      timestamp: "2023-05-15T12:02:00Z",
    },
    {
      id: 304,
      text: "Sounds good! See you then.",
      sender: "me",
      timestamp: "2023-05-15T12:03:00Z",
    },
  ],
  4: [
    {
      id: 401,
      text: "Welcome to Tech Support! How can we help you today?",
      sender: "company",
      timestamp: "2023-05-15T13:00:00Z",
    },
    {
      id: 402,
      text: "I'm having trouble with my account login.",
      sender: "me",
      timestamp: "2023-05-15T13:01:00Z",
    },
    {
      id: 403,
      text: "I'm sorry to hear that. Let me help you troubleshoot. Have you tried resetting your password?",
      sender: "company",
      timestamp: "2023-05-15T13:02:00Z",
    },
  ],
}


// svg 
