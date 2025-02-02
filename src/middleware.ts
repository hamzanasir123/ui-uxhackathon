import { type NextRequest, NextResponse } from "next/server";


export const middleware =(req: NextRequest) => {
    const token = req.cookies.get("token")?.value

    const path = req.nextUrl.pathname

    if(token) {
        if(path =="/login" || path == "/signup") return NextResponse.redirect( new URL("/", req.url),)

       NextResponse.next()     
    }    


    if (!token) {
        if(path.startsWith("/CheckoutPage")) return NextResponse.redirect( new URL("/login", req.url),);

        NextResponse.next()
    }

    return NextResponse.next()


}


export const config = {
    matcher: ["/login", "/signup", "/CheckoutPage"]
}