source ./secrets/.env.deploy

dist_folder="dist"

is_dist_exists=0
if [ -d $dist_folder ]; then
    is_dist_exists=1
fi

should_rebuild=1
if [ $is_dist_exists -ne 0 ]; then
    echo ""
    read -p " 🚧 The \"$dist_folder\" (build) folder already exists. Rebuild the project? (y/n): " confirm

    if [ "$confirm" == "n" ]; then
        should_rebuild=0
    fi
fi

if [ $should_rebuild == 1 ]; then
    echo ""
    echo " 🏗️ building..."
    echo ""

    pnpm build
    build_status=$?
else
    build_status=0
fi

if [ $build_status -ne 0 ]; then
    echo ""
    echo " 🚨 Build failed!"
    echo ""
    exit $build_status
fi


echo ""
read -p " 🛳️ Deploy to production? (y/n): " confirm

if [ "$confirm" != "y" ]; then
    echo " 🚫 Deploy canceled."
    echo ""
    exit 1
fi

echo ""
echo " ☕"
echo ""

echo ""
echo " Backup old files..."
echo ""

(aws s3 --recursive mv s3://$BUCKET_NAME/ "s3://$BUCKET_NAME.backup/$(date +%Y-%m-%d_%H-%M-%S)/")

echo ""
echo " Copying new files..."
echo ""

(aws s3 --recursive cp $dist_folder s3://$BUCKET_NAME/)

unset BUCKET_NAME
unset AWS_ACCESS_KEY_ID
unset AWS_SECRET_ACCESS_KEY
unset AWS_DEFAULT_REGION
unset AWS_ENDPOINT_URL

echo ""
echo " 🚀 Done!"
echo ""
