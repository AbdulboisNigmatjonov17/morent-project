import { Link, useRouteError } from "react-router-dom";
import BtnSM from "../../components/btns/btnSM";

function ErrorPage() {
  const error = useRouteError();

  if (error.status == 404) {
    return (
      <div className= "max-w-[100vw] min-h-[100vh] bg-[#4ebeff]">
        <div className="Container flex min-h-[70vh] bg-inherit text-center items-center justify-center">
          <div className="bg-[#0c9c9c] max-w-[500px] text-white p-7">
            <h3 className=" text-[30px] bg-inherit font-medium mb-5">
              404 Error: Page not found. But don't worry, our developers are on a
              treasure hunt to recover it. Meanwhile, enjoy some virtual tea and
              biscuits!
            </h3>
            <Link to="/" className="bg-inherit">
              <BtnSM btn_bg={'#3563E9'} text={'Go To Home'} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="error-container container">
      <div>
        <h3>
          Oops! Looks like our web page did a somersault and landed in a digital
          rabbit hole. We're working on untangling the code. Hang tight!
        </h3>
        <Link to="/" className="btn">
          Go To Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;