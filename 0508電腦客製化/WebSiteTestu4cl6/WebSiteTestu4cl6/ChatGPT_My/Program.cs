var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.

//======Define CORS Policy======//

string MyAllowSpecificOrigin = "AllowAny";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigin, policy => policy.WithOrigins("*").WithHeaders("*").WithMethods("*"));
});

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors();
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
