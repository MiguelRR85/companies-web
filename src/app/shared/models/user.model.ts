export class User {

    companyRole: string;
    id: string;
    email: string;
    password: string;
    name: string;
    avatar?: string;
    company?: string;
    createdAt?: Date;
    avatarFile?: File;
     
    public asFormData(): FormData {

        const data = new FormData();
    
        data.append('email', this.email);
        data.append('password', this.password);
        data.append('name', this.name);
        data.append('avatar', this.avatarFile);
    
        return data;
      }
}
