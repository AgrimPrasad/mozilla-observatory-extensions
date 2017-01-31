import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import rimraf from 'rimraf';

const plugins = loadPlugins();

import popupWebpackConfig from './src/components/popup/webpack.config';
import eventWebpackConfig from './src/components/event/webpack.config';
// import contentWebpackConfig from './src/components/content/webpack.config';

gulp.task('popup-js', ['clean'], (cb) => {
  webpack(popupWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('event-js', ['clean'], (cb) => {
  webpack(eventWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

// gulp.task('content-js', ['clean'], (cb) => {
//   webpack(contentWebpackConfig, (err, stats) => {
//     if(err) throw new plugins.util.PluginError('webpack', err);

//     plugins.util.log('[webpack]', stats.toString());

//     cb();
//   });
// });

gulp.task('popup-html', ['clean'], () => {
  return gulp.src('src/components/popup/src/index.html')
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

// gulp.task('build', ['copy-manifest', 'popup-js', 'popup-html', 'event-js', 'content-js']);
gulp.task('build', ['copy-manifest', 'popup-js', 'popup-html', 'event-js', 'copy-css']);

gulp.task('watch', ['default'], () => {
  gulp.watch('src/components/popup/**/*', ['build']);
  // gulp.watch('src/components/content/**/*', ['build']);
  gulp.watch('src/components/event/**/*', ['build']);
  gulp.watch('src/css/**/*', ['build']);
});

gulp.task('default', ['build']);
