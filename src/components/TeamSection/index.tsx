import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { TeamSectionProps, TeamMember } from "./types";

import {
  TeamContainer,
  TeamTitle,
  TeamText,
  MemberCard,
  MemberImage,
  MemberName,
  MemberPosition,
  MemberDescription,
} from "./styles";

const TeamSection = ({ title, text, members, id, t }: TeamSectionProps) => {
  return (
    <TeamContainer id={id}>
      <Fade direction="up" triggerOnce>
        <TeamTitle>{t(title)}</TeamTitle>
        <TeamText>{t(text)}</TeamText>
        <Row gutter={[32, 32]} justify="center">
          {members &&
            members.map((member: TeamMember, index: number) => (
              <Col key={index} xs={24} sm={24} md={12} lg={6}>
                <MemberCard>
                  <MemberImage src={`/img/team/${member.photo}`} alt={member.name} />
                  <MemberName>{t(member.name)}</MemberName>
                  <MemberPosition>{t(member.position)}</MemberPosition>
                  <MemberDescription>{t(member.description)}</MemberDescription>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <img src="/img/svg/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                    </a>
                  )}
                </MemberCard>
              </Col>
            ))}
        </Row>
      </Fade>
    </TeamContainer>
  );
};

export default withTranslation()(TeamSection);