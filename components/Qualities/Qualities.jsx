import { AvTimer, MiscellaneousServices, Psychology, Public, SupportAgent, WorkspacePremium } from '@mui/icons-material';
import { useMediaQuery } from 'react-responsive';
import './Qualities.css';
import Quality from './Quality/Quality';

export default function Qualities() {

    const data = [
        {
            head: 'Proficiency',
            txt: 'We have logistics specialists who specialize in various industry areas who can assist you in improving your performance and cutting costs and easy shipment without stress, our formidable team are here to guide you from imagination to reality.',
            icon: <Psychology sx={{ color: 'rgb(var(--primary-color))', fontSize: 30 }} />,
        },
        {
            head: 'Global Outreach',
            txt: 'We have partners all over the Globe, allowing you to export and import from more places across the world. More ocean loops and services are provided than anyone else in the business, with our fast growing connections and partnership.',
            icon: <Public sx={{ color: 'rgb(var(--primary-color))', fontSize: 27 }} />,
        },
        {
            head: 'Experience',
            txt: 'Everything just takes real effort to transport merchandise across the country, let alone around the world. There are a variety of reasons that can cause a shipments to be prolonged or even halted. Many of these complications can be avoided when you have skilled experts handling all of these minute concerns.',
            icon: <WorkspacePremium sx={{ color: 'rgb(var(--primary-color))', fontSize: 27 }} />,
        },
        {
            head: 'Time Oriented',
            txt: 'Your business will suffer if your goods do not arrive on time. Your customers will be dissatisfied, and your customer retention will deteriorate. Consider firms who will go to great lengths to ensure that your shipments arrive on time. They should be well taken care of, and you should not be concerned about the quality of the package when it arrives.',
            icon: <AvTimer sx={{ color: 'rgb(var(--primary-color))', fontSize: 27 }} />
        },
        {
            head: 'Customer Service',
            txt: "Whether you're new to shipping a vast amount of items or just have a few questions regarding your current cargo, you'll want to know that help is available. Not only will the top logistics companies in NJ be attentive and capable of answering all of your inquiries, but you should never feel like a hassle or a waste of their time.",
            icon: <SupportAgent sx={{ color: 'rgb(var(--primary-color))', fontSize: 27 }} />
        },
        {
            head: 'Top Services',
            txt: 'When researching for the leading players, seek ones who not only provide transportation logistics services but also take care of all of your shipping needs. Whether you need flatbed transportation, complete truckload services, or oversize trucking, the top businesses will collaborate with you to make it happen.',
            icon: <MiscellaneousServices sx={{ color: 'rgb(var(--primary-color))', fontSize: 27 }} />,
        },
    ]

	const isMobile = useMediaQuery({
        query: '(max-width: 480px)'
    })

    return (
        <div className='qualities'>
            
            <h1 style={{ fontSize: isMobile && "28px" }}>Qualities</h1>
            <div className="data__qualities">

                { data.map((val, ind) => (
                    <Quality head={ val.head } txt={ val.txt } icon={ val.icon } key={ ind } />
                )) }

            </div>
            
        </div>
    )
}
