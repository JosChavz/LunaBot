#!/bin/bash

pm2 start server/run-java.sh
sleep 5
pm2 start index.js


