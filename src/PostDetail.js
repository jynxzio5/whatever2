// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom'; // استيراد useNavigate للتوجيه
import './App.css'; // استيراد ملف CSS الخاص بالتطبيق
import logo from './assets/logo.png'; // تعديل المسار وفقًا لموقع الشعار

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
    { title: 'فهم قانون العقود', date: '2024-10-22', content: 'يتم عرض تفاصيل قانون العقود هنا.' },
    { title: 'أهمية الأخلاق القانونية', date: '2024-10-23', content: 'يتم عرض تفاصيل الأخلاق القانونية هنا.' },
    { title: 'التطورات الأخيرة في القانون الدستوري', date: '2024-10-24', content: 'يتم عرض تفاصيل التطورات الأخيرة هنا.' },
];

// مكون لصفحة تفاصيل الموضوع
const PostDetail = ({ post }) => {
    const navigate = useNavigate(); // استخدام useNavigate للتوجيه

    const handleClose = () => {
        navigate('/'); // العودة إلى الصفحة الرئيسية عند الإغلاق
    };

    return (
        <div className="post-detail">
            <button className="close-button" onClick={handleClose}>×</button> {/* زر إغلاق */}
            <h2>{post.title}</h2>
            <p className="post-date">{post.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} /> {/* عرض المحتوى بتنسيق HTML */}
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <div className="blog-container night-mode"> {/* الاحتفاظ بوضع الليل */}
                <header>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={logo} alt="شعار المدونة" style={{ width: '85px', height: '50px', marginRight: '10px' }} />
                        <h1 style={{ textAlign: 'left' }}> رؤيا قانونية</h1>
                    </div>
                    <p>موقع لمناقشات وأفكار قانونية.</p>
                </header>
                <main>
                    <div className="post-list">
                        {posts.map((post, index) => (
                            <div key={index} className="post">
                                <Link to={`/post/${index}`}>
                                    <h2>{post.title}</h2>
                                </Link>
                                <p className="post-date">{post.date}</p>
                            </div>
                        ))}
                    </div>

                    {/* مسار عرض تفاصيل كل موضوع */}
                    <Routes>
                        {posts.map((post, index) => (
                            <Route key={index} path={`/post/${index}`} element={<PostDetail post={post} />} />
                        ))}
                    </Routes>
                </main>
                <footer>
                    <p>&copy; 2024 مدونة رؤى قانونية. جميع الحقوق محفوظة.</p>
                    <p>تم التصميم بواسطة المعصتم بالله ومحمد الفطيمات</p> {/* إضافة الكريدت */}
                </footer>
            </div>
        </Router>
    );
};

export default App;
