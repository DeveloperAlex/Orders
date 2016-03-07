# Orders

To setup the environment read:
  OrdersExpressSvc/bashScripts/nginx-configuration-file.txt

Notes:
* Runs on port 8080 (alternate http port) since IIS is running on server.
>> Redirect from port 80 to 8080 - http://app.developeralex.com/

* pm2 = npm package to keep node.js running forever. https://www.npmjs.com/package/pm2  https://github.com/Unitech/pm2
>> iisnode = not used - https://github.com/tjanczuk/iisnode

* maybe try: https://github.com/pm2-hive/pm2-auto-pull
