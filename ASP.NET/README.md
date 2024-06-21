# ASP.NET Core Notes

## CLI Commands

- create a new project: `dotnet new webapp -o <project-name>`
- run the project: `dotnet run`
- run in dev: `dotnet watch run`
- add gitignore: `dotnet new gitignore`

## Project Structure

```
BasicWebApp/
├── Properties/
│   └── launchSettings.json
├── wwwroot/
├── appsettings.Development.json
├── appsettings.json
├── Program.cs
└── ProjectName.csproj
```

- `ProjectName.csproj`: project file
- `Program.cs`: entry point of the app
- `Properties/launchSettings.json`: configuration for launching the app - stores the environment variables, similar to `package.json` in `Node.js`
- `wwwroot`: static files
- `appsettings.Development.json`: configuration for development environment
- `appsettings.json`: configuration for production environment
- `Endpoints`: routing configuration
- `Entities`: data models

### The repository pattern

- Decouples the application logic from the data layer
- Minimizes duplicate data access logic

## Data Validation

`ASP.NET Core` provides built-in data validation using `DataAnnotations`.

- `Required`: specifies that a property must have a value
- `StringLength`: specifies the maximum and minimum length of a string property
- `Range`: specifies the numeric range for a property
- `RegularExpression`: specifies a regular expression for a property

## NuGet Packages

`NuGet` is a package manager for `.NET` that provides tools to create, publish, and consume packages.

```bash
# install a package
dotnet add package <package-name> --version <version>
```
