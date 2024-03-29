<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/png" href="/favicon.png" />

  <title>{{ env('APP_NAME') }}</title>
</head>

<body>
  <div id="root"></div>
  @viteReactRefresh
  @vite('resources/src/index.tsx')
</body>

</html>