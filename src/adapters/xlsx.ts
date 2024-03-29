import XLSX from 'xlsx';
import {
  Actor,
  ActorGroup,
  Callout,
  Post,
  Challenge,
  Space,
  Group,
  Opportunity,
  Organization,
  Relation,
  User,
} from '../models';
import {
  ActorGroupsSheet,
  ActorsSheet,
  PostSheet,
  ChallengesSheet,
  SpaceSheet,
  GroupsSheet,
  OpportunitiesSheet,
  OrganizationsSheet,
  RelationSheet,
  Sheets,
  UserSheet,
  CalloutSheet,
} from '../models/sheets';
import { toArray } from '../utils/string-to-array';
import { AbstractDataAdapter } from './data-adapter';

export class XLSXAdapter extends AbstractDataAdapter {
  private workbook: XLSX.WorkBook;
  public filename!: string;

  constructor(fileName: string) {
    super();
    try {
      this.workbook = XLSX.readFile(fileName);
      this.filename = fileName;
    } catch (ex: any) {
      console.error(ex.message);
      this.workbook = XLSX.utils.book_new();
    }
  }

  actors(): Actor[] {
    const sheet = this.workbook.Sheets[Sheets.Actors];
    const result = XLSX.utils.sheet_to_json(sheet) as ActorsSheet[];
    return result.map(x => ({
      name: x.NAME,
      description: x.DESCRIPTION,
      impact: x.IMPACT,
      actorGroup: x.ACTOR_GROUP,
      value: x.VALUE,
      opportunity: x.OPPORTUNITY,
    }));
  }

  actorGroups(): ActorGroup[] {
    const sheet = this.workbook.Sheets[Sheets.ActorGroups];
    const result = XLSX.utils.sheet_to_json(sheet) as ActorGroupsSheet[];
    return result.map(x => ({
      name: x.NAME,
      description: x.DESCRIPTION,
      opportunity: x.OPPORTUNITY,
    }));
  }

  callouts(): Callout[] {
    const sheet = this.workbook.Sheets[Sheets.Callouts];
    const result = XLSX.utils.sheet_to_json(sheet) as CalloutSheet[];
    return result.map(x => ({
      nameID: x.NAME_ID,
      displayName: x.DISPLAY_NAME,
      description: x.DESCRIPTION,
      challenge: x.CHALLENGE,
    }));
  }

  posts(): Post[] {
    const sheet = this.workbook.Sheets[Sheets.Posts];
    const result = XLSX.utils.sheet_to_json(sheet) as PostSheet[];
    return result.map(x => ({
      type: x.TYPE,
      nameID: x.NAME_ID,
      displayName: x.DISPLAY_NAME,
      description: x.DESCRIPTION,
      callout: x.CALLOUT,
      challenge: x.CHALLENGE,
      tags: toArray(x.TAGS),
      bannerURI: x.VISUAL_BANNER,
      bannerNarrowURI: x.VISUAL_BANNER_NARROW,
    }));
  }

  public challenges(): Challenge[] {
    const sheet = this.workbook.Sheets[Sheets.Challenges];
    const result = XLSX.utils.sheet_to_json(sheet) as ChallengesSheet[];
    return result.map(x => ({
      nameID: x.NAME_ID,
      displayName: x.DISPLAY_NAME,
      background: x.BACKGROUND,
      impact: x.IMPACT,
      tagline: x.TAGLINE,
      who: x.WHO,
      country: x.COUNTRY,
      city: x.CITY,
      vision: x.VISION,
      visualAvatar: x.VISUAL_AVATAR,
      visualBackground: x.VISUAL_BACKGROUND,
      visualBanner: x.VISUAL_BANNER,
      refVideo: x.REF_VIDEO,
      refJitsi: x.REF_JITSI,
      ref1Name: x.REF_1_NAME,
      ref1Value: x.REF_1_VALUE,
      ref1Description: x.REF_1_DESCRIPTION,
      leadOrganizations: toArray(x.LEAD_ORGS),
      memberOrganizations: toArray(x.MEMBER_ORGS),
      leadUsers: toArray(x.LEAD_USERS),
      memberUsers: toArray(x.MEMBER_USERS),
      tags: toArray(x.TAGS),
    }));
  }

