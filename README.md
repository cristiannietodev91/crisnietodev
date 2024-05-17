
# Cristian nieto portfolio v1
## About

What I am looking for on this project is showing up what the development software trip has brought to me. It has been a long trip.

Showing up this portfolio is a big step in my life as a developer since It has been long time introducing new libraries new acknowledge to my personal skills but had never found the time to build it.  


## Technical develop
### Methodology

I use these projects to improve some lack of development skills that I must improve. That is why I followed the next steps each one to learn/improve some front-end skills.

### Figma 

I wanted to design my v1 portfolio site from scratch before coding anything. I had never used Figma I watched some Figma youtube videos specially from [Kevin Powell](https://www.youtube.com/@KevinPowell) Designing a initial style guide and Figma components is how the work must be done those were the resources and tutorials that I followed. Take a look to the [result](https://www.figma.com/file/1hYDcbFc012YUmvs6jNCHN/CrisDev-Portfolio?type=design&node-id=25%3A159&mode=design&t=JpFk1QNS8IBYo495-1).

As I mentioned prior the Figma design follows.

- Initial style guide
- Dark and light design
- Create reusable figma components
- Design for different screen sizes.


### CSS

It is always good improve skills that are not frequently used (Lately working mainly back-end).

### React

I want to follow the React philosophy creating reusable and responsive components that are used along the project. 


## Inspiration

The pandemic brought changes to many people's lives, and I was no exception. I started to work remotely with clients and projects in USA, which made me realize how competitive the global market is now. To showcase my strengths and stand out, I decided to create this portfolio.


## What is next


- [X] Load real data
- [X] Add SEO
- [ ] Implement Internationalization
- [X] Add animations to different components
- [ ] Add storybook
- [ ] Website/project images
- [ ] Site most be accessible for screen readers
- [ ] Unit testing to each component
- [X] Load content from CMS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Contentful

This project connects to Contentful CMS to get post blogs.

Before starting it is needed to set `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` env variables to connect the project to Contentful CMS. Those variables can be obtain from Contentful Web Page.

#### Typescript

Each time the Contentful model changes the typescript schema must be updated. The types definition for this project are in the folder `./src/types/` and the project uses `cf-content-types-generator` library to create automatically the schema based on contentful export. Please follows the next steps each time that the schema needs to be updated.

If you have not installed the Contentful CLI it can be installed with the next commands

```sh
// using homebrew
brew install contentful-cli

// Using npm
npm install -g contentful-cli
```

if you already installed the Contentful CLI you must log in the CLI running

```sh
npm run contentful-login
```

after login you must create the contentful export with

```sh
npm run create-contentful-export
```

With the export generated in the route `./src/lib/contentful/export.json` you can update the schema executing

```sh
npm run cf-content-types-generator
```