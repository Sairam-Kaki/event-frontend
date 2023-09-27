import Card from "./card";
import "../src/assets/styles/body.css"

export default function Body(props: any) {
    console.log("body props: ", props.data)
    const pdata = props.data;
    return (
        <>
            <div className="mt-5">
                <h3>Concerts </h3>
                <div className="container-fluid card-row d-flex">

                    {pdata.map((event: any) => {
                        if ((event.type).toLowerCase() === 'concert') {
                            return <Card data={event} />
                        }
                    }
                    )}

                </div>
            </div>
            <div className="concerts mt-5">
                <h3>Conferences </h3>
                <div className="container-fluid card-row d-flex">

                    {pdata.map((event: any) => {
                        if (event.type.toLowerCase() === 'conference') {
                            return <Card data={event} />
                        }
                    }
                    )}

                </div>
            </div>
            <div className="concerts mt-5">
                <h3>Festival </h3>
                <div className="container-fluid card-row d-flex">

                    {pdata.map((event: any) => {
                        if (event.type.toLowerCase() === 'festival') {
                            return <Card data={event} />
                        }
                    }
                    )}

                </div>
            </div>
            <div className="concerts mt-5">
                <h3>Movies </h3>
                <div className="container-fluid card-row d-flex">
                    {pdata.map((event: any) => {
                        if (event.type.toLowerCase() === 'movie') {
                            return <Card data={event} />
                        }
                    }
                    )}
                </div>
            </div>
            <div className="concerts mt-5">
                <h3>Exhibitions </h3>
                <div className="container-fluid card-row d-flex">
                    {pdata.map((event: any) => {
                        if (event.type.toLowerCase() === 'exhibition') {
                            return <Card data={event} />
                        }
                    }
                    )}
                </div>
            </div>
            <div className="concerts mt-5">
                <h3>Sports </h3>
                <div className="container-fluid card-row d-flex">
                    {pdata.map((event: any) => {
                        if (event.type.toLowerCase() === 'sports') {
                            return <Card data={event} />
                        }
                    }
                    )}
                </div>
            </div>
        </>
    );
}