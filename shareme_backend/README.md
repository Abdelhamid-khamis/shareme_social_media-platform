# ShareMe App

## Steps of creating ShareMe App

We'll use Sanity , which is a platform for structured content that lets you build better digital experiences. It comes with an open-source editor built in React, Sanity Studio, and a real-time hosted data store, Content Lake.

## **1. Install Sanity using CLI (command line interface)**

[Getting started with Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli)

```powershell
npm install -g @sanity/cli
```

### **1.1. Bootstrap a project(Get started with the boosted plan):**

This will,

- log you into Sanity,
- create a project,
- set up a dataset, and
- generate the files needed to run the editing environment locally.

```powershell
sanity init --project-plan boosted-free-2021-12-08 

```

>You getting free monthly usage to 200k API requests, 1M API CDN requests, and 20GB Bandwidth. unlimited admin users.

### **1.2. Run the studio**

```powershell
sanity start
```

## **2. Content modeling**

[Content modeling in Sanity Studio, Defining the structure of your content.
](https://www.sanity.io/docs/content-modelling)

### **2.1. Edit the schema**

Open the studio folder in your code editor, and locate the schema.js file in the schemas folder. The schema defines your content models. We recommend that you start by modelling your content logically, without thinking too much about how it's going to be presented. We've written about why this often makes a lot of sense.

```javascript

/* 
(tnt)The schema creates a document type called `person-apiName`, with and a title of "Person", then we come to the fields(tnt)
*/
      
title: "Person", //left bar list item
name: "person", // api name "_type"
type: "document", // document type
// A string input field
fields: [
  {
    title: "Name", // title of the input field
    name: "name", // api name "name"
    type: "string", // input field data type
  },
    ],
```

### Resources

- [Sanity Docs](https://www.sanity.io/docs/getting-started-with-sanity-cli)

- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
