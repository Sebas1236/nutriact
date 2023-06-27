import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;

//Para la conexión SMTP
const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user, pass,
    },
});

const sendConfirmationEmail = (name: string|null, email: string|null, confirmationCode: string) => {
    console.log('Check');
    transport.sendMail({
        from: user,
        to: email,
        subject: "Por favor, confirme su cuenta",
        html: `
        <head>
        
        <style type='text/css'>
            div{
                margin: 0;
                background-color:#f5f5f5;
            }
            table{
                border-spacing: 0;
            }
            td{
                padding: 0;
            }
            img{
                border: 0;
            }
            .wrapper {
                width: 100%;
                table-layout: fixed;
                background-color: #f5f5f5;
                padding-bottom: 40px;
            }
            .menu {
                background-color: #ffffff;
                margin: 0 auto;
                width:100%;
                max-width: 600px;
                border-spacing: 0;
                font-family: sans-serif;
                color:black;
            }
            @media screen and (max-width: 600px){
            }
        </style>
        </head>
        <div>
            <center class="wrapper">
                <table class="menu" width="100%">
                <! -- SOCIAL MEDIA ICONS -->    
                    <tr>
                        <td>
                            <table width="100%">
                                <tr>
                                    <td>
                                    
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                <! -- LOGO SECTION -->    
                    <tr>
                        <td>
                            <table width="100%" style="background-color: #A7D129;">
                                <tr>
                                    <td style="text-align: center; padding: 10px;">
                                      <h1 style="color:white;">NUTRIACT</h1>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                <! -- TITLE, TEXT $BUTTON -->  
                <tr>
                <td >
                    <table width="100%">
                        <tr>
                            <td style="text-align:center; padding: 15px;">
                              <h1 style="color:#000000;">Confirmación de email</h1>
                              <p style="font-size: 20px; font-weight: bold">Hola, <strong style="color: #A7D129;"> ${name}</strong></p>
                              <p  style="font-size: 15px; line-height:23px;padding:5px 15px 15px;">Gracias por registrarte en Nutriact. Por favor, confirma tu email dando click al siguiente botón: </p>
                              <a  style="background-color: #A7D129;color:#000000; text-decoration: none; padding: 12px 20px;border-radius: 15px;font-weight: bold;" href=http://localhost:3000/auth/confirm/${confirmationCode}/> Da click aquí </a>
                              
                              </td>
                        </tr>
                    </table>
                </td>
            </tr>
            </table>
            </center>
        </div>
        `
    });
};
export async function POST(req: Request) {
  const body = await req.json();
  const { email, name, password } = body;
  const role="client"
  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        role,
        hashedPassword,
      },
    });

    let code = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 25; i++) {
      code += characters[Math.floor(Math.random() * characters.length)];
    }
    //Enviamos el correo
    sendConfirmationEmail(
      user.name,
      user.email,
      code,
    );

    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error);
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    } else {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
