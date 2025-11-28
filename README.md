
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


Assets

Map & Images

- Map Style: `mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph`  
- Uber Logo (Index): ![Logo](https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg)  
- Uber Logo (Login): ![Logo](https://i.ibb.co/n6LWQM4/Post.png)  
- Login Image: ![Login](https://i.ibb.co/CsV9RYZ/login-image.png)  
- Uber X: TBD  
- Uber XL: ![Uber XL](https://i.ibb.co/YDYMKny/uberxl.png)  
- Uber Black: ![Uber Black](https://i.ibb.co/Xx4G91m/uberblack.png)  
- Uber Black SUV: ![Uber Black SUV](https://i.ibb.co/1nStPWT/uberblacksuv.png)  
- Bike: ![Bike](https://i.ibb.co/n776JLm/bike.png)  
- Schedule: ![Schedule](https://i.ibb.co/5RjchBg/uberschedule.png)  

Icons

- Back Button: ![Back](https://img.icons8.com/ios-filled/50/000000/left.png)  
- Circle Icon: ![Circle](https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png)  
- Line Icon: ![Line](https://img.icons8.com/ios/50/9CA3AF/vertical-line.png)  
- Square Icon: ![Square](https://img.icons8.com/windows/50/000000/square-full.png)  
- Plus Icon: ![Plus](https://img.icons8.com/ios/50/000000/plus-math.png)  
- Star Icon: ![Star](https://img.icons8.com/ios-filled/50/ffffff/star--v1.png)  


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


