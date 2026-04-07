# Project Guidelines

## Code Style
Use modern JavaScript (ES6+) with consistent 2-space indentation. Follow Node.js best practices for Express applications.

## Architecture
Simple Express.js server providing a blog API with the following routes:
- `GET /`: Returns a welcome message "Server del mio blog"
- `GET /bacheca`: Returns JSON array of 5 blog posts with title, content, image, and tags

Static assets (images) served from `/public` directory.

## Build and Test
- Install dependencies: `npm install`
- Start server: `npm start`
- No automated tests configured yet

## Conventions
- API responses in JSON format
- Blog posts structure: `{ title: string, content: string, image: string, tags: string[] }`
- Images referenced by relative paths in `/public`

See [readme.md](readme.md) for detailed project requirements.