import { type NextRequest, NextResponse } from "next/server";

const AUTH_EMAIL = "hk435981@gmail.com";
const AUTH_PASSWORD = "Abdul@666";


export const middleware =(req: NextRequest) => {
    const token = req.cookies.get("token")?.value
    const session = req.cookies.get("authorSession")?.value;

    const path = req.nextUrl.pathname


    if (path === "/Dashboard") {
        if (!session || session !== "authorized") {
            return NextResponse.redirect(new URL("/Dashboard_Login", req.url));
        }
    }
    if (path.startsWith("/orders")) {
        if (!session || session !== "authorized") {
            return NextResponse.redirect(new URL("/Dashboard_Login", req.url));
        }
    }
    if (path.startsWith("/users")) {
        if (!session || session !== "authorized") {
            return NextResponse.redirect(new URL("/Dashboard_Login", req.url));
        }
    }
    if (path.startsWith("/settings")) {
        if (!session || session !== "authorized") {
            return NextResponse.redirect(new URL("/Dashboard_Login", req.url));
        }
    }

    // If already logged in, prevent access to login page
    if (path === "/Dashboard_Login" && session === "authorized") {
        return NextResponse.redirect(new URL("/Dashboard", req.url));
    }

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
    matcher: ["/login", "/signup", "/CheckoutPage" , "/Dashboard_Login" , "/Dashboard" , "/orders" , "/settings" , "/users"]
}