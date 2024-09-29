# Welcome to my resume's source code

My resume is a fairly small React project, but it highlights the way I write code.

The stack I'm using for this project:

- React
- Vite
- Tailwind CSS
- Prettier
- HeroIcons

To highlight some decisions I've made:

I have identified some common patterns, and have separated them into reusable components.

I extracted the resume data into a JSON file, such that there's one source of truth when I need to make adjustments. Then, I load this JSON into a React context, making it available to all child components via the `useResume` hook.

The `Experience` component uses a slots pattern, where an experience section contains all necessary fields, ie. role, duration, accomplishments, etc. This highlights my use of more advanced React patterns.

Lastly, I have put considerable effort in making this page printable and have it looks just as neat when printing. The only set up necessary in the print dialog is to remove page margins and enable background graphics.

Enjoy!
