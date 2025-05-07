import { Component1 } from "../componenet/Component1";

export default function Home(){
  const data="100 componenent"
  return(
    <>
    <Component1 props={data}/>
    </>
  )
}