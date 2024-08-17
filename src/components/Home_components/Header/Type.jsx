import Typewriter from "typewriter-effect";

export default function Type(){
    return(
        <Typewriter
            options={{
                strings:[
                    "Your Gateway to Professional Life",
                    "Where Education Meets Careers",
                    "Discover, Learn, and Grow",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
            }}
        />
    );
}