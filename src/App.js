import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.png';

const posts = [
    {
        title: 'مقدمة في المبادئ القانونية',
        date: '2024-10-21',
        content: `
            <p>المبادئ القانونية تُعتبر أساس النظام القانوني الذي ينظم العلاقات بين الأفراد والمجتمع. تهدف هذه المبادئ إلى ضمان العدالة، وحماية الحقوق، وتحقيق النظام العام. تشمل المبادئ القانونية العديد من المفاهيم الأساسية، منها:</p>
            <ul>
                <li><strong>سيادة القانون</strong>: تعني أن الجميع، بما في ذلك الحكومة، يجب أن يكونوا خاضعين للقانون.</li>
                <li><strong>المساواة أمام القانون</strong>: تشير إلى أن جميع الأفراد يجب أن يعاملوا على قدم المساواة دون تمييز.</li>
                <li><strong>حماية الحقوق الأساسية</strong>: تشمل الحقوق مثل الحق في الحياة، والحرية، والملكية، وغيرها.</li>
                <li><strong>حق الدفاع</strong>: يضمن أن يتمكن الأفراد من الدفاع عن أنفسهم أمام القضاء.</li>
                <li><strong>العدالة</strong>: تعني أن الإجراءات القانونية يجب أن تكون عادلة وغير منحازة.</li>
            </ul>
            <h4>المصادر:</h4>
            <ol>
                <li><a href="https://www.iap-law.org">الأكاديمية الدولية للقانون</a></li>
                <li><a href="http://www.moj.gov.jo">المبادئ القانونية الأساسية - وزارة العدل</a></li>
                <li>كتب قانونية: مثل "المبادئ الأساسية للقانون" للدكتور محمد عواد.</li>
            </ol>
        `,
    },
    {
        title: 'فهم قانون العقود',
        date: '2024-10-22',
        content: `
            <p>قانون العقود هو فرع من فروع القانون الذي ينظم العلاقات التعاقدية بين الأفراد. ويعتبر أساسًا لإبرام الصفقات التجارية والمدنية.</p>
            <p>يتضمن قانون العقود مجموعة من القواعد والمبادئ التي تهدف إلى حماية حقوق الأطراف المتعاقدة وضمان تنفيذ الالتزامات. ومن العناصر الأساسية في قانون العقود:</p>
            <ul>
                <li><strong>القبول والعرض</strong>: يجب أن يكون هناك عرض من طرف وقبول من آخر.</li>
                <li><strong>المقابل</strong>: يجب أن يكون هناك تبادل للمنافع بين الأطراف.</li>
                <li><strong>القدرة على التعاقد</strong>: يجب أن يكون الأطراف مؤهلين قانونيًا لإبرام العقد.</li>
            </ul>
            <h4>المصادر:</h4>
            <ol>
                <li><a href="https://www.law.cornell.edu/wex/contract">Cornell Law School - Contract Law</a></li>
                <li><a href="https://www.hg.org/legal-articles/the-elements-of-a-contract-31309">HG.org - The Elements of a Contract</a></li>
            </ol>
        `,
    },
    {
        title: 'أهمية الأخلاق القانونية',
        date: '2024-10-23',
        content: `
            <p>الأخلاق القانونية تُعتبر جزءًا أساسيًا من الممارسة القانونية، حيث تعزز النزاهة والعدالة في النظام القانوني.</p>
            <p>تتضمن الأخلاق القانونية مبادئ أساسية مثل:</p>
            <ul>
                <li><strong>الصدق</strong>: يتوجب على المحامين التصرف بصدق في تعاملاتهم.</li>
                <li><strong>الالتزام بالقانون</strong>: يجب الالتزام بالقوانين واللوائح المعمول بها.</li>
                <li><strong>حماية حقوق الموكلين</strong>: يتوجب على المحامين حماية مصالح موكليهم بجدية.</li>
            </ul>
            <h4>المصادر:</h4>
            <ol>
                <li><a href="https://www.americanbar.org/groups/professional_responsibility/publications/ethics_guide/ethics_primer/">American Bar Association - Ethics Primer</a></li>
            </ol>
        `,
    },
    {
        title: 'التطورات الأخيرة في القانون الدستوري',
        date: '2024-10-24',
        content: `
            <p>القانون الدستوري هو فرع من فروع القانون الذي يحدد القواعد الأساسية التي تنظم الحكومة وحقوق الأفراد. يشهد هذا المجال تطورات مستمرة تعكس التغيرات الاجتماعية والسياسية.</p>
            <p>بعض التطورات الأخيرة تشمل:</p>
            <ul>
                <li><strong>توسيع الحقوق المدنية</strong>: توسيع نطاق الحماية لحقوق الأفراد.</li>
                <li><strong>التحولات في السلطات الحكومية</strong>: تغييرات في كيفية توزيع السلطات بين الفروع الحكومية.</li>
            </ul>
            <h4>المصادر:</h4>
            <ol>
                <li><a href="https://www.constitution.org/">Constitution Society</a></li>
                <li><a href="https://www.law.cornell.edu/wex/constitutional_law">Cornell Law School - Constitutional Law</a></li>
            </ol>
        `,
    },
];

