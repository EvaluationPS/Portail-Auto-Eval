package hibernate.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="etablissement")
public class Etablissement implements Serializable {	
	private static final long serialVersionUID = -32050276291138241L;
	
	private Long id = null;
	private String libelle = null;
	
	public Etablissement(){}
	
	public Etablissement(Long id, String libelle) {
		this.id = id;
		this.libelle = libelle;
	}
	
	public Etablissement(String libelle) {
		this.libelle = libelle;
	}
	
	@Id 
	@SequenceGenerator(name="etablissement_id_seq", sequenceName="etablissement_id_seq", allocationSize=1)
	@GeneratedValue(generator = "etablissement_id_seq", strategy = GenerationType.SEQUENCE)
	@Column(name="id", unique=true, nullable=false)
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	@Column(name="libelle")
	public String getLibelle() {
		return libelle;
	}
	
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	

	@Transient
	@Override
	public String toString() {
		return "Etablissement:{ id:"+id+"\', libelle: \'"+libelle+"\'}";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((libelle == null) ? 0 : libelle.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Etablissement other = (Etablissement) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (libelle == null) {
			if (other.libelle != null)
				return false;
		} else if (!libelle.equals(other.libelle))
			return false;
		return true;
	}
}
