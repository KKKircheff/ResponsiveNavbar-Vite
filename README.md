# ResponsiveNavbar-Vite
Vite based project with React Router 6

Built in:

- ReactJS
- TypeScript
- React Router v6
- SASS
- React-icons

Animated fully functional & responsive navigation drop-down with sub menus coded with React and typed with Typescript. The menu items are passed as props from the component above - App.tsx (React Contex could be integrated and used as well). 

App.tsx - The menu state lives in 'items' object in App.tsx. The 'items' object is passed through props to the Navigation component and dynamicaly rendered, so it's easy customize the menu names, urls and sub-menus. 'Item' is the Typescript interface typing 'items' - it could be refactored depending of the changes in 'items'. This makes easy to migrate 'Navigation.component.tsx' integration, in another component when needed and pass the state with props.

Navigation.component.tsx - Fully functional & responsive navigation drop-down component with sub menus.'Item' interface for 'items' types is imported from App.tsx. The component and the functions are coded and typed according to the best coding practices - clear, simple and readble code.

Navigation.style.scss - the styling of the component is in SCSS, so it is easy to customize the styles of the navbar even from a begginer.

Structure:

App.tsx
components/Navigation.component.tsx
components/Navigation.style.scss


