import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#1f1f1f' }}>
      <Sidebar />
      <MainContent />
    </div>
  );
}
