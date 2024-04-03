import React, { useState } from 'react';
import '../App.css';

function Chamado({ adicionarChamado }) {
    const [autor, setAutor] = useState('');
    const [local, setLocal] = useState('');
    const [data, setData] = useState('');
    const [problema, setProblema] = useState('');

    const handleAdicionarChamado = (e) => {
        e.preventDefault(); // Impede o comportamento padrão do formulário
        adicionarChamado({ autor, local, data, problema });
        // Limpar campos após adicionar o chamado
        setAutor('');
        setLocal('');
        setData('');
        setProblema('');
    };

    return (
        <div className="formulario">
            <form onSubmit={handleAdicionarChamado}>
                <label>Autor:</label>
                <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} /><br />

                <label>Local:</label>
                <input type="text" value={local} onChange={(e) => setLocal(e.target.value)} /><br />

                <label>Data:</label>
                <input type="text" value={data} onChange={(e) => setData(e.target.value)} /><br />

                <label>Problema:</label>
                <input type="text" value={problema} onChange={(e) => setProblema(e.target.value)} /><br />

                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
}

function AplicacaoChamados() {
    const [listaChamados, setListaChamados] = useState([]);

    const adicionarChamado = (novoChamado) => {
        setListaChamados([...listaChamados, novoChamado]);
    };

    return (
        <div>
            <h1>Aplicação de Chamados - TI Senai</h1>
            <Chamado adicionarChamado={adicionarChamado} />
            <hr />
            <h2>Lista de Chamados</h2>
            {listaChamados.length > 0 ? (
                <ul>
                    {listaChamados.map((chamado, index) => (
                        <li key={index}>
                            <strong>Autor:</strong> {chamado.autor}, <strong>Local:</strong> {chamado.local},{' '}
                            <strong>Data:</strong> {chamado.data}, <strong>Problema:</strong> {chamado.problema}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum chamado registrado.</p>
            )}
        </div>
    );
}

export default AplicacaoChamados;


  
