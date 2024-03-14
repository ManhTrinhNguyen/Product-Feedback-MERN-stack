# Product feedback app

![Design preview for the Product feedback app coding challenge](./preview.jpg)

## Welcome! 👋

## The challenge

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete product feedback requests
- Receive form validations when trying to create/edit feedback requests
- Sort suggestions by most/least upvotes and most/least comments
- Filter suggestions by category
- Add comments and replies to a product feedback request
- Upvote product feedback requests


### Expected Behaviour

- Suggestions page
  - Only product feedback requests with a status of `suggestion` should be shown on the Suggestions page.
- Roadmap
  - Feedback requests with a status of `planned`, `in-progress`, or `live` should show up on the roadmap, and should be placed in the correct column based on their status.
  - Columns should be ordered by upvote totals.
- Creating a product request
  - When creating a new piece of feedback, an ID needs to be assigned which increments the current highest product request ID by 1.
  - The default status for a new piece of feedback is `suggestion`. This places it on the Suggestions page.
- Editing feedback
  - If a piece of feedback has its status updated to `planned`/`in-progress`/`live` it moves through to the roadmap and should show up in the correct column based on its new status.
- Add comments/replies
  - Use the data from the `currentUser` object in the `data.json` file to populate the user data for any new comments or replies.
  - Any comment/reply can have a maximum of 250 characters.

  ## Divided Component
  ### Suggestion Route
  #### Navigation Component 
    1. Title Component 
    2. Navigate Component 
    3. Road Map Component
  #### Suggestion Bar (upvote, add feedback)
    1. Show how many suggestion in the corner
    2. Sort by: Most upvote, least upvotem , most comment, least comment ... 
      _ When clicked sort by will show the form that choosing Most to Least Upvote, most comment to least comment...
    3. Add Feedback button 
      _ When clicked in Add feedback button will direct to Add Feedback Component
  #### Suggestion component 
    1. Upvote component 
    2. Title, Description, Status component
    3. Comment button component
      _ When clicked in comment button it will direct to detail Component
  #### If Suggestion is empty add the "There is no feedback yet" and the add Feedback in the middle

 ### Feedback Detail Route 
  #### Navigation   
    1. Go back button 
    2. Edit Feedback button 
  #### Suggestion component
    1. Upvote component 
    2. Title, Description, Status component
    3. Comment button component
  #### Comment Component 
    1. People who comment Component 
      1. Picture 
      2. Name email and comment 
      3. Reply button 
    2. People can reply the comment who reply on the component
  #### Add Comment Component
    1. Add comment text 
    2. Form add comment
    3. 250 Characters left and Post comment button 

  ### New Feedback Form  
  1. Create New Feedback text
  2. Feedback title texrt and input 
  3. category and option
  4. Feedback Detail and description
  5. Cancel button and Addfeedback button 

  ### Editing Feedback Route
  1. Editing and feedback text
  2. Feedback title and input
  3. Category and options
  4. Update Status and options
  5. Feedback Detail and description 

### Roadmap Route 
  #### Planned Container Component
    1. Planned Component
      1. Planned text
      2. Title, Description, Status component
      3. Category button  
      4. Upvote button 
      5. Comment button 

  2. In-Progess container Component
    1. In-progess component
      1. In-progress text
      2. Title, Description, Status component
      3. Feture button 
      4. Upvote button 
      5. Comment button

  3. Live Component
    1. Live container component
      1. Live text
      2. Title, Description, Status component
      3. Feture button 
      4. Upvote button 
      5. Comment button    

## Where to find everything

Your task is to build out the project to the design file provided. We provide both Sketch and Figma versions of the design, so you can choose which tool you prefer to use. You can download the design file on the platform. **Please be sure not to share them with anyone else.** The design download comes with a `README.md` file as well to help you get set up.

All the required assets for this project are in the `/assets` folder. The assets are already exported for the correct screen size and optimized. Some images are reusable at multiple screen sizes. So if you don't see an image in a specific folder, it will typically be in another folder for that page.

The design system in the design file will give you more information about the various colors, fonts, and styles used in this project.


## Deploying your project

As mentioned above, there are many ways to host your project for free. Our recommended hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

