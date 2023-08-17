import { Navigator, Stack , useRouter} from "expo-router";
import { SafeAreaView, View, StatusBar, TouchableHighlight, Text} from "react-native";
import Constants from "expo-constants";
import HomeSeachBar from "../Components/HomeSearchBar/HomeSearchBar";

const Home = () => {

    const router = useRouter();

    const statusBarHeight = Constants.statusBarHeight;

    return(

        <SafeAreaView
            style={{
                backgroundColor : "#666666",
                flex : 1,
            }}
        >
            <Stack.Screen
                options={{
                    header : () => (
                        <View
                            style={{height : statusBarHeight}}
                        >
                            <StatusBar
                                hidden={false}
                                animated
                                backgroundColor="#333333"
                                barStyle="light-content"
                            />
                        </View>
                    )
                }}
            />

            <HomeSeachBar/>
           
        </SafeAreaView>

    )

}

export default Home;