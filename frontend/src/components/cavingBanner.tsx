import {TypeAnimation} from "react-type-animation";

export default function CavingBanner() {
    return (
        <div className="p-10 ">
            <TypeAnimation
                preRenderFirstString={true}
                style={{whiteSpace: 'pre-line'}}
                sequence={[
                    1,
                    `So, you\'re interested \n in Caving?`,
                    1500,
                    'So, you\'re interested \n in ',
                    500,
                    'So, you\'re interested \n in Adventure?',
                    1500,
                    'So, you\'re interested \n in ',
                    500,
                    'So, you\'re interested \n in Challenge?',
                    1500,
                    'So, you\'re interested \n in ',
                    500,
                    'So, you\'re interested \n in Excitement?',
                    1500,
                    'So, you\'re interested \n in ',
                    500,
                    'So, you\'re interested \n in Excitement?',
                    1500,
                    'So, you\'re interested \n in ',
                    500,
                    `So, you\'re interested \n in Caving?`,
                    1500,
                ]}
                speed={20}
                className="text-5xl sm:text-7xl md:text-9xl mx-auto text-white font-extrabold"
                repeat={1}
            />
        </div>
    )
}