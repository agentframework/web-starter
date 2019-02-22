import { WebApplication } from '@agentframework/web';
import { MyApplicationSettings } from './MyApplicationSettings';
import { HelloController } from './controllers/HelloController';

export class MyWebApplication extends WebApplication<MyApplicationSettings> {
  public onInitApplication(): void {
    this.addController(HelloController);
  }
}
