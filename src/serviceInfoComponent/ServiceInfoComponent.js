import React, { useState, useEffect } from 'react';

function ServiceInfoComponent(props) {
  const { serviceName, description, usedSpace, totalSpace, serviceKey } = props;

  // 서비스 정보를 상태로 관리
  const [serviceInfo, setServiceInfo] = useState({
    serviceName: '',
    description: '',
    usedSpace: 0,
    totalSpace: 0,
    serviceKey: '',
  });

  // props가 변경될 때마다 서비스 정보 업데이트
  useEffect(() => {
    // props로 전달된 데이터를 기반으로 상태 업데이트
    setServiceInfo({
      serviceName: serviceName,
      description: description,
      usedSpace: usedSpace,
      totalSpace: totalSpace,
      serviceKey: serviceKey,
    });
  }, [serviceName, description, usedSpace, totalSpace, serviceKey]);

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
