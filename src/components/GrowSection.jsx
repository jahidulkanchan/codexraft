const GrowSection = () => {
  return (
    <section className="grow-section relative text-white pt-10">
      <div className="container lg:w-[1100px]">
        <div className="from-card-bg relative border border-light-gray/10 border-b-0 flex flex-col items-center justify-center space-y-2 rounded-lg bg-gradient-to-b to-transparent px-1 py-5 text-center sm:py-8 md:px-3 md:py-14">
          {/* ============== gradient border =========== */}
          <div className="via-icon-bg/30 absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent to-transparent"></div>

          <div className="space-y-2">
            <p className="text-light-gray text-sm">Get Started</p>
            <h2 className="from-icon-bg to-main mx-auto w-fit bg-gradient-to-l bg-clip-text text-2xl font-medium text-transparent sm:text-3xl md:text-4xl">Ready to Grow?</h2>
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">Let&apos;s Build Something That Works.</h1>
            <p className="text-light-gray mx-auto mt-3 max-w-full lg:max-w-2/3">Unsure which service you need? Book a free meeting and see how we can boost your sales and brand.</p>
          </div>

          <div className="mt-3">
            <a href="/contact" className="blue-gradient group flex w-fit items-center gap-3 rounded px-3 py-2.5">
              <span>
                <i className="w-[20px] transition group-hover:rotate-12" data-lucide="phone-outgoing"></i>
              </span>
              Book 1:1 DiscoveryCall
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowSection;
