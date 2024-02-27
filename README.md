<h1 align="center">Groscan</h1></br>

<p align="center">
:leafy_green:  A JAM stack PWA, grocery management hybrid app built with Capacitorjs, React, TypeScript, Next.js, Prisma and MongoDB. :shopping_cart:
</p>
<br>

<p align="center">
  <a href="#"><img alt="built with love" src="https://forthebadge.com/images/badges/built-with-love.svg"/></a>
  <a href="#"><img alt="js Badge" src="https://forthebadge.com/images/badges/made-with-typescript.svg"/></a>
  <a href="https://github.com/k4u5h4L"><img alt="k4u5h4L GitHub badge" height="37" src="https://badgen.net/badge/GitHub/k4u5h4L?icon=github&color=24292e"/></a>
  <a href="#"><img alt="machine Badge" height="37" src="https://forthebadge.com/images/badges/works-on-my-machine.svg"/></a>
  <a href="#"><img alt="not bug but feature" height="37" src="https://forthebadge.com/images/badges/not-a-bug-a-feature.svg"/></a>
  <a href="#"><img alt="spaghetti Badge" src="https://forthebadge.com/images/badges/contains-tasty-spaghetti-code.svg"/></a>
</p>

<br>
<p align="center">
<img width="460px" src="public/logo.png" alt="Groscan"></img>
</p><br>

## Technologies used:

-   React as the UI library with Typescript.

-   Next.js as the React framework for extra features and API backend.

-   GraphQL as the API language.

-   MongoDB as the DB.

-   Prisma as the ODM.

-   NextAuth as the authentication backend with OTP logins.

-   Capacitor.js as the hybrid app framework to run the platform on Android and iOS.

-   Python + huggingface to train and fine tune text generation LLMs.

-   Python + Django to wrap the model inferences.

## Prerequisites:

-   Node.js and yarn installed.

-   MongoDB installed and the daemon running locally or hosted on the cloud.

## To run:

-   Clone and cd into the repo.

```
git clone https://github.com/k4u5h4L/Groscan.git && cd Groscan
```

-   Install the dependencies

```
yarn install
```

-   Create a new file called `.env.local` and fill in variables and keys from different providers from the `.env.example` file.

-   Now with all the API keys and the backend server running, run development server for the client.

```
yarn dev
```

-   Now visit the location [localhost:3000](http://localhost:3000) to check out the site!

## Note:

-   This project is for learning purposes only, and not for commercial use.

-   Any contribution is welcome. You may fork the repo and issue a PR.

<!-- ## Theme:
- #0d6efd
-->
