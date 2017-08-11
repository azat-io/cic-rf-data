install:
	git clone --depth=1 git@github.com:old-bibigon/parse-cik.git "parser"
	rm -rf "./parser/.git"
	yarn install

generate:
	sqlite3 -header -csv cik.sqlite "select * from cik_people order by id" > cik_people.csv
	sqlite3 -header -csv cik.sqlite "select * from cik_uik order by id" > cik_uik.csv

clean:
	rm cik_people.csv cik_uik.csv cik.sqlite
	rm -rf orig

moscow:
	python2 ./parser/down.py --region=moscow_city
	make generate
	node ./build --region=moscow-city
	make clean

st-petersburg:
	python2 ./parser/down.py --region=st-petersburg
	make generate
	node ./build --region=st-petersburg
	make clean

tatarstan:
	python2 ./parser/down.py --region=tatarstan
	make generate
	node ./build --region=tatarstan
	make clean
