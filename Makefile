REGION=eu-west-1
BUCKET=s3://thehackerguidetopython.com/

css/%.min.css: css/%.css
	uglifycss $< > $@

js/%.min.js: js/%.js
	uglifyjs $< > $@

pub: css/bootstrap.min.css css/custom.min.css css/iconsmind.min.css css/stack-interface.min.css css/theme-greensea.min.css js/scripts.min.js
	aws s3 --region $(REGION) sync . $(BUCKET) --exclude ".git/*" --delete
	aws cloudfront create-invalidation --distribution-id E3IFJMLHLU3JKA --paths /index.html /css/custom.min.css

clean-pub:
	aws s3 rm --recursive --region $(REGION) $(BUCKET)
