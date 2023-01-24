import fs from "fs";
import os from "os";
import Tools from "tools";

class LocalStorage extends Tools {
  constructor() {
    super();
    this.db = null;
    this.root = `${os.homedir()}/.jobs-tracking`;
    this.dbPath = `${this.root}/db.json`;
  }

  checkDB() {
    if (!fs.existsSync(this.dbPath)) {
      fs.mkdirSync(this.root);
      fs.writeFileSync(this.dbPath, "{}");
    }
    
    if (!this.db) {
      this.db = this.readJsonFile(this.dbPath);
    }
  }

  getItem(key) {
    this.checkDB();
    return this.db[key];
  }

  async setItem(key, value) {
    this.checkDB();
    this.db[key] = value;
    await this.writeFile(this.dbPath, JSON.stringify(this.db));
  }

  async removeItem(key) {
    this.checkDB();
    delete this.db[key];
    await this.writeFile(this.dbPath, JSON.stringify(this.db));
  }
}

export default new LocalStorage();
