// Data de ejemplo (esto vendría de tu BD en el proyecto LMS)
const coursesData = [
    {
        name: "Introducción a Python",
        modules: [
            { id: 1, lessons: [{ h: 2 }, { h: 1 }, { h: 3 }] }, // Módulo 1
            { id: 2, lessons: [{ h: 2 }, { h: 2 }] },           // Módulo 2
            { id: 3, lessons: [{ h: 5 }, { h: 5 }] },           // Módulo 3
            { id: 4, lessons: Array(18).fill({ h: 1 }) }        // Módulo 4 (Resto lecciones)
        ]
    },
    {
        name: "Desarrollo Web con React",
        modules: [
            { id: 1, lessons: [{ h: 10 }, { h: 10 }] },
            { id: 2, lessons: [{ h: 20 }] }
        ]
    }
];

function renderReport() {
    const tableBody = document.getElementById('tableBody');
    
    coursesData.forEach(course => {
        // 1. Contar módulos
        const totalModules = course.modules.length;
        
        // 2. Contar lecciones y sumar intensidad horaria
        let totalLessons = 0;
        let totalHours = 0;

        course.modules.forEach(module => {
            totalLessons += module.lessons.length;
            totalHours += module.lessons.reduce((acc, lesson) => acc + lesson.h, 0);
        });

        // 3. Crear fila en la tabla
        const row = `
            <tr>
                <td><strong>${course.name}</strong></td>
                <td>${totalModules}</td>
                <td>${totalLessons}</td>
                <td>${totalHours} horas</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', renderReport);