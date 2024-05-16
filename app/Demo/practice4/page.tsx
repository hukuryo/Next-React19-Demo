// import { createContext, use } from "react";

// const ThemeContext = createContext(null);

// type sample = {
//   title: string;
//   children: boolean;
// };

// type sample2 = {
//   show: boolean;
//   children: string;
// };

// export default function page() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <Form />
//     </ThemeContext.Provider>
//   );
// }

// function Form() {
//   return (
//     <Panel title="Welcome">
//       <Button show={true}>Sign up</Button>
//       <Button show={false}>Log in</Button>
//     </Panel>
//   );
// }

// function Panel({ title, children }: sample) {
//   const theme = use(ThemeContext);
//   const className = "panel-" + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   );
// }

// function Button({ show, children }: sample2) {
//   if (show) {
//     const theme = use(ThemeContext);
//     const className = "button-" + theme;
//     return <button className={className}>{children}</button>;
//   }
//   return false;
// }
