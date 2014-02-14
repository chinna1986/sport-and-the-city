<html>
<head>
    <title>hb {{ @document.title }}</title>
</head>
<body>
    <h1><%= @document.title %></h1>
    {{ @content }}
    {{ @getBlock("scripts").toHTML() }}
</body>
</html>