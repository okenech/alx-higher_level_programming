#!/bin/bash
# takes in a URL as an argument, sends a GET request to the URL, and displays the body of the response
curl $1 -s -H "X-School-User-Id: 98"
