import React from 'react';
import { LineChart as LC, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentData = [
        { id: 1, math: 85, biology: 70, english: 75 },
        { id: 2, math: 78, biology: 68, english: 80 },
        { id: 3, math: 92, biology: 75, english: 85 },
        { id: 4, math: 80, biology: 72, english: 78 },
        { id: 5, math: 88, biology: 78, english: 82 },
        { id: 6, math: 76, biology: 70, english: 79 },
        { id: 7, math: 90, biology: 82, english: 88 },
        { id: 8, math: 84, biology: 76, english: 81 },
        { id: 9, math: 79, biology: 71, english: 77 },
        { id: 10, math: 87, biology: 79, english: 83 },
        { id: 11, math: 82, biology: 73, english: 80 },
        { id: 12, math: 91, biology: 80, english: 86 },
        { id: 13, math: 77, biology: 69, english: 78 },
        { id: 14, math: 89, biology: 77, english: 84 },
        { id: 15, math: 83, biology: 74, english: 79 },
        { id: 16, math: 86, biology: 76, english: 82 },
        { id: 17, math: 75, biology: 68, english: 76 },
        { id: 18, math: 88, biology: 79, english: 83 },
        { id: 19, math: 81, biology: 72, english: 78 },
        { id: 20, math: 93, biology: 81, english: 87 }
      ];
      
    return (
        <div>
            <LC width={800} height={500} data={studentData}>
                <XAxis dataKey="id"/>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line type="monotone" dataKey="biology" stroke='green'></Line>
                <Line dataKey="english" stroke='yellow'></Line>
            </LC>
        </div>
    );
};

export default LineChart;