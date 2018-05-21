interface TestJson {
  message: string;
}

class Test {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  getJson(): TestJson {
    return { message: this.message };
  }
}

export default Test;
