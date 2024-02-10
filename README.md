# URL Shortener Service App

This is a URL shortener service app designed to shorten long URLs into more manageable and shareable links.
## Visit the App
[Click here to visit the UrlShortner React App](https://itchy-lime-jeans.cyclic.app/)
## Features

- **URL Shortening:** Converts long URLs into short, unique links.
<!-- - **Custom Short Links:** Option to create custom short links for URLs. -->
- **Statistics:** Track the usage statistics of shortened links.
- **API Access:** Provides APIs for integration with other applications.

## Installation

### Prerequisites

- Node.js
- MongoDB

### Steps

1. Clone the repository: `git clone https://github.com/lalitkishor9/urlShortner`
2. Install dependencies: `npm install`
3. Configure environment variables:
   - Create a `.env` file based on `.env.example` and add necessary configurations.
4. Start the server: `npm start`

## Usage

### API Endpoints

- **Shorten URL:** `POST /url`
  - Request: `{ "url": "your_long_url_here" }`
  - Response: `{ "shortened_url": "your_shortened_url_here" }`
<!-- - **Custom Short Link:** `POST /api/custom`
  - Request: `{ "url": "your_long_url_here", "custom_alias": "your_custom_alias_here" }`
  - Response: `{ "custom_shortened_url": "your_custom_shortened_url_here" }` -->
- **Link Statistics:** `GET /url/analytics/:shortened_url_id`
  - Response: `{ "original_url": "your_original_url_here", "clicks": 100 }`

## Configuration

### Environment Variables

- `PORT`: Port number for the server
- `MONGODB_URI`: MongoDB connection string
- Other necessary variables for API keys, secrets, etc.

## Contribution

Contributions are welcome! Feel free to submit issues or pull requests.


## Acknowledgements

Thanks to the developers of Node.js and MongoDB for providing powerful tools that form the backbone of this application. Your dedication to building robust and scalable technologies has greatly contributed to the development of this URL shortener service app.

Special thanks to the open-source community contributors and maintainers of libraries/frameworks used in this project, including:

- **Express.js:** For simplifying server-side development with Node.js.
- **Mongoose:** For providing an elegant MongoDB object modeling tool.
- **dotenv:** For simplifying environment variable management.
- **ShortID:** For generating unique short IDs for shortened URLs.

Your contributions have been invaluable in shaping this application and facilitating its functionality. Your commitment to open-source development is highly appreciated.
