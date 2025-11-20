web: node server.js


### **Deployment Instructions**

1.  **Save the files:** Update `package.json` and `Procfile`, and create the new `server.js`.
2.  **Clean up (Optional):** You can delete the `config` folder and `nginx.conf.erb` if you want, as they are no longer needed, but keeping them won't hurt.
3.  **Commit and Push:**

    ```bash
    git add .
    git commit -m "Switch to Node.js server to fix timeout"
    git push heroku main
    
This will force Heroku to install the `express` server and run it. Your app should go live immediately after the build finishes.
