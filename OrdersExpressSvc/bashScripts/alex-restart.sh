#!/bin/bash

sudo nginx -s reload
sudo service nginx restart
pm2 restart server
