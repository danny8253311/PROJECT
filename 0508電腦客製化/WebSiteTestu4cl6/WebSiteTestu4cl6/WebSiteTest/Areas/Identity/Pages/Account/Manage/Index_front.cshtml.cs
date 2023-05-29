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
using Microsoft.EntityFrameworkCore;
using WebSiteTest.Data;

namespace WebSiteTest.Areas.Identity.Pages.Account.Manage
{
    public class IndexModel_front : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ILogger<ChangePasswordModel> _logger;
        private readonly IEmailSender _emailSender;
        //private readonly ComperWebSiteContext _context;

        //public IndexModel_front(
        //    UserManager<ApplicationUser> userManager,
        //    SignInManager<ApplicationUser> signInManager,
        //    ILogger<ChangePasswordModel> logger,
        //   IEmailSender emailSender,
        //   ComperWebSiteContext context
        //    )
        //{
        //    _context = context;
        //    _userManager = userManager;
        //    _signInManager = signInManager;
        //    _logger = logger;
        //    _emailSender = emailSender;
        //}

        /// <summary>
        ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
        ///     directly from your code. This API may change or be removed in future releases.
        /// </summary>
        public string Username { get; set; }


        public string Id { get; set; }
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
            /// 
            
            

            [Phone]
            [StringLength(10, MinimumLength = 10)]
            [Display(Name = "手機號碼")]
            public string PhoneNumber { get; set; }

            [Display(Name = "姓名")]
            public string Name { get; set; }

            [Display(Name = "信箱")]
            public string Email { get; set; }

            [Display(Name = "地址")]
            public string Address { get; set; }

            [Display(Name ="照片")]
            public byte[] Picture {  get; set; }
            [Display(Name ="點數")]
            public string point { get; set; }

            [Required]
            [DataType(DataType.Password)]
            [Display(Name = "舊密碼")]
            public string OldPassword { get; set; }

            [StringLength(12, ErrorMessage = " {0} 最少需要 {2} 個字", MinimumLength = 6)]
            [DataType(DataType.Password)]
            [Display(Name = "新密碼")]
            public string NewPassword { get; set; }

            [DataType(DataType.Password)]
            [Display(Name = "確認新密碼")]
            [Compare("NewPassword", ErrorMessage = "新設置的密碼與確認的密碼不相同!!")]
            public string ConfirmPassword { get; set; }
        }

        private async Task LoadAsync(ApplicationUser user)
        {

            var name = user.Name;
            var userId = await _userManager.GetUserIdAsync(user);
            var userName = await _userManager.GetUserNameAsync(user);
            var phoneNumber = await _userManager.GetPhoneNumberAsync(user);
            var userEmail =await _userManager.GetEmailAsync(user);
            var userAddress = user.Address;
            var userPicture = user.Picture;

            Username = userName;
            Id = userId;
            Input = new InputModel
            {
                PhoneNumber = phoneNumber,
                Email = userEmail,
                Address = userAddress,
                Name = name,
                Picture = userPicture,
            };
        }

        public async Task<IActionResult> OnGetAsync()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return NotFound($"沒有載入使用者 '{_userManager.GetUserId(User)}'.");
            }

            await LoadAsync(user);
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return NotFound($"沒有載入使用者 '{_userManager.GetUserId(User)}'.");
            }

            if (!ModelState.IsValid)
            {            

                await LoadAsync(user);
                return Page();
            }

            if (Request.Form.Files["file_photo"] != null)
            {
                byte[] ImageData = null;
                using (BinaryReader br = new BinaryReader(Request.Form.Files["file_photo"].OpenReadStream()))
                {
                    ImageData = br.ReadBytes((int)Request.Form.Files["file_photo"].Length);
                    user.Picture = ImageData;
                    await _userManager.UpdateAsync(user);
                    return RedirectToPage();
                }
            }


            await _signInManager.RefreshSignInAsync(user);
            //Password change
            if (Input.NewPassword != null)
            {
                var changePasswordResult = await _userManager.ChangePasswordAsync(user, Input.OldPassword, Input.NewPassword);

                if (!changePasswordResult.Succeeded)
                {
                    foreach (var error in changePasswordResult.Errors)
                    {
                        ModelState.AddModelError(string.Empty, error.Description);
                    }
                    return Page();
                }
            }

            //Name Change

            await _signInManager.RefreshSignInAsync(user);
            var Name = user.Name;
            if (Input.Name != Name)
            {
                user.Name = Input.Name;
                var updateResult = await _userManager.UpdateAsync(user);
                if (!updateResult.Succeeded)
                {
                    StatusMessage = "設置姓名時發生錯誤";
                    return RedirectToPage();
                }
            }


            //Phone Change
            await _signInManager.RefreshSignInAsync(user);
            var phoneNumber = await _userManager.GetPhoneNumberAsync(user);
            if (Input.PhoneNumber != phoneNumber)
            {
                var setPhoneResult = await _userManager.SetPhoneNumberAsync(user, Input.PhoneNumber);
                if (!setPhoneResult.Succeeded)
                {
                    StatusMessage = "設置手機號碼時發生錯誤";
                    return RedirectToPage();
                }
            }

            await _signInManager.RefreshSignInAsync(user);
            StatusMessage = "個人資訊已更新!!";
            return RedirectToPage();
        }
        //public async Task<FileResult> OnGetShowPhoto(string id)
        //{

        //    AspNetUsers? c = await _context.AspNetUsers.FindAsync(id);
        //    byte[]? content = c?.Picture;
        //    return File(content, "image/jpeg");

        //}
    }
}
