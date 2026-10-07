import React from "react";
import NotFound from "../not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada (404) | Estores Valencia",
  description: "La página que buscas no existe o ha cambiado de dirección.",
  robots: {
    index: false,
    follow: true
  }
};

export default function Explicit404Page() {
  return <NotFound />;
}
