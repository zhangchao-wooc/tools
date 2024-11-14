"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

import styles from "./index.module.scss";

import { title } from "@/components/primitives";
import { toolsConfig } from "@/config/tools";

type ToolCardProps = {
  name: string;
  description: string;
  image?: string;
  link: string;
};
const ToolCard = (props: ToolCardProps) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{props.name}</h4>
        <small className="text-default-500">{props.description}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
};

export default function ToolsPage() {
  return (
    <div className={styles.tools}>
      <h1 className={title()}>Tools</h1>
      <section className={styles["tools-box"]}>
        {toolsConfig.map((item) => {
          return <ToolCard {...item} key={item.name} />;
        })}
      </section>
    </div>
  );
}
