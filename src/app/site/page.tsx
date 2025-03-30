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

const aboutCards = [
  {
    title: "Our Mission",
    description:
      "We aim to revolutionize how agencies and businesses operate by providing an intuitive, scalable, and efficient platform that simplifies workflows and boosts productivity.",
    features: [
      "Streamline operations",
      "Enhance collaboration",
      "Boost efficiency",
    ],
  },
  {
    title: "Why Choose BuildXpert?",
    description:
      "We provide an all-in-one ecosystem for project management, client collaboration, financial tracking, and analytics—eliminating the need for multiple tools.",
    features: [
      "Seamless integrations",
      "User-friendly interface",
      "AI-powered automation",
    ],
  },
  {
    title: "Our Vision",
    description:
      "We envision a world where businesses leverage technology to operate seamlessly. Our goal is to drive this transformation through continuous innovation.",
    features: [
      "Future-proof technology",
      "Scalable solutions",
      "Customer-driven enhancements",
    ],
  },
];

export default function Home() {
  return (
    <>
      <ScrollArea className="h-full w-full rounded-md">
        <section className="h-full w-full md:pt-1 relative flex items-center justify-center flex-col bg-primary-foreground">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <p className="text-white mt-[130px] text-center text-wrap text-[10px] md:text-[15px] lg:text-[25px] mb-[-25px]">
            Run Your Agency or Business in one Place!
          </p>
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative p-4">
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

        <section
          id="pricing"
          className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px]"
        >
          <h2 className="text-4xl text-center lg:mt-[-30px] md:mt-[-30px] mt-[100px]">
            Choose what fits you right
          </h2>
          <p className="text-muted-foreground text-center">
            Our straightforward pricing plans are tailored to meet your needs.
            If you&apos;re not ready to commit, you can get started for free.
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

        <section
          id="about"
          className="flex flex-col items-center text-center py-20 bg-muted/30"
        >
          <h2 className="text-4xl font-bold text-primary">About BuildXpert</h2>
          <p className="text-muted-foreground max-w-2xl mt-4">
            Empowering businesses with cutting-edge technology, BuildXpert is
            your one-stop solution for managing operations seamlessly.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {aboutCards.map((card) => (
              <Card
                key={card.title}
                className="p-6 ml-5 mr-5 bg-background shadow-lg rounded-lg border"
              >
                <CardHeader>
                  <h3 className="text-2xl font-semibold text-primary">
                    {card.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{card.description}</p>
                  <ul className="mt-4 space-y-2">
                    {card.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <Check className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="features" className="py-20 bg-transparent text-center">
          <h2 className="text-4xl font-bold text-primary">Key Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            BuildXpert is packed with powerful features to help you streamline
            operations, collaborate effortlessly, and scale your business.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12 px-5">
            {[
              {
                title: "Seamless Project Management",
                description:
                  "Organize, track, and manage projects efficiently with intuitive tools and automation.",
              },
              {
                title: "Advanced Client Collaboration",
                description:
                  "Communicate and collaborate with clients in real time for smoother workflows.",
              },
              {
                title: "Comprehensive Financial Tracking",
                description:
                  "Manage invoices, expenses, and budgets effortlessly with built-in financial tools.",
              },
              {
                title: "AI-Powered Automation",
                description:
                  "Reduce manual work and boost efficiency with intelligent automation features.",
              },
              {
                title: "Customizable Workflows",
                description:
                  "Adapt BuildXpert to your unique business needs with flexible workflow customization.",
              },
              {
                title: "In-Depth Analytics & Reporting",
                description:
                  "Gain insights with real-time reports and analytics to make data-driven decisions.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-background shadow-lg rounded-lg border"
              >
                <CardHeader>
                  <h3 className="text-2xl font-semibold text-primary">
                    {feature.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="docs" className="py-20 bg-muted/30 text-center text-white">
          <h2 className="text-4xl font-bold">Documentation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Get started quickly with our in-depth guides and API documentation.
          </p>

          <div className="mt-12 space-y-12 px-5 md:px-20">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-white">
                Getting Started
              </h3>
              <p className="text-muted-foreground mt-2">
                Learn how to set up your workspace and configure BuildXpert for
                optimal use.
              </p>
              <Link
                href="/docs/getting-started"
                className="text-primary font-medium mt-2 inline-block"
              >
                Read More →
              </Link>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-white">
                API Reference
              </h3>
              <p className="text-muted-foreground mt-2">
                Explore our comprehensive API documentation to integrate
                BuildXpert seamlessly.
              </p>
              <Link
                href="/docs/api-reference"
                className="text-primary font-medium mt-2 inline-block"
              >
                Read More →
              </Link>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-white">
                Customization Guide
              </h3>
              <p className="text-muted-foreground mt-2">
                Discover how to tailor BuildXpert to match your business needs.
              </p>
              <Link
                href="/docs/customization"
                className="text-primary font-medium mt-2 inline-block"
              >
                Read More →
              </Link>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-white">
                Best Practices
              </h3>
              <p className="text-muted-foreground mt-2">
                Follow industry best practices to maximize efficiency and
                collaboration.
              </p>
              <Link
                href="/docs/best-practices"
                className="text-primary font-medium mt-2 inline-block"
              >
                Read More →
              </Link>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-white">
                Security & Compliance
              </h3>
              <p className="text-muted-foreground mt-2">
                Understand our security protocols and compliance measures to
                protect your data.
              </p>
              <Link
                href="/docs/security"
                className="text-primary font-medium mt-2 inline-block"
              >
                Read More →
              </Link>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-white">
                FAQs & Troubleshooting
              </h3>
              <p className="text-muted-foreground mt-2">
                Find solutions to common issues and frequently asked questions.
              </p>
              <Link
                href="/docs/faqs"
                className="text-primary font-medium mt-2 inline-block"
              >
                Read More →
              </Link>
            </div>
          </div>
        </section>
      </ScrollArea>
    </>
  );
}
