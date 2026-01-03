import { minioClient } from "@chat/config/minio.config";
import path from "path";
import { v4 as uuid } from "uuid";

export class MinioService {
  private bucket: string;

  constructor(bucket: string = "avatars") {
    this.bucket = bucket;
  }

  private async ensureBucket() {
    const exists = await minioClient.bucketExists(this.bucket);
    if (!exists) {
      await minioClient.makeBucket(this.bucket, "us-east-1");
    }
  }

  public async uploadFile(
    fileBuffer: Buffer,
    originalName: string
  ): Promise<string> {
    await this.ensureBucket();

    const ext = path.extname(originalName);
    const objectName = `${uuid()}${ext}`;

    await minioClient.putObject(this.bucket, objectName, fileBuffer);
    return objectName;
  }

  public async getFile(objectName: string) {
    await this.ensureBucket();
    return minioClient.getObject(this.bucket, objectName);
  }
}
