import { controller, method, WebContext } from '@agentframework/web';
import { MyApplicationSettings } from '../MyApplicationSettings';
import { UserCollection } from '../models/User';
import { ObjectId } from '@agentframework/app';

@controller('/api')
export class HelloController {
  
  @method('GET', '/hello')
  async init(ctx: WebContext<MyApplicationSettings>) {
    
    ctx.logger.warn(`Found config: ${ctx.settings.CUSTOM_TEXT_CONFIG}`);
    
    // get a data collection
    const Users = await ctx.resolve(UserCollection);
    
    // create a new document and save to db
    return Users.add(new ObjectId(), { name: 'AgentFramework', age: 1 })
  }
  
}
