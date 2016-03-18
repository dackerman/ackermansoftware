import marked from 'marked';
import handlebars from 'handlebars';
import fs from 'fs.extra';
import del from 'del';
import projects from './projects';

// Update description with the markdown contents from the file
for (var i = 0; i < projects.length; i++) {
    let project = projects[i];
    const markdownContents = fs.readFileSync('projects/' + project.description, 'utf8');
    project.description = '<div>' + marked(markdownContents) + '</div>';
}

const indexStr = fs.readFileSync('index.template.html', 'utf8');

const html = handlebars.compile(indexStr)({
    projects: projects
});

writeToDist(html);

function writeToDist(projectsHtml) {
    const distFolder = './dist';

    if (fs.existsSync(distFolder)) {
        del.sync([distFolder]);
    }
    
    fs.mkdirSync(distFolder);

    fs.writeFileSync(distFolder + '/index.html', projectsHtml);

    fs.copyRecursive('./images', distFolder + '/images', a => a);
    fs.copy('./style.css', distFolder + '/style.css', { replace: false }, a => a);
}
