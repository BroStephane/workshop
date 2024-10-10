const HistoriquesModel = require('../models/HistoriquesModel');
const cron = require('node-cron');

// Fonction pour ajouter un historique de prise de médicament
const ajouterHistoriqueMedicament = async (req, res) => {
    try {
        // Récupérer les données du corps de la requête
        const { id_patients, id_medicaments, heure_programmee, recurrence_type, recurrence_interval, titre } = req.body;

        // Vérifier si tous les champs requis sont fournis
        if (!id_patients || !id_medicaments || !heure_programmee || !recurrence_type || !recurrence_interval || !titre) {
            return res.status(400).json({ message: 'Tous les champs sont requis : id_patients, id_medicaments, heure_programmee, recurrence_type, recurrence_interval, titre.' });
        }

        // Vérifier si la récurrence est valide
        const validRecurrences = ['quotidien', 'hebdomadaire', 'mensuel'];
        if (!validRecurrences.includes(recurrence_type)) {
            return res.status(400).json({ message: 'Récurrence invalide.' });
        }

        // Calculer la date du premier programme
        const dateProgramme = new Date();
        dateProgramme.setHours(heure_programmee.split(':')[0], heure_programmee.split(':')[1], 0, 0);

        // Ajouter un nouvel historique de prise de médicament
        const nouvelHistorique = await HistoriquesModel.create({
            id_patients,
            id_medicaments,
            date_programme: dateProgramme,
            heure_programmee,
            titre,
            recurrence_type,
            recurrence_interval,
            etat: false, // initialement, la prise n'est pas encore effectuée
        });

        // Planifier la saisie automatique en fonction de la récurrence et de l'heure
        planifierSaisieAutomatique(nouvelHistorique);

        // Répondre avec les informations de l'historique créé
        res.status(201).json({
            message: 'Historique de prise de médicament ajouté avec succès',
            historique: nouvelHistorique,
        });
    } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'historique de prise de médicament :', error);
        res.status(500).json({ message: 'Une erreur est survenue lors de l\'ajout de l\'historique.' });
    }
};

// Fonction pour planifier la saisie automatique en fonction de la récurrence et de l'heure
const planifierSaisieAutomatique = (historique) => {
    if (!historique.heure_programmee) {
        console.error('Erreur : heure_programmee est indéfini pour l\'historique ID: ', historique.id_historiques);
        return;
    }

    const [heure, minute] = historique.heure_programmee.split(':').map(Number);
    let cronExpression;
    switch (historique.recurrence_type) {
        case 'quotidien':
            cronExpression = `${minute} ${heure} * * *`; // Tous les jours à l'heure spécifiée
            break;
        case 'hebdomadaire':
            cronExpression = `${minute} ${heure} * * */${historique.recurrence_interval}`; // Toutes les x semaines à l'heure spécifiée
            break;
        case 'mensuel':
            cronExpression = `${minute} ${heure} 1 */${historique.recurrence_interval} *`; // Tous les x mois le 1er à l'heure spécifiée
            break;
        default:
            console.error('Erreur : récurrence non reconnue pour l\'historique ID: ', historique.id_historiques);
            return;
    }

    if (cronExpression) {
        cron.schedule(cronExpression, async () => {
            try {
                await HistoriquesModel.update(
                    { etat: true },
                    { where: { id_historiques: historique.id_historiques } }
                );
                console.log(`Saisie automatique effectuée pour l'historique ID: ${historique.id_historiques}`);
            } catch (error) {
                console.error('Erreur lors de la saisie automatique :', error);
            }
        });
    }
};

module.exports = { ajouterHistoriqueMedicament };