# Deploying to GitHub Pages

Follow these steps to deploy the Alex Styles portfolio website to GitHub Pages:

## Step 1: Create a GitHub Repository

1. Sign in to your GitHub account at [github.com](https://github.com/)
2. Click the "+" icon in the upper right corner and select "New repository"
3. Name your repository (e.g., "alex-styles-portfolio")
4. Add an optional description
5. Choose "Public" visibility
6. Click "Create repository"

## Step 2: Initialize Git in Your Local Project

Open your command line/terminal and navigate to your project directory:

```bash
cd path/to/alex-styles-portfolio
```

Initialize a new Git repository:

```bash
git init
```

Add all your project files to the staging area:

```bash
git add .
```

Commit your changes:

```bash
git commit -m "Initial commit"
```

## Step 3: Connect and Push to GitHub

Connect your local repository to the GitHub repository you created:

```bash
git remote add origin https://github.com/YOUR-USERNAME/alex-styles-portfolio.git
```

Push your code to GitHub:

```bash
git push -u origin main
```

Note: If your default branch is called "master" instead of "main", use:

```bash
git push -u origin master
```

## Step 4: Enable GitHub Pages

1. On GitHub, navigate to your repository
2. Click on "Settings" (tab near the top of the page)
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select the branch you want to use (usually "main" or "master")
5. Click "Save"

## Step 5: Access Your Published Site

After a few minutes, your site will be available at:

```
https://YOUR-USERNAME.github.io/alex-styles-portfolio/
```

You can find this URL in the GitHub Pages section of your repository settings.

## Step 6: Verify Your Site

1. Visit the URL provided in the GitHub Pages section
2. Test the site's functionality:
   - Check that all links work
   - Verify that the responsive design works on different devices
   - Test interactive elements like modals and filters
   - Ensure all images load correctly

## Making Updates

To update your site after making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically update your live site within a few minutes.

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domains with GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)
