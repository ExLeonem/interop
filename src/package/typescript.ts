import { Package, DependencyType } from '.';


/**
 * 
 */
class TypeScript extends Package {

    private config: object;

    constructor(name: string, version: string, config: object) {
        super(name, version, DependencyType.DEV);
        this.config = config;
    }

    create(): void {

    }
}


export default TypeScript;