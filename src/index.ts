const childProcess = require('child_process');

import Package, { 
    Pipeline as PackagePipeline, 
    Configurable, 
    Jest, 
    TypeScript
} from './package';
import { NpmManager, YarnManager } from './package_manager';
import ProjectTemplate from './builder';


// let packageManager = new NPM();
// new InteroptBuilder(packageManager, [
//     new Jest("jest", "26.6.3", {}),
    
// ]);

// let projectTemplate = new ProjectTemplate("NPM", [
//     new Jest("jest", "26.6.3", {}),
//     new TypeScript("typescript", "", {})
// ]);

// projectTemplate.create("/here");


// let projectTemplate = new NPM([
//     new Jest("jest", "26.6.3", {}),
//     new TypeScript("typescript", "", {})
// ]);
// projectTemplate.create();


// let projectTemplate = new NPM([
//     new Jest("jest", "26.6.3", {}),
//     new TypeScript("typescript", "", {})
// ]);

let result = childProcess.execSync("npm --version", {stdio: [0, 1, 2]});


export {
    ProjectTemplate,
    
}