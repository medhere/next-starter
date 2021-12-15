  function Error({ statusCode }) {
    return (
      <p> {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'} </p>
    )
  }

  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  export default Error

//   import Error from 'next/error'
//   export async function getServerSideProps() {
//     const errorCode = res.ok ? false : res.statusCode
//     return {   props: { errorCode } }
//   }
//   export default function Page({ errorCode, stars }) {
//     if (errorCode) { return <Error statusCode={errorCode} title=''/> }
//   }
