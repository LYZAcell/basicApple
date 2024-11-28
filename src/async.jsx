import React, { useEffect, useState } from 'react';

const DataFetchingComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            // API 호출 (예: fetch('https://api.example.com/data'))
            const response = await fetch('https://api.example.com/data');
            const result = await response.json();
            setData(result);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>데이터 로딩 중...</h1>
            {loading ? (
                <div className="skeleton-loader">
                    {/* 스켈레톤 로딩 UI */}
                    <div>로딩 중...</div>
                </div>
            ) : (
                <div>
                    <h2>API 응답 데이터:</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default DataFetchingComponent;
