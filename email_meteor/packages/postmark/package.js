Package.describe({
  summary: "postmark"
});

Npm.depends({
  "postmark":"0.1.8"
});

Package.on_use(function (api) {
  api.add_files('postmark.js', 'server');
});
