package br.com.ssd.api.sistema;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Example;
import org.hibernate.criterion.MatchMode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SistemaDAO {

    @Autowired
    SessionFactory sessionFactory;

    /**
     * Salva o sistema.
     *
     * @param sistema
     * @return
     */

    public void save(Sistema sistema) {
        SessionFactory sessionfactory = new Configuration().configure().buildSessionFactory();
        Session session = sessionfactory.openSession();
        Transaction tx = session.beginTransaction();

        try{
            session.save(sistema);
            tx.commit();
        } catch(Exception e){
            tx.rollback();
        }
    }


    /**
     * Filtra os sistemas pelos parâmetros informados.
     *
     * @param sistema
     * @return
     */
    public List<Sistema> filter(Sistema sistema) {
        Session session = sessionFactory.openSession();
        Example example = Example.create(sistema).enableLike(MatchMode.ANYWHERE).ignoreCase();
        List<Sistema> sistemas = session.createCriteria(Sistema.class).add(example).list();
        return sistemas;
    }
}
