This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

routing conventions
all routes must live inside the app folder
route files must be named either page.js or page.tsx
each folder represents a segments of the url path

next js server components 
client and server components

client components 
- 

you need to add the use client directive to the top of the file to make it a client component
while client components can't perform server side tasksslike reading files they can use hoks and handle user interactions

react server components and routingand routing 
work with server. you'll see practial  

routing conventions 
all routes must live inside the app folder
route files must be named either page.js or page.tsx
each folder represents a segments of the url path

dynamic rounting folder struct like:

app/products/[productid]/page.tsx
you can use [productid] to create and also access dynamic routes

chapter 7
you can use the params object to access the dynamic routes in the server component 
eg: {params}at the top of the function argurment 
    after initialising promise 
    the finaly step :
    const productid = (await params).productid;
  
  the final url like at these "localhost:3000/products/1"

chapter 8 nested dynamic routing
localhost:3000/products/1/reviews/1

create a page.tsx file in the reviews folder 
review the couple of reviews

chapter 9 catch all the segments 
docs> [slug] run after enter url  path global or docs/any thing etc.
 eg: localhost:3000/global/routing/catch-all-segments

chapter 10 
not found page
create a not-found.tsx file in the app folder
 
chapter 11 
file colocation
create app> Dashboard >line-chart.tsx 
app> Dashboard >page.tsx

chapter 12 
private folder 
this folder for internal stuff in the routing- don't includeing inside the routing system.
 the folder and all subfolders are excluded from the routing system.  
 add an underscore at the start of the folder name

 app > _lib> format-date.js

 private folders your ul 
 logic separate from routing logic 
 having a consistent way to organise your code
 if you want - inyourcode  5f instead thaturl encode 

 chapter 13 
 rouye groups : 
 logicaly organize our route and project files without the url struct
auth route 

chapter 14 
layout components :-
productId> reivews> layout style

chapter 16 
multiple layout rootlayout
create two route groups in the app

chapter 17 
meta seo :-
static and dynamic


chapter 19 
defining routes for our app root, nested routes, dynamic routes, catch all routes, private routes

staic route :-
 <Link href="/">Home</Link>

 dynamic route :-
 const product id = 100;
 <link href={`/products/${productid}`}>product {productid}</Link>

 use replace to prevent the history from being updated  
 eg: 
 if you stay on the product list page select product 3 after direct to go home page
 <link href={`/products/${productid}`} replace>product {productid}</Link>

 dynamic route with query params
 <Link href={`/products/${productid}?sort=asc`}>product {productid}</Link>

 chapter 21
 search params:- 
 params:- promise that reslove to an object containing the dynamic params for the current page
 eg: 
 like id:100

 searchParams:- 
 promise that reslove to an object containing the query params for the current page
eg: 
like sort:asc
