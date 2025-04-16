import churchImg1 from "../assets/evangelist_img1.jpg";
import churchImg2 from "../assets/evangelist_img2.jpg";
import eucharistImg from "../assets/eucharist.jpg";
import formImage from "../assets/forms-image.jpg";
import assistantPriest from "../assets/Assistantpriest.jpg";
import churchIcon from "../assets/churchicon.jpg";

// Import the events from the notification service to ensure consistency
import { getUpcomingEvents } from "../services/notificationService";

// This will be populated with notification events in the blog service
let notificationEvents = [];

// Initialize notification events
getUpcomingEvents().then(events => {
  // Convert notification events to blog post format
  notificationEvents = events.map(event => ({
    id: `event-${event.id}`,
    title: event.title,
    date: event.date,
    category: "Announcements",
    image: churchIcon,
    author: "Parish Office",
    summary: event.description,
    location: event.location,
    url: `/blog/event-${event.id}`,
    featured: event.isHighPriority,
    isEvent: true
  }));
});

const catholicNews = [
  // Announcements Section - Holy Week & Easter Schedule
  {
    id: 201,
    title: "Palm Sunday",
    date: "April 13, 2025",
    category: "Announcements",
    image: churchIcon,
    author: "Parish Office",
    summary: "Mass begins at ROWI.",
    url: "/blog/palm-sunday-2025",
    featured: true
  },
  {
    id: 202,
    title: "Holy Thursday - Mass of the Lord's Supper",
    date: "April 17, 2025",
    category: "Announcements",
    image: churchIcon,
    author: "Parish Office",
    summary: "Mass of the Lord's Supper.",
    url: "/blog/holy-thursday-2025",
    featured: true
  },
  {
    id: 203,
    title: "Good Friday - Stations of the Cross",
    date: "April 18, 2025",
    category: "Announcements",
    image: churchIcon,
    author: "Parish Office",
    summary: "Stations of the Cross at 7:00AM. Divine Mercy Novena at 2:30PM. Veneration of the Cross at 3:00PM.",
    url: "/blog/good-friday-2025",
    featured: true
  },
  {
    id: 204,
    title: "Holy Saturday - Easter Vigil",
    date: "April 19, 2025",
    category: "Announcements",
    image: churchIcon,
    author: "Parish Office",
    summary: "Mass of Easter Vigil at 7:00PM.",
    url: "/blog/holy-saturday-2025",
    featured: true
  },
  {
    id: 205,
    title: "Easter Sunday",
    date: "April 20, 2025",
    category: "Announcements",
    image: churchIcon,
    author: "Parish Office",
    summary: "Masses at 7:00AM and 9:30AM.",
    url: "/blog/easter-sunday-2025",
    featured: true
  },
  {
    id: 206,
    title: "Easter Picnic",
    date: "April 21, 2025",
    category: "Announcements",
    image: churchIcon,
    author: "Parish Office",
    summary: "Begins with Holy Mass at 12:00PM.",
    url: "/blog/easter-picnic-2025",
    featured: true
  },
  // Announcements Section - Upcoming Programs

  {
    id: 1,
    title: "Record Number of Adult Baptisms Shows Surge Among Youth",
    date: "April 12, 2025",
    category: "Faith",
    image: churchImg1,
    author: "Parish Team",
    summary: "The Catholic Church is welcoming more than 10,384 adult converts at Easter baptisms this year, marking a 45% increase from 2024, with young adults now representing the largest demographic. This resurgence of faith among youth signals a renewed interest in Catholic traditions and community.",
    url: "/blog/adult-baptisms-surge"
  },
  {
    id: 2,
    title: "Pope Francis Celebrates Palm Sunday Mass with Thousands of Pilgrims",
    date: "April 13, 2025",
    category: "Vatican",
    image: eucharistImg,
    author: "Vatican News",
    summary: "Pope Francis led Palm Sunday celebrations in St. Peter's Square, marking the beginning of Holy Week. Despite recent health challenges, the Holy Father greeted pilgrims and delivered a moving homily on Christ's passion and the importance of accompanying those who suffer in today's world.",
    url: "/blog/pope-palm-sunday"
  },
  {
    id: 3,
    title: "Parish Youth Council Organizes Easter Outreach Program",
    date: "April 10, 2025",
    category: "Parish News",
    image: churchImg2,
    author: "Youth Ministry",
    summary: "Our Parish Youth Council has organized an Easter outreach program to support vulnerable members of our community. The initiative includes food distribution, home visits to the elderly, and special Easter baskets for children in need. Volunteers are welcome to join this meaningful effort.",
    url: "/blog/easter-outreach"
  },
  {
    id: 4,
    title: "Scholars Issue Joint Statement on Marks of the Church",
    date: "April 8, 2025",
    category: "Theology",
    image: formImage,
    author: "Catholic Scholars",
    summary: "Leading Catholic theologians have issued a joint statement reaffirming the four marks of the Church: one, holy, catholic, and apostolic. The document addresses contemporary challenges to Church unity and provides guidance for the faithful on understanding these essential characteristics in today's context.",
    url: "/blog/marks-of-church"
  },
  {
    id: 5,
    title: "Parish to Host Divine Mercy Sunday Celebration",
    date: "April 14, 2025",
    category: "Parish Events",
    image: assistantPriest,
    author: "Parish Office",
    summary: "Our parish will host a special celebration for Divine Mercy Sunday on April 20. The event will include confession, adoration, and the Divine Mercy Chaplet. All parishioners are invited to participate in this beautiful devotion established by St. Faustina and promoted by St. John Paul II.",
    url: "/blog/divine-mercy-sunday"
  },
  {
    id: 6,
    title: "Catholic Relief Services Responds to Flooding in Central Africa",
    date: "April 11, 2025",
    category: "Charity",
    image: churchImg1,
    author: "CRS Team",
    summary: "Catholic Relief Services has mobilized resources to assist victims of severe flooding in Central Africa. The organization is providing emergency shelter, clean water, and medical assistance to thousands of displaced families. Our parish is collecting donations to support this critical humanitarian effort.",
    url: "/blog/crs-flood-response"
  },
  {
    id: 7,
    title: "New Catechism Classes Beginning for Summer Session",
    date: "April 15, 2025",
    category: "Education",
    image: formImage,
    author: "Religious Education",
    summary: "Registration is now open for our summer catechism classes. The program offers comprehensive faith formation for children, teens, and adults preparing for sacraments. Classes will cover the fundamentals of Catholic teaching, prayer, and moral life in an engaging and accessible format.",
    url: "/blog/summer-catechism"
  },
  {
    id: 8,
    title: "Catholic Bishops Address Environmental Concerns in New Statement",
    date: "April 9, 2025",
    category: "Social Teaching",
    image: churchImg2,
    author: "USCCB",
    summary: "The United States Conference of Catholic Bishops has released a new statement on environmental stewardship, emphasizing our moral responsibility to care for God's creation. The document builds on Pope Francis's encyclical Laudato Si' and offers practical guidance for parishes and individuals.",
    url: "/blog/environmental-statement"
  },
  {
    id: 9,
    title: "Parish Choir Prepares Special Music for Easter Vigil",
    date: "April 13, 2025",
    category: "Liturgy",
    image: eucharistImg,
    author: "Music Ministry",
    summary: "Our parish choir has been rehearsing beautiful sacred music for the Easter Vigil celebration. The repertoire includes traditional hymns and contemporary compositions that enhance the liturgy's solemnity and joy. The choir welcomes new members who wish to contribute their talents to our worship.",
    url: "/blog/easter-music"
  }
];

export default catholicNews;
