#!/bin/bash
set -m # enable job control
echo "Starting test server on port $1..."
echo "Stop the server with Ctrl-C"
python3 -m http.server $1 --directory ./virginia.clubrunning.org & # start server
sleep 1
open http://localhost:$1
fg
