import { renderHook, act } from "@testing-library/react-hooks";
import useCheckIsLoggin from ".";


describe("useCheckIsLoggin", () => {
  it("should return false when session storage doesn't have isLoggin", () => {
    const { result } = renderHook(() => useCheckIsLoggin());
    expect(result.current.checkisLoggin()).toBeFalsy();
  });

  it("should return true when session storage has isLoggin", () => {
    sessionStorage.setItem("isLoggin", "true");
    const { result } = renderHook(() => useCheckIsLoggin());
    expect(result.current.checkisLoggin()).toBeTruthy();
  });

  it("should update the mount state correctly", () => {
    const { result } = renderHook(() => useCheckIsLoggin());
    expect(result.current.mount).toBeFalsy();
    act(() => {
      result.current.setMount(true);
    });
    expect(result.current.mount).toBeTruthy();
  });
});
