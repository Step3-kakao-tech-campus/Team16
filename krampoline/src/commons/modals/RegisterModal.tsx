export interface RegisterModalProps {
  handleModalCloseClick: () => void;
  handleModalOutsideClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleRegisterButtonClick: () => void;
  handleRegisterMoreButtonClick: () => void;
  handleRegisterFinishButtonClick: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const RegisterModal = ({
  handleModalCloseClick,
  handleModalOutsideClick,
  handleRegisterButtonClick,
  handleRegisterMoreButtonClick,
  handleRegisterFinishButtonClick,
  isLoading,
  isSuccess,
  isError,
}: RegisterModalProps) => {
  return (
    <div
      onClick={handleModalOutsideClick}
      className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50"
    >
      <div className="w-80 h-60 bg-white rounded-md flex flex-col items-center">
        <div className="flex w-full justify-end p-5 ">
          <button onClick={handleModalCloseClick} className="text-2xl">
            X
          </button>
        </div>
        {isSuccess && (
          <>
            <span className="text-2xl text-brand-color">
              추가 등록 하시겠습니까?
            </span>
            <div className="flex w-2/3 justify-between mt-8">
              <button
                className="text-brand-color rounded-md font-bold border border-brand-color w-16 py-2"
                onClick={handleRegisterFinishButtonClick}
              >
                아니요
              </button>
              <button
                className="bg-brand-color rounded-md font-bold text-white w-16 py-2"
                onClick={handleRegisterMoreButtonClick}
              >
                예
              </button>
            </div>
          </>
        )}
        {!isSuccess && isLoading ? (
          <>
            <span className="text-2xl text-brand-color">등록중입니다...</span>
            <img
              src="assets/images/hourglass.png"
              alt="hourglass"
              className="w-10 h-10 mt-8"
            />
          </>
        ) : (
          <>
            <span className="text-2xl text-brand-color">
              등록 하시겠습니까?
            </span>
            <div className="flex w-2/3 justify-between mt-8">
              <button
                className="text-brand-color rounded-md font-bold border border-brand-color w-16 py-2"
                onClick={handleModalCloseClick}
              >
                아니요
              </button>
              <button
                className="bg-brand-color rounded-md font-bold text-white w-16 py-2"
                onClick={handleRegisterButtonClick}
              >
                예
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
