import bcrypt from 'bcrypt';

export const comparePassword = async (
    password: string,
    hash: string
  ): Promise<boolean> => {
    const result = await bcrypt.compare(password, hash);
    return result;
  };
  