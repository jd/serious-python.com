css/%.min.css: css/%.css
	uglifycss $< > $@

js/%.min.js: js/%.js
	uglifyjs $< > $@

pub: css/style-thgtp.min.css css/style-yellow.min.css css/animations/animations.min.css css/plugins/plugins.min.css css/icons/elegant.min.css js/smoothscroll.min.js js/validator.min.js js/alive.scripts.min.js
	aws s3 --region eu-west-1 sync . s3://thehackerguidetopython.com/ --exclude ".git/*" --delete
	aws cloudfront create-invalidation --distribution-id E3IFJMLHLU3JKA --paths /index.html /index-b.html
