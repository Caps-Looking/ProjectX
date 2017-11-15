package br.com.ssd.api.sistema;

import br.com.ssd.common.AbstractController;
import br.com.ssd.common.ControllerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/sistema")
public class SistemaController extends AbstractController {
    @Autowired
    SistemaBO sistemaBO;

    /**
     * Filtra os sistemas.
     *
     * @param descricao
     * @param sigla
     * @param emailAtendimento
     * @return
     */
    @RequestMapping(value = "/filter", method = RequestMethod.GET, params = {"descricao", "sigla", "emailAtendimento"})
    public ControllerResponse filterSistemas(@RequestParam("descricao") String descricao,
                                             @RequestParam("sigla") String sigla,
                                             @RequestParam("emailAtendimento") String emailAtendimento) {
        return response(sistemaBO.filter(sistemaBO.montaObjeto(descricao, sigla, emailAtendimento)));
    }

    /**
     * Salva um sistema.
     *
     * @param sistema
     * @return
     */
    @RequestMapping(method = RequestMethod.POST)
    public ControllerResponse saveSistema(@RequestBody Sistema sistema) {
        sistemaBO.save(sistema);
        addMessage("Operação realizada com sucesso");
        return response(null);
    }
}
