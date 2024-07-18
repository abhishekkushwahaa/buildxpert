import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { pricingCards } from "@/lib/constants";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ScrollArea className="h-full w-full rounded-md">
        <section className="h-full w-full md:pt-1 relative flex items-center justify-center flex-col bg-primary-foreground">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <p className="text-white mt-[-60px] text-center text-wrap text-[10px] md:text-[15px] lg:text-[20px]">
            Run Your Agency or Business in one Place!
          </p>
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative p-4 mt-48">
            <h1 className="text-6xl font-bold text-center text-[70px] md:text-[100px] lg:text-[150px]">
              BuildXpert
            </h1>
          </div>
          <div className="flex justify-center items-center relative md:mt-[-10px]">
            <Image
              src={"/assets/preview.png"}
              alt="banner image"
              height={1000}
              width={1200}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
            <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
          </div>
        </section>
        <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px]">
          <h2 className="text-4xl text-center lg:mt-[-30px] md:mt-[-30px] mt-[100px]">
            Choose what fits you right
          </h2>
          <p className="text-muted-foreground text-center">
            Our straightforward pricing plans are tailored to meet your needs.
            If
            {" you're"} not <br />
            ready to commit you can get started for free.
          </p>
          <div className="flex justify-center gap-4 flex-wrap mt-6 mb-12">
            {pricingCards.map((card) => (
              <Card
                key={card.title}
                className={clsx("w-[350px] flex flex-col justify-between", {
                  "border-2 border-primary": card.title === "Unlimited Saas",
                })}
              >
                <CardHeader>
                  <CardTitle
                    className={clsx("", {
                      "text-muted-foreground": card.title !== "Unlimited Saas",
                    })}
                  >
                    {card.title}
                  </CardTitle>
                  <CardDescription>
                    {
                      pricingCards.find((c) => c.title === card.title)
                        ?.description
                    }
                  </CardDescription>
                  <CardContent>
                    <span className="text-4xl font-bold ml-[-23px]">
                      {card.price}
                    </span>
                    <span className="text-muted-foreground">
                      <span>/m</span>
                    </span>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-4 ml-[-23px]">
                    <div>
                      {pricingCards
                        .find((c) => c.title === card.title)
                        ?.features.map((feature) => (
                          <div key={feature} className="flex gap-2">
                            <Check />
                            <p>{feature}</p>
                          </div>
                        ))}
                    </div>
                    <Link
                      href={`/agency?plan=${card.priceId}`}
                      className={clsx(
                        "w-[107%] mt-2 text-center bg-primary p-2 rounded-md text-black",
                        {
                          "!bg-muted-foreground":
                            card.title !== "Unlimited Saas",
                        }
                      )}
                    >
                      Get Started
                    </Link>
                  </CardFooter>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </ScrollArea>
    </>
  );
}
