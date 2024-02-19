def quotient_reste(dividende: int, diviseur: int) -> list[int]:
    return [dividende // diviseur, dividende % diviseur]
print(quotient_reste(17,4))

def traite_list(dividendes: list[int], diviseurs: list[int]) -> list[str]:
    retour = []
    for i in  (dividendes), (diviseurs):
        resultat = quotient_reste(dividendes,diviseurs)
        if diviseurs[i] == 0:
            valeur = "q=" + str(resultat[0])
        else:
            valeur = "rest=" + str(resultat[1])
        retour.append(valeur)
    return retour

print(traite_list([20, 30, 40], [5, 7, 81]))
print(traite_list([41, 171], [3, 311]))
