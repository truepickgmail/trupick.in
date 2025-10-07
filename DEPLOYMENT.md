# GitHub → S3 → CloudFront → Route 53

This project builds as a static export and deploys to S3, served via CloudFront with a custom domain in Route 53.

## Prerequisites
- S3 bucket (private) for website files.
- CloudFront distribution with the S3 bucket as origin.
  - Use Origin Access Control (OAC) and update the S3 bucket policy to allow CloudFront.
  - Default root object: `index.html`.
- Route 53 hosted zone and an ACM certificate (in us-east-1) for your domain.
- GitHub secrets configured:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `AWS_REGION` (e.g., `us-east-1`)
  - `S3_BUCKET` (bucket name)
  - `CLOUDFRONT_DISTRIBUTION_ID`

## Build locally
```bash
npm ci
npm run build  # outputs to ./out
```

## Deployment via GitHub Actions
Push to `main` triggers `.github/workflows/deploy.yml` to:
1. Build with static export (`out/`).
2. Sync `out/` to S3.
3. Invalidate CloudFront.

## Route 53
- Create an `A`/`AAAA` alias record pointing to your CloudFront distribution.
- Wait for DNS and certificate propagation.

## Notes
- Static export does not support server-only features. Use client/static data only.
- If adding `next/image`, ensure `images.unoptimized: true` or use an external image loader compatible with static export.



