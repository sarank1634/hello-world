import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Blog page",
}

export default async  function Blog() {
    await new Promise(reslove => {
    setTimeout(() => {
        reslove("internation deley");
    }, 2000)
    })
    return <h1>Blog</h1>;
}