import { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
export type IEspClientStructure = Transporter<SMTPTransport.SentMessageInfo>;
export interface INodemailerError extends Error {
  code?: NodemailerErrorCode;
  command?: NodemailerErrorCommand;
  response?: string;
  responseCode?: number;
  errno?: string;
  syscall?: string;
  address?: string;
  port?: number;
  stack?: string;
}

enum NodemailerErrorCode {
  EAUTH = "EAUTH",           
  ECONNECTION = "ECONNECTION",
  ETIMEDOUT = "ETIMEDOUT",    
  ECONNRESET = "ECONNRESET",  
  EENVELOPE = "EENVELOPE",    
  EPROTOCOL = "EPROTOCOL",    
  EADDRINUSE = "EADDRINUSE",  
  EDNS = "EDNS",             
}
 enum NodemailerErrorCommand {
  AUTH_LOGIN = "AUTH LOGIN",  
  CONN = "CONN",              
  MAIL_FROM = "MAIL FROM",    
  RCPT_TO = "RCPT TO",        
  DATA = "DATA",              
  STARTTLS = "STARTTLS",      
  QUIT = "QUIT",               
  UNKNOWN = "UNKNOWN"         
}


export interface IEspClientConfig{
      host: string,
  port: number,
  secure: boolean,
  auth: {
    user: string,
    pass: string,
  },
}
export interface ImailOptions{
     from: string,
      to: string,
      subject: 'Nodemailer Project',
      text?: 'Hi from your nodemailer project',
      html?:string
}