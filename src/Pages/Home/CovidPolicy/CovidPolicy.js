import React from 'react';
import { MDBRipple } from 'mdb-react-ui-kit';
import delivaryman from '../../../image/delivaryman.png'
import working from '../../../image/working.png'
import worker from '../../../image/worker.png'
import delivary from '../../../image/delivary.png'
const CovidPolicy = () => {
    return (
        <div >
            <div className='mt-5 text-center  '>
                <h1 className='text-primary '>Working during the COVID-19 pandemic?</h1>
                <h1 className='text-primary'>Concerned about your health and safety?</h1>
                <h2 className='text-danger'>CONFRONTING
                    COVID-19</h2>
            </div>
            <div className='row mt-5 '>
                <div className='col-4 d-md-none d-sm-none d-none d-lg-block '>
                    <div className='mt-4'>
                        <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' style={{ maxWidth: '24rem' }}>
                            <img src={worker} className='w-100' />
                            <a href='#!'>
                                <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                            </a>
                        </MDBRipple>
                    </div>
                    <div className='mt-5'>
                        <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' style={{ maxWidth: '24rem' }}>
                            <img src={delivary} className='w-100' />
                            <a href='#!'>
                                <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                            </a>
                        </MDBRipple>
                    </div>
                    <div className='mt-5'>
                        <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' style={{ maxWidth: '24rem' }}>
                            <img src={working} className='w-100' />
                            <a href='#!'>
                                <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                            </a>
                        </MDBRipple>
                    </div>
                </div>
                <div className='mt-4 border shadow-lg p-3 mb-5 col'>
                    <ul>
                        <h2 className='text-primary mt-4'>HYGIENE AND CLEANING</h2>
                        <li> Hygiene is essential. Hygiene notices (i.e., avoid touching your face, sneeze/cough etiquette and proper hand
                            washing) should be posted in all workplace entrances, loading docks, washrooms, hand washing stations,
                            lunch rooms and public areas.For couriers and other truck drivers, suppliers, contractors, customers and other third parties entering the workplace
                            hand sanitizer should be made available and posters advising use must be clearly visible. In fact, workplace entry
                            protocol should be shared with all third parties by email or other means. Hand sanitizer is effective if it contains at
                            least 60 per cent alcohol. </li>

                        <h2 className='text-primary mt-4'>SOCIAL (PHYSICAL) DISTANCING </h2>
                        <li> Self-isolation for those with COVID-19 or those experiencing symptoms or those who were exposed to a presumed
                            or confirmed case is essential. In fact, for all workers, contractors, suppliers and many other third parties entering
                            work premises, employers are required to implement a screening process prior to arrival or when they first enter
                            the workplace. Should anyone fail the screening, they should be denied entry and advised to self-isolate, call their
                            health care provider or Telehealth Ontario (1.866.797.0000) for additional guidance on whether or not they require
                            a COVID-19 test.Employers should also dedicate a location to isolate people who become ill at work until they can leave. </li>
                        <h2 className='text-primary mt-4'>ENHANCED VENTILATION </h2>
                        <li>With research confirming the airborne transmission of the COVID-19 virus often beyond the two metre social
                            distancing rule, enhanced ventilation, filtration and maintenance is perhaps even more important. In response,
                            public health officials have joined globally-recognized standards setting organizations and some experts to promote
                            enhanced ventilation aimed at reducing airborne transmission in indoor work environments and public spaces.</li>
                        <h2 className='text-primary mt-4'>PERSONAL PROTECTIVE EQUIPMENT (PPE)</h2>
                        <li>
                            Before using PPE, employers should first work with joint health and safety committees, worker health and safety
                            representatives (and union reps where applicable) to examine all the ways in which workers may be exposed
                            to the COVID-19 virus. Then consider the precautions promoted by public health authorities, including those
                            mentioned above, and how best to implement them.
                            Remember when PPE is deemed necessary, great care must be taken in its selection, use, cleaning, laundering and
                            disposal. Also keep in mind, some PPE can cause a false sense of security, offers limited protection and can also
                            increase the risk of infection if used improperly. For instance, for most non-health care workers, including factory
                            and warehouse workers, nitrile (synthetic rubber) gloves to protect against COVID-19 are not advised, in most cases
                            they only serve to spread the virus. The World Health Organization and Public Health Agency of Canada advises
                            handwashing/sanitizing offers superior protection. Hence why gloves to protect against other hazards and/or ensure
                            safety of food in processing must be cleaned or changed regularly.
                        </li>
                        <h2 className='text-primary mt-4'>TRAINING AND INFORMATION </h2>
                        <li>
                            Employers must also ensure workers required to use PPE are trained in its proper use, care and limitations. Further
                            still, most workers must be properly trained in Globally Harmonized WHMIS. With new cleaning and disinfecting
                            products being introduced during the pandemic, the need for this training is greater than ever. WHMIS training
                            must result in the workers being able to use information required by WHMIS to protect their health and safety.This training must be developed and implemented in consultation with the joint health and
                            safety committee or health and safety representative.
                            Properly trained, certified JHSC members are also mandatory and critical to securing safer, healthier workplaces.
                        </li>
                        <h2 className='text-primary mt-4'>Additional advice from
                            Ontario's Ministry of Labour, Training and Skills Development
                        </h2>
                        <h3 className='text-danger mt-4'>OVERVIEW</h3>
                        <li>
                            Employers and constructors have obligations to protect workers from hazards in the workplace as set out
                            in the Occupational Health and Safety Act (OHSA) and its regulations and the directives coming from the
                            Chief Medical Officer of Health.
                            Workers should raise any concerns to their:
                            <li >
                                supervisor
                            </li>
                            <li>
                                joint health and safety committee
                            </li>
                            <li>
                                health and safety representative.
                            </li>
                            This will help ensure the employer has taken all reasonable precautions.
                            Ontario is currently in the midst of a global pandemic. While the COVID-19 situation is changing rapidly,
                            the legislation and regulations used to govern Ontario's workplaces are not.
                            Under Ontario law, employers have the duty to keep workers, work sites and all workplaces safe and free
                            of hazards. Workers have the right to refuse unsafe work. If health and safety concerns are not resolved
                            internally, a worker can seek enforcement of their rights with the ministry's Health and Safety Contact
                            Centre at 1-877-202-0008. Failure of the employer or constructor to comply with the OHSA and its
                            regulations could result in a stop-work order upon inspection by the Ministry of Labour, Training and
                            Skills Development.
                        </li>
                        <h2 className='text-danger mt-4'> BEST PRACTICES</h2>
                        <li>
                            These are covered in the Workers Health and Safety Centre document above. Other WHSC COVID-19
                            resources found at www.whsc.on.ca.
                            For more information on worker's rights and employer obligations under health and safety law,
                            including the worker right to refuse unsafe work, check out Workers Health and Safety Centre online
                            worker OHS rights posters or the Frequently Asked Questions section of the WHSC website.
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default CovidPolicy;