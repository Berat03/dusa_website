import {TypeAnimation} from "react-type-animation";

export default function CavingBanner() {
    return (
        <div className="p-10">
            <TypeAnimation
                preRenderFirstString={true}
                style={{whiteSpace: 'pre-line'}}
                sequence={[
                    500,
                    `So, you\'re interested \n in Caving?`,
                    3000,
                    'So, you\'re interested in ',
                    500,
                    'So, you\'re interested in Adventure?',
                    1500,
                    'So, you\'re interested in ',
                    500,
                    'So, you\'re interested in Challenge?',
                    1500,
                    'So, you\'re interested in ',
                    500,
                    'So, you\'re interested in Excitement?',
                    1500,
                    'So, you\'re interested in ',
                    500,
                    'So, are you ready to go Caving? ',
                    3000,
                ]}
                speed={20}
                className="text-5xl sm:text-7xl md:text-9xl mx-auto text-white font-extrabold"
                repeat={1}
            />
        </div>
    )
}