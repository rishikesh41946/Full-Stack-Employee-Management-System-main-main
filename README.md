<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <h3 align="center">Full-Stack Employee Management System</h3>

  <p align="center">
    An employee management system build with Node.js, Express.js, React.js, Redux and Mongo.
    <br />
    <a href="https://github.com/sergiogr0702/Full-Stack-Employee-Management-System"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/sergiogr0702/Full-Stack-Employee-Management-System/issues">Report Bug</a>
    ·
    <a href="https://github.com/sergiogr0702/Full-Stack-Employee-Management-System/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project is an easy to use and simple Employee Management System that has been built following the MERN stack (Mongo, Express, React and Node). 
It is a sophisticated tool designed to streamline HR processes and manage employee data. 

Here's why:

* Real-time Data Syncing: The project utilizes MongoDB’s real-time data syncing capabilities. This means that any modifications made to the employee data are immediately updated across all connected clients. This real-time synchronization ensures that everyone involved has access to the most current information, reducing the risk of decisions being made based on outdated data.

* Modular Architecture: Contrary to a Single Page Application (SPA), this project adopts a modular architecture. This allows for greater flexibility and maintainability as each module can be developed, updated, and debugged independently. It also improves the overall performance as only the necessary modules need to be loaded or updated at any given time.

* Scalability: The backend of the project is built on Node.js and Express.js, known for their scalability. This means the project can handle a growing amount of work in a capable manner. As the number of requests increases, the system can scale to meet the demand with minimal additional resources. This makes it a cost-effective solution for businesses, regardless of their size.

* Efficient Data Handling: With MongoDB as the database, the project can handle large amounts of data efficiently. MongoDB’s document-oriented model is a great fit for the complex and hierarchical data structures often found in HR management systems.

These features make this Employee Management Project a robust, efficient, and modern tool for HR management. It stands out as a prime example of what can be achieved with the MERN stack in web application development.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Redux]][Redux-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![NodeJS]][Node-url]
* [![ExpressJS]][Express-url]
* [![MongoDB]][Mongo-url]
* [![Docker]][Docker-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

You need to have the following software installed in your device to run this project.
* npm
  ```sh
  npm install npm@latest -g
  ```

* It is needed to install Docker to execute efficiently the project. 

### Installation

_To get the entire application running you simply have to follow the following steps._

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Download the Mongo image for Docker
   ```sh
   docker pull mongodb
   ```
3. Run the Docker container
   ```sh
   docker-compose up -d
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

In this section I'm going to show briefly how the app works and the different aspects of it.

In this first page the departments that exists in the system are listed in a fully responsive table.

![Departments]

If one of the departments names is clicked, the employees that work on that department are shown.

![Sidebar]

To navigate to other pages in the application it is necesary to click the three rows on the upper left side to open the navigation sidebar.

![Sidebar-full]

This sidebar can also be fully opened to show all the available options inside each category of search.

![Departments]

To create another department or employee in the application it is only needed to navigate to the route using the navigation sidebar or pushing the create button.

![Create-department]

In this app it is also possible to update a record using the corresponding buttons on each roles in the tables. 
This way the corresponding values are changed with a form to input the new values.
However, only one tuple can be updated at a time. So when the update proccess is active it is imposible to delete or update other records.
This is controlled by manteining the context of the application using Redux.

![Update]

Finally, it is possible to delete records in the application using the corresponding buttons in the tables.
When that button is clicked an alert created using SweetAlert is launched to confirm the action.

![Delete]


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/Feature`)
3. Commit your Changes (`git commit -m 'Add some Feature'`)
4. Push to the Branch (`git push origin feature/Feature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the Apache License 2.0. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Sergio

Project Link: [https://github.com/sergiogr0702/Full-Stack-Employee-Management-System](https://github.com/sergiogr0702/Full-Stack-Employee-Management-System)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [GitHub Pages](https://pages.github.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/sergiogr0702/Full-Stack-Employee-Management-System/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/sergio-gonzalez-rivera-254baa236/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[MongoDB]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[Mongo-url]: https://www.mongodb.com/
[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[ExpressJS]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/
[Redux]: https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[Docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/

[Departments]: https://github.com/sergiogr0702/Full-Stack-Employee-Management-System/blob/main/images/departments.png
[Create-department]: https://github.com/sergiogr0702/Full-Stack-Employee-Management-System/blob/main/images/create-department.png
[Create-employees]: https://github.com/sergiogr0702/Full-Stack-Employee-Management-System/blob/main/images/create-employees.png
[Delete]: https://github.com/sergiogr0702/Full-Stack-Employee-Management-System/blob/main/images/delete.png
[Department-employees]: https://github.com/sergiogr0702/Full-Stack-Employee-Management-System/blob/main/images/department-employees.png
[Sidebar]: https://github.com/sergiogr0702/Full-Stack-Employee-Management-System/blob/main/images/sidebar.png
[Sidebar-full]: https://github.com/sergiogr0702/Full-Stack-Employee-Management-System/blob/main/images/sidebar-full.png
[Update]: https://github.com/sergiogr0702/Full-Stack-Employee-Management-System/blob/main/images/update.png
