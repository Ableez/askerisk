export const uchatData = [
  {
    id: "chat001",
    participants: ["user123", "user001"],
    messages: [
      {
        id: "message001",
        senderId: "user001",
        type: "text",
        content: "Hey whatsup bro🥂🥂✌🏽",
        timestamp: "2024-07-16T08:00:00Z",
        read: true,
      },
      {
        id: "message002",
        senderId: "user123",
        type: "image",
        content: {
          uri: "path/to/image1.webp",
          size: 2048,
          type: "webp",
        },
        timestamp: "2024-07-16T08:02:00Z",
        read: true,
      },
    ],
    lastMessage: {
      id: "message002",
      senderId: "user123",
      type: "image",
      content: {
        uri: "path/to/image1.webp",
        size: 2048,
        type: "webp",
      },
      timestamp: "2024-07-16T08:02:00Z",
      read: true,
    },
    unreadCount: {
      user123: 0,
      user001: 0,
    },
  },
  {
    id: "chat002",
    participants: ["user123", "user002"],
    messages: [
      {
        id: "message003",
        senderId: "user002",
        type: "text",
        content: "Are you coming over tonight?🌚",
        timestamp: "2024-07-15T20:30:00Z",
        read: true,
      },
      {
        id: "message004",
        senderId: "user002",
        type: "video",
        content: {
          uri: "path/to/video1.mp4",
          size: 5120,
          type: "mp4",
        },
        timestamp: "2024-07-15T20:45:00Z",
        read: false,
      },
    ],
    lastMessage: {
      id: "message004",
      senderId: "user002",
      type: "video",
      content: {
        uri: "path/to/video1.mp4",
        size: 5120,
        type: "mp4",
      },
      timestamp: "2024-07-15T20:45:00Z",
      read: false,
    },
    unreadCount: {
      user123: 1,
      user002: 0,
    },
  },
  {
    id: "chat003",
    participants: ["user123", "user003"],
    messages: [
      {
        id: "message005",
        senderId: "user003",
        type: "text",
        content: "Check out this cool new app! 😎📱",
        timestamp: "2024-07-16T03:30:00Z",
        read: false,
      },
      {
        id: "message006",
        senderId: "user123",
        type: "image",
        content: {
          uri: "path/to/image2.webp",
          size: 3072,
          type: "webp",
        },
        timestamp: "2024-07-16T03:35:00Z",
        read: false,
      },
    ],
    lastMessage: {
      id: "message006",
      senderId: "user123",
      type: "image",
      content: {
        uri: "path/to/image2.webp",
        size: 3072,
        type: "webp",
      },
      timestamp: "2024-07-16T03:35:00Z",
      read: false,
    },
    unreadCount: {
      user123: 3,
      user003: 0,
    },
  },
  {
    id: "chat004",
    participants: ["user123", "user004"],
    messages: [
      {
        id: "message007",
        senderId: "user004",
        type: "text",
        content: "Let's grab lunch tomorrow! 🍔🥤",
        timestamp: "2024-07-15T13:15:00Z",
        read: true,
      },
    ],
    lastMessage: {
      id: "message007",
      senderId: "user004",
      type: "text",
      content: "Let's grab lunch tomorrow! 🍔🥤",
      timestamp: "2024-07-15T13:15:00Z",
      read: true,
    },
    unreadCount: {
      user123: 0,
      user004: 0,
    },
  },
  {
    id: "chat005",
    participants: ["user123", "user005"],
    messages: [
      {
        id: "message008",
        senderId: "user005",
        type: "text",
        content: "Just finished the workout 💪🏽🏋️‍♂️",
        timestamp: "2024-07-16T07:00:00Z",
        read: false,
      },
      {
        id: "message009",
        senderId: "user005",
        type: "document",
        content: {
          uri: "path/to/document1.pdf",
          size: 1024,
          type: "pdf",
        },
        timestamp: "2024-07-16T07:10:00Z",
        read: false,
      },
    ],
    lastMessage: {
      id: "message009",
      senderId: "user005",
      type: "document",
      content: {
        uri: "path/to/document1.pdf",
        size: 1024,
        type: "pdf",
      },
      timestamp: "2024-07-16T07:10:00Z",
      read: false,
    },
    unreadCount: {
      user123: 1,
      user005: 0,
    },
  },
  {
    id: "chat006",
    participants: ["user123", "user006"],
    messages: [
      {
        id: "message010",
        senderId: "user006",
        type: "text",
        content: "Happy Birthday! 🎉🎂🎈",
        timestamp: "2024-07-15T10:45:00Z",
        read: true,
      },
      {
        id: "message011",
        senderId: "user123",
        type: "image",
        content: {
          uri: "path/to/image3.webp",
          size: 4096,
          type: "webp",
        },
        timestamp: "2024-07-15T10:50:00Z",
        read: true,
      },
    ],
    lastMessage: {
      id: "message011",
      senderId: "user123",
      type: "image",
      content: {
        uri: "path/to/image3.webp",
        size: 4096,
        type: "webp",
      },
      timestamp: "2024-07-15T10:50:00Z",
      read: true,
    },
    unreadCount: {
      user123: 0,
      user006: 0,
    },
  },
  {
    id: "chat007",
    participants: ["user123", "user007"],
    messages: [
      {
        id: "message012",
        senderId: "user007",
        type: "text",
        content: "Let's play some games tonight! 🎮🕹️",
        timestamp: "2024-07-16T18:20:00Z",
        read: false,
      },
    ],
    lastMessage: {
      id: "message012",
      senderId: "user007",
      type: "text",
      content: "Let's play some games tonight! 🎮🕹️",
      timestamp: "2024-07-16T18:20:00Z",
      read: false,
    },
    unreadCount: {
      user123: 1,
      user007: 0,
    },
  },
  {
    id: "chat008",
    participants: ["user123", "user008"],
    messages: [
      {
        id: "message013",
        senderId: "user008",
        type: "text",
        content: "Can you send me the report? 📄📧",
        timestamp: "2024-07-16T04:55:00Z",
        read: false,
      },
      {
        id: "message014",
        senderId: "user008",
        type: "document",
        content: {
          uri: "path/to/document2.docx",
          size: 2048,
          type: "docx",
        },
        timestamp: "2024-07-16T05:00:00Z",
        read: false,
      },
    ],
    lastMessage: {
      id: "message014",
      senderId: "user008",
      type: "document",
      content: {
        uri: "path/to/document2.docx",
        size: 2048,
        type: "docx",
      },
      timestamp: "2024-07-16T05:00:00Z",
      read: false,
    },
    unreadCount: {
      user123: 1,
      user008: 0,
    },
  },
  {
    id: "chat009",
    participants: ["user123", "user009"],
    messages: [
      {
        id: "message015",
        senderId: "user009",
        type: "text",
        content: "Let's catch up this weekend! 🥂",
        timestamp: "2024-07-15T15:00:00Z",
        read: true,
      },
      {
        id: "message016",
        senderId: "user123",
        type: "image",
        content: {
          uri: "path/to/image4.webp",
          size: 5120,
          type: "webp",
        },
        timestamp: "2024-07-15T15:10:00Z",
        read: true,
      },
    ],
    lastMessage: {
      id: "message016",
      senderId: "user123",
      type: "image",
      content: {
        uri: "path/to/image4.webp",
        size: 5120,
        type: "webp",
      },
      timestamp: "2024-07-15T15:10:00Z",
      read: true,
    },
    unreadCount: {
      user123: 0,
      user009: 0,
    },
  },
  {
    id: "chat010",
    participants: ["user123", "user010"],
    messages: [
      {
        id: "message017",
        senderId: "user010",
        type: "text",
        content: "Don't forget about the meeting tomorrow. 🗓️",
        timestamp: "2024-07-16T10:00:00Z",
        read: true,
      },
      {
        id: "message018",
        senderId: "user010",
        type: "video",
        content: {
          uri: "path/to/video2.mp4",
          size: 6144,
          type: "mp4",
        },
        timestamp: "2024-07-16T10:15:00Z",
        read: false,
      },
    ],
    lastMessage: {
      id: "message018",
      senderId: "user010",
      type: "video",
      content: {
        uri: "path/to/video2.mp4",
        size: 6144,
        type: "mp4",
      },
      timestamp: "2024-07-16T10:15:00Z",
      read: false,
    },
    unreadCount: {
      user123: 1,
      user010: 0,
    },
  },
];
