pub:
	aws s3 --region eu-west-1 sync . s3://thehackerguidetopython.com/ --exclude ".git/*" --delete
