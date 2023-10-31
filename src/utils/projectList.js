import Login from '../assets/buddy/login-reg-buddy.png';
import Feed from '../assets/buddy/feed-filteron.png';
import Nokia from '../assets/nokia/export.mp4';
import AddNewTrip from '../assets/sirpa/addnewtrip.png';
import CreateMemory from '../assets/sirpa/creatememory.png';
import FeedSirpa from '../assets/sirpa/feed.png';
import FeedPicText from '../assets/sirpa/feedpictext.png';
import FolderOpen from '../assets/sirpa/folderopen.png';
import MapSirpa from '../assets/sirpa/map.png';
import ProfileSirpa from '../assets/sirpa/profile.png';
import StarterPic from '../assets/sirpa/starterpic.png';
import LoginVideo from '../assets/sirpa/sirpa-loginvideo.mp4';
import StartPage from '../assets/restroom/startpage.png';
import ChatRooms from '../assets/restroom/chatrooms.png';
import ChatTools from '../assets/restroom/chattools.png';
import DrawingPad from '../assets/restroom/drawingpad.png';
import DrawingPreview from '../assets/restroom/drawingpreview.png';
import SendDrawing from '../assets/restroom/senddrawing.png';
import SendPhoto from '../assets/restroom/sendphoto.png';
import ChatView from '../assets/restroom/chatview.png';
import ColorBlind from '../assets/restroom/colorblind.png';
import BlackAndWhite from '../assets/restroom/blackandwhite.png';
import NokiaDesktop1 from '../assets/nokia/NokiaDesktop1.png';
import NokiaDesktop2 from '../assets/nokia/NokiaDesktop2.png';
import NokiaDesktop3 from '../assets/nokia/NokiaDesktop3.png';
import NokiaDesktop4 from '../assets/nokia/NokiaDesktop4.png';
import NokiaDesktop5 from '../assets/nokia/NokiaDesktop5.png';
import NokiaDesktop6 from '../assets/nokia/NokiaDesktop6.png';
import NokiaDesktop7 from '../assets/nokia/NokiaDesktop7.png';
import NokiaDesktop8 from '../assets/nokia/NokiaDesktop8.png';
import NokiaDesktop9 from '../assets/nokia/NokiaDesktop9.png';
import NokiaDesktop10 from '../assets/nokia/NokiaDesktop10.png';
import NokiaDesktop11 from '../assets/nokia/NokiaDesktop11.png';
import NokiaMobile1 from '../assets/nokia/NokiaMobile1.png';
import NokiaMobile2 from '../assets/nokia/NokiaMobile2.png';
import NokiaMobile3 from '../assets/nokia/NokiaMobile3.png';
import NokiaMobile4 from '../assets/nokia/NokiaMobile4.png';
import NokiaMobile5 from '../assets/nokia/NokiaMobile5.png';
import NokiaMobile6 from '../assets/nokia/NokiaMobile6.png';
import NokiaMobile7 from '../assets/nokia/NokiaMobile7.png';

