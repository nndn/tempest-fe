import { Button } from "@/components/ui/button";
import { ModeToggle } from "app/theme_toggle";

export default function Home() {
  return (
    <div className="max-w-2xl m-5">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Hi folks wassup!!
      </h1>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        this is crazy
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolores, magni recusandae tenetur
        accusantium incidunt beatae rem repellat delectus explicabo consequuntur
        pariatur perspiciatis ullam, quisquam quia veniam quidem. Impedit, illo
        veniam.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        repellendus optio eos quam sed dolor esse. Animi quaerat recusandae amet
        cumque voluptatum eligendi maxime voluptates. Voluptatem accusantium
        ducimus sint sapiente.
      </p>
      <Button variant="default">Click Me</Button>
      <ModeToggle />
    </div>
  );
}
