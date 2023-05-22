const Experiences = () => {
    const experiences = [
        {
            id: 1,
            nom: "Poste de Développeur FullStack",
            date: "2020-2021",
        },
        {
            id: 2,
            nom: "Développeur WEB",
            date: "2021-2022",
        }
    ]

    const experiencesList = experiences.map((experience) => {
        return (
            <p key={experience.id}> - {experience.date} : {experience.nom}</p>
        )
    })

    return (
        <>
            <section className="title">Expériences:</section>
            {experiencesList}
        </>
    )
}
export default Experiences;
