import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';
import img6 from 'src/assets/images/profile/user-6.jpg';

export interface PaginationDataType {
  status?: string;
  avatar?: string;
  name?: string;
  project?: string;
  percent?: number;
  users:{
     img:string;
  }[];
}

export const basicsTableData: PaginationDataType[] = [
  {
    status: 'active',
    avatar: img1,
    name: 'Olivia Rhye',
    project: 'Xtreme admin',
    percent: 60,
    users: [{ img: img1 }, { img: img2}],
  },
  {
    status: 'cancel',
    avatar: img2,
    name: 'Barbara Steele',
    project: 'Adminpro admin',
    percent: 30,
    users: [
      { img: img1},
      { img: img2 },
      { img: img3 },
    ],
  },
  {
    status: 'pending',
    avatar: img5,
    name: 'Isabel Vasquez',
    project: 'Siyaratech Innovations admin',
    percent: 32,
    users: [{ img: img2 }, { img: img4 }],
  },
  {
    status: 'active',
    avatar: img1,
    name: 'Olivia Rhye',
    project: 'Xtreme admin',
    percent: 60,
    users: [{ img: img1 }, { img: img2 }],
  },
  {
    status: 'cancel',
    avatar: img2,
    name: 'Barbara Steele',
    project: 'Adminpro admin',
    percent: 30,
    users: [
      { img: img1 },
      { img: img2},
      { img: img3 },
    ],
  },
  {
    status: 'active',
    avatar: img3,
    name: 'Leonard Gordon',
    project: 'Monster admin',
    percent: 45,
    users: [{ img: img3 }, { img: img2}],
  },
  {
    status: 'pending',
    avatar:img4,
    name: 'Evelyn Pope',
    project: 'Materialpro admin',
    percent: 37,
    users: [
      { img: img1 },
      { img: img2},
      { img: img5 },
    ],
  },
  {
    status: 'active',
    avatar: img3,
    name: 'Leonard Gordon',
    project: 'Monster admin',
    percent: 45,
    users: [{ img: img3 }, { img: img2}],
  },
  {
    status: 'pending',
    avatar:img4,
    name: 'Evelyn Pope',
    project: 'Materialpro admin',
    percent: 37,
    users: [
      { img: img1 },
      { img: img2},
      { img: img5 },
    ],
  },
  {
    status: 'cancel',
    avatar: img5,
    name: 'Tommy Garza',
    project: 'Elegant admin',
    percent: 87,
    users: [{ img: img5 }, { img: img6 }],
  },
  {
    status: 'pending',
    avatar: img6,
    name: 'Isabel Vasquez',
    project: 'Siyaratech Innovations admin',
    percent: 32,
    users: [{ img: img2}, { img:img4 }],
  },
  {
    status: 'active',
    avatar: img1,
    name: 'Olivia Rhye',
    project: 'Xtreme admin',
    percent: 60,
    users: [{ img: img1 }, { img: img2}],
  },
  {
    status: 'cancel',
    avatar: img2,
    name: 'Barbara Steele',
    project: 'Adminpro admin',
    percent: 30,
    users: [
      { img: img1 },
      { img: img2},
      { img: img3 },
    ],
  },
  {
    status: 'active',
    avatar: img3,
    name: 'Leonard Gordon',
    project: 'Monster admin',
    percent: 45,
    users: [{ img: img3 }, { img: img2}],
  },
  {
    status: 'pending',
    avatar: img4,
    name: 'Evelyn Pope',
    project: 'Materialpro admin',
    percent: 37,
    users: [
      { img: img1 },
      { img: img2},
      { img: img5 },
    ],
  },
  {
    status: 'cancel',
    avatar: img5,
    name: 'Tommy Garza',
    project: 'Elegant admin',
    percent: 87,
    users: [{ img: img5 }, { img: img6 }],
  },
  {
    status: 'pending',
    avatar: img6,
    name: 'Isabel Vasquez',
    project: 'Siyaratech Innovations admin',
    percent: 32,
    users: [{ img: img2}, { img: img4 }],
  },
];
