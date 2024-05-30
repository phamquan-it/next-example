import {NextResponse, type NextRequest} from "next/server";

export function middleware(req:NextRequest){
   if(req.nextUrl.pathname ===  "/profile"){
    return NextResponse.redirect(new URL("/", req.url))
   }
    // return NextResponse.redirect(new  URL("",  req.url))
}

export const config = {
    matcher:"/profile"
}