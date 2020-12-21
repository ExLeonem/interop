import { Package, DependencyType, Compatible } from '.';


/**
 * 
 */
class TypeScript extends Package implements Compatible {

    private config: object;

    constructor(name: string, version: string, config: object) {
        super(name, version, DependencyType.DEV);
        this.config = config;
    }

    /**
     * 
     */
    create(): void {

    }


    /**
     * Update local typescript configurations depending other packages.
     * 
     * @param otherPackage Other package to be added as a dependency
     */
    update(otherPackage: Package): void {

    }
}


export default TypeScript;