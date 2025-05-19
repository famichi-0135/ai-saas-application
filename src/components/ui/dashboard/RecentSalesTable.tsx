// components/dashboard/RecentSalesTable.tsx

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../card';

const salesData = [
  {
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    amount: '+$1,999.00',
    avatarSrc: '/avatars/01.png', // Shadcn UIのサンプルから
    avatarFallback: 'OM',
  },
  {
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    amount: '+$39.00',
    avatarSrc: '/avatars/02.png',
    avatarFallback: 'JL',
  },
  // ... 他のデータ
];

export function RecentSalesTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salesData.slice(0, 5).map((sale) => ( // 表示件数を制限
              (<TableRow key={sale.email}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      {/* <AvatarImage src={sale.avatarSrc} alt="Avatar" /> */}
                      <AvatarFallback>{sale.avatarFallback}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{sale.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {sale.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">{sale.amount}</TableCell>
              </TableRow>)
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}