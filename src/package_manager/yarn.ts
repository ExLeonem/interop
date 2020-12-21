import PackageManager from '.';
import Package from '../package';

/**
 * Yarn package manager. 
 * In essence is a direvative of npm. Works with package.json too.
 * 
 * @class
 */
class YarnManager extends PackageManager {


    constructor(packages: Package[]) {
        super("yarn");
    }



    createPackageDefinition() {

        return {};
    }

    installDependencies() {

    }


    private getBaseDefinition(name: string, author: string) {
        return {

        }
    }
}


export default YarnManager;