var NodemailerErrorCode;
(function (NodemailerErrorCode) {
    NodemailerErrorCode["EAUTH"] = "EAUTH";
    NodemailerErrorCode["ECONNECTION"] = "ECONNECTION";
    NodemailerErrorCode["ETIMEDOUT"] = "ETIMEDOUT";
    NodemailerErrorCode["ECONNRESET"] = "ECONNRESET";
    NodemailerErrorCode["EENVELOPE"] = "EENVELOPE";
    NodemailerErrorCode["EPROTOCOL"] = "EPROTOCOL";
    NodemailerErrorCode["EADDRINUSE"] = "EADDRINUSE";
    NodemailerErrorCode["EDNS"] = "EDNS";
})(NodemailerErrorCode || (NodemailerErrorCode = {}));
var NodemailerErrorCommand;
(function (NodemailerErrorCommand) {
    NodemailerErrorCommand["AUTH_LOGIN"] = "AUTH LOGIN";
    NodemailerErrorCommand["CONN"] = "CONN";
    NodemailerErrorCommand["MAIL_FROM"] = "MAIL FROM";
    NodemailerErrorCommand["RCPT_TO"] = "RCPT TO";
    NodemailerErrorCommand["DATA"] = "DATA";
    NodemailerErrorCommand["STARTTLS"] = "STARTTLS";
    NodemailerErrorCommand["QUIT"] = "QUIT";
    NodemailerErrorCommand["UNKNOWN"] = "UNKNOWN";
})(NodemailerErrorCommand || (NodemailerErrorCommand = {}));
export {};
