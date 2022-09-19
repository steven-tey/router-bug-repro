import { useRouter } from "next/router";

export default function DynamicRoute({slug}) {
   const router = useRouter()
  if (slug === "blocked") {
    router.replace("/404", router.asPath)
  }
  
  return (
    <h1>{slug}</h1>
    )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  return {
    props: {
      slug
    }, 
  }
}
