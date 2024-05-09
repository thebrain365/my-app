import Image from "next/image";

export default function Home() {
   return (
      <main>
         <h1 className="">
            This is My-App project <br />{" "}
            <span>showing how I setup my project</span>
         </h1>
         <ul>
            <li>NextJS</li>
            <li>Jest</li>
            <li>Cypress</li>
            <li>Tailwind CSS</li>
            <li>Docker</li>
            <li>ESLint</li>
            <li>Prettier</li>
            <li>GitHub Actions Workflows</li>
         </ul>
      </main>
   );
}
