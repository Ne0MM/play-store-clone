import { 
    Text,
    View, 
    StyleSheet,
    Pressable,
    Image,
} from "react-native"
import fonts  from "../../theme/fonts";

const size = fonts.size;

const HomeSeachBar = () => {

    return(

        <View style={{
                flexDirection: "row",
                backgroundColor: "#333333",
                justifyContent: "center",
            }}
        >
            <View style={styles.searchBarContainer}>

                <Pressable style={({ pressed }) => [
                        styles.searchInput,
                        pressed && {backgroundColor : "#666666"}
                    ]}
                >

                    <View style={{flexDirection : "row", alignItems : "center"}}>

                        <Pressable style={({ pressed }) => [
                            styles.iconContainer,
                            pressed && {backgroundColor : "#666666"}
                        ]}
                        >

                            <Image
                                style={styles.imageStyle}
                                source={require("../../Assets/Images/search.png")}
                            />

                        </Pressable>

                        <Text style={{
                                fontSize : size.font16,
                                color : "#BBBBBB",
                                paddingLeft : 10
                            }}
                        >
                            Search
                        </Text>

                    </View>

                    <Pressable style={({pressed}) => [
                            styles.iconContainer,
                            pressed && {backgroundColor : "#666666"}
                        ]}
                    >

                        <Image
                            style={styles.imageStyle}
                            source={require("../../Assets/Images/mic.png")}
                        />

                    </Pressable>

                </Pressable>

                <View style={styles.searchBarIcons}>

                    <Pressable style={({ pressed }) => [
                        styles.iconContainer,
                        pressed && { backgroundColor : "#666666" }
                    ]
                    }>

                        <Image
                            source={require('../../Assets/Images/bell.png')}
                            style={styles.imageStyle}
                        />

                    </Pressable>

                    <Pressable style={({pressed}) => [
                        styles.iconContainer,
                        pressed && { backgroundColor : "#666666" }
                    ]}>

                        <Image
                            source={require('../../Assets/Images/user.png')}
                            style={styles.imageStyle}
                        />

                    </Pressable>

                </View>

            </View>

        </View>

    )

}

const styles = StyleSheet.create({
    searchInput: {
        backgroundColor : "#555555",
        color : "#FFFFFF",
        padding : size.font10,
        borderRadius : 40,
        width : "70%",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
    },
    searchBarContainer: {
        width : "90%",
        flexDirection : "row",
        alignItems : "center",
    },
    iconContainer: {
        padding : 5,
        borderRadius : 50,
    },
    imageStyle: {
        width: 25,
        height: 25,
        tintColor: "#BBBBBB",
    },
    searchBarIcons: {
        flexDirection: "row",
        width: "30%",
        justifyContent: "space-around",
    }
})

export default HomeSeachBar;