
Uber Clone - Next.js & TailwindCSS

A modern Uber Clone built with Next.js, TailwindCSS, Firebase Authentication, and Mapbox, featuring a responsive UI, glassmorphism effects, and animated buttons.

Table of Contents

- Demo
- Features
- Assets
- Tech Stack
- Getting Started
- Usage
- Project Structure
- Future Improvements
- License



Demo

![Login Screenshot](/public/uber-clone.png)  
![Home Screenshot](https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg)


Features

- Authentication – Login with Google via Firebase  
- Map Integration – Mapbox maps with pickup & dropoff selection  
- Responsive Design – Mobile-first with desktop adaptation  
- Glassmorphism UI – Frosted glass cards and smooth hover animations  
- Action Buttons – Ride, Wheels, Reserve with icons  
- Custom Animations – Pulse effect on input and hover effects  
- Saved Places & Inputs – Pickup & dropoff with icons and autocomplete style  


Tech Stack

- Frontend: Next.js 13, React 18  
- Styling: TailwindCSS, Glassmorphism effects  
- Map & Location: Mapbox  
- Authentication: Firebase Auth (Google login)  
- Icons: Icons8, FontAwesome  
- State Management: React Hooks  
- Deployment: Vercel  


Getting Started

Clone the repository:

```bash
git clone https://github.com/yourusername/uber-clone-nextjs.git
cd uber-clone-nextjs
````

Install dependencies:

```bash
npm install

```

Run the development server:

```bash
npm run dev

```

Open `http://localhost:3000` in your browser to view the project.


Usage

* Login: Click Sign in with Google
* Home Page: Select Ride, Wheels, or Reserve
* Search: Enter pickup and dropoff locations
* Saved Places: Quick access to frequent destinations



Project Structure

```text
pages/
├── index.js          # Home page with map & action buttons
├── login.js          # Login page
├── search.js         # Pickup/Dropoff selection
components/
├── Map.js            # Mapbox integration
public/
├── assets/           # Images & icons
styles/
├── globals.css       # Tailwind + custom styles
firebase.js           # Firebase config
```

Future Improvements

* Add real-time ride estimation
* Dark mode toggle
* Better mobile animations & gestures
* Integrate real backend with Node.js/Express & MongoDB
* Add ride history & saved addresses

Deployment

Deploy easily with Vercel.
Follow Next.js Deployment Docs for detailed instructions: [https://nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

License

This project is licensed under the MIT License.

Made with ❤️ using Next.js, TailwindCSS, Firebase, and Mapbox


