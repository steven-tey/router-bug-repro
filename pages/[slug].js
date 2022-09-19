import { useRouter } from "next/router";

export default function DynamicRoute() {
   const router = useRouter()
   const { slug } = router.query
  if (slug === "blocked") {
    router.replace("/404", router.asPath)
  }
  
  return (
    <h1>{slug}</h1>
    )
}
