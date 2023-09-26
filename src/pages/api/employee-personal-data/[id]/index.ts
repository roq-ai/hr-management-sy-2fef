import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { employeePersonalDataValidationSchema } from 'validationSchema/employee-personal-data';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  const allowed = await prisma.employee_personal_data
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  if (!allowed) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      return getEmployeePersonalDataById();
    case 'PUT':
      return updateEmployeePersonalDataById();
    case 'DELETE':
      return deleteEmployeePersonalDataById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getEmployeePersonalDataById() {
    const data = await prisma.employee_personal_data.findFirst(
      convertQueryToPrismaUtil(req.query, 'employee_personal_data'),
    );
    return res.status(200).json(data);
  }

  async function updateEmployeePersonalDataById() {
    await employeePersonalDataValidationSchema.validate(req.body);
    const data = await prisma.employee_personal_data.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteEmployeePersonalDataById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.employee_personal_data.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
