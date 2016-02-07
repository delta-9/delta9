<?php

/**
 * @file
 * Provide views data that isn't tied to any other module.
 */

/**
 * Implements hook_views_data().
 */
function delta9_article_views_data() {

  $data['views']['delta9links'] = array(
    'title' => t('Delta9 links'),
    'help' => t('Provide links for the site delta9.'),
    'area' => array(
      'id' => 'delta9links',
    ),
  );

  return $data;
}

