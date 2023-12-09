import { act, renderHook } from "@testing-library/react-native";

import useCustomHook from "../useCustomHook";

describe("useCustomHook tests", () => {
    it("the state variable is initially set to a value", () => {
        // render the hook
        const result = renderHook(useCustomHook, { initialProps: false });
        // debug
        expect(result.result.current.todoCompletionValue).toBe(false);
        // do something
    })
    it("Toggle changes state value", () => {
        // render the hook
        const result = renderHook(useCustomHook, { initialProps: false });
        act(() => { result.result.current.toggle() });
        expect(result.result.current.todoCompletionValue).toBe(true);
        // do something
    })
})
