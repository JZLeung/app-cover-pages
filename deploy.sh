#!/bin/bash

yarn build
tar -zcf cover.tar.gz ./build/*

server='root@www.baishew.com'
key='/Users/liangjianzhong/Documents/Baishe/baishe.pem'
today=`date +%Y%m%d`

scp -i $key cover.tar.gz $server:/root/


ssh -i $key $server "sudo rm -rf /root/cover-backup-$today"
ssh -i $key $server "cd /root/ && sudo tar zxf cover.tar.gz"
ssh -i $key $server "sudo mv /home/website/app/cover /root/cover-backup-$today"
ssh -i $key $server "sudo mv /root/build/ /home/website/app/cover"
ssh -i $key $server "sudo rm -rf /root/cover.tar.gz"


rm cover.tar.gz
