import { loadScope } from '../../scope';

export default function upload({ name, tar, path }: { name: string, tar: Buffer }): Promise<any> {
  return loadScope(path).then((scope) => {
    return scope.upload(name, tar);
  });
}
