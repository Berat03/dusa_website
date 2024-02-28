import {TypeAnimation} from "react-type-animation";

export default function CavingBanner() {
    return (
        <div>
            <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                    500,
                    'So, you\'re new to Caving?',
                    3000,
                    'So, you\'re new to ',
                    500,
                    'So, you\'re new to Adventure?',
                    1500,
                    'So, you\'re new to ',
                    500,
                    'So, you\'re new to Challenge?',
                    1500,
                    'So, you\'re new to ',
                    500,
                    'So, you\'re new to Caving? ',
                    3000,
                ]}
                speed={20}
                className="text-4xl sm:text-6xl md:text-9xl text-black font-extrabold"
                repeat={1}
            />
        </div>
    )
}