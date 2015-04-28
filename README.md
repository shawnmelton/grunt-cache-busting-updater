# grunt-cache-busting-updater
Grunt plugin to replace cache busting number for external files.

#### Example Grunt Configuration

```javascript
grunt.initConfig({
    cacheBustingUpdater: {
        dist: {
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
