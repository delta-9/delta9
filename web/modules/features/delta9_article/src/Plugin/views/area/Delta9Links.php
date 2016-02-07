<?php

/**
 * @file
 * Contains \Drupal\delta9_article\Plugin\views\area\Delta9Links.
 */

namespace Drupal\delta9_article\Plugin\views\area;

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Drupal\views\Plugin\views\area\AreaPluginBase;

/**
 * Views area Delta9Links handler.
 *
 * @ingroup views_area_handlers
 *
 * @ViewsArea("delta9links")
 */
class Delta9Links extends AreaPluginBase {

  /**
   * {@inheritdoc}
   */
  protected function defineOptions() {
    $options = parent::defineOptions();
    return $options;
  }

  /**
   * {@inheritdoc}
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function render($empty = FALSE) {
    if (!$empty || !empty($this->options['empty'])) {

      return [
        '#title' => $this->t('< Back to the front'),
        '#type' => 'link',
        '#url' => Url::fromRoute('<front>'),
        '#attributes' => [
          'class' => ['button', 'secondary']
        ]
      ];
    }

    return array();
  }

}