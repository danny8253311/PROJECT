using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing;

namespace WebSiteTest.Data
{
	public class ApplicationUser :IdentityUser
	{

        [Required]
        [Display(Name = "姓名")]
        public string? Name { get; set; }
        [Required]
		[Display(Name="地址")]
		public string? Address { get; set; }

		[Required]
		[Display(Name = "加入時間")]
		public DateTime AddDate { get; set; }
		[Required]
		[Display(Name = "生日")]
		public DateTime Birth { get; set; }
		[Display(Name = "性別")]
		public string? Gender { get; set; }
		[Display(Name = "點數")]
		public int Point { get; set; }
		[Display(Name = "照片")]
		public byte[]? Picture { get; set; }

		

		public ApplicationUser()
		{
			AddDate = DateTime.Now; ; // 設定 CreateDate 屬性的預設值為當天日期
		}
	}
}