// مكون لصفحة تفاصيل الموضوع
const PostDetail = ({ post, onClose }) => {
    return (
        <div className="post-detail">
            <button onClick={onClose} style={{ float: 'right', fontSize: '24px', cursor: 'pointer', background: 'none', border: 'none', color: '#fff' }}>✖</button>
            <h2>{post.title}</h2>
            <p className="post-date">{post.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} style={{ lineHeight: '1.6', fontSize: '18px' }} />
        </div>
    );
};

const App = () => {
    const [openPosts, setOpenPosts] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [menuOpen, setMenuOpen] = React.useState(false); // حالة القائمة المنسدلة

    const handlePostClick = (index) => {
        if (!openPosts.includes(index)) {
            setOpenPosts([...openPosts, index]);
        }
    };

    const handleClose = (index) => {
        setOpenPosts(openPosts.filter(postIndex => postIndex !== index));
    };

    const filteredPosts = posts.filter(post => post.title.includes(searchTerm));

    return (
        <Router>
            <div className="blog-container night-mode">
                <header>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={logo} alt="شعار المدونة" style={{ width: '85px', height: '50px', marginRight: '10px' }} />
                            <h1 style={{ textAlign: 'left' }}>رؤيا قانونية</h1>
                        </div>
                        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button> {/* زر قائمة الهامبرغر */}
                    </div>
                    <p>موقع لمناقشات وأفكار قانونية.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
                        <input
                            type="text"
                            placeholder="ابحث عن موضوع..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ width: '300px', padding: '10px', textAlign: 'center' }} // عرض 3 سنتيمترات (30 بكسل)
                        />
                    </div>
                </header>

                {/* قائمة التنقل */}
                {menuOpen && (
                    <nav className="mobile-menu">
                        <ul>
                            <li><Link to="/">الرئيسية</Link></li>
                            <li><Link to="/contact">تواصل معنا</Link></li>
                            {/* يمكنك إضافة المزيد من الروابط حسب الحاجة */}
                        </ul>
                    </nav>
                )}

                <main>
                    <div className="post-list">
                        {filteredPosts.map((post, index) => (
                            <div key={index} className="post">
                                <Link to="#" onClick={() => handlePostClick(index)}>
                                    <h2>{post.title}</h2>
                                </Link>
                                <p className="post-date">{post.date}</p>
                            </div>
                        ))}
                    </div>

                    {openPosts.map((postIndex) => (
                        <PostDetail 
                            key={postIndex} 
                            post={posts[postIndex]} 
                            onClose={() => handleClose(postIndex)} 
                        />
                    ))}
                </main>

                <footer>
                    <p>&copy; 2024 مدونة رؤى قانونية</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
