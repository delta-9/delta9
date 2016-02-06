<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
  <link rel="stylesheet" href="/dist/css/all.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script>
  Drupal = {behaviors:{}}
  </script>
  <script src="/dist/js/all.js"></script>
  <style type="text/css" media="screen">
    .chosen-container
    {
      width: 200px;
      margin: 100px;
    }
  </style>
  <script>

  $(function()
  {
    $.each(Drupal.behaviors, function(k)
    {
      Drupal.behaviors[k].attach();
    });
  });

  </script>
</head>
<body>


<div id="header">HEADER</div>
<div id="page">

  <select name="yeah" id="yeah">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
  </select>
</div>

<a href="#" data-featherlight="#mylightbox">Open element in lightbox</a>
<div id="mylightbox">This div will be opened in a lightbox</div>

<section class="section section-name">
  <div class="wrapper">
    <h2>test</h2>
    <div class="text">
      <p>
        blablalbal blablalbal blablalbal blablalbal
      </p>
    </div>

  </div>
</section>