  public users(): User[] {
    const sheet = this.workbook.Sheets[Sheets.Users];
    const result = XLSX.utils.sheet_to_json(sheet) as UserSheet[];
    return result.map(x => ({
      nameID: x.NAME_ID,
      displayName: x.DISPLAY_NAME,
      firstName: x.FIRST_NAME,
      lastName: x.LAST_NAME,
      email: x.EMAIL,
      phone: x.PHONE,
      city: x.CITY,
      country: x.COUNTRY,
      gender: x.GENDER,
      avatar: x.AVATAR,
      bio: x.BIO,
      jobTitle: x.JOB_TITLE,
      keywords: toArray(x.KEYWORDS),
      linkedin: x.LINKEDIN,
      organization: x.ORGANIZATION,
      skills: toArray(x.SKILLS),
      twitter: x.TWITTER,
      // Membership
      groups: toArray(x.GROUPS),
    }));
  }
  public opportunities = (): Opportunity[] => {
    const sheet = this.workbook.Sheets[Sheets.Opportunities];
    const result = XLSX.utils.sheet_to_json(sheet) as OpportunitiesSheet[];
    return result.map(x => ({
      nameID: x.NAME_ID,
      displayName: x.DISPLAY_NAME,
      background: x.BACKGROUND,
      challenge: x.CHALLENGE,
      impact: x.IMPACT,
      tagline: x.TAGLINE,
      vision: x.VISION,
      who: x.WHO,
      leadOrganizations: toArray(x.LEAD_ORGS),
      memberOrganizations: toArray(x.MEMBER_ORGS),
      leadUsers: toArray(x.LEAD_USERS),
      memberUsers: toArray(x.MEMBER_USERS),
      country: x.COUNTRY,
      city: x.CITY,
      visualAvatar: x.VISUAL_AVATAR,
      visualBackground: x.VISUAL_BACKGROUND,
      visualBanner: x.VISUAL_BANNER,
      refVideo: x.REF_VIDEO,
      refJitsi: x.REF_JITSI,
      ref1Name: x.REF_1_NAME,
      ref1Value: x.REF_1_VALUE,
      ref1Description: x.REF_1_DESCRIPTION,
      tags: toArray(x.TAGS),
    }));
  };

  public groups = (): Group[] => {
    const sheet = this.workbook.Sheets[Sheets.Groups];
    const result = XLSX.utils.sheet_to_json(sheet) as GroupsSheet[];
    return result.map(x => ({
      name: x.NAME,
      description: x.DESCRIPTION,
      avatar: x.AVATAR,
      keywords: toArray(x.KEYWORDS),
    }));
  };

  public spaces(): Space[] {
    const sheet = this.workbook.Sheets[Sheets.Space];
    const result = XLSX.utils.sheet_to_json(sheet) as SpaceSheet[];

    return result.map(space => ({
      displayName: space.DISPLAY_NAME,
      nameID: space.NAME_ID,
      anonymousReadAccess: this.stringToBoolean(space.ANONYMOUS_READ_ACCESS),
      background: space.BACKGROUND,
      vision: space.VISION,
      impact: space.IMPACT,
      tagline: space.TAGLINE,
      who: space.WHO,
      host: space.HOST,
      visualAvatar: space.VISUAL_AVATAR,
      visualBackground: space.VISUAL_BACKGROUND,
      visualBanner: space.VISUAL_BANNER,
      refWebsite: space.REF_WEBSITE,
      refRepo: space.REF_REPO,
      tags: toArray(space.TAGS),
      leadUsers: toArray(space.LEAD_USERS),
    }));
  }

  public organizations = (): Organization[] => {
    const sheet = this.workbook.Sheets[Sheets.Organizations];
    const result = XLSX.utils.sheet_to_json(sheet) as OrganizationsSheet[];
    return result.map(x => ({
      displayName: x.DISPLAY_NAME,
      nameID: x.NAME_ID,
      description: x.DESCRIPTION,
      keywords: toArray(x.KEYWORDS),
      avatar: x.AVATAR,
      country: x.COUNTRY,
      city: x.CITY,
    }));
  };

  relations(): Relation[] {
    const sheet = this.workbook.Sheets[Sheets.Relations];
    const result = XLSX.utils.sheet_to_json(sheet) as RelationSheet[];

    return result.map(x => ({
      type: x.TYPE,
      actorName: x.ACTOR_NAME,
      actorRole: x.ACTOR_ROLE,
      actorType: x.ACTOR_TYPE,
      description: x.DESCRIPTION,
      opportunity: x.OPPORTUNITY,
    }));
  }

  private stringToBoolean(value: string): boolean {
    if (String(value).toLowerCase() === 'false') {
      return false;
    }
    return true;
  }
}
