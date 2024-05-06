function dijkstra(graph, start) {
const distances = {}; // Objet pour stocker les distances les plus courtes
const queue = new PriorityQueue(); // File d'attente prioritaire pour les sommets à explorer

// Initialiser les distances et ajouter le sommet de départ à la file d'attente

for (const node in graph) {
distances[node] = Infinity;
}
distances[start] = 0;
queue.enqueue(start, 0);

while (!queue.isEmpty()) {
// Extraire le sommet avec la plus petite distance actuelle
const current = queue.dequeue();

// Si la distance du sommet actuel est infinie, cela signifie qu'il n'y a pas de chemin
if (distances[current] === Infinity) break;

// Explorer les voisins du sommet actuel
for (const neighbor in graph[current]) {
const newDistance = distances[current] + graph[current][neighbor];

// Mettre à jour la distance du voisin si elle est plus courte
if (newDistance < distances[neighbor]) {
distances[neighbor] = newDistance;
queue.enqueue(neighbor, newDistance);
}
}
}

return distances;
}

// Exemple d'utilisation
const graph = {
'A': { 'B': 4, 'C': 2 },
'B': { 'A': 4, 'C': 5, 'D': 10 },
'C': { 'A': 2, 'B': 5, 'D': 3 },
'D': { 'B': 10, 'C': 3 }
};

const distances = dijkstra(graph, 'A');
console.log(distances); // Affiche: { A: 0, B: 4, C: 2, D: 5 }
