/// Метод заглушка
const http = async (name: string) => fetch(`${name}`);

// Типо заглушка но на неё стоит обратить косвенное внимание
const getListUserOrigin = async (name: string): Promise<Array<{ firstName: string }>> => {
  return await http(name).then<Array<{ firstName: string }>>((resp) => resp.json());
};

abstract class BaseRestService {
  protected version: number = 1;

  public abstract getListUser(name: string): Promise<Array<{ firstName: string }>>;

  public async mapListUser(name: string) {
    const usersName = await this.getListUser(name);
    return usersName.map((user) => user.firstName.toUpperCase());
  }
}

class RestService extends BaseRestService {

  public async getListUser(name: string): Promise<Array<{ firstName: string }>> {
    return await getListUserOrigin(name);
  }
}
