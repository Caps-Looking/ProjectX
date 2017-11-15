package br.com.ssd.api.sistema;

import br.com.ssd.enums.StatusSistemaEnum;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "sistema")
public class Sistema implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="generator")
    @SequenceGenerator(name="generator", sequenceName="sistema_id_seq", allocationSize=1)
    @Getter @Setter
    @Column(name = "id")
    private long id;

    @NotEmpty
    @Size(max = 100)
    @Getter @Setter
    @Column(name = "descricao")
    private String descricao;

    @NotEmpty
    @Size(max = 10)
    @Getter @Setter
    @Column(name = "sigla")
    private String sigla;

    @Email
    @Size(max = 100)
    @Getter @Setter
    @Column(name = "email_atendimento")
    private String emailAtendimento;

    @Size(max = 50)
    @Getter @Setter
    @Column(name = "url")
    private String url;

    @Getter @Setter
    @Column(name = "status")
    private StatusSistemaEnum statusSistemaEnum = StatusSistemaEnum.ATIVO;
}
