const gulp = require('gulp')

gulp.task('default', () => {
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
    // console.log('task Copiar')
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('task antes 1')
})

gulp.task('antes2', () => {
    console.log('task antes 2')
})

gulp.task('fim', () => {
    console.log('Fim')
})

