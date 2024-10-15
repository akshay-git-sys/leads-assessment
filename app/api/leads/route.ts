import { NextResponse } from 'next/server';
// eslint-disable-next-line
import mockData from '../../data/mockData.json';
interface Lead {
  id: number;
  name: string;
  submitted: string;
  status: 'PENDING' | 'REACHED_OUT';
  country: string;
}


// Use the Lead interface for type safety
let leads: Lead[] = [];
//leads.push(...mockData);

export async function POST(request: Request) {
  const data = await request.json();
  const newLead = {
    id: Date.now(),
	name: data.firstName + ' '+ data.lastName,
    ...data,
    submitted: new Date().toLocaleString(),
    status: 'PENDING',
    country: 'Unknown',
  };
  leads.push(newLead);
  return NextResponse.json(newLead);
}

export async function GET() {		
  	return NextResponse.json(leads);
}

export async function PUT(request: Request) {
  const data = await request.json();
  leads = leads.map((lead) =>
    lead.id === data.id ? { ...lead, status: data.status } : lead
  );
  return NextResponse.json({ message: 'Lead updated successfully' });
}
