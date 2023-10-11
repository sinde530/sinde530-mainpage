if [ -z "$1" ]; then
  echo "커밋 메시지 내용을 입력하고 다시 해주세요."
  exit 1
fi

git add .
git commit -m "$1"
git push origin master

# chmod +x gitpush.sh
# cli: ./gitpush.sh "Entered Content"