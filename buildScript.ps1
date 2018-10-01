#npm install -g uglifyjs
ng build;

cd dist;

uglifyjs .\zahela-manage\vendor.js -o .\zahela-manage\vendor.js -c -m;
uglifyjs .\zahela-manage\main.js -o .\zahela-manage\main.js -c -m;
uglifyjs .\zahela-manage\styles.js -o .\zahela-manage\styles.js -c -m;
#uglifyjs .\zahela-manage\scripts.js -o .\zahela-manage\scripts.js -c -m;
uglifyjs .\zahela-manage\polyfills.js -o .\zahela-manage\polyfills.js -c -m;

$source=".\zahela-manage"
$exclude = ("*.map");
$files = Get-ChildItem -Path $source -Exclude $exclude

Compress-Archive -Path $files -Force -DestinationPath ..\dist.zip;
