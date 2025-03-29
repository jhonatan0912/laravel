<!DOCTYPE html>
<html>

<head>
    <title>Laravel + Vue 3</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script src="{{ mix('/js/app.js') }}" defer></script>
</head>

<body>
    <div id="app"></div>
</body>

</html>