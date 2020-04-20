export abstract class Model {

    protected model:        string;
    protected relativePath: string;
    protected _dataKeys:    Array<string>;

    constructor(model: string, relativePath: string) {
        
        this.model = model;
        this.relativePath = relativePath;

    }

    public async all(): Promise<any> {

        const response = await fetch(this.relativePath)
                                .then(response => response.json())
                                .then(data => data);
    
        return response;

    }



}