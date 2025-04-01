## Project Structure

src ├── assets │ ├── blog.json # JSON data for blog posts │ ├── projects.json # JSON data for projects (including business analytics) │ ├── cloud.png # Example image (used in the site) │ ├── data_model.png # Example image (used in the site) │ ├── data_warehouse.png # Example image (used in the site) │ ├── profile_1.jpeg # Example profile picture │ ├── profile_2.jpeg │ ├── profile_3.jpeg │ ├── profile_4.jpeg │ ├── react.svg # Example image (React logo) │ └── test.png # Just a placeholder/test image

├── components │ ├── About │ │ ├── About.jsx # "About Me" component │ │ └── About.css # Styling for About component │ ├── Blogs │ │ ├── Blogs.jsx # Lists all blog posts │ │ ├── Blog_detail.jsx # Shows a single blog post in detail │ │ ├── Blogs.css # Styling for blog list │ │ └── Blog_detail.css # Styling for blog detail │ ├── Home │ │ ├── Home.jsx # Main landing/homepage component │ │ └── Home.css # Styling for Home component │ └── Projects │ ├── Projects.jsx # Lists all projects │ ├── Project_detail.jsx # Shows details for a single project │ ├── Projects.css # Styling for projects list │ └── Project_detail.css # Styling for project detail

├── layout │ ├── Header │ │ ├── Header.jsx # Header (top navigation/menu) │ │ └── Header.css # Header styling │ └── Footer │ ├── Footer.jsx # Footer (bottom of the page) │ └── Footer.css # Footer styling

├── App.css # Global or app-level styling ├── App.jsx # Main application component (could hold routes/layout) ├── index.css # Global base styling (often including resets) └── main.jsx # Entry point that renders <App /> to the DOM


### Explanation of Key Files and Folders

- **`main.jsx`**: The entry point of the React app. It renders the `<App />` component into the webpage.  
- **`App.jsx`**: The top-level component that may include routes (if using React Router) or a general layout wrapping other components (Header, Footer, etc.).  
- **`layout/`**: Holds reusable site-wide layout components (e.g., `Header.jsx`, `Footer.jsx`).  
- **`components/`**: Contains the core sections of your site—About, Blogs, Home, and Projects. Each folder usually has its `.jsx` (the component logic) and `.css` (the styling).  
- **`assets/`**: Stores images, icons, and JSON files with data (like blogs or projects).  

Use `projects.json` to manage data about your **Business Analytics** projects (or any other projects). The `Projects.jsx` component typically reads this data and displays it in a list, while `Project_detail.jsx` shows a single project with more details.

Feel free to modify or expand this description in your README to match your exact setup!
