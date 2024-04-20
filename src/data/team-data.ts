
import { teamType } from "@/interFace/interFace";
import teamImg1 from "../../public/assets/img/member/member-img-01.png";
import teamImg2 from "../../public/assets/img/member/member-img-02.png";
import teamImg3 from "../../public/assets/img/member/member-img-03.png";
import teamImg4 from "../../public/assets/img/member/member-img-04.png";
import teamImg5 from "../../public/assets/img/member/member-img-05.png";
import teamImg6 from "../../public/assets/img/member/member-img-06.png";
import teamImg7 from "../../public/assets/img/member/member-img-07.png";
import teamImg8 from "../../public/assets/img/member/member-img-08.png";
import teamImg9 from "../../public/assets/img/member/member-img-09.png";
import teamImg10 from "../../public/assets/img/member/member-img-10.png";
import teamImg11 from "../../public/assets/img/member/member-img-11.png";
import teamImg12 from "../../public/assets/img/member/member-img-12.png";
import membarImage from "../../public/assets/img/member/member-img-01.png";
import membarImageTwo from "../../public/assets/img/member/member-img-02.png";


const team_data:teamType[] = [
  {
    id: 1,
    image: teamImg1,
    title: "Charls David",
    info:"Data Scientist, Codexpand",
    socialIcon:[
        { id:1, icon:"fab fa-facebook", socialLink:"https://www.facebook.com/"},
        { id:2, icon:"fab fa-twitter", socialLink:"https://twitter.com/"},
        { id:3, icon:"fab fa-vimeo-v",socialLink:"https://vimeo.com/"},
        { id:4, icon:"fab fa-linkedin", socialLink:"https://www.linkedin.com/"},
    ],
    ratingAve:4.9,
    ratingCount:56,
    memberCourse:15
  },
  {
    id: 2,
    image: teamImg2,
    title: "Nicholson Ocak",
    info:"UI/UX Researcher",
    socialIcon:[
        { id:1, icon:"fab fa-facebook", socialLink:"https://www.facebook.com/"},
        { id:2, icon:"fab fa-twitter", socialLink:"https://twitter.com/"},
        { id:3, icon:"fab fa-vimeo-v",socialLink:"https://vimeo.com/"},
        { id:4, icon:"fab fa-linkedin", socialLink:"https://www.linkedin.com/"},
    ],
    ratingAve:4.7,
    ratingCount:52,
    memberCourse:12
  
  },
  {
    id: 3,
    image: teamImg3,
    title: "Miriam Abate",
    info:"Web Developer",
    socialIcon:[
        { id:1, icon:"fab fa-facebook", socialLink:"https://www.facebook.com/"},
        { id:2, icon:"fab fa-twitter", socialLink:"https://twitter.com/"},
        { id:3, icon:"fab fa-vimeo-v",socialLink:"https://vimeo.com/"},
        { id:4, icon:"fab fa-linkedin", socialLink:"https://www.linkedin.com/"},
    ],
    ratingAve:4.8,
    ratingCount:54,
    memberCourse:16

  },
  {
    id: 4,
    image: teamImg4,
    title: "Vanbrunt Carl",
    info:"Entrepreneur",
    socialIcon:[
        { id:1, icon:"fab fa-facebook", socialLink:"https://www.facebook.com/"},
        { id:2, icon:"fab fa-twitter", socialLink:"https://twitter.com/"},
        { id:3, icon:"fab fa-vimeo-v",socialLink:"https://vimeo.com/"},
        { id:4, icon:"fab fa-linkedin", socialLink:"https://www.linkedin.com/"},
    ],
    ratingAve:4.6,
    ratingCount:50,
    memberCourse:10

  },
  {
    id: 5,
    image: teamImg5,
    title: "Anthony Peter",
    info:"Software Engineer",
    socialIcon:[
        { id:1, icon:"fab fa-facebook", socialLink:"https://www.facebook.com/"},
        { id:2, icon:"fab fa-twitter", socialLink:"https://twitter.com/"},
        { id:3, icon:"fab fa-vimeo-v",socialLink:"https://vimeo.com/"},
        { id:4, icon:"fab fa-linkedin", socialLink:"https://www.linkedin.com/"},
    ],
    ratingAve:4.8,
    ratingCount:54,
    memberCourse:14

  },
  {
    id: 6,
    image: teamImg6,
    title: "John Everton",
    info:"Data Scientist",
    socialIcon:[
        { id:1, icon:"fab fa-facebook", socialLink:"https://www.facebook.com/"},
        { id:2, icon:"fab fa-twitter", socialLink:"https://twitter.com/"},
        { id:3, icon:"fab fa-vimeo-v",socialLink:"https://vimeo.com/"},
        { id:4, icon:"fab fa-linkedin", socialLink:"https://www.linkedin.com/"},
    ],
    ratingAve:4.6,
    ratingCount:48,
    memberCourse:8

  },
  {
    id: 7,
    image: teamImg7,
    title: "Joseph Daniyel",
    info:"Sr. Developer, BDevs",
    socialIcon:[
        { id:1, icon:"fab fa-facebook", socialLink:"https://www.facebook.com/"},
        { id:2, icon:"fab fa-twitter", socialLink:"https://twitter.com/"},
        { id:3, icon:"fab fa-vimeo-v",socialLink:"https://vimeo.com/"},
        { id:4, icon:"fab fa-linkedin", socialLink:"https://www.linkedin.com/"},
    ],
    ratingAve:4.8,
    ratingCount:54,
    memberCourse:12

  },
  {
    id: 8,
    image: teamImg8,
    title: "Cristina Ena",
    info:"Drawing Expert",
    socialIcon:[
        { id:1, icon:"fab fa-facebook", socialLink:"https://www.facebook.com/"},
        { id:2, icon:"fab fa-twitter", socialLink:"https://twitter.com/"},
        { id:3, icon:"fab fa-vimeo-v",socialLink:"https://vimeo.com/"},
        { id:4, icon:"fab fa-linkedin", socialLink:"https://www.linkedin.com/"},
    ],
    ratingAve:5.2,
    ratingCount:58,
    memberCourse:16

  },
  {
    id: 9,
    image: teamImg9,
    title: "Jeanette Harrat",
    info:"Gym Instructor",
    socialIcon:[
        { id:1, icon:"fab fa-facebook", socialLink:"https://www.facebook.com/"},
        { id:2, icon:"fab fa-twitter", socialLink:"https://twitter.com/"},
        { id:3, icon:"fab fa-vimeo-v",socialLink:"https://vimeo.com/"},
        { id:4, icon:"fab fa-linkedin", socialLink:"https://www.linkedin.com/"},
    ],
    ratingAve:4.9,
    ratingCount:57,
    memberCourse:14

  },
  {
    id: 10,
    image: teamImg10,
    title: "Satterfield",
    info:"Software Engineer",
    socialIcon:[
        { id:1, icon:"fab fa-facebook", socialLink:"https://www.facebook.com/"},
        { id:2, icon:"fab fa-twitter", socialLink:"https://twitter.com/"},
        { id:3, icon:"fab fa-vimeo-v",socialLink:"https://vimeo.com/"},
        { id:4, icon:"fab fa-linkedin", socialLink:"https://www.linkedin.com/"},
    ],
    ratingAve:4.8,
    ratingCount:52,
    memberCourse:10

  },
  {
    id: 11,
    image: teamImg11,
    title: "uny Czarnecki",
    info:"Digital Marketer, Conda",
    socialIcon:[
        { id:1, icon:"fab fa-facebook", socialLink:"https://www.facebook.com/"},
        { id:2, icon:"fab fa-twitter", socialLink:"https://twitter.com/"},
        { id:3, icon:"fab fa-vimeo-v",socialLink:"https://vimeo.com/"},
        { id:4, icon:"fab fa-linkedin", socialLink:"https://www.linkedin.com/"},
    ],
    ratingAve:4.8,
    ratingCount:54,
    memberCourse:12

  },
  {
    id: 12,
    image: teamImg12,
    title: "Vickie Garza",
    info:"Musician and Vocalist",
    socialIcon:[
        { id:1, icon:"fab fa-facebook", socialLink:"https://www.facebook.com/"},
        { id:2, icon:"fab fa-twitter", socialLink:"https://twitter.com/"},
        { id:3, icon:"fab fa-vimeo-v",socialLink:"https://vimeo.com/"},
        { id:4, icon:"fab fa-linkedin", socialLink:"https://www.linkedin.com/"},
    ],
    ratingAve:4.9,
    ratingCount:62,
    memberCourse:17

  },
  //webinar details page data
  {
    id: 13,
    image: membarImage,
    title: "Charls David",
    info:"Data Scientist, Codexpand",
    socialIcon:[
        { id:1, icon:"fab fa-facebook", socialLink:"https://www.facebook.com/"},
        { id:2, icon:"fab fa-twitter", socialLink:"https://twitter.com/"},
        { id:3, icon:"fab fa-vimeo-v",socialLink:"https://vimeo.com/"},
        { id:4, icon:"fab fa-linkedin", socialLink:"https://www.linkedin.com/"},
    ],
    ratingAve:4.8,
    ratingCount:54,
    memberCourse:13

  },
  {
    id: 14,
    image: membarImageTwo,
    title: "Nicholson Ocak",
    info:"Musician and Vocalist",
    socialIcon:[
        { id:1, icon:"fab fa-facebook", socialLink:"https://www.facebook.com/"},
        { id:2, icon:"fab fa-twitter", socialLink:"https://twitter.com/"},
        { id:3, icon:"fab fa-vimeo-v",socialLink:"https://vimeo.com/"},
        { id:4, icon:"fab fa-linkedin", socialLink:"https://www.linkedin.com/"},
    ],
    ratingAve:4.8,
    ratingCount:45,
    memberCourse:10

  },
];

export default team_data;
