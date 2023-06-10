![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)
<h1 align="center">Rock Paper Scissors Lizard Spock</h1>



# Testing 

[Main README.md file](/README.md)

[View the live project here](https://vica781.github.io/Rock_Paper_Scissors_Lizard_Spock_PP2/)

***

## Table of contents
1. [Testing User Stories](#testing-user-stories)
2. [Manual Testing](#manual-testing)
3. [Automated Testing](#automated-testing) 
     - [Code Validation](#code-validation)
     - [Browser Validation](#browser-validation)
     - [Lighthouse Validation](#lighthouse-validation)

***

## Testing User Stories

#### <ins>New User Goals<ins>:

As a new user I want to be able to:

1. As a first time visitor, I want to understand the purpose of the site and learn about the game Rock Paper Scissors Lizard Spock.

- Purpose of the site is 

2. As a first time visitor, I want to be able to navigate the website easily, find the game rules and instructions, and be able to start playing the game without any difficulties. 
3. As a first time visitor, I want to enjoy the calming and destressing elements of the website, like the serene nature backgrounds and soothing classical music. 
4. As a first time visitor, I want to explore the About page and learn more about the history, philosophy, educational aspects, logical components, tactical strategies of the game, and interesting facts about the game.
5. As a first time visitor, I want to be able to provide feedback or ask for help in case I need any, either through forums, comments, or social media links, sharing my experience or strategies in playing the game.

[Back to top ⇧](#table-of-contents)

#### <ins>Returning Visitor Goals<ins>

   As a current/returning user I want to be able to:
1. As a returning visitor, I want to be able to play the Rock Paper Scissors Lizard Spock game quickly, without needing to go through lengthy processes or instructions. 
2. As a returning visitor, I want to see new elements or updates in the game, including new nature backgrounds and classical music to keep my experience fresh and enjoyable. 
3. As a returning visitor, I want to find new, fascinating facts, insights, or resources on the About page that enhance my understanding and appreciation of the game. 
4. As a returning visitor, I want a consistent, user-friendly interface where I can easily navigate to my desired sections. 
5. As a returning visitor, I want to engage more with the community, either through forums, comments, or social media links, sharing my experience or strategies in playing the game.

[Back to top ⇧](#table-of-contents)

#### Returning Visitor Goals:

[Back to top ⇧](#table-of-contents)

## Manual Testing

Manual testing was carried out to ensure that all features of the website are working as intended. The following tests were carried out:

- [Common Elements Testing](#common-elements-testing)
- [Home Page](#home-page)
- [About Page](#about-page)
- [Error (404) Page](#error-404-page)




[Back to top ⇧](#table-of-contents)


### Common Elements Testing

- Navigation Bar

  ![Navigation Bar](./assets/images/readme/readme-manual-testing/manual-common-elements-testing/manual-testing-nav-bar.gif)

  <br>

- Footer

  ![Footer](./assets/images/readme/readme-manual-testing/manual-common-elements-testing/manual-testing-footer.gif)

  [Back to top ⇧](#table-of-contents)
     
### Home Page

- **Modal** (Game Rules)

  ![Modal](./assets/images/readme/readme-manual-testing/manual-home-page-testing/manual-testing-modal.gif)

  <br>

- **'Play again?'** button

  ![Play again?](./assets/images/readme/readme-manual-testing/manual-home-page-testing/manual-testing-play-again.gif)

  <br>

- **Audio controls**
Audio controls are working as intended. The user can play music in order it is position on the website by clicking on the 'speaker' icon. The user can also navigate to the next composition by clicking on the 'forwatd' chevron icon or to the previous composition by clicking on the 'back' chevron icon. Also, if the user vould rather stop audio playing, they can click on the 'volume off' icon. The link to the video with **audio testing** is [here](https://youtu.be/Wnn-8dLJUb8).

<br>

- **'Change Mood'** button (background change controls)

  ![Change Mood](./assets/images/readme/readme-manual-testing/manual-home-page-testing/manual-testing-change-mood.gif)

  <br>

- **Game controls**

  ![Game controls](./assets/images/readme/readme-manual-testing/manual-home-page-testing/manual-testing-game-controls.gif)

  [Back to top ⇧](#table-of-contents)     

### About Page

- **Table of Contents**

  ![Table of Contents](./assets/images/readme/readme-manual-testing/manual-about-page-testing/manual-testing-about-page-table-of-content.gif)

  <br>

- **'Back-to-top'** button

  ![Back-to-top](./assets/images/readme/readme-manual-testing/manual-about-page-testing/manual-testing-about-page-back-to-top.gif)

  <br>

- **Hyperlinks**

  ![Hyperlinks](./assets/images/readme/readme-manual-testing/manual-about-page-testing/manual-testing-about-page-hyperlinks.gif)

[Back to top ⇧](#table-of-contents)

### Error (404) Page

- **Link** to the **Home Page**

  ![Link to the Home Page](./assets/images/readme/readme-manual-testing/manual-error-page-testing/manual-testing-error-page-back-home.gif)

[Back to top ⇧](#table-of-contents)    

## Automated Testing

### Code Validation

The [W3C Markup Validator](https://validator.w3.org/) service was used to validate the `HTML` and `CSS` code used. The [JSHint JavaScript Code Quality Tool](https://jshint.com/) was also used to validate the sites `JS` code.

**Results:**

- **Home Page**

<details>
<summary>Home Page HTML Validation - First Results</summary>

![Home Page HTML Validation - First Results](./assets/images/readme/readme-code-validation/html-code-validation/index-html-first-validation.png)

</details>

<details>
<summary>Home Page HTML Validation - Errors</summary>

![Home Page HTML Validation - Errors](./assets/images/readme/readme-code-validation/html-code-validation/index-html-errors.png)

</details>

<details>
<summary>Home Page HTML Validation - Warnings</summary>

![Home Page HTML Validation - Warnings](./assets/images/readme/readme-code-validation/html-code-validation/index-html-warnings.png)

</details>

  <summary>Home Page HTML Validation - Final</summary>

  ![Home Page HTML Validation - Final](./assets/images/readme/readme-code-validation/html-code-validation/index-html-final-validation.png)

<br>

- **About Page**

  <summary>About Page HTML Validation</summary>

  ![About Page HTML Validation](./assets/images/readme/readme-code-validation/html-code-validation/about-html-validation.png)

<br>

- **Error (404) Page**

  <summary>Error Page HTML Validation</summary>

  ![Error Page HTML Validation](./assets/images/readme/readme-code-validation/html-code-validation/error-page-html-validation.png)

- **CSS stylesheet**

<details>
<summary>Style sheet validation - First</summary>

![Style sheet validation - First](./assets/images/readme/readme-code-validation/css-code-validation/css-first-validation.png)

</details>

  <summary>Style sheet validation - Final</summary>

  ![Style sheet validation - Final](./assets/images/readme/readme-code-validation/css-code-validation/css-final-validation.png)

- **JavaScript**

<details>
<summary>JavaScript script.js validation - First</summary>

![JavaScript script.js validation - First](./assets/images/readme/readme-code-validation/js-code-validation/script-first-js-validation.png)

</details>

<details>
   <summary>JavaScript script.js validation - Final</summary>

   ![JavaScript script.js validation - Final](./assets/images/readme/readme-code-validation/js-code-validation/script-final-js-validation.png)

</details>

<details>
<summary>JavaScript about.js validation</summary>

![JavaScript about.js validation](./assets/images/readme/readme-code-validation/js-code-validation/about-js-validation.png)

</details>

<details>
<summary>JavaScript error-page.js validation</summary>

![JavaScript error-page.js validation](./assets/images/readme/readme-code-validation/js-code-validation/error-page-js-validation.png)

</details>

[Back to top ⇧](#table-of-contents)

### Browser Compatibility
  Testing has been carried out on the following browsers :

- **Chrome** 

![test image](./assets/images/readme/readme-browser-validation/readme-chrome-validation.png)

- **Edge**

![test image](./assets/images/readme/readme-browser-validation/readme-edge-validation.png)

- **Opera** 

![test image](./assets/images/readme/readme-browser-validation/readme-opera-validation.png)

- **Firefox** 

![test image](./assets/images/readme/readme-browser-validation/readme-firefox-validation.png)

- **Brave** 

![test image](./assets/images/readme/readme-browser-validation/readme-brave-validation.png)

- **Vivaldi**

![test image](./assets/images/readme/readme-browser-validation/readme-vivaldi-validation.png)


[Back to top ⇧](#table-of-contents)

### Lighthouse testing for Performans, Accessibillity, Best Practices and SEO

- **Home Page**

<details>
<summary>Lighthouse validation Home page - 1</summary>

![Lighthouse validation Home page - 1](./assets/images/readme/readme-lighthouse-validation/lighthouse-home-page/lighthouse-validation-home-1.jpg)

</details>
        
<details>
<summary>Lighthouse validation Home page - 2</summary>

![Lighthouse validation Home page - 2](./assets/images/readme/readme-lighthouse-validation/lighthouse-home-page/lighthouse-validation-home-2.jpg)

</details>

<details>
<summary>Lighthouse validation Home page - 3</summary>

![Lighthouse validation Home page - 3](./assets/images/readme/readme-lighthouse-validation/lighthouse-home-page/lighthouse-validation-home-3.jpg)

</details>
        
<details>
<summary>Lighthouse validation Home page - 4</summary>

![Lighthouse validation Home page - 4](./assets/images/readme/readme-lighthouse-validation/lighthouse-home-page/lighthouse-validation-home-4.jpg)

</details>

<summary>Lighthouse validation Home page - Final</summary>

![Lighthouse validation Home page - Final](./assets/images/readme/readme-lighthouse-validation/lighthouse-home-page/lighthouse-validation-home-final.png)

</details>

[Back to top ⇧](#table-of-contents)

-  **About Page**

<details>
<summary>Lighthouse results About page - 1</summary>

![Lighthouse results About page - 1](./assets/images/readme/readme-lighthouse-validation/lighthouse-about-page/lighthouse-about-page-1.jpg)

</details>

<details>
<summary>Lighthouse results About page - 2</summary>

![Lighthouse results About page - 2](./assets/images/readme/readme-lighthouse-validation/lighthouse-about-page/lighthouse-about-page-2.jpg)

</details>

<details>
<summary>Lighthouse results About page - SEO</summary>

![Lighthouse results About page - SEO](./assets/images/readme/readme-lighthouse-validation/lighthouse-about-page/lighthouse-about-page-seo-1.png)

</details>

<details>
<summary>Lighthouse results About page - SEO</summary>

![Lighthouse results About page - SEO](./assets/images/readme/readme-lighthouse-validation/lighthouse-about-page/lighthouse-about-page-seo.png)

</details>

<details>
<summary>Lighthouse results About page - Best Practices</summary>

![Lighthouse results About page - Best Practices](./assets/images/readme/readme-lighthouse-validation/lighthouse-about-page/lighthouse-about-page-best-practices.jpg)

</details>

<summary>Lighthouse results About page - Final</summary>

![Lighthouse results About page - Final](./assets/images/readme/readme-lighthouse-validation/lighthouse-about-page/lighthouse-about-page-final.jpg)

[Back to top ⇧](#table-of-contents)

- **Error (404) Page**

<summary>Lighthouse results Error (404) page</summary>

![Lighthouse results Error (404) page](./assets/images/readme/readme-lighthouse-validation/lighthouse-error-page/lighthouse-error-page-final.jpg)

[Back to top ⇧](#table-of-contents)

***

[Main README.md file](/README.md)



 
     