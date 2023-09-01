import { SignJWT, jwtVerify } from "jose";


//jwt token creation
// when want to login user will give a email
//email will encrypt and give token
// encrypt
export async function CreateToken(email){
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    let token = await new SignJWT({email:email})
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION)
    .sign(secret);

    return token;
}

//decrypt
// jwt token verify
export async function VerifyToken(token){

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    let decoded = await jwtVerify(token, secret);
    return decoded['payload'];
}