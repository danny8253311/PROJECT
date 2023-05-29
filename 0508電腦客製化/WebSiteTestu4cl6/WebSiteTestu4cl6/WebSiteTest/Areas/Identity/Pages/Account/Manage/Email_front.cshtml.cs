// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
#nullable disable

using System;
using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.WebUtilities;
using WebSiteTest.Data;

namespace WebSiteTest.Areas.Identity.Pages.Account.Manage
{
    public class Email_frontModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IEmailSender _emailSender;

        public Email_frontModel(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IEmailSender emailSender)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _emailSender = emailSender;
        }

        /// <summary>
        ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
        ///     directly from your code. This API may change or be removed in future releases.
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
        ///     directly from your code. This API may change or be removed in future releases.
        /// </summary>
        public bool IsEmailConfirmed { get; set; }

        /// <summary>
        ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
        ///     directly from your code. This API may change or be removed in future releases.
        /// </summary>
        [TempData]
        public string StatusMessage { get; set; }

        /// <summary>
        ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
        ///     directly from your code. This API may change or be removed in future releases.
        /// </summary>
        [BindProperty]
        public InputModel Input { get; set; }

        /// <summary>
        ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
        ///     directly from your code. This API may change or be removed in future releases.
        /// </summary>
        public class InputModel
        {
            /// <summary>
            ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
            ///     directly from your code. This API may change or be removed in future releases.
            /// </summary>
            [Required]
            [EmailAddress]
            [Display(Name = "New email")]
            public string NewEmail { get; set; }
        }

        private async Task LoadAsync(ApplicationUser user)
        {
            var email = await _userManager.GetEmailAsync(user);
            Email = email;

            Input = new InputModel
            {
                NewEmail = email,
            };

            IsEmailConfirmed = await _userManager.IsEmailConfirmedAsync(user);
        }

        public async Task<IActionResult> OnGetAsync()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return NotFound($"Unable to load user with ID '{_userManager.GetUserId(User)}'.");
            }

            await LoadAsync(user);
            return Page();
        }

        public async Task<IActionResult> OnPostChangeEmailAsync()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return NotFound($"Unable to load user with ID '{_userManager.GetUserId(User)}'.");
            }

            if (!ModelState.IsValid)
            {
                await LoadAsync(user);
                return Page();
            }

            var email = await _userManager.GetEmailAsync(user);
            if (Input.NewEmail != email)
            {
                var userId = await _userManager.GetUserIdAsync(user);
                var code = await _userManager.GenerateChangeEmailTokenAsync(user, Input.NewEmail);
                code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
                var callbackUrl = Url.Page(
                    "/Account/ConfirmEmailChange_front",
                    pageHandler: null,
                    values: new { area = "Identity", userId = userId, email = Input.NewEmail, code = code },
                    protocol: Request.Scheme);
                string emailContent = $@"
        <html>
  <head>
    <style>    
      
      img {{
        border: none;
        -ms-interpolation-mode: bicubic;
        max-width: 100%; 
      }}

      body {{
        background-color: #f6f6f6;
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
        line-height: 1.4;
        margin: 0;
        padding: 0;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%; 
      }}

      table {{
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        width: 100%; }}
        table td {{
          font-family: sans-serif;
          font-size: 14px;
          vertical-align: top; 
      }}

      /* -------------------------------------
          BODY & CONTAINER
      ------------------------------------- */

      .body {{
        background-color: #f6f6f6;
        width: 100%; 
      }}

      /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
      .container {{
        display: block;
        margin: 0 auto !important;
        /* makes it centered */
        max-width: 580px;
        padding: 10px;
        width: 580px; 
      }}

      /* This should also be a block element, so that it will fill 100% of the .container */
      .content {{
        box-sizing: border-box;
        display: block;
        margin: 0 auto;
        max-width: 580px;
        padding: 10px; 
      }}

      /* -------------------------------------
          HEADER, FOOTER, MAIN
      ------------------------------------- */
      .main {{
        background: #ffffff;
        border-radius: 3px;
        width: 100%; 
      }}

      .wrapper {{
        box-sizing: border-box;
        padding: 20px; 
      }}

      .content-block {{
        padding-bottom: 10px;
        padding-top: 10px;
      }}

      .footer {{
        clear: both;
        margin-top: 10px;
        text-align: center;
        width: 100%; 
      }}
        .footer td,
        .footer p,
        .footer span,
        .footer a {{
          color: #999999;
          font-size: 12px;
          text-align: center; 
      }}

      /* -------------------------------------
          TYPOGRAPHY
      ------------------------------------- */
      h1,
      h2,
      h3,
      h4 {{
        color: #000000;
        font-family: sans-serif;
        font-weight: 400;
        line-height: 1.4;
        margin: 0;
        margin-bottom: 30px; 
      }}

      h1 {{
        font-size: 35px;
        font-weight: 300;
        text-align: center;
        text-transform: capitalize; 
      }}

      p,
      ul,
      ol {{
        font-family: sans-serif;
        font-size: 14px;
        font-weight: normal;
        margin: 0;
        margin-bottom: 15px; 
      }}
        p li,
        ul li,
        ol li {{
          list-style-position: inside;
          margin-left: 5px; 
      }}

      a {{
        color: #3498db;
        text-decoration: underline; 
      }}

      /* -------------------------------------
          BUTTONS
      ------------------------------------- */
      .btn {{
        box-sizing: border-box;
        width: 100%; }}
        .btn > tbody > tr > td {{
          padding-bottom: 15px; }}
        .btn table {{
          width: auto; 
      }}
        .btn table td {{
          background-color: #ffffff;
          border-radius: 5px;
          text-align: center; 
      }}
        .btn a {{
          background-color: #ffffff;
          border: solid 1px #3498db;
          border-radius: 5px;
          box-sizing: border-box;
          color: #3498db;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: bold;
          margin: 0;
          padding: 12px 25px;
          text-decoration: none;
          text-transform: capitalize; 
      }}

      .btn-primary table td {{
        background-color: #3498db; 
      }}

      .btn-primary a {{
        background-color: #3498db;
        border-color: #3498db;
        color: #ffffff; 
      }}

      /* -------------------------------------
          OTHER STYLES THAT MIGHT BE USEFUL
      ------------------------------------- */
      .last {{
        margin-bottom: 0; 
      }}

      .first {{
        margin-top: 0; 
      }}

      .align-center {{
        text-align: center; 
      }}

      .align-right {{
        text-align: right; 
      }}

      .align-left {{
        text-align: left; 
      }}

      .clear {{
        clear: both; 
      }}

      .mt0 {{
        margin-top: 0; 
      }}

      .mb0 {{
        margin-bottom: 0; 
      }}

      .preheader {{
        color: transparent;
        display: none;
        height: 0;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        visibility: hidden;
        width: 0; 
      }}

      .powered-by a {{
        text-decoration: none; 
      }}

      hr {{
        border: 0;
        border-bottom: 1px solid #f6f6f6;
        margin: 20px 0; 
      }}

      /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
      ------------------------------------- */
      @media only screen and (max-width: 620px) {{
        table.body h1 {{
          font-size: 28px !important;
          margin-bottom: 10px !important; 
        }}
        table.body p,
        table.body ul,
        table.body ol,
        table.body td,
        table.body span,
        table.body a {{
          font-size: 16px !important; 
        }}
        table.body .wrapper,
        table.body .article {{
          padding: 10px !important; 
        }}
        table.body .content {{
          padding: 0 !important; 
        }}
        table.body .container {{
          padding: 0 !important;
          width: 100% !important; 
        }}
        table.body .main {{
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important; 
        }}
        table.body .btn table {{
          width: 100% !important; 
        }}
        table.body .btn a {{
          width: 100% !important; 
        }}
        table.body .img-responsive {{
          height: auto !important;
          max-width: 100% !important;
          width: auto !important; 
        }}
      }}

      /* -------------------------------------
          PRESERVE THESE STYLES IN THE HEAD
      ------------------------------------- */
      @media all {{
        .ExternalClass {{
          width: 100%; 
        }}
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {{
          line-height: 100%; 
        }}
        .apple-link a {{
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important; 
        }}
        #MessageViewBody a {{
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
        }}
        .btn-primary table td:hover {{
          background-color: #34495e !important; 
        }}
        .btn-primary a:hover {{
          background-color: #34495e !important;
          border-color: #34495e !important; 
        }} 
      }}

    </style>
  </head>
  <body>
    <span class=""preheader"">This is preheader text. Some clients will show this text as a preview.</span>
    <table role=""presentation"" border=""0"" cellpadding=""0"" cellspacing=""0"" class=""body"">
      <tr>
        <td>&nbsp;</td>
        <td class=""container"">
          <div class=""content"">

            <!-- START CENTERED WHITE CONTAINER -->
            <table role=""presentation"" class=""main"">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class=""wrapper"">
                  <table role=""presentation"" border=""0"" cellpadding=""0"" cellspacing=""0"">
                    <tr>
                      <td>
                        <p>Hi there,</p>
                        <p>Sometimes you just want to send a simple HTML email with a simple design and clear call to action. This is it.</p>
                        <table role=""presentation"" border=""0"" cellpadding=""0"" cellspacing=""0"" class=""btn btn-primary"">
                          <tbody>
                            <tr>
                              <td align=""left"">
                                <table role=""presentation"" border=""0"" cellpadding=""0"" cellspacing=""0"">
                                  <tbody>
                                    <tr>
                                      <td> <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>點擊驗證信箱</a> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>                      
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            <!-- END MAIN CONTENT AREA -->
            </table>
            <!-- END CENTERED WHITE CONTAINER -->
           
          </div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </body>
</html>";
                await _emailSender.SendEmailAsync(
                    Input.NewEmail,
                     "驗證你的信箱",
                    emailContent);
                //$"請驗證你的帳戶 <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>."
                StatusMessage = "驗證信已發送.請檢查您的信箱!";
                return RedirectToPage();
            }
            StatusMessage = "信箱與舊信箱相同!!";
            return RedirectToPage();
        }

        public async Task<IActionResult> OnPostSendVerificationEmailAsync()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return NotFound($"Unable to load user with ID '{_userManager.GetUserId(User)}'.");
            }
            
            if (!ModelState.IsValid)
            {
                await LoadAsync(user);
                return Page();
            }

            var userId = await _userManager.GetUserIdAsync(user);
            var email = await _userManager.GetEmailAsync(user);
            var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
            var callbackUrl = Url.Page(
                "/Account/ConfirmEmail_front",
                pageHandler: null,
                values: new { area = "Identity", userId = userId, code = code },
                protocol: Request.Scheme);
            string emailContent = $@"
        <html>
  <head>
    <style>    
      
      img {{
        border: none;
        -ms-interpolation-mode: bicubic;
        max-width: 100%; 
      }}

      body {{
        background-color: #f6f6f6;
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
        line-height: 1.4;
        margin: 0;
        padding: 0;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%; 
      }}

      table {{
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        width: 100%; }}
        table td {{
          font-family: sans-serif;
          font-size: 14px;
          vertical-align: top; 
      }}

      /* -------------------------------------
          BODY & CONTAINER
      ------------------------------------- */

      .body {{
        background-color: #f6f6f6;
        width: 100%; 
      }}

      /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
      .container {{
        display: block;
        margin: 0 auto !important;
        /* makes it centered */
        max-width: 580px;
        padding: 10px;
        width: 580px; 
      }}

      /* This should also be a block element, so that it will fill 100% of the .container */
      .content {{
        box-sizing: border-box;
        display: block;
        margin: 0 auto;
        max-width: 580px;
        padding: 10px; 
      }}

      /* -------------------------------------
          HEADER, FOOTER, MAIN
      ------------------------------------- */
      .main {{
        background: #ffffff;
        border-radius: 3px;
        width: 100%; 
      }}

      .wrapper {{
        box-sizing: border-box;
        padding: 20px; 
      }}

      .content-block {{
        padding-bottom: 10px;
        padding-top: 10px;
      }}

      .footer {{
        clear: both;
        margin-top: 10px;
        text-align: center;
        width: 100%; 
      }}
        .footer td,
        .footer p,
        .footer span,
        .footer a {{
          color: #999999;
          font-size: 12px;
          text-align: center; 
      }}

      /* -------------------------------------
          TYPOGRAPHY
      ------------------------------------- */
      h1,
      h2,
      h3,
      h4 {{
        color: #000000;
        font-family: sans-serif;
        font-weight: 400;
        line-height: 1.4;
        margin: 0;
        margin-bottom: 30px; 
      }}

      h1 {{
        font-size: 35px;
        font-weight: 300;
        text-align: center;
        text-transform: capitalize; 
      }}

      p,
      ul,
      ol {{
        font-family: sans-serif;
        font-size: 14px;
        font-weight: normal;
        margin: 0;
        margin-bottom: 15px; 
      }}
        p li,
        ul li,
        ol li {{
          list-style-position: inside;
          margin-left: 5px; 
      }}

      a {{
        color: #3498db;
        text-decoration: underline; 
      }}

      /* -------------------------------------
          BUTTONS
      ------------------------------------- */
      .btn {{
        box-sizing: border-box;
        width: 100%; }}
        .btn > tbody > tr > td {{
          padding-bottom: 15px; }}
        .btn table {{
          width: auto; 
      }}
        .btn table td {{
          background-color: #ffffff;
          border-radius: 5px;
          text-align: center; 
      }}
        .btn a {{
          background-color: #ffffff;
          border: solid 1px #3498db;
          border-radius: 5px;
          box-sizing: border-box;
          color: #3498db;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: bold;
          margin: 0;
          padding: 12px 25px;
          text-decoration: none;
          text-transform: capitalize; 
      }}

      .btn-primary table td {{
        background-color: #3498db; 
      }}

      .btn-primary a {{
        background-color: #3498db;
        border-color: #3498db;
        color: #ffffff; 
      }}

      /* -------------------------------------
          OTHER STYLES THAT MIGHT BE USEFUL
      ------------------------------------- */
      .last {{
        margin-bottom: 0; 
      }}

      .first {{
        margin-top: 0; 
      }}

      .align-center {{
        text-align: center; 
      }}

      .align-right {{
        text-align: right; 
      }}

      .align-left {{
        text-align: left; 
      }}

      .clear {{
        clear: both; 
      }}

      .mt0 {{
        margin-top: 0; 
      }}

      .mb0 {{
        margin-bottom: 0; 
      }}

      .preheader {{
        color: transparent;
        display: none;
        height: 0;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        visibility: hidden;
        width: 0; 
      }}

      .powered-by a {{
        text-decoration: none; 
      }}

      hr {{
        border: 0;
        border-bottom: 1px solid #f6f6f6;
        margin: 20px 0; 
      }}

      /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
      ------------------------------------- */
      @media only screen and (max-width: 620px) {{
        table.body h1 {{
          font-size: 28px !important;
          margin-bottom: 10px !important; 
        }}
        table.body p,
        table.body ul,
        table.body ol,
        table.body td,
        table.body span,
        table.body a {{
          font-size: 16px !important; 
        }}
        table.body .wrapper,
        table.body .article {{
          padding: 10px !important; 
        }}
        table.body .content {{
          padding: 0 !important; 
        }}
        table.body .container {{
          padding: 0 !important;
          width: 100% !important; 
        }}
        table.body .main {{
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important; 
        }}
        table.body .btn table {{
          width: 100% !important; 
        }}
        table.body .btn a {{
          width: 100% !important; 
        }}
        table.body .img-responsive {{
          height: auto !important;
          max-width: 100% !important;
          width: auto !important; 
        }}
      }}

      /* -------------------------------------
          PRESERVE THESE STYLES IN THE HEAD
      ------------------------------------- */
      @media all {{
        .ExternalClass {{
          width: 100%; 
        }}
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {{
          line-height: 100%; 
        }}
        .apple-link a {{
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important; 
        }}
        #MessageViewBody a {{
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
        }}
        .btn-primary table td:hover {{
          background-color: #34495e !important; 
        }}
        .btn-primary a:hover {{
          background-color: #34495e !important;
          border-color: #34495e !important; 
        }} 
      }}

    </style>
  </head>
  <body>
    <span class=""preheader"">This is preheader text. Some clients will show this text as a preview.</span>
    <table role=""presentation"" border=""0"" cellpadding=""0"" cellspacing=""0"" class=""body"">
      <tr>
        <td>&nbsp;</td>
        <td class=""container"">
          <div class=""content"">

            <!-- START CENTERED WHITE CONTAINER -->
            <table role=""presentation"" class=""main"">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class=""wrapper"">
                  <table role=""presentation"" border=""0"" cellpadding=""0"" cellspacing=""0"">
                    <tr>
                      <td>
                        <p>Hi there,</p>
                        <p>Sometimes you just want to send a simple HTML email with a simple design and clear call to action. This is it.</p>
                        <table role=""presentation"" border=""0"" cellpadding=""0"" cellspacing=""0"" class=""btn btn-primary"">
                          <tbody>
                            <tr>
                              <td align=""left"">
                                <table role=""presentation"" border=""0"" cellpadding=""0"" cellspacing=""0"">
                                  <tbody>
                                    <tr>
                                      <td> <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>點擊驗證</a> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>                      
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            <!-- END MAIN CONTENT AREA -->
            </table>
            <!-- END CENTERED WHITE CONTAINER -->


          </div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </body>
</html>";

            await _emailSender.SendEmailAsync(
                email,
                "請驗證您的信箱",
                emailContent) ;
//< a href = '{HtmlEncoder.Default.Encode(callbackUrl)}' > clicking here </ a >.")
            StatusMessage = "驗證信已送出. 請檢查您的信箱.";
            return RedirectToPage();
        }
        
    }
}
