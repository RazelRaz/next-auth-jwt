import { TokenCookie } from "@/app/utility/TokenCookie";
import { NextResponse } from "next/server";
import {cookies} from "next/headers";

export async function POST(req, res){
    
    const JSON = await req.json();
    let email = JSON['email'];
    let password = JSON['password']
    
    //database checking.. Thus we dont have, we will do it in prisma part
    if(email === 'email@mail.com' && password === '123'){
        let Cookie = await TokenCookie(email)
        return NextResponse.json(
            {status: true, message: "Login Success", },
            {status:200, headers: Cookie}
        )
    } else {
        return NextResponse.json(
            {status: false, message: "Login Failed", },
        )
    }

}

//for Logout
// GET
export async function GET(req, res){
    cookies().delete('token');
    return NextResponse.json(
        {status: true, message: "Logout Successful", },
    )
}
