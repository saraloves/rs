import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const headerStyle = {
  padding: 20,
  border: '1px solid #DDD'
}

const Header = () => (
    <div className="header-container">

        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
      <style jsx>{`
        .header-container {
          padding: 20;
          border: '1px solid #DDD';
        }

        a {
          color: blue;
        }
      `}</style>
    </div>
)

export default Header