import PropTypes from 'prop-types'

export const AuthFormLayout = ({ children, title }) => {
  return (
    <section className="flex flex-col items-center justify-center h-[100vh] bg-gray-900">
      <div className="flex flex-col w-[80%] bg-gray-800 h-auto p-4 shadow-2xl">
        <h1 className="text-center text-3xl tracking-wider text-gray-300">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
};

AuthFormLayout.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
}