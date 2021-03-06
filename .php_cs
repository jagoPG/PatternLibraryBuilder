<?php

/*
 * This file is part of the Pattern Library Builder library.
 *
 * Copyright (c) 2017-present LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

use LIN3S\PhpCsFixerConfig\Lin3sConfig;

$config = new Lin3sConfig('Pattern Library Builder', '2017', 'library');
$config->getFinder()->in([
    __DIR__ . '/src',
    __DIR__ . '/tests/Application/app',
    __DIR__ . '/tests/Application/bin',
    __DIR__ . '/tests/Application/src',
    __DIR__ . '/tests/Application/web',
]);

$cacheDir = getenv('TRAVIS') ? getenv('HOME') . '/.php-cs-fixer' : __DIR__;

$config->setCacheFile($cacheDir . '/.php_cs.cache');

return $config;
