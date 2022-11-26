import github_icon from "../../assets/github_icon.svg";

export default function Footer() {
  return (
    <div className="footer w-full bg-primary text-white text-center h-20">
      <div className="footer-container flex justify-between items-center h-20 px-[10px] py-[40px]">
        <div className="footer-left text-lg">
          <p className="m-0 text-center">© 2022 Brusinhas, Inc. </p>
          <p className="m-0 text-center">Nenhum direito reservado</p>
        </div>
        <div className="footer-right">
          <a
            href="https://github.com/lusmoura/An-online-store---Trabalho-Web"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github_icon} alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
