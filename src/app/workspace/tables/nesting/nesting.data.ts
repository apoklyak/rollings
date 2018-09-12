export interface IsCollapsible {
  IsOpened: boolean;
}

export interface IGroup extends IsCollapsible {
  Status: string;
  IsOpened: boolean;
  Computers: Array<any>;
}

export interface ISystem extends IsCollapsible {
  Description: string;
  IsOpened: boolean;
  Groups: Array<IGroup>;
}

export const SystemsData: Array<ISystem> = [{
  Description: 'Microsoft Windows 7 Enterprise',
  IsOpened: false,
  Groups: [{
    Status: 'Production',
    IsOpened: false,
    Computers: [{
      'Name': 'RKAMPSTCOOPL',
      'SerialNumber': 'Virtual Machine',
      'City': 'Rheinfelden',
      'SccType': 'Plant',
      'SccSubType': 'Other',
      'Health': 'Success'
    }, {
      'Name': 'RKAMPSTCOOPL',
      'SerialNumber': 'Virtual Machine',
      'City': 'Rheinfelden',
      'SccType': 'Plant',
      'SccSubType': 'Other',
      'Health': 'Success'
    }]
  }]
}, {
  Description: 'Microsoft Windows Server 2012 Datacenter',
  IsOpened: false,
  Groups: [{
    Status: 'Production',
    IsOpened: false,
    Computers: [{
      'Name': 'RKAMPSTCOOPL',
      'SerialNumber': 'Virtual Machine',
      'City': 'Rheinfelden',
      'SccType': 'Plant',
      'SccType2': 'Plant'
    }, {
      'Name': 'RKAMPSTCOOPL',
      'SerialNumber': 'Virtual Machine',
      'City': 'Rheinfelden',
      'SccType': 'Plant',
      'SccType2': 'Plant'
    }]
  }, {
    Status: 'Test',
    IsOpened: false,
    Computers: [{
      'Name': 'RKAMPSTCOOPL',
      'SerialNumber': 'Virtual Machine',
      'City': 'Rheinfelden',
      'SccType': 'Plant',
    }, {
      'Name': 'RKAMPSTCOOPL',
      'SerialNumber': 'Virtual Machine',
      'City': 'Rheinfelden',
      'SccType': 'Plant'
    }]
  }]
}, {
  Description: 'Microsoft Windows Server 2012 Standart',
  IsOpened: false,
  Groups: [{
    Status: 'Production',
    IsOpened: false,
    Computers: [{
      'Name': 'RKAMPSTCOOPL',
      'SerialNumber': 'Virtual Machine',
      'City': 'Rheinfelden',
      'SccType': 'Plant',
      'SccType2': 'Plant'
    }, {
      'Name': 'RKAMPSTCOOPL',
      'SerialNumber': 'Virtual Machine',
      'City': 'Rheinfelden',
      'SccType': 'Plant',
      'SccType2': 'Plant'
    }]
  }, {
    Status: 'Test',
    IsOpened: false,
    Computers: [{
      'Name': 'RKAMPSTCOOPL',
      'SerialNumber': 'Virtual Machine',
      'City': 'Rheinfelden',
      'SccType': 'Plant',
    }, {
      'Name': 'RKAMPSTCOOPL',
      'SerialNumber': 'Virtual Machine',
      'City': 'Rheinfelden',
      'SccType': 'Plant'
    }]
  }]
}, {
  Description: 'Microsoft Windows Server 2012 R2 Standart',
  IsOpened: false,
  Groups: [{
    Status: 'Production',
    IsOpened: false,
    Computers: [{
      'Name': 'RKAMPSTCOOPL',
      'SerialNumber': 'Virtual Machine',
      'City': 'Rheinfelden',
      'SccType': 'Plant',
      'SccType2': 'Plant'
    }, {
      'Name': 'RKAMPSTCOOPL',
      'SerialNumber': 'Virtual Machine',
      'City': 'Rheinfelden',
      'SccType': 'Plant',
      'SccType2': 'Plant'
    }]
  }, {
    Status: 'Test',
    IsOpened: false,
    Computers: [{
      'Name': 'RKAMPSTCOOPL',
      'SerialNumber': 'Virtual Machine',
      'City': 'Rheinfelden',
      'SccType': 'Plant',
    }, {
      'Name': 'RKAMPSTCOOPL',
      'SerialNumber': 'Virtual Machine',
      'City': 'Rheinfelden',
      'SccType': 'Plant'
    }]
  }]
}];

