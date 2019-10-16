import { controller, method, WebContext } from '@agentframework/web';

//
@controller('/api')
export class HelloController {
  /**
   * full url /api/hello
   */
  @method('GET', '/hello')
  async hello(ctx: WebContext) {
    return 'Hello Agent Framework';
  }
}
