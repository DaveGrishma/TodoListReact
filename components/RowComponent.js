import { StyleSheet, Text, View, Button, Switch } from "react-native";

// import a custom hook
import useCustomHook from "../useCustomHook";

const RowComponent = (props) => {
    const { todoCompletionValue, toggle } = useCustomHook(props.rowNumber.isCompleted);

    const btnPressed = () => {
        // call the hook's function
        toggle(props.rowNumber.id);
    };
    return (
        <View style={{ padding: 10 }}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <Text>{props.rowNumber.id + " - "}</Text>
                        <Text>{props.rowNumber.name}</Text>
                    </View>
                    <Text
                        style={{
                            color: todoCompletionValue ? "#0f8d24" : "#727878",
                            fontSize: 17,
                        }}
                    >
                        {todoCompletionValue ? "Finished" : "Pending"}
                    </Text>
                </View>
                <Switch value={todoCompletionValue} onChange={btnPressed} testID="todoSwitch" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
    },
});

export default RowComponent;