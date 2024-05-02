import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/card";

function About() {
  return (
    <Card className='my-6' id='about'>
      <CardHeader>
        <a
          href={`#/`}
        >
          <CardTitle>
            About
          </CardTitle>
        </a>
        <CardDescription>
          || React, Next, Node, Javascript, Typescript || Developer
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-2">
          <p>
            🌎 𝗧𝗮𝗶𝗹𝗼𝗿𝗲𝗱 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗘𝘅𝗽𝗲𝗿𝘁𝗶𝘀𝗲 🌎
          </p>
          <p>
            𝗦𝘁𝗿𝗼𝗻𝗴 𝗲𝗺𝗽𝗵𝗮𝘀𝗶𝘀 𝗼𝗻 𝗱𝗲𝗲𝗽𝗹𝘆 𝘂𝗻𝗱𝗲𝗿𝘀𝘁𝗮𝗻𝗱𝗶𝗻𝗴 𝘆𝗼𝘂𝗿 𝗼𝗯𝗷𝗲𝗰𝘁𝗶𝘃𝗲𝘀 𝘁𝗼 𝗲𝗻𝘀𝘂𝗿𝗲 𝗜 𝗮𝗰𝗵𝗶𝗲𝘃𝗲 𝘁𝗵𝗲 𝗻𝗲𝗲𝗱𝗲𝗱 𝗿𝗲𝘀𝘂𝗹𝘁𝘀
          </p>
        </div>

        <div className="mb-2">
          <p>
            I'm a self-motivated problem solver who loves getting hands debugging the issues. Highly motivated with the ability to prioritize what’s on your plate. Friendly, smart and easy to work with
            Humble, enjoying to help others and appreciate their guidance in return.
          </p>
        </div>

        <div>
          <p>
            🏆 Technologies 🏆
          </p>
          <p>
            JavaScript, ES6, TypeScript/ HTML5, CSS,CSS grid, SCSS/ React, Redux, React Router, React context/ Highcharts, React-query, axios / Next, Node/ JEST, react-testing-library / Styled components, UI/UX, responsive & adaptive web / AWS, GCP/ Various UI libraries / Pixel-perfect and other.
            I prefer to write clean and maintainable code so always use linters and other relevant tools for that.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default About;
