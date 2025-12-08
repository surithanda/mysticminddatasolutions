import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'

// Data-----------------
const topContent = [
  'Data Analytics',
  'AI & Machine Learning',
  'Cloud Architecture',
  'Data Migration',
]

const bottomContent = [
  'Scalable Solutions',
  'Trusted Partnerships',
  'Secure & Future-Ready',
  'Innovation with AI',
]

const Scroller = () => {
  return (
  <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px] 
                    px-8 sm:px-12 md:px-20 lg:px-28 xl:px-32">
  <RevealWrapper>
    <Marquee pauseOnHover>
      <div className="flex items-center justify-between py-2.5 pb-5">
        {topContent?.map((content, idx) => (
          <div className="mr-5 flex items-center gap-6" key={`id-top-${idx}`}>
            <span className="text-nowrap text-5xl font-medium leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.1] xl:tracking-[-2.88px]">
              {content}
            </span>
            <span className="mt-5">
              {/* ICON */}
            </span>
          </div>
        ))}
      </div>
    </Marquee>
  </RevealWrapper>

  <RevealWrapper className="border-t dark:border-dark">
    <Marquee direction="right" pauseOnHover>
      <div className="flex items-center justify-between py-2.5">
        {bottomContent?.map((content, idx) => (
          <div className="mr-5 flex items-center gap-6" key={`id-bottom-${idx}`}>
            <span className="text-nowrap text-5xl font-medium leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.1] xl:tracking-[-2.88px]">
              {content}
            </span>
            <span className="mt-5">
              {/* ICON */}
            </span>
          </div>
        ))}
      </div>
    </Marquee>
  </RevealWrapper>
</section>

  )
}

export default Scroller
