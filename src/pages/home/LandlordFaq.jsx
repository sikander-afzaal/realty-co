import Faq from "../../components/Faq";

const LandlordFaq = () => {
  const FAQ__DATA = [
    {
      question: "How do I get started",
      answer:
        "Once we have the property management agreement and keys to your property, we begin marketing it right away. However, if the property is occupied or in poor condition, we may recommend waiting for a vacant and cleaned-up presentation to maximize financial benefits. We promptly assess the situation and communicate with you to determine the best course of action. Time is critical in rental investing, so we move swiftly once you sign up. The only delay we allow is waiting for ideal weather conditions for photos, and any longer, we move forward and retake the photos later.",
    },
    {
      question: "What types of Properties do you manage?",
      answer:
        "Our primary focus is on managing long-term rental properties, including single-family homes, condos, and townhomes. Additionally, we have extensive expertise in managing multi-family properties like apartment complexes and multiplexes. While most of our properties are unfurnished, we have the necessary policies and know-how to excel in managing upscale furnished homes as well. It's worth noting that we do not manage rooming houses, short-term rentals of less than three months, or commercial properties, except for apartment buildings. We also do not provide HOA grounds management services. Our team is dedicated to providing exceptional property management services for our clients, and we specialize in ensuring the long-term success of your rental investments.",
    },
    {
      question: "How long will it take to rent my home?",
      answer:
        "Our goal is to rent your home within 30-45 days while balancing vacancy with the highest possible rental rate. To achieve this, we focus on four critical aspects.Firstly, we ensure that the rental property is in excellent showing condition, so minor repairs and updates are complete. Our focus is on lasting improvements rather than superficial changes.Secondly, we create stunning presentations and utilize several data feeds to flood the web with listings on hundreds of rental sites. We utilize marketing tricks and tools to maximize views and convert them into inquiries and showings.Thirdly, we give a realistic rental rate estimate based on comparable properties nearby, and we strike a perfect balance between a great rate and filling the property quickly. We systematically reduce the rental rate until the property is rented. Finally, we make the viewing process as easy as possible for potential tenants, reducing vacancy by simplifying the process. Occupied homes receive fewer showings, so we have an extremely flexible and proactive showing policy to maximize the number of potential leads viewing the rental.",
    },
    {
      question: "What is the rental process?",
      answer:
        "We've simplified the rental application process for prospective tenants by allowing them to conveniently apply online at any time. Our screening process involves a nationwide credit and background check, income and employment verification, as well as a thorough examination of rental history, which includes an eviction search. In addition, we have a reliable method of gathering comprehensive information through open-ended questions to obtain a better understanding of the applicant's situation, rather than solely relying on a narrow credit score. Our rigorous process has been successful, with very few evictions over the past decade.Once a tenant passes our screening process, they must submit the security deposit within 24 hours to secure the home. We require at least one month's rent as a deposit, and sometimes more, and we use a standard lease provided by the NC Bar Association. While we typically recommend a two-year lease to reduce turnover and increase profitability, we require a commitment of at least one year. If it makes more sense to have a shorter lease term, we will discuss it with you before finalizing the lease. Shorter leases are typically used for seasonal purposes. We will provide a signed copy of the lease once it's executed.",
    },
    {
      question: "Why shouldn’t I manage my property myself?",
      answer:
        "There are many reasons why it makes sense to hire a professional property management company instead of handling everything yourself. One of the most important reasons is that management expenses are tax-deductible, which makes it more affordable than many landlords think. Additionally, managing rental properties can be very time-consuming and can take away from other important aspects of your life. By hiring a dedicated professional, you can focus on what truly matters to you.Another important consideration is risk. Inexperienced landlords can be easily manipulated by problem tenants, and even experienced landlords can make mistakes that can lead to costly delays and even civil suits. By hiring a professional property management company, you can minimize risk and ensure that all legal requirements are met.Convenience is another key factor. Professional property management companies offer a range of services that can save you time and money, including ACH rent deposits, contractor referrals, and 24/7 emergency availability. Overall, the benefits of hiring a professional property management company like Victory far outweigh the costs, and can lead to increased revenue, decreased expenses, and greater peace of mind.",
    },
    {
      question: "Who pays for property repairs?",
      answer:
        "Although we prioritize minimizing expenses and achieving the highest return on investment, we cannot take on repair costs as our responsibility. Along with the benefits of being a landlord come drawbacks that we cannot share in. Nonetheless, we tirelessly seek out the best-value contractors in the industry. Rather than enlisting national companies that typically charge higher costs and may not deliver satisfactory results, we choose to support locally owned and operated contractors who are accountable to the community, just as we are. Unlike many property management companies, we prioritize the quality of fieldwork over administrative tasks, often doing a large amount of the contractors' admin work ourselves because of the exceptional results they produce. This philosophy costs us time and resources, but we still do not charge additional fees for most maintenance. We can authorize repairs in most cases without immediate payment, thanks to our impeccable community credit and reputation. Most of our owners only send us funds for rare, long-term expenses such as a new HVAC or roof.",
    },
  ];
  const FAQ__DATA2 = [
    {
      question: "What should I expect regarding yearly maintenance costs?",
      answer:
        "We take pride in providing our customers with the lowest possible maintenance costs in the industry. Typically, our clients only spend 2-3% of their gross rent on repairs each year, compared to the industry average of around 10%. While we recommend budgeting for maintenance costs at 10% per year, our goal is always to keep these expenses as low as possible for our clients. However, the actual cost of repairs can vary depending on the specific needs of the property.The most significant expenses tend to come from repairing air conditioning units, furnaces, and appliances. In general, it is rare to fix a heating or cooling system for less than $300, and appliances can often be just as costly to repair as to replace. We typically use handymen for repairs, as they are more cost-effective than hiring specialized tradespeople such as electricians, plumbers, or roofers.Our low turnover rate also helps keep repair costs down, as our exceptional contractors are able to quickly handle minor cleaning and repairs between tenants. However, costs associated with preventative maintenance and upgrades are not included in our repair figures, as they can be highly subjective and vary depending on the owner's preferences. In these cases, we typically take a minor role and expect the owner to communicate directly with contractors and pay them directly as well. To learn more, please refer to our full FAQ document.",
    },
    {
      question: "Do you use the cheapest contractors available?",
      answer:
        "No. As with management expenses, you usually get what you pay for. In the long run, ultra-cheap contractors and home warranties usually end up costing more as a result of mistakes, recalls, bait and switch, and extremely upset tenants. We prefer to look for the best value (combination of great service and cost) and we typically achieve this by working with local contractors whose service and actions directly dictate their ability to stay in business. As a result of their advertising and brand recognition, national brands often thrive despite offering horrible value via a painful combination of poor service and results. They do typically offer exceptional administrative departments which eliminate a lot of the work for property managers, and that is why so many of our competitors still use them. We invest more time and effort in cultivating our contractor relations than almost anything else. We pay quickly, act reasonably, and respect our quality contractors to ensure continued competitive pricing. With that said, however, once we identify problems with a contractor, we are ruthless in cutting bills down, callbacks, and removing them from our process. We have phenomenal relationships with most of our contractors. One big exception, ironically in all of our markets, is appliance repairs. We have yet to find an exceptional solution in this department, but rest assured we are always on the hunt.",
    },
    {
      question: `What’s the difference between single-family, and multi0family or apartment property mangement?`,
      answer: `Our management portfolio includes both individual homes and investors, ranging from mom-and-pop rental property owners to experienced real estate investors. Many of our clients started with a single-family rental property and have since expanded their portfolio with our help. Our multi-family investors have a wealth of experience in real estate investing and understand the importance of making decisions based on the numbers, rather than emotion. Although managing a 200-unit apartment complex may seem more complex than a varied portfolio of single-family homes, townhouses, and condos, the main difference lies in the mindset of the investors. With multi-family properties, we focus solely on the profit and loss figures and make decisions with a longer-term horizon in mind, minimizing the role of emotion. While we also strive to remove emotion from our single-family management decisions, it's important to recognize that managing a home someone once lived in requires a different approach than managing an apartment complex purchased as an investment.`,
    },
  ];
  return (
    <div className="wrapper my-[60px] sm:my-[120px] ">
      <div className="py-10 w-full max-w-[1320px] bg-silver flex justify-center items-center flex-col rounded-[20px] px-5 lg:px-10">
        <h2 className="title text-mahroon">Landlord FAQ</h2>
        <div className="gap-5 lg:flex-row flex-col flex justify-start items-start w-full">
          <div className="flex justify-start items-center gap-5 mt-8  flex-col w-full">
            {FAQ__DATA.map((elem, idx) => {
              return <Faq {...elem} key={idx + elem.question} />;
            })}
          </div>
          <div className="flex justify-start items-center gap-5 mt-8  flex-col w-full">
            {FAQ__DATA2.map((elem, idx) => {
              return <Faq {...elem} key={idx + elem.question} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordFaq;
