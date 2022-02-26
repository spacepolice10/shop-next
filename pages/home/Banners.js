export default function Banner ({ content }) {
    return (
        <div>
            {content[0].title}
            <style jsx> {`
                div {
                    display: flex;
                    justify-content: center;
                    min-width: fit-content;
                    min-height: fit-content
                }
            `}</style>
        </div>
    )
}