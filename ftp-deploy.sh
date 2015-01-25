#!/usr/bin/env bash
#
#    ftp-deploy.sh DIR HOST ROOT
#
# Ex:
#
#    ftp-deploy.sh dist ftp.amercier.com /www

dir=$(echo $1 | sed 's/\/$//')
find "$dir" -type f | while read filename; do
  url=$(echo $dir | sed 's/\//\\\//'g)
  url=$(echo "$filename" | sed "s/^$url//")
  url="ftp://$2$3$url"
  echo -n "$filename -> $url... "
  curl -s --ftp-create-dirs -T "$filename" -u $FTP_USERNAME:$FTP_PASSWORD "$url" && echo ✔ || exit 1
done || exit 1
