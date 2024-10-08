import {
  benefitCard3,
  benefitCard5,
  benefitCard6,
  thumbnail_1,
  thumbnail_2,
  thumbnail_3,
  thumbnail_4
} from '../assets'

export const benefits = [
  {
    id: '0',
    title: 'Frontend Developer - S3Corp',
    years: '2021 - 2023',
    text: "Description: The project belonged to Razer, a company headquartered in Singapore. Synapse allows users to adjust the colour on Razer's devices",
    backgroundUrl: benefitCard3,
    skills:
      'HTML, SASS, Javascript, React, React testing library, Redux, TailwindCSS, ElectronJS, Typescript'
  },
  {
    id: '1',
    title: 'FullStack Developer (PT) - NPTech',
    text: 'Description:The startup project was developed by NPTech, a water supply enterprise, to manage customer profiles.',
    years: '2022 - 2023',
    backgroundUrl: benefitCard5,
    light: true,
    skills:
      'HTML, SASS, Javascript, React, Redux, Antd, ExpressJs, SocketIO, Sequelize, SQLServer, Docker, Jenkins, AWS.'
  },
  {
    id: '2',
    title: 'Frontend Developer - EliSoftware',
    text: 'Description: The application allows staff to store their documents on a platform like Google Drive, Dropbox, and OneDrive.',
    years: '2019 - 2021',
    backgroundUrl: benefitCard6,
    skills:
      'HTML, CSS, Bootraps 4, Javascript, React, Redux, Docker, PHP, MySQL'
  }
]

export const portfolio = [
  {
    id: '0',
    title: 'Coder Editor',
    text: "Description: The project belonged to Razer, a company headquartered in Singapore. Synapse allows users to adjust the colour on Razer's devices",
    backgroundUrl: benefitCard3,
    thumbnail: thumbnail_1,
    linkGithub: 'https://github.com/hthanhlong/react_code_editor',
    linkLive: 'https://ide.hthanhlong97.com/'
  },
  {
    id: '1',
    title: 'Chat page',
    text: 'Description:The startup project was developed by NPTech, a water supply enterprise, to manage customer profiles.',
    backgroundUrl: benefitCard5,
    thumbnail: thumbnail_2,
    linkGithub: 'https://github.com/hthanhlong/chat-page',
    linkLive: 'https://chatpage.hthanhlong97.com/login'
  },
  {
    id: '2',
    title: 'Nike Page',
    text: 'Description: The application allows staff to store their documents on a platform like Google Drive, Dropbox, and OneDrive.',
    backgroundUrl: benefitCard6,
    thumbnail: thumbnail_3,
    linkGithub: 'https://github.com/hthanhlong/nike_clone',
    linkLive: 'https://ecommerce.hthanhlong97.com'
  },
  {
    id: '3',
    title: 'Jamee tea store',
    text: 'Description: The app which is my forseeable start-up for the grocery store allows customers to order products online.',
    backgroundUrl: benefitCard6,
    thumbnail: thumbnail_4,
    linkGithub: 'https://github.com/hthanhlong/jammee-tea',
    linkLive: 'https://jameetea.hthanhlong97.com/'
  }
]

export const ENV = {
  VITE_FORM_ID: import.meta.env.VITE_FORM_ID,
  VITE_FORM_TEMPLATE: import.meta.env.VITE_FORM_TEMPLATE,
  VITE_FORM_KEY: import.meta.env.VITE_FORM_KEY
}
