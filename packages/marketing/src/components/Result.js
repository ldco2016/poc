import React from "react";

const onfidoHTML = `<h1>Thank You!</h1><H2>Your documents have been submitted for review.</h2>`;

export default function Result() {
  return <div dangerouslySetInnerHTML={{ __html: onfidoHTML }} />;
}
