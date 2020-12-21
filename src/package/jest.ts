import { Package, Configurable, DependencyType, Compatible } from '.';


/**
 * Jest unit testing library, interoperability definition.
 * 
 * @property {object} config Base jest configurations.
 * @class 
 */
class Jest extends Package implements Configurable, Compatible {

    private _config: object;

    constructor(name: string, version: string, config: object) {
        super(name, version, DependencyType.DEV);
        this._config = config;
    }

    create(): void {

    }


    /**
     * Handle compatibility issues with other packages. 
     * 
     * @param otherPackage {Package} The other package which will be added to the template project.
     * @param 
     */
    check(otherPackage: Package, currentConfiguration: object): object {

        switch (otherPackage.getName()) {
            case "typescript": {
                // Typescript is configured to be used
                // Add additional dependencies
            }
        }

        if (this.isCompatible(otherPackage)) {
            otherPackage.check(this, currentConfiguration);
        }

        return currentConfiguration;
    }


    /**
     * Add additional dependencies to work with typescript dependency.
     * 
     * @param projectConfiguration {object} The current projet configuration.
     */
    addTypeScriptDependencies(projectConfiguration: object) {

        

    }


    /**
     * ------------
     * Getter/Setter
     * ---------------------
     */


     getConfig(): object {
         return this._config;
     }


     setConfig(config: object): void {
         this._config = config;
     }
}


export default Jest;