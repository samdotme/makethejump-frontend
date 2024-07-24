
<h1 align="center">The Cat Cafe</h1>

<p align="center">
  This is the front end for an intelligent chatbot that powers a fictional Cat Cafe adoption service. It's backed by an LLM that uses your proprietary data and keeps it private.
</p>

<p align="center">
  <strong>Build your own at <a href="http://makethejump.ai/developer">MakeTheJump.ai/developer</a></strong>
</p>
<br/>

## Getting Started

### Install NodeJS
The first thing you'll need is to install NodeJS. If you are front end or full stack developer, you can likely use whatever you currently have installed.

Go to the [NodeJS download page](https://nodejs.org/en/download/prebuilt-installer) and follow the instructions there.

Once you have completed the download and installation, confirm that everything works by running the following commands in your terminal.

    node --version

Response should be v20.15.1.

    npm --version

Response should be 10.7.0.

## Set Up Environment Variables

You'll need to set a few environment variables to get this front end app to connect properly to the backend.

Copy the file `.env.example` and paste it. Then rename it to `.env.local`.

Then change `NEXT_PUBLIC_AUTHOR_NAME` to be your name.

## Install packages

You'll need to install local packages to support the application. This can be accomplished with the following command:

    npm install

## Run Locally

To start the project locally, you can run the following command:

    npm run dev

You should see some text pop up in your terminal with a link to http://localhost:3000. Open this link in your browser.
