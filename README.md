Summer Camp – Website Readme
-----------------------------------------

This repository contains the production-ready website for the AI Explorers Summer School program. Built with React and Tailwind CSS, the site is fully responsive and deployed via Vercel. Below is a guide for updating and maintaining the website.

-----------------------------------------
Table of Contents
-----------------------------------------
1. How to Add or Edit a Speaker
2. How to Update the Program Schedule
3. How to Change Program Dates
4. How to Modify AI Chatbot Responses
5. How to Hide or Edit the Student Testimonial Section
6. How to Update the Location Section
7. How to Update Program Highlights and Impact Stats
8. How to Make Footer or Contact Info Changes
9. Deployment Notes

-----------------------------------------
1. How to Add or Edit a Speaker
-----------------------------------------
File: /src/data/speakers.ts

Each speaker is represented as an object in the `speakers` array:
Example:
{
  id: '6',
  name: 'Dr. John Doe',
  title: 'Professor of AI',
  bio: 'Dr. Doe specializes in ethical AI and teaches at XYZ University.',
  image: 'https://link-to-image.jpg'
}

To add a new speaker:
- Copy an existing entry and modify the fields.
- Make sure the image is a square headshot for consistency (200x200 preferred).
- Save the file and commit changes.

-----------------------------------------
2. How to Update the Program Schedule
-----------------------------------------
File: /src/components/ProgramSchedule.tsx

Each day is represented as an object in the `schedule` array. To update:
- Change the date label under the `date` field.
- Add or update each `item` entry (with time, title, speaker, etc.)

Example:
{
  date: 'June 30',
  items: [
    {
      time: '9:30am - 11:00am',
      title: 'Deep Learning Applications',
      speakers: [
        { name: 'Dr. Jane Smith', affiliation: 'SQU' }
      ],
      duration: '1.5 hours'
    }
  ]
}

-----------------------------------------
3. How to Change Program Dates
-----------------------------------------
File: /src/App.tsx (Section: Program Dates)

Search for the heading "2025 Program Dates". To update:
- Change the dates and text directly inside the <h3> and <p> tags.
- Adjust the numbered day blocks as needed to reflect the new schedule.

-----------------------------------------
4. How to Modify AI Chatbot Responses
-----------------------------------------
File: /src/components/ChatWidget.tsx

The chatbot uses hard-coded keyword matching for responses. To update:
- Find the section that begins with `const handleSend = () => {`
- Modify the if/else statements to change the logic or wording of each response.

To add new responses:
- Add a new `else if` block like this:

else if (lowerInput.includes('example keyword')) {
  botReply = 'Custom response here.';
}

-----------------------------------------
5. How to Hide or Edit the Student Testimonial Section
-----------------------------------------
File: /src/App.tsx

The testimonial section is currently commented out. To re-enable:
- Search for: {/* Student Testimonials */}
- Remove the comment brackets (`{/*` and `*/}`) surrounding the section.

To modify the content:
- Replace the <img> or <blockquote> text in the testimonial section with your own.

-----------------------------------------
6. How to Update the Location Section
-----------------------------------------
File: /src/App.tsx

Search for: "Location" (heading)

You can change:
- The <img src="..."> with a new image of Muscat or another relevant place.
- The paragraph text directly in the <p> elements under that section.

-----------------------------------------
7. How to Update Program Highlights and Impact Stats
-----------------------------------------
File: /src/App.tsx

To update the “Highlights” section:
- Search for "Highlights" heading
- Modify the number values or descriptions in the <div> blocks inside the grid.

To update the “Impactful Stats” section:
- Search for "BUILDING CONFIDENCE, CONNECTIONS, AND COMMUNITY"
- Modify the <StatsCard> props or add new ones as needed.

Example:
<StatsCard
  percentage={90}
  description="of students would recommend the program to others"
  color="border-blue-500"
/>

-----------------------------------------
8. How to Make Footer or Contact Info Changes
-----------------------------------------
File: /src/App.tsx (Section: Footer)

Update address, contact methods, and navigation links inside the footer block. To change icons or links:
- Replace <a href="#"> values for social media
- Modify business address or contact messages

-----------------------------------------
9. Deployment Notes
-----------------------------------------
The site is deployed through Vercel.

To push updates:
1. Commit changes to your GitHub repository.
2. Vercel will automatically detect changes and redeploy the site.

To change the domain or deployment settings:
- Log into the Vercel dashboard for the project
- Adjust settings such as custom domains, environment variables, etc.

-----------------------------------------
Maintained by: Triniti Dungey
Repository Owner: [T1337D]
