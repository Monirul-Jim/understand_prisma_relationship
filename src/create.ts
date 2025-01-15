import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is Title 2",
  //       content: "This is content2",
  //       author: "Jim",
  //     },
  //   });
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "The Future of Technology",
        content:
          "Exploring advancements in AI, robotics, and quantum computing.",
        author: "Dr. Emily Carter",
      },
      {
        title: "Sustainable Living Practices",
        content: "Tips and tricks to reduce waste and live sustainably.",
        author: "John Green",
      },
      {
        title: "The Art of Mindfulness",
        content: "How mindfulness improves mental health and productivity.",
        author: "Sophia Lee",
      },
      {
        title: "Investing for Beginners",
        content: "A comprehensive guide to stock market investments.",
        author: "Michael Turner",
      },
      {
        title: "The History of Space Exploration",
        content: "From the Moon landing to Mars missions.",
        author: "Neil Foster",
      },
      {
        title: "The Power of Habit",
        content: "How small daily actions lead to significant life changes.",
        author: "Laura Bennett",
      },
      {
        title: "Cooking Made Simple",
        content: "Quick and easy recipes for busy people.",
        author: "Chef Daniel Ruiz",
      },
      {
        title: "The Psychology of Happiness",
        content: "Understanding what makes us truly happy.",
        author: "Dr. Amanda Williams",
      },
      {
        title: "Traveling on a Budget",
        content: "Affordable destinations and tips for saving money.",
        author: "Alice Brown",
      },
      {
        title: "Fitness for Everyone",
        content: "Workouts and nutrition plans for all levels.",
        author: "Chris Evans",
      },
      {
        title: "The Rise of Cryptocurrencies",
        content: "Understanding Bitcoin, Ethereum, and blockchain technology.",
        author: "Samuel Harris",
      },
      {
        title: "The Evolution of Social Media",
        content: "How platforms are shaping communication and culture.",
        author: "Rebecca Clark",
      },
      {
        title: "Climate Change: What We Can Do",
        content: "Actions individuals can take to combat global warming.",
        author: "Dr. Olivia Moore",
      },
      {
        title: "The Science of Sleep",
        content: "Why good sleep is essential for health and performance.",
        author: "Dr. Nathaniel Hayes",
      },
      {
        title: "Entrepreneurship 101",
        content: "Steps to start and grow your own business.",
        author: "Mark Peterson",
      },
      {
        title: "The Digital Nomad Lifestyle",
        content: "Working remotely while traveling the world.",
        author: "Anna Taylor",
      },
      {
        title: "Art and Creativity in the Modern Era",
        content: "Exploring how technology influences art today.",
        author: "Lucas Martin",
      },
      {
        title: "The Ethics of Artificial Intelligence",
        content: "Balancing innovation with moral considerations.",
        author: "Dr. Rachel Adams",
      },
      {
        title: "The Importance of Financial Literacy",
        content: "Managing personal finances effectively.",
        author: "David Johnson",
      },
      {
        title: "The Future of Education",
        content: "How e-learning and technology are changing the classroom.",
        author: "Professor Claire White",
      },
      {
        title: "Building Resilient Communities",
        content:
          "How to strengthen local support networks and foster collaboration.",
        author: "Sarah Mitchell",
      },
      {
        title: "The Role of Renewable Energy",
        content: "Exploring solar, wind, and hydroelectric power solutions.",
        author: "Dr. Liam Grant",
      },
      {
        title: "The Science Behind Mental Health",
        content: "Understanding brain chemistry and emotional well-being.",
        author: "Dr. Emily Lopez",
      },
      {
        title: "Mastering Time Management",
        content: "Techniques to improve productivity and balance life.",
        author: "Ethan Cooper",
      },
      {
        title: "AI in Healthcare",
        content: "Revolutionizing diagnostics, treatment, and patient care.",
        author: "Dr. Megan Blake",
      },
      {
        title: "The Global Impact of E-commerce",
        content: "How online shopping is reshaping economies.",
        author: "Jacob Reed",
      },
      {
        title: "Storytelling Through Photography",
        content: "Tips for capturing moments that convey powerful stories.",
        author: "Olivia Hernandez",
      },
      {
        title: "Understanding Climate Policies",
        content: "Key international agreements and their implications.",
        author: "Dr. Noah Brooks",
      },
      {
        title: "The Evolution of Music Genres",
        content: "From classical symphonies to modern electronic beats.",
        author: "Sophia Walker",
      },
      {
        title: "Breaking Down Barriers in Tech",
        content:
          "Promoting diversity and inclusion in the technology industry.",
        author: "Nathan Rivera",
      },
    ],
  });
  console.log(createMany);
};
main();
