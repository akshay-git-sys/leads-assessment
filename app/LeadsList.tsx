"use client";
import React, { useEffect, useState } from 'react';
import { useTable, Column, useGlobalFilter, usePagination, useFilters, TableInstance } from 'react-table';
import styled from 'styled-components';

const TableContainer = styled.div`
  padding: 20px;
`;

const SearchInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const Dropdown = styled.select`
  margin-left: 10px;
  padding: 13px 10px;
  margin-bottom: 10px;
  border-radius:10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
  }

  @media (max-width: 768px) {
    table, thead, tbody, th, td, tr {
      display: block;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      margin: 0 0 1rem 0;
      border-bottom: 1px solid #ccc;
    }

    td {
      display: block;
      text-align: left;
      position: relative; 
    }

    td:before {
      content: attr(data-label);
      position: absolute;
      left: 10px;
      width: 45%;
      padding-right: 10px;
      text-align: left;
      font-weight: bold;
    }
  }
`;

const PaginationControls = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PaginationButton = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

interface Lead {
  id: number;
  name: string;
  submitted: string;
  status: 'PENDING' | 'REACHED_OUT';
  country: string;
}

const LeadsList: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [leads, setLeads] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    const fetchLeads = async () => {
      const response = await fetch('/api/leads');
      const data = await response.json();
      setLeads(data);
    };
    fetchLeads();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = React.useMemo<Column<any>[]>(
    () => [
      {
        Header: 'Name',
        accessor: 'name' as const,
      },
      {
        Header: 'Submitted',
        accessor: 'submitted' as const,
      },
      {
        Header: 'Status',
        accessor: 'status' as const,
      },
      {
        Header: 'Country',
        accessor: 'country' as const,
      },
      {        
        accessor: 'actions' as const,
        Cell: ({ row }: { row: { original: Lead } }) => (
          row.original.status === 'PENDING' && (
            <button style= {{
              backgroundColor: '#66bb6a',
              textTransform:'uppercase',
              border: 'none',
              cursor: 'pointer',
              height: '48px',
              borderRadius: '10px',
              width: '100%',
              textAlign: 'center',
              color: 'white',
              lineHeight: '48px',
              fontSize: '12px'           
            }} onClick={() => changeLeadStatus(row.original.id)}>Mark as Reached Out</button>
          )
        ),
      },
    ],
    [leads]
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tableInstance: TableInstance<any> = useTable(
    {
      columns,
      data: leads,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useFilters,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    prepareRow,
    setGlobalFilter,
    setFilter,
    state: { pageIndex, pageSize },
  } = tableInstance;

  const changeLeadStatus = async (id: number) => {
    const updatedLeads = leads.map((lead) =>
      lead.id === id ? { ...lead, status: 'REACHED_OUT' } : lead
    );
    setLeads(updatedLeads);

    const response = await fetch('/api/leads', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, status: 'REACHED_OUT' }),
    });

    if (!response.ok) {
      console.error('Error updating lead status');
    }
  };

  useEffect(() => {
    setGlobalFilter(searchTerm);
    setFilter('status', statusFilter || undefined);
  }, [searchTerm, statusFilter, setGlobalFilter, setFilter]);

  return (
    <TableContainer>
      <h1 style={{ fontWeight: 'bold', fontSize:'20px', marginBottom: '20px'}}>Leads</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SearchInput
          style={{ border: '2px solid #e5e7eb', borderRadius: '10px' }}
          type="text"
          placeholder="Search by name or country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Dropdown
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">Status</option>
          <option value="PENDING">Pending</option>
          <option value="REACHED_OUT">Reached Out</option>
        </Dropdown>
      </div>

      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} key={column.id}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} key={cell.column.id}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>

      <PaginationControls>
        <PaginationButton onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </PaginationButton>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <PaginationButton onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </PaginationButton>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </PaginationControls>
    </TableContainer>
  );
};

export default LeadsList;
