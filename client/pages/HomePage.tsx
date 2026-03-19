import { View, Button, StyleSheet, TextInput} from "react-native";
import StreakList from "@/components/StreakList";

function HomePage() {
    return(
        <View style={{flex: 1, alignItems: 'center'}}>
            <View style={styles.header}>
                <View style={styles.innerHeader}>
                    <TextInput />
                </View>
                <Button title='+' />
            </View>
            <StreakList />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        marginTop: 30,
        flexDirection: 'row',
    },
    innerHeader: {
        width: '50%',
        borderWidth: 1 
    },
    button: {
        borderRadius: 50
    }
});


export default HomePage;