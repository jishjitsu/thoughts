"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";

const posts = [
  {
    title:"Religious robbery",
    slug:"post5",
    excerpt:"“Mr.Kumar proceeds to put an amount of ₹1000 into the hundi and sighs in relief...”",
    content: "Mr.Kumar proceeds to put an amount of ₹1000 into the hundi and heaves in relief as he thinks he has successfully bribed the gods into overlooking his affair but little does he know this money is being used for funding affairs of others (not extramarital but definitely shady).\n\nHow have we as a society fallen off so badly that we believe we can bribe the gods themselves? The origin of this belief lies with the belief in god itself, God serves as a pillar as he provides us with faith, Something humans require quite a lot owing to the complex emotions we possess, An All-seeing, All-providing creator who’s there to help you all the way through your life, sounds neat but is there a catch to it? Initially, there wasn’t but we know humans mix malice and greed into the most trivial things so why not with god too, from there on started the Monetisation of religion itself.\n\nIn the past when kingdoms grew in power they started investing resources in other branches of society one major branch was that of the holy, temples, mosques, churches, etc. It’s not uncommon to hear that extravagant funds and decorations were given to these places of worship in the name of god, It is still done now.\n\nIn India, kings gave temples donations of jewelry decked in sapphires, rubies, diamonds, and other precious rocks. This wasn’t only done in India the concept of the tithe was prevalent for quite a while in Europe too, 10% of the individual’s earnings were presented to the church even though it was abolished it gives us a vague idea of how religion and money became closely linked.\n\nWe must understand that monetization of religion isn’t bad in all cases, to be precise in cases where the money and resources are used for the good of society in the form of anaprasad and donations to the poor. But when armed with malice it can become quite a pitiable situation.\n\nIn the end all of these outcomes be it this certain topic or can be generalized as any outcome depends on how the person in power approaches the objective with malice or with kindness.\n\n~ J\n\nHere’s a red panda to end it off on a cute note…",
    previewImage: "/next.svg"
  },
  {
    title:"Adaptability- A Fantasy killer",
    slug:"post4",
    excerpt:"“The hero says “I will love you forever” and the heroine blushes and falls in his arms”",
    content: "The hero says “I will love you forever” and the heroine blushes and falls in his arms, and the story ends with everyone happy but have you ever wondered as to why we never see the story after that. The story of how they are after they get married or have a baby. Even if it exists it’s always in the time skips and we only ever catch a glimpse of it. The main reason for this is because it’s “normal”, The exciting part of the hero chasing the heroine(or vice versa) has ended, In the beginning, their love for each other was something new but now it’s become an everyday thing, They have adapted to the new scenario they are in. Which isn’t as exciting and fun to watch to be brutally honest.\n\nHumans are regarded as social animals and emotions and relations mean a lot to us. But in some ways, we are very cold-hearted and desensitized. One of the reasons I say this is because of our high potential for adaptability which is a boon in terms of survival but a bane in terms of relationships. With regards to any situation no matter how grave humans just adapt to it.\n\nLet’s take the most famous topic ever for this case “LOVE”. The reason phrases like the one above is false is that a person never knows when they adapt to something, You may adapt to like alcohol or you may adapt in a way where you are sleeping more, It’s a natural concept. But when it comes to giving false hope of something you are sure of only for the moment it’s kind of a shitty play, to say the least. This Adaptability in my opinion is one of the main reasons for relationships going bland after a few months and also Divorce.\n\nThere is something of a rose phase to every relationship where its all fun as the consumers(Of love) are just experiencing the affection and happiness but soon down the line just as anyone does they start adapting to the situation, after this point it’s an uphill battle as usually most couples cant adapt and break up seeking the infamous ‘rose phase’ again, this is clearly a vicious cycle and according to me can be broken by bracing yourself for the adaptability earlier on.\n\nTo add to the reason as to why this causes the above tragedies (fortunes for some: divorce lawyers, gyms) is because the aspect of loving each other changes from something that’s new and intriguing to something regular. This is one of my craziest arguments regarding love at first sight or anything that happens in an instance in general, how are you so sure you aren’t making decisions based off an impulse? A decision that may cause a considerable amount of emotional turmoil down the road.\n\nThe relationships that last are the ones in which the partners accept the fact that they adapt to their love for each other and that their love for each other won’t be as passionate as their starting days together(this doesn’t apply to people like Gomez and Morticia) so try to be kind and lower your expectations (trust me you will be happier).\n\n– J\n\n// College has been hectic and unkind to me as of late its clearly a pain to finish all the assignments along with studying for the tests all clubbed with the whopping 4 hours of travel every day but well we gon be okay(kl said it so ig it is true) will try being more consistent about creative stuff though //\n\nHere’s a cute axolotl btw ~",
    previewImage: "/adaptability.png"
  },
  {
    title: "Greed",
    slug: "post3",
    excerpt: "“For greed, all nature is too little”",
    content: "It seems weird to imagine a time when there was no greed prevalent in the world, It’s become so common and has rooted itself in so many people and tainted them.\n\nAt the present times, we owe this to the wonderful onset of quite a few people having too much of resources on hand. It’s a crazy notion where we even tend to romanticize the idea of people being purely GREEDY.\n\nGreed takes many forms, Materialistic, Public, hell even Natural, what else do you call affluent individuals literally hoarding animals(I mean a private zoo) all for themselves.\n\nHowever, we can’t always blame wealth, for greed has existed for a long time before wealth was even a thing. But we can’t just rub it off as something human the least we could do is try to moderate it so that it doesn’t cause problems to us or the world(people, various lifeforms, etc.) around us.\n\nResources aren’t supposed to be monopolized they are supposed to be shared and used to move society and the planet onward so who knows regulating your greed maybe the key to a better future…\n\n–J\n\nIf you know who this guy is well done your anime game is on point if not It’s Greed from fma.\n\nHere’s a cool poisonous slug which is named blue dragon(I’m not joking)/ Glaucus Atlanticus.",
    previewImage: "/greed.png"
  },
  {
    title: "Relativism",
    slug: "post2",
    excerpt: "Relativism is one of the most controversial and confusing topics I have ever come across...",
    content: "Relativism is one of the most controversial and confusing topics I have ever come across in my whole life. It basically says nothing is right or wrong it's all about perspective i.e. how you see it.\n\nThe arguments for this theory are very basic. If nothing is correct or wrong then that would mean contradictions and arguments everywhere or to put it simply, It will give rise to anarchy where there is crime and immorality everywhere.\n\nThe good point about this theory is the sheer amount of freedom it offers. It doesn't tie anyone down and allows everything, Which is also a bad thing due to the chance of anarchy being born.\n\nThe perks of being in a society outweigh its cons according to statistics on the advancement of the human race but it is absolutely astonishing how many negative aspects it has especially on an individual's mental health due to actions of comparison, exclusion, criticism. Whereas the situation begs the question of who decides what is moral and immoral the answer to which is the choice of the majority, Which may not be in agreement with the minorities.\n\nThe best way to approach this theory is to understand that inculcating it in parts of society would bring about greater inclusivity and satisfaction to a huge number of people meaning a happier and more content society as a whole, Which is clearly always a good thing.\n\n-J\n\nHere's a cute dik-dik (yes that's its name)",
    previewImage: "/neo.png"
  },
  {
    title: "New Beginnings",
    slug: "post1",
    excerpt: "Writing to me has always been something I did to tire myself out...",
    content: "Writing to me has always been something I did to tire myself out when I was not feeling sleepy and it's always been something I did with utmost focus, be it writing improbable fantasies about some hero or a simple piece with no evidence backing it up.\n\nBut recently, I learned that writing can also be a process of documentation, improving my grasp of the language and honing my writing even more.\n\nSo I hope you will bear with my amateurish writing which seems like a chaotic first draft of a seasoned writer and with hopes of an upward curve in my writing and in search of the truth... I start my first blog.\n\n-J\n\nAnd here's a cute cat I found.",
    previewImage: "/next.svg"
  } 

];

export default function Cards() {
  const [visiblePosts, setVisiblePosts] = useState(4); // Start with 4 posts

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 4); // Load 4 more posts at a time
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className={`grid gap-6 ${
          posts.length === 1
            ? "grid-cols-1 place-items-center"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        }`}
      >
        {posts.slice(0, visiblePosts).map((post) => (
          <div
            key={post.slug}
            className="p-6 bg-card shadow-lg rounded-xl border border-border overflow-hidden w-full"
          >
            {/* Preview Image */}
            <div className="w-full aspect-[16/9] relative mb-4">
              <Image
                src={post.previewImage}
                alt={post.title}
                fill
                className="rounded-md object-cover"
              />
            </div>

            {/* Post Details */}
            <h2 className="text-xl font-semibold text-foreground">{post.title}</h2>
            <p className="text-muted-foreground">{post.excerpt}</p>

            {/* Read More Link */}
            <Link href={`/posts/${post.slug}`} className="text-primary hover:underline mt-2 block">
              Read More
            </Link>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {/* Load More Button */}
      {visiblePosts < posts.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md shadow-md hover:bg-opacity-90"
          >
            Load More Posts
          </button>
        </div>
      )}
    </div>
  );
}