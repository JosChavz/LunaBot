#!/bin/bash

pm2 start server/run-java.sh
sleep 10
pm2 start index.js