const projectList = [
  {
    title: "Nokia Homebase Emotions",
    pictures: [
      {
        source: Nokia,
        alt: "Nokia video",
        width: "600px",
        video: true
      },
      {
        source: NokiaDesktop1,
        alt: "Nokia desktop view",
        width: "600px",
      },
      {
        source: NokiaDesktop2,
        alt: "Nokia desktop view 2",
        width: "600px",
      },
      {
        source: NokiaDesktop3,
        alt: "Nokia desktop view 3",
        width: "600px",
      },
      {
        source: NokiaDesktop4,
        alt: "Nokia desktop view 4",
        width: "600px",
      },
      {
        source: NokiaDesktop5,
        alt: "Nokia desktop view 5",
        width: "600px",
      },
      {
        source: NokiaDesktop6,
        alt: "Nokia desktop view 6",
        width: "600px",
      },
      {
        source: NokiaDesktop7,
        alt: "Nokia desktop view 7",
        width: "600px",
      },
      {
        source: NokiaDesktop8,
        alt: "Nokia desktop view 8 ",
        width: "600px",
      },
      {
        source: NokiaDesktop9,
        alt: "Nokia desktop view 9",
        width: "600px",
      },
      {
        source: NokiaDesktop10,
        alt: "Nokia desktop view 10",
        width: "600px",
      },
      {
        source: NokiaDesktop11,
        alt: "Nokia desktop view 11",
        width: "600px",
      },
      {
        source: NokiaMobile1,
        alt: "Nokia Mobile view 1",
      },
      {
        source: NokiaMobile2,
        alt: "Nokia Mobile view 2",
      },
      {
        source: NokiaMobile3,
        alt: "Nokia Mobile view 3",
      },
      {
        source: NokiaMobile4,
        alt: "Nokia Mobile view 4",
      },
      {
        source: NokiaMobile5,
        alt: "Nokia Mobile view 5",
      },
      {
        source: NokiaMobile6,
        alt: "Nokia Mobile view 6",
      },
      {
        source: NokiaMobile7,
        alt: "Nokia Mobile view 7",
      },
    ],
    description: `Mobile first web-application for Nokia. This app allows Nokia employees to share their daily emotions.
     The application is combined with an LED lighting installation that reacts to each emotion expressed,
      representing the emotions given throughout the day with different color ranges as a visual display.`,
    techStack: ["JavaScript", "React", "C", "Node.js", "Express.js", "SQLite"]
  },
  {
    title: "Restroom Chat",
    pictures: [
      {
        source: StartPage,
        alt: "Start page of Restroom chat",
        width: "250px",
      },
      {
        source: ChatRooms,
        alt: "Chat room page of Restroom chat",
        width: "250px",
      },
      {
        source: ChatView,
        alt: "Chat view of Restroom chat",
        width: "250px",
      },
      {
        source: ChatTools,
        alt: "Chat tools of Restroom chat",
        width: "250px",
      },
      {
        source: DrawingPad,
        alt: "Drawing pad of Restroom chat",
        width: "250px",
      },
      {
        source: DrawingPreview,
        alt: "Drawing preview of Restroom chat",
        width: "250px",
      },
      {
        source: SendDrawing,
        alt: "Sending a drawing in Restroom chat",
        width: "250px",
      },
      {
        source: SendPhoto,
        alt: "Sending a photo in Restroom chat",
        width: "250px",
      },
      {
        source: ColorBlind,
        alt: "Color blind setting inRestroom chat",
        width: "250px",
      },
      {
        source: BlackAndWhite,
        alt: "Colorblind mode on in Restroom chat",
        width: "250px",
      },
    ],
    description: `This app is a unique concept that brings the age-old tradition of drawing and writing on toilet walls into the digital world. The app is designed to work with Bluetooth, making it completely connectionless, and users can send messages through Bluetooth advertising.
   `,
    techStack: ["Kotlin", "Android", "Jetpack Compose", "Room", "Bluetooth"]

  },
  {
    title: "Buddy",
    pictures: [
      {
        source: Login,
        alt: "Login screen for Buddy-app",
        width: "600px",

      },
      {
        source: Feed,
        alt: "Feed screen for Buddy-app",
        width: "600px",

      }
    ],
    description: "Buddy is a cross-platform mobile application designed to facilitate social connections among individuals seeking company for various events, activities, or casual get-togethers. Developed using React Native, it caters to both iOS and Android platforms. This project, originally conceived as an educational endeavor, focused on creating a versatile media-sharing application that leverages RESTful API technology.",
    techStack: ["React Native", "JavaScript", "Node.js", "REST API", "Expo"]
  },

  {
    title: "Sirpa",
    pictures: [
      {
        source: StarterPic,
        alt: "Launch view of the Sirpa-app",
        width: "250px",

      },
      {
        source: LoginVideo,
        alt: "Login video for Sirpa",
        width: "250px",
        video: true
      },
      {
        source: AddNewTrip,
        alt: "Add new trip view from Sirpa-app",
        width: "250px",

      },
      {
        source: CreateMemory,
        alt: "Create a new memory view from Sirpa-app",
        width: "250px",

      },
      {
        source: FeedSirpa,
        alt: "Feed view from Sirpa-app",
        width: "250px",

      },
      {
        source: FeedPicText,
        alt: "Text on top of picture on Sirpa-app",
        width: "250px",

      },
      {
        source: FolderOpen,
        alt: "Open folder",
        width: "250px",
      },
      {
        source: MapSirpa,
        alt: "Map view of Sirpa-app",
        width: "250px",
      },
      {
        source: ProfileSirpa,
        alt: "Profile view on Sirpa-app",
        width: "250px",
      }
    ],
    description: `Sirpa is a versatile iOS travel app that simplifies journey documentation.
     It supports multiple languages, uses Core Data and Firestore for data storage, features MapKit for location tracking
      and employs speech recognition for quick note-taking. Users can create geotagged posts, manage trips,
       and explore random locations. It offers device-specific login, post management, and a user-friendly profile interface,
        making travel documentation efficient and engaging.`,
    techStack: ["iOS", "Swift", "MapKit", "CoreData", "Firebase Firetore & Storage", "Speech-to-text", "Localization"]
  },
];

export default projectList;