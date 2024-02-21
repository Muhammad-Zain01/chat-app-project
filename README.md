
## ChatGPT Clone Project

### Overview

This project is a front-end clone of ChatGPT, built using Next.js and has backend on django [see repo](https://github.com/Muhammad-Zain01/chat-app-project-backend). It is designed to interact with a backend developed in Django, which facilitates communication with OpenAI's APIs. This setup enables users to engage in conversations with an AI model through a user-friendly web interface, leveraging the powerful capabilities of OpenAI's conversational AI technology.

![Login](https://raw.githubusercontent.com/Muhammad-Zain01/chat-app-project/main/preview/preview1.png)
![Register](https://raw.githubusercontent.com/Muhammad-Zain01/chat-app-project/main/preview/preview2.png)
![Dashboard](https://raw.githubusercontent.com/Muhammad-Zain01/chat-app-project/main/preview/preview3.png)
![Dashboard](https://raw.githubusercontent.com/Muhammad-Zain01/chat-app-project/main/preview/preview4.png)

### Setup Instructions

##### Clone the Repository

```
    git clone https://github.com/Muhammad-Zain01/chat-app-project
```

Clone the Backend the Repository ( For Backend Setup, [see](https://github.com/Muhammad-Zain01/chat-app-project-backend))
```
    git clone https://github.com/Muhammad-Zain01/chat-app-project-backend
```

##### Install Dependencies

```
    npm install
```
or 


```
    yarn
```

##### Environment Configuration

Create a .env file in the root directory of your project and populate it with the necessary environment variables. Here's an example of what your .env file should look like

```
    BACKEND_URL="http://127.0.0.1:8000"
```

##### Run the Development Server


```
    npm run dev
```
or 


```
    yarn dev
```

This will start the development server on [http://localhost:3000](http://localhost:3000). Navigate to this URL in your browser to interact with the application.
