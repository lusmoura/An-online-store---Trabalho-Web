import FilledButton from '../../components/FilledButton/FilledButton'
import TextField from '../../components/TextField/TextField'
import "./style.css";

export default function Profile() {
  return (
    <div className="profile-outer">
      <div className="profile-inner">
        <h1 className="profile-page-title">Perfil</h1>
        <div className="profile-data">
            <h2 className="profile-page-subtitle">Dados</h2>
            <div className="profile-data-form">
              <TextField
              label="Nome"
              type="nome"
              placeholder="Maria da Silva"
              value="Maria da Silva"
              onChange={() => {}}
              />
              <TextField
              label="Telefone"
              type="text"
              placeholder="(xx) xxxxx-xxxx"
              value="(00) 00000-0000"
              onChange={() => {}}
              />
              <TextField
              label="E-mail"
              type="email"
              placeholder="xxx@xxx.xxx"
              value="mariadasilva@gmail.com"
              onChange={() => {}}
              />
              <TextField
              label="Senha"
              type="password"
              placeholder="********"
              value="********"
              onChange={() => {}}
              />
            </div>
        </div>
        <hr/>
        <div className='profile-address'>
            <h2 className='profile-page-subtitle'>Endereço</h2>
            <div className="profile-address-form">
              <TextField
              label="CEP"
              type="text"
              placeholder="xxxxx-xxx"
              value="00000-000"
              onChange={() => {}}
              />
              <TextField
              label="Endereço"
              type="text"
              placeholder="Rua das Flores, 123"
              value="Rua das Flores, 123"
              onChange={() => {}}
              />
              <TextField
              label="Destinatário"
              type="text"
              placeholder="Maria da Silva"
              value="Maria da Silva"
              onChange={() => {}}
              />
            </div>
        </div>
      </div>
      <FilledButton label="Salvar"/>
    </div>
  )
}