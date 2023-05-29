using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using WebSiteTest;
using WebSiteTest.Data;
 

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));

//var AspnetUserConnectionString = builder.Configuration.GetConnectionString("ComperWebSite");
//builder.Services.AddDbContext<WebSiteTest.Areas.AspnetUser.Models.ComperWebSiteContext>(options =>
//    options.UseSqlServer(AspnetUserConnectionString));

//�s�u��.��ComperWebSite
var ThriftShopConnectionString = builder.Configuration.GetConnectionString("ComperWebSite");
builder.Services.AddDbContext<WebSiteTest.Areas.ThriftShop.Models.ComperWebSiteContext>(options =>
    options.UseSqlServer(ThriftShopConnectionString));
var ProductsManagerConnectionString = builder.Configuration.GetConnectionString("ComperWebSite");
builder.Services.AddDbContext<WebSiteTest.Areas.ProductsManager.Models.ComperWebSiteContext>(options =>
    options.UseSqlServer(ProductsManagerConnectionString));
var supplierConnectionString = builder.Configuration.GetConnectionString("ComperWebSite");
builder.Services.AddDbContext<WebSiteTest.Areas.supplier.Models.ComperWebSiteContext>(options =>
    options.UseSqlServer(supplierConnectionString));
var GpuComparisonConnectionString = builder.Configuration.GetConnectionString("ComperWebSite");
builder.Services.AddDbContext<WebSiteTest.Areas.GpuComparison.Models.ComperWebSiteContext>(options =>
    options.UseSqlServer(GpuComparisonConnectionString));

builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultUI()
    .AddDefaultTokenProviders();
builder.Services.AddControllersWithViews();

builder.Services.AddTransient<IEmailSender, EmailSender>();




builder.Services.Configure<IdentityOptions>(options => {
    options.Password.RequireDigit = true;
    options.Password.RequireLowercase = true;
    options.Password.RequireNonAlphanumeric = true;
    options.Password.RequireUppercase = true;
    options.Password.RequiredLength = 8;
    options.Password.RequiredUniqueChars = 1;

    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
    options.Lockout.MaxFailedAccessAttempts = 3;
    options.Lockout.AllowedForNewUsers = true;


    options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
    options.User.RequireUniqueEmail = true;
});
builder.Services.ConfigureApplicationCookie(options => {
    options.Cookie.HttpOnly = true;
    options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
    options.ExpireTimeSpan = TimeSpan.FromMinutes(5);
    options.LoginPath = "/Identity/Account/Login_front";
    options.AccessDeniedPath = "/Identity/Account/AccessDenied";
    options.SlidingExpiration = true;
});



var app = builder.Build();

var options = new StaticFileOptions
{
    ContentTypeProvider = new FileExtensionContentTypeProvider(),
    ServeUnknownFileTypes = true
};
app.UseStaticFiles(options);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();



app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
      name: "GpuComparison",
      pattern: "{area:exists}/{controller=GpuComparison}/{action=Index}/{id?}"
    );
});
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
      name: "FrontThrift",
      pattern: "{area:exists}/{controller=FrontThrift}/{action=Index}/{id?}"
    );
});
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
      name: "ProductsManager",
      pattern: "{area:exists}/{controller=Products}/{action=Index}/{id?}"
    );
});
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
      name: "ThriftShop",
      pattern: "{area:exists}/{controller=ThriftProducts}/{action=Index}/{id?}"
    );
});
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
      name: "AspNetUser",
      pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}"
    );
});
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{action}",
        defaults: new { controller = "" });
});

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index_front}/{id?}");
app.MapRazorPages();

using (var scope = app.Services.CreateScope())
    {
        var serviceProvider = scope.ServiceProvider;
        try
        {
            var userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            
            //Seed.SeedDB(userManager, roleManager);
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.Message);
        }
    }


app.Run();
