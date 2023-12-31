import Plus from "./Plus";
import Trash from "./trash";
import Cart from "./Cart";
import Heart from "./Heart";
import Share from "./Share";
import Left from "./Left";
import Right from "./Right";
export default class Icons {
  static Search() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 text-rose-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    );
  }
  static Close() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    );
  }

  static Add() {
    return <Plus />
  }
  static Remove() {
    return <Trash />
  }
  static Cart() {
    return <Cart />
  }
  static Heart() {
    return <Heart />
  }
  static Share() {
    return <Share />
  }
  static Left() {
    return <Left />
  }
  static Right() {
    return <Right />
  }
}
