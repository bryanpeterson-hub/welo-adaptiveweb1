web: bin/start-nginx-solo


### **Summary of Deployment Steps**

1.  **Create a new folder** on your computer for "Welo Demo".
2.  **Save the 5 files above** into that folder (ensure `nginx.conf.erb` is inside a `config` subfolder).
3.  **Initialize Git:** `git init`, `git add .`, `git commit -m "Initial Welo Demo"`.
4.  **Create Heroku App:** `heroku create welo-demo-app-name`.
5.  **Add Buildpacks (Order Matters):**
    * `heroku buildpacks:add heroku/nodejs`
    * `heroku buildpacks:add https://github.com/heroku/heroku-buildpack-nginx.git`
6.  **Deploy:** `git push heroku main`.

This will launch your fully rebranded Welo High Tech adaptive website demo! Let me know if you have any other questions.
