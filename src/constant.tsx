import {
  benefitCard3,
  benefitCard5,
  benefitCard6,
  thumbnail_1,
  thumbnail_2,
  thumbnail_3
} from './assets'

export const benefits = [
  {
    id: '0',
    title: 'Frontend Developer - S3Corp',
    text: "Description: The project belonged to Razer, a company headquartered in Singapore. Synapse allows users to adjust the colour on Razer's devices",
    backgroundUrl: benefitCard3
  },
  {
    id: '1',
    title: 'FullStack Developer - NPTech',
    text: 'Description:The startup project was developed by NPTech, a water supply enterprise, to manage customer profiles.',
    backgroundUrl: benefitCard5,
    light: true
  },
  {
    id: '2',
    title: 'Frontend Developer - EliSoftware',
    text: 'Description: The application allows staff to store their documents on a platform like Google Drive, Dropbox, and OneDrive.',
    backgroundUrl: benefitCard6
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
    linkLive: 'https://codeeditor.hthanhlong97.com/'
  },
  {
    id: '1',
    title: 'Chat page',
    text: 'Description:The startup project was developed by NPTech, a water supply enterprise, to manage customer profiles.',
    backgroundUrl: benefitCard5,
    thumbnail: thumbnail_2,
    linkGithub: 'https://github.com/hthanhlong/chat-page',
    linkLive: 'https://chatapp.hthanhlong97.com/login'
  },
  {
    id: '2',
    title: 'Nike Page',
    text: 'Description: The application allows staff to store their documents on a platform like Google Drive, Dropbox, and OneDrive.',
    backgroundUrl: benefitCard6,
    thumbnail: thumbnail_3,
    linkGithub: 'https://github.com/hthanhlong/nike_clone',
    linkLive: 'https://nikeclone.hthanhlong97.com'
  }
]
