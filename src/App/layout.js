import { Config } from './config';
const { matchPath } = ReactRouterDOM;

function isHome() {
    return window.location.hash === '#/'
}

export default class AppLayout extends React.Component {

    getSubTitle() {
        const match = matchPath(window.location.hash.slice(1), {
            path: '/resource/:resource_type/:resource_id',
            exact: true,
            strict: false
        })

        let subTitle;

        if (match) {
            const resourceType = match.params.resource_type;
            const resourceId = match.params.resource_id;
            const resourceObj = Config.resource[resourceType] || {};
            subTitle = resourceObj.label;
            if (subTitle) {
                subTitle = (
                    <div>
                        {subTitle} <span>#</span> {resourceId}
                    </div>
                );
            }
        }

        subTitle = subTitle || Config.app.subTitle;

        return subTitle;
    }

    render() {


        const subTitle = this.getSubTitle();

        let footer = false;

        if (isHome()) {

            footer = true;
        }


        return <div>
            {this.props.children}
        </div>

        // <Layout>

        // </Layout>

        // return (
        //     <MainLayout subTitle={subTitle} footer={footer}>
        //         {this.props.children}
        //     </MainLayout>
        // )
    }
}
