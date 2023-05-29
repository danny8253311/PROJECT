using Microsoft.AspNetCore.Identity.UI.Services;
using System.Net.Mail;
using System.Net;

namespace WebSiteTest
{
    public class EmailSender : IEmailSender
    {
        public async Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            var mail = new MailMessage();
            mail.From = new MailAddress("seolhyun3974@gmail.com");
            mail.To.Add(email);
            mail.Subject = "212312323132";
            mail.IsBodyHtml = true;
            mail.Body = htmlMessage;

            SmtpClient client = new SmtpClient("smtp.gmail.com");
            //SmtpClient client = new SmtpClient("smtp.live.com");
            client.Port = 587;
            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential("seolhyun3974@gmail.com", "vdfdzsbhggjxlsxt");
            client.EnableSsl = true;
            client.Send(mail);
        }
    }
}
