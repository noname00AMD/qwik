import { Link } from '@builder.io/qwik-city'
import { Image } from '@unpic/qwik';
import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <>
            <style jsx>{`
                .ad_panel_728x90{
                 
                }
            `}</style>
            <div class="ad_panel_728x90" style={{}}>
                <Image alt='asdd' src="/images/banner/728x90.png" width={728} height={90} />
            </div>
        </>
    )
}
)
