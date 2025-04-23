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

const featuresList = [
  {
    title: "Project Management",
    description:
      "Organize, track, and manage projects efficiently with intuitive tools and automation.",
  },
  {
    title: "Client Collaboration",
    description:
      "Communicate and collaborate with clients in real time for smoother workflows.",
  },
  {
    title: "Lead Cycle Tracking",
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
    title: "Analytics & Reporting",
    description:
      "Gain insights with real-time reports and analytics to make data-driven decisions.",
  },
];

export default function Home() {
  return (
    <ScrollArea className="h-full w-full rounded-md">
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-primary-foreground text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <p className="text-white text-xs sm:text-base md:text-lg lg:text-2xl mt-32 mb-[-10px]">
          Run Your Agency or Business in One Place!
        </p>

        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative p-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[130px] font-bold">
            BuildXpert
          </h1>
        </div>

        <div className="relative mt-4 md:mt-0 w-full max-w-[90vw] md:max-w-[80vw]">
          <Image
            src="/assets/preview.png"
            alt="banner image"
            width={1200}
            height={800}
            className="rounded-t-2xl border-2 border-muted w-full object-cover"
          />
          <div className="absolute inset-x-0 top-1/2 h-1/3 bg-gradient-to-t dark:from-background z-10" />
        </div>
      </section>

      <section id="pricing" className="text-center px-4 py-20 bg-background">
        <h2 className="text-4xl font-bold">Choose what fits you right</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Our straightforward pricing plans are tailored to meet your needs.
          Start for free anytime.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {pricingCards.map((card) => (
            <Card
              key={card.title}
              className={clsx("w-full max-w-sm flex flex-col justify-between", {
                "border-2 border-primary": card.title === "Unlimited Saas",
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx({
                    "text-muted-foreground": card.title !== "Unlimited Saas",
                  })}
                >
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{card.price}</div>
                <span className="text-muted-foreground">/m</span>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <div className="space-y-2 text-left">
                  {card.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/agency?plan=${card.priceId}`}
                  className={clsx(
                    "block w-full py-2 rounded-md text-white font-medium",
                    {
                      "bg-muted": card.title === "Unlimited Saas",
                      "bg-muted-foreground": card.title !== "Unlimited Saas",
                    }
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30 text-center">
        <h2 className="text-4xl font-bold text-primary">About BuildXpert</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          Empowering businesses with cutting-edge technology, BuildXpert is your
          one-stop solution for managing operations seamlessly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {aboutCards.map((card) => (
            <Card
              key={card.title}
              className="bg-background p-6 shadow-lg rounded-lg border"
            >
              <CardHeader>
                <h3 className="text-2xl font-semibold text-primary">
                  {card.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{card.description}</p>
                <ul className="mt-4 space-y-2 text-left">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
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

      <section id="features" className="py-20 px-4 text-center bg-transparent">
        <h2 className="text-4xl font-bold text-primary">Key Features</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          BuildXpert is packed with powerful features to streamline operations,
          enhance collaboration, and scale your business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featuresList.map((feature, idx) => (
            <Card
              key={idx}
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

      <section id="docs" className="py-20 px-4 bg-muted/30 text-center">
        <h2 className="text-4xl font-bold text-white">Documentation</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          Get started quickly with our in-depth guides and API documentation.
        </p>

        <div className="mt-12 space-y-12 max-w-4xl mx-auto text-left">
          {[
            {
              title: "Getting Started",
              description:
                "Learn how to set up your workspace and configure BuildXpert for optimal use.",
              link: "/docs/getting-started",
            },
            {
              title: "API Reference",
              description:
                "Explore our comprehensive API documentation to integrate BuildXpert seamlessly.",
              link: "/docs/api-reference",
            },
            {
              title: "Customization Guide",
              description:
                "Discover how to tailor BuildXpert to match your business needs.",
              link: "/docs/customization",
            },
          ].map((doc) => (
            <div key={doc.title} className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-white">{doc.title}</h3>
              <p className="text-muted-foreground mt-2">{doc.description}</p>
              <Link
                href={doc.link}
                className="text-primary font-medium mt-2 inline-block"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </ScrollArea>
  );
}
