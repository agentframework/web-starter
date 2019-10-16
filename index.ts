import { singleton } from '@agentframework/domain';
import { controller, method, WebContext } from '@agentframework/web';

class HelloService {
  hello() {
    return 'Hello Agent Framework';
  }
}

class UnusedService {
  constructor() {
    console.log('never reach this line');
  }
}

@controller('/api')
export class HelloController {
  @singleton()
  helloService: HelloService;

  @singleton()
  unusedService: UnusedService;

  /**
   * full url /api/hello
   */
  @method('GET', '/hello')
  async hello(ctx: WebContext) {
    return this.helloService.hello();
  }
}
