interface IUserCase {
  execute(...params: any): Promise<any>;
}

export default IUserCase;
