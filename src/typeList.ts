// 基本的なプリミティブ型
let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let color: string = "blue";

// 配列
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// タプル
let x: [string, number];
x = ["hello", 10];

// 列挙型
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// Any型
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// Void型
function warnUser(): void {
  console.log("This is my warning message");
}

// NullとUndefined
let u: undefined = undefined;
let n: null = null;

// Never型
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("Something failed");
}

function infiniteLoop(): never {
  while (true) {}
}

// オブジェクト型
let obj: object = {};

// インターフェース
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

let user: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// 型エイリアス
type StringOrNumber = string | number;

let sample: StringOrNumber = "sample";
sample = 123;

// ユニオン型と交差型
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type Pet = Bird | Fish;

function getSmallPet(): Pet {
  // Some logic to get a pet
  return {} as Pet;
}

let pet = getSmallPet();
pet.layEggs();
if ((pet as Fish).swim) {
  (pet as Fish).swim();
} else {
  (pet as Bird).fly();
}

// インターセクション型
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;

let response: ArtworksResponse = {
  success: true,
  artworks: [{ title: "Mona Lisa" }],
  error: undefined,
};

// モジュールとして認識させるためのエクスポート
export {};