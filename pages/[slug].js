import { useRouter } from "next/router";

export default function DynamicRoute({slug}) {
   const router = useRouter()
  if (router.query.slug === "blocked") {
    router.replace("/404", router.asPath)
  }
  
  return (
    <h1>{slug}</h1>
    )
}
