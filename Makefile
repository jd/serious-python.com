css/%.min.css: css/%.css
	uglifycss $< > $@

pub: css/style-thgtp.min.css css/style-yellow.min.css css/animations/animations.min.css css/plugins/plugins.min.css css/icons/elegant.min.css
	aws s3 --region eu-west-1 sync . s3://thehackerguidetopython.com/ --exclude ".git/*" --delete
