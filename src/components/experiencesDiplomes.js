const ExperiencesDiplomes = () => {
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

    const diplomes = [
        {
            id: 1,
            nom: "Développeur Web",
            date: "2021-2022",
        },
        {
            id: 2,
            nom: "Bachelor Développeur FullSteack",
            date: "2022-2023",
        }
    ]

    const experiencesList = experiences.map((experience) => {
        return (
            <p key={experience.id}> - {experience.date} : {experience.nom}</p>
        )
    })

    const diplomesList = diplomes.map((diplome) => {
        return (
            <p key={diplome.id}> - {diplome.date} : {diplome.nom}</p>
        )
    })

    return (
        <>
            <section className="title">Expériences:</section>
            {experiencesList}
            <section className="title">Diplomes</section>
            {diplomesList}
        </>
    )
}
export default ExperiencesDiplomes;
