export default function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Dekorasi Latar Belakang */}
        <div style={styles.circle}></div>
        
        <h1 style={styles.errorCode}>404</h1>
        
        <div style={styles.divider}></div>
        
        <h2 style={styles.title}>Halaman Tidak Ditemukan</h2>
        <p style={styles.description}>
          Sepertinya link yang kamu tuju sudah pindah ke lain hati, 
          atau memang tidak pernah ada sejak awal.
        </p>

        <a href="/" style={styles.button}>
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f2f5',
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    padding: '20px',
  },
  card: {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: '60px 40px',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
    maxWidth: '500px',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  circle: {
    position: 'absolute',
    top: '-50px',
    right: '-50px',
    width: '150px',
    height: '150px',
    backgroundColor: '#6366f1',
    opacity: '0.1',
    borderRadius: '50%',
  },
  errorCode: {
    fontSize: '120px',
    fontWeight: '900',
    margin: '0',
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: '1',
  },
  divider: {
    height: '4px',
    width: '60px',
    backgroundColor: '#e5e7eb',
    margin: '24px auto',
    borderRadius: '2px',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '12px',
  },
  description: {
    fontSize: '16px',
    color: '#6b7280',
    lineHeight: '1.6',
    marginBottom: '32px',
  },
  button: {
    display: 'inline-block',
    padding: '14px 32px',
    backgroundColor: '#6366f1',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '600',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.3)',
  }
};