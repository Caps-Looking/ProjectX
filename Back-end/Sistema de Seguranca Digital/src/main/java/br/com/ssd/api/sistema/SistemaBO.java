package br.com.ssd.api.sistema;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
public class SistemaBO {
    @Autowired
    SistemaDAO sistemaDAO;

    /**
     * Monta o objeto pelos parâmetros informados.
     *
     * @param descricao
     * @param sigla
     * @param emailAtendimento
     * @return
     */
    public Sistema montaObjeto(String descricao, String sigla, String emailAtendimento) {
        Sistema sistema = new Sistema();

        if (descricao.equals(""))
            descricao = null;
        if (sigla.equals(""))
            sigla = null;
        if (emailAtendimento.equals(""))
            emailAtendimento = null;

        sistema.setDescricao(descricao);
        sistema.setSigla(sigla);
        sistema.setEmailAtendimento(emailAtendimento);

        return sistema;
    }

    /**
     * Retorna uma lista de sistemas pelo objeto informado.
     *
     * @param sistema
     * @return
     */
    @Transactional(readOnly = true)
    public List<Sistema> filter(Sistema sistema) {
        return sistemaDAO.filter(sistema);
    }

    /**
     * Salva o sistema.
     *
     * @param sistema
     * @return
     */
    public void save(Sistema sistema) {
        sistemaDAO.save(sistema);
    }
}
