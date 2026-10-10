export type UserRole = 'ngo' | 'citizen' | 'volunteer' | 'donor' | 'ngo_admin' | 'ngo_manager';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  city?: string;
  ngoId?: string; // Add ngoId property
  createdAt: string;
}

export interface NGO {
  id: string;
  name: string;
  logo: string;
  description: string;
  mission: string;
  address: string;
  city: string;
  state: string;
  contactEmail: string;
  contactPhone: string;
  website?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Program {
  id: string;
  ngoId: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  eligibilityCriteria?: string;
  capacity?: number;
  currentParticipants?: number;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Grant {
  id: string;
  title: string;
  description: string;
  amount: number;
  deadline: string;
  eligibilityCriteria: string;
  provider: string;
  status: 'open' | 'closed' | 'reviewing';
  applicationLink?: string;
  createdAt: string;
  updatedAt: string;
}

export interface VolunteerOpportunity {
  id: string;
  ngoId: string;
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate?: string;
  skills: string[];
  requiredHours: number;
  status: 'open' | 'filled' | 'completed';
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  ngoId: string;
  authorName: string;
  authorRole?: string;
  content: string;
  rating?: number;
  date: string;
  avatar?: string;
}

export interface MediaItem {
  id: string;
  ngoId: string;
  type: 'image' | 'video';
  url: string;
  title?: string;
  description?: string;
  createdAt: string;
}

export interface Notice {
  id: string;
  ngoId: string;
  title: string;
  content: string;
  type: 'event' | 'scheme' | 'announcement';
  url?: string;
  startDate?: string;
  endDate?: string;
  isHighlighted: boolean;
  createdAt: string;
}

export interface Donation {
  id: string;
  ngoId: string;
  donorId?: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  date: string;
  isAnonymous: boolean;
  message?: string;
  paymentMethod?: string;
  paymentId?: string;
  transactionId?: string;
  ngoName?: string;
  programName?: string;
  receiptUrl?: string;
  certificateUrl?: string;
}

export interface HoursEntry {
  id: string;
  eventId: string;
  eventName: string;
  ngoId: string;
  ngoName: string;
  date: string;
  hours: number;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  avatar?: string;
  hours: number;
  events: number;
  badges: number;
  isCurrentUser: boolean;
  trend: 'up' | 'down' | 'stable';
  category: string;
}

export interface VolunteerEvent {
  id: string;
  title: string;
  ngoId: string;
  ngoName: string;
  description: string;
  location: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'open' | 'filled' | 'completed' | 'cancelled';
  requiredVolunteers: number;
  currentVolunteers: number;
  skills: string[];
  imageUrl?: string;
  category: string;
}

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color: string;
  };
  handler?: (response: Record<string, unknown>) => void;
}

export interface DonationResponse {
  id: string;
  orderId?: string;
  paymentUrl?: string;
  status: string;
  message: string;
  razorpay?: {
    key: string;
    amount: number;
    currency: string;
    orderId: string;
    prefill: {
      name: string;
      email: string;
      contact: string;
    };
    notes: Record<string, string>;
  };
}

// Citizen Dashboard types
export interface CitizenService {
  id: string;
  title: string;
  provider: string;
  location: string;
  category: string;
  description: string;
  eligibility: string;
  deadline: string;
  beneficiaries: string;
  tags: string[];
  applicationUrl?: string;
}

export interface ServiceApplication {
  id: string;
  userId: string;
  ngoId: string;
  programId?: string;
  applicationType: 'program' | 'service' | 'assistance';
  serviceType: 'education' | 'health' | 'food' | 'shelter' | 'employment' | 'legal' | 'other';
  title: string;
  description: string;
  urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
  status: 'submitted' | 'under_review' | 'approved' | 'in_progress' | 'completed' | 'rejected' | 'cancelled' | 'pending' | 'incomplete';
  serviceName?: string;
  provider?: string;
  applicationDate?: string;
  requiredDocuments?: string[];
  submittedDocuments?: string[];
  nextSteps?: string;
  assignedManager?: {
    id: string;
    name: string;
    email: string;
  };
  assignedVolunteer?: {
    id: string;
    name: string;
    email: string;
  };
  assignedAt?: string;
  documents: {
    url: string;
    type: string;
    name: string;
  }[];
  caseNotes: CaseNote[];
  reviewNotes?: string;
  completionNotes?: string;
  rejectionReason?: string;
  estimatedCompletionDate?: string;
  actualCompletionDate?: string;
  beneficiariesCount: number;
  totalCost?: number;
  priority: number;
  tags: string[];
  location: {
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  followUpRequired: boolean;
  followUpDate?: string;
  applicant?: {
    id: string;
    name: string;
    email: string;
    phone?: string;
  };
  ngo?: {
    id: string;
    name: string;
    email: string;
    logo?: string;
  };
  program?: {
    id: string;
    title: string;
    description: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CaseNote {
  id: string;
  applicationId: string;
  authorId: string;
  authorRole: 'ngo_manager' | 'volunteer';
  noteType: 'update' | 'milestone' | 'concern' | 'completion' | 'follow_up';
  title: string;
  content: string;
  attachments: string[];
  isPrivate: boolean;
  hoursLogged?: number;
  activitiesCompleted: string[];
  nextSteps: string[];
  author?: {
    id: string;
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface VolunteerActivity {
  id: string;
  volunteerId: string;
  applicationId?: string;
  programId?: string;
  ngoId: string;
  activityType: 'field_work' | 'training' | 'event' | 'administration' | 'outreach' | 'other';
  title: string;
  description: string;
  hoursLogged: number;
  location?: string;
  date: string;
  status: 'planned' | 'in_progress' | 'completed' | 'cancelled';
  notes?: string;
  attachments: string[];
  verifiedBy?: {
    id: string;
    name: string;
    email: string;
  };
  verifiedAt?: string;
  skillsUsed: string[];
  impactDescription?: string;
  beneficiariesServed: number;
  volunteer?: {
    id: string;
    name: string;
    email: string;
  };
  ngo?: {
    id: string;
    name: string;
    logo?: string;
  };
  application?: {
    id: string;
    title: string;
    serviceType: string;
  };
  program?: {
    id: string;
    title: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Referral {
  id: string;
  fromNGO: string;
  toNGO: string;
  citizenId: string;
  referredBy: string;
  serviceType: string;
  reason: string;
  urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
  status: 'sent' | 'accepted' | 'rejected' | 'in_progress' | 'completed' | 'expired';
  referralNotes: string;
  documents: string[];
  acceptedBy?: string;
  acceptedAt?: string;
  completedAt?: string;
  completionNotes?: string;
  rejectionReason?: string;
  followUpRequired: boolean;
  followUpDate?: string;
  expiryDate: string;
  fromNGOInfo?: NGO;
  toNGOInfo?: NGO;
  citizen?: User;
  referrer?: User;
  createdAt: string;
  updatedAt: string;
}

export interface CitizenNotification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error' | 'message';
  date: Date;
  isRead: boolean;
  actionUrl?: string;
  actionText?: string;
  serviceName?: string;
}

export interface CitizenDashboardData {
  stats: {
    appliedPrograms: number;
    ongoingPrograms: number;
    completedPrograms: number;
    serviceApplications: number;
    pendingApplications: number;
    approvedApplications: number;
    emergencyRequests: number;
    referralsMade: number;
    certificatesReceived: number;
    communityScore: number;
  };
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
  suggestions?: string[];
  attachments?: string[];
  isTyping?: boolean;
}
