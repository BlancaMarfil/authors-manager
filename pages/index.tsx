import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useGetCatByNameQuery } from "../graphql/generated";
import React from "react";

export default function Home() {
  const data = useGetCatByNameQuery({ variables: { name: "Abyssinian" } });
  console.log("DATA", data);

  return <></>;
}
