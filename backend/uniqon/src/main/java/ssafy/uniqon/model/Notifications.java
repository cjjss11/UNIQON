package ssafy.uniqon.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.*;
import java.sql.Timestamp;

@Entity
@Getter
@NoArgsConstructor
@SuperBuilder
public class Notifications {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notification_id")
    private Integer id;

    @Column(name ="checked", columnDefinition = "boolean default false")
    @ColumnDefault("false")
    private Boolean checked;

    @Column(name = "create_datetime")
    @CreationTimestamp
    private Timestamp create_datetime;

    @Column(name = "update_datetime")
    @UpdateTimestamp
    private Timestamp update_datetime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Members member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Posts post;

}
