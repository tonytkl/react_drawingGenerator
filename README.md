# Drawing Generator Project

This project is a 2D drawing generator which will customize the dimensions of the drawing based on the user's input. The drawing will represent the screen dimension as well as the niche dimension and all related detail. The data of screens, mounts, etc. will be pulled from the excel file in the `public` folder. The generated drawing can also be downloaded as a PDF file.

## Tech stack

- React
- Tailwind CSS
- TypeScript

## Limitation

- The drawing is not to scale
- Because canvas library use pixel unit, the app will not be well-represented in all screen sizes. The optimal screen size is 1920x1080.
- The downloaded PDF file is not vectorized
