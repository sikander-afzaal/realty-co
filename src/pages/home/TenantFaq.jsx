import Faq from "../../components/Faq";

const TenantFaq = () => {
  const FAQ__DATA = [
    {
      question: "How do I submit a rental application?",
      answer:
        "You have to be at least 18 years old. Please fill out the rental application on the homes for rent page.",
    },
    {
      question: "Is it possible to apply for a property that I haven't viewed?",
      answer:
        "We prefer for all applicants to either see the property in person or send a trusted 3rd party to view on their behalf. If impossible to view before applying, you will need to ask our team about leasing details when submitting the applications. We understand that you may not have time to view the property. In this case, you could arrange for a friend or family member to view the property on your behalf. It's important to see the property instead of only looking at the photos. The photos serve as an approximate representation. Applicants should check whether the property matches their expectations and needs.",
    },
    {
      question: "How can I visit a property?",
      answer:
        "Call the number on the listing directly or click here to contact us through the contact page.After receiving a request, we'll quickly organize a property viewing. Our goal is to make sure you'll find your dream home. Please note that we are required to provide current tenants at occupied properties at least 24 hours’ notice prior to scheduled showings.",
    },
    {
      question: "Do I have to sign a lease?",
      answer:
        "Yes, you have to sign a lease online or offline by appointment. The majority of our properties come with a 12-month lease. It states the responsibilities of both sides covering the whole tenancy period.",
    },
    {
      question: "What is your security deposit policy?",
      answer:
        "Security deposit equals to one months' rent and may vary based on credit. You need to pay the full amount before moving in.",
    },
    {
      question: "How do the rent payments work?",
      answer:
        "Your rent is usually due on the first day of every month unless your lease agreement specifies otherwise. We offer a payment system that allows you to pay your rent online. Click here to access the system. Use Tenant Login to view your account balance as well. Please note that cash payments aren't accepted due to security reasons.",
    },
    {
      question: "When do you increase the rent?",
      answer:
        "Rent increases usually happen after the lease term expiration. Of course, it isn't always increased. Our analysis accounts for the property owner's requests and relevant market conditions.",
    },
    {
      question: "What could I do to waive the late rent fees?",
      answer:
        "If notified by the 1st of the month, Top Realty co. offers a 1st time courtesy waive of late fees to all tenants for payments that come in by the 10th of the month on the 1st occurrence. Beyond this, we aren't able to waive any late rent fees. Our late charge policy complies with Fair Housing Laws. That means we have to treat all tenants equally.",
    },
    {
      question: "Am I allowed to have a roommate?",
      answer:
        "Yes, but every roommate needs to be approved. They can get approval by using a rental application form. After filling out the form, they must pay the application fee, and wait for the screening results. Skipping any of these steps violates the lease and could lead to termination.",
    },
    {
      question: "What kind of situations are emergencies?",
      answer:
        "Emergencies threaten human lives and/or cause property damage. For example, a burst pipe flooding the home and a broken heater during winter months are definitely emergencies.",
    },
    {
      question: "What's the pet policy?",
      answer:
        "The pet policy depends on the terms in each specific lease agreement. You must notify our team of any pets before move-in. When you already have a pet and you want to add an extra one, please call our office first. We will process every request separately depending on the lease terms.",
    },
    {
      question: "Can I change the locks?",
      answer:
        "No, installing new locks on your own would violate the lease agreement terms. It's possible to install a new lock upon request and approval; this may be a tenant charge depending on the situation.",
    },
    {
      question: "Can managers and staff enter my home when I'm not there?",
      answer:
        "If there's a need to enter the property, we'll notify you beforehand. There are many possible reasons for the entrance of managers or staff. For example, landlords may enter the home for emergency repairs. Also, they might allow insurance agents or inspectors to enter the property. But regular maintenance is preferably carried out when you aren't away from home.",
    },
    {
      question: "Do I need renters insurance?",
      answer:
        "Yes, all the tenants need to have renters insurance before moving in. You have to show a renters’ insurance confirmation before getting the keys.",
    },
    {
      question: "When do I have to give the notice to vacate?",
      answer:
        "You need to give written notice at least 60 days before terminating the lease. Our office has to receive the notice by the 60-day mark, just ask your Residential Department team for the correct date if you’re not sure.",
    },
  ];

  return (
    <div className="wrapper my-[60px] sm:my-[120px] ">
      <div className="py-10 w-full max-w-[1320px] bg-silver flex justify-center items-center flex-col rounded-[20px] px-5 lg:px-10">
        <h2 className="title text-mahroon">Tenant FAQ</h2>
        <div className="gap-5 lg:flex-row flex-col flex justify-start items-start w-full">
          <div className="flex justify-start items-center gap-5 mt-8  flex-col w-full">
            {FAQ__DATA.slice(0, 7).map((elem, idx) => {
              return <Faq {...elem} key={idx + elem.question} />;
            })}
          </div>
          <div className="flex justify-start items-center gap-5 mt-8  flex-col w-full">
            {FAQ__DATA.slice(8, -1).map((elem, idx) => {
              return <Faq {...elem} key={idx + elem.question} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantFaq;
