export class CreateStationDto {
  stationId: string;
  stationName: string;
  processFlowId?: number;

  labelLocation?: string;
  programName?: string;
  boardDirectionFirstSide?: string;
  boardDirectionSecondSide?: string;

  printingMaterial?: string;
  solderPasteType?: string;
  squeegeeType?: string;
  squeegeeSettings?: string;

  specification?: string;
  class?: string;
  details?: string;
  inspection?: string;

  magnification?: string;
  xray?: string;
  repairTouchUp?: string;

  fluxType?: string;
  solderType?: string;

  customerNumber?: string;
  partNumber?: string;
  qtyPerBoard?: number;
  formed?: boolean;
  locations?: string;

  comments?: string;
  machineType?: string;

  // New fields for Wave Solder Process Sheet

  revision?: string;
  waterSoluble?: string;
  noClean?: string;
  otherFluxType?: string;

  fluxDensity?: string;
  thinnerType?: string;
  airKnifePressurePsi?: string;
  airflowLiquidPsi?: string;

  sprayFluxerPressurePsi?: string;
  conveyorSpeedFt?: string;
  conveyorSpeedM?: string;
  airDirectorPressurePsi?: string;
  fluxTankWeight?: string;

  lambdaSpeed?: string;
  solderPotTempF?: string;
  solderPotTempC?: string;

  preheatTemp?: string;
  zone1Top?: string;
  zone2Top?: string;
  zone3Top?: string;
  zone1Bottom?: string;
  zone2Bottom?: string;
  zone3Bottom?: string;

  conveyorSpeedFtFinal?: string;
  conveyorSpeedMFinal?: string;
  cleanlinessTest?: string;
  palletRequired?: string;
  boardToMachine?: string;
}
