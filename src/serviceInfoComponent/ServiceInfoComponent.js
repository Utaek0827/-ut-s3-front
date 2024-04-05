import React, { useState, useEffect } from 'react';

function ServiceInfoComponent() {
  // 서비스 정보를 상태로 관리
  const [serviceInfo, setServiceInfo] = useState({
    serviceName: '',
    description: '',
    usedSpace: 0,
    totalSpace: 0,
    serviceKey: '',
  });

  // 예시를 위한 용량 정보 업데이트
  useEffect(() => {
    // 실제 사용 시에는 여기서 API 호출 등을 통해 데이터를 가져올 수 있습니다.
    setServiceInfo({
      serviceName: '예제 서비스',
      description: '이것은 리액트 컴포넌트 예제입니다.',
      usedSpace: 30, // 예시: 50GB 사용 중
      totalSpace: 100, // 예시: 총 100GB
      serviceKey: 'abc123',
    });
  }, []);

  // 용량 사용률 계산
  const usagePercentage = (serviceInfo.usedSpace / serviceInfo.totalSpace) * 100;

  return (
    <div>
      <h2>{serviceInfo.serviceName}</h2>
      <p>{serviceInfo.description}</p>
      <div>
        용량 사용중: {serviceInfo.usedSpace}GB / {serviceInfo.totalSpace}GB
        <div style={{ width: '100%', backgroundColor: '#eee' }}>
          <div style={{ width: `${usagePercentage}%`, backgroundColor: 'blue', color: 'white', textAlign: 'center' }}>
            {usagePercentage}%
          </div>
        </div>
      </div>
      <p>서비스 키: {serviceInfo.serviceKey}</p>
    </div>
  );
}

export default ServiceInfoComponent;
