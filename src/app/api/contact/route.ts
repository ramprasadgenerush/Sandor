import { NextResponse } from "next/server";
import { SendMailClient } from "zeptomail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !phone || !subject) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const token = process.env.NEXT_PUBLIC_ZEPTO_TOKEN!;

    const client = new SendMailClient({
      url: "api.zeptomail.com/",
      token: `Zoho-enczapikey ${token}`,
    });

    await client.sendMail({
      from: {
        address: "noreply@sandor.co.in",
        name: "Sandor Website",
      },
      to: [
        {
          email_address: {
            address: "info@sandor.co.in",
            name: "Sandor Contact",
          },
        },
      ],
      subject: `New Contact Request: ${subject}`,
      htmlbody: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title> Sandor.co.in </title>
</head>

<body style="background-color:#e6e6e6;font-family:Arial,Helvetica,sans-serif; margin: 0px; padding: 0px;">
  <div style="background-color:#e6e6e6;font-family:Arial,Helvetica,sans-serif;padding:40px 0px">
    <div style="width:580px;height:auto;background-color:#fff;margin:10px auto;padding-bottom:0px;font-size:13px">

      <div style="width:100%;float:left;height:auto;padding:18px 0px;text-align:center;border-bottom:solid 5px #002fb1">
        <img src="https://sandor.co.in/assets/img/logo/logo-1.png" style="height:40px" alt="Sandor logo">
      </div>

      <div style="width:90%;padding:30px;height:100%;float:left;color:#000">

        <div style="width:100%;float:left;margin:8px 0px;font-weight:600; font-size:16px;">
          <div style="width:auto;float:left;margin-right:5px">Hello</div>
          <div style="width:auto;float:left">${name || "User"},</div>
        </div>

        <div style="width:100%;float:left;margin:6px 0px">
          <div style="width:auto;float:left;line-height:22px;font-size:13px;color:#000">
            <p style="margin: 5px 0px;">Thank you for reaching out to us!</p>

            <p style="margin: 10px 0px;">
              We have received your message and our support team is currently reviewing your inquiry.
              One of our representatives will get back to you shortly.
            </p>

            <p style="margin: 10px 0px;">
              In the meantime, feel free to explore more about us at 
              <a href="https://sandor.co.in" target="_blank" style="color: #002fb1; font-weight: 600;">
                sandor.co.in
              </a>
            </p>

            <p>We appreciate your patience and look forward to assisting you.</p>
          </div>

          <div style="color:#002fb1;font-weight:700;font-size:20px;margin-top:30px;float:left;width:100%">
            Contact Details:
          </div>

          <div style="color:#000000;font-weight:700;font-size:13px;margin-top:15px;float:left;width:100%">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="line-height:30px">
              <tbody>
                <tr>
                  <td width="30%">Full Name</td>
                  <td width="5%">:</td>
                  <td width="65%" style="font-weight: normal;">${name}</td>
                </tr>
                <tr>
                  <td>Email Address</td>
                  <td>:</td>
                  <td style="font-weight: normal;">${email}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>:</td>
                  <td style="font-weight: normal;">${phone}</td>
                </tr>
                <tr>
                  <td>Subject</td>
                  <td>:</td>
                  <td style="font-weight: normal;">${subject}</td>
                </tr>
                <tr>
                  <td>Message</td>
                  <td>:</td>
                  <td style="line-height:20px;font-weight:normal;">
                    ${message ? message.replace(/\\n/g, "<br>") : "No message provided"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style="margin-top: 25px;font-size: 14px;line-height: 24px; width: 100%; float: left;">
          <span>Warm regards,</span><br>
          <b>Sandor Team</b><br>
          <a href="https://sandor.co.in" style="color:#002fb1; font-weight: 600;" target="_blank">
            www.sandor.co.in
          </a>
        </div>
      </div>

      <div style="background-color:#222222;color:#fff;width:100%;font-size:12px;float:left;padding:20px 0px;text-align:center;">
        © Copyright ${new Date().getFullYear()} Sandor.co.in All Rights Reserved
      </div>

      <div style="clear:both"></div>
    </div>
  </div>
</body>
</html>
`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    // console.error("ZeptoMail Error:", error);
    console.error("ZeptoMail Error:", JSON.stringify(error, null, 2));
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
