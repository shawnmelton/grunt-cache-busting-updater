# grunt-cache-busting-updater
Grunt plugin to replace cache busting number for external files.

#### Options
`cachebusterValue`: Value to use instead of a generated timestamp.

#### Example Grunt Configuration

```javascript
grunt.initConfig({
    cacheBustingUpdater: {
        dist: {
            options: {
                cachebusterValue: 'c6fb112c0cc5',
            },
            files: {
                'site/file-with-timestamp.html': 'site/file-with-placeholder.html'
            }
        }
    },
});

grunt.loadNpmTasks('grunt-cache-busting-updater');

grunt.registerTask(
    'default', ['cacheBustingUpdater']
);
```
