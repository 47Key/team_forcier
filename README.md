* Still in development

* Will need to reconfigure RETS client to support v2 functions, ignore the app.listen() function at the end of file, it will be taken care of automatically by FB. If that doesn't work, will have to host the app standalone with a docker image in AWS.

* All data sanitization has been moved into one function on the rets_ddf repo, will need to debug the v2 function set up again. Moved accounts to new email, will need to set up db still.