import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { aws_redshift as redshift } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import cryptoRandomString from 'crypto-random-string';


export class RedshiftStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const mapfre_redshift_pipefy = new redshift.CfnCluster(this, 'mapfre_redshift_pipefy', {
      clusterType: 'multi-node',
      numberOfNodes: 2,
      dbName: 'mapfre_redshift_pipefy',
      masterUsername: 'administrator',
      masterUserPassword: cryptoRandomString({length: 10}),
      nodeType: 'dc2.large',
    });

    const mapfre_redshift_pipefy_analytics = new redshift.CfnCluster(this, 'mapfre_redshift_pipefy_analytics', {
      clusterType: 'single-node',
      dbName: 'mapfre_redshift_pipefy',
      masterUsername: 'administrator',
      masterUserPassword: 'cryptoRandomString({length: 10})',
      nodeType: 'dc2.large',
    });
  }
}