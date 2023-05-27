
import { Link } from '@builder.io/qwik-city'
import { Image } from '@unpic/qwik';
import { component$ } from '@builder.io/qwik';

export default component$(({ hotTags }) => {
    return (
        <>

            <div class="sticky_top" style={{}}>
                <Image alt='adxff' src="/images/banner/600x300.png" width={300} height={600} />
            </div>
        </>
    )
}
)
