import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import rimraf from 'rimraf';

const plugins = loadPlugins();

import webpackConfig from './webpack.config';

gulp.task('webpack-js', ['clean'], (cb) => {
  webpack(webpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('popup-html', ['clean'], () => {
  return gulp.src('src/components/popup/index.html')
    .pipe(plugins.rename('popup.html'))
    .pipe(gulp.dest('./build'))
});

gulp.task('copy-manifest', ['clean'], () => {
  return gulp.src('manifest.json')
    .pipe(gulp.dest('./build'));
});

gulp.task('copy-css', ['clean'], () => {
  return gulp.src('src/css/httpobs.css')
    .pipe(gulp.dest('./build'));
});

gulp.task('clean', (cb) => {
  rimraf('./build', cb);
});

gulp.task('build', ['copy-manifest', 'webpack-js', 'popup-html', 'copy-css']);

gulp.task('watch', ['default'], () => {
  gulp.watch('src/components/**/*', ['build']);
  gulp.watch('src/css/**/*', ['build']);
});

gulp.task('default', ['build']);
