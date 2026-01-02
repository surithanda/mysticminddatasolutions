import LayoutTwo from "@/components/shared/LayoutTwo";
import PageHero from "@/components/common/page-hero-section";
import CTA from "@/components/common/cta-section";
import CtaImageSlider from "@/components/common/cta-image-slider";
import BlogContent from "@/components/blogs/blogs-content";
import { loadedBlogs } from "@/data/final-blogs-data/final-blogs-data";

export const metadata = {
  title: "Mystic Minds Insights",
  description:
    "Discover expert blogs from Mystic Minds on AI, data solutions, and digital transformation strategies.",
};

export async function generateStaticParams() {
  return loadedBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const postBlog = loadedBlogs.find((item) => item.slug === slug);

  if (!postBlog) {
    return (
      <LayoutTwo>
        <PageHero
          badgeTitle="Blog Not Found"
          title="Oops!"
          description="The requested blog could not be found."
        />
      </LayoutTwo>
    );
  }

  return (
    <LayoutTwo>
      <PageHero
        badgeTitle="Blog Details"
        title={postBlog.title}
        description={postBlog.description}
        spacing="pt-32 md:pt-44 lg:pt-[200px] pb-10 md:pb-16 lg:pb-[88px] xl:pb-[100px] relative overflow-hidden"
      />
      <BlogContent blog={postBlog} />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: "1", img: "/images/home/One.jpg" },
            { id: "2", img: "/images/home/Two.jpg" },
            { id: "3", img: "/images/home/Three.jpg" },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">
          A virtual coffee?
        </i>
      </CTA>
    </LayoutTwo>
  );
};

export default BlogDetails;
