export class Post {
  
  title: string;
  content: string;
  userEmail: string;
  userId: string;
  companyId: string;
  createdAt?: Date;

  public asFormData(): FormData {
    const data = new FormData();

    data.append('name', this.title);
    data.append('content', this.content);

    return data;
  }
}
