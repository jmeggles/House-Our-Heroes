
module.exports = function (sequelize, DataTypes) {
    var Stat = sequelize.define("Stat", {
      date: {
        type: DataTypes.DATE,
        
      },
      state: {
        type: DataTypes.STRING
      },
      positive: {
        type: DataTypes.INTEGER
      },
      negative: {
        type: DataTypes.INTEGER
      },
      pending: {
        type: DataTypes.INTEGER
      },
      hospitalizedCurrently: {
        type: DataTypes.INTEGER
      },
      hospitalizedCumulative: {
        type: DataTypes.INTEGER
      },
      inIcuCurrently: {
        type: DataTypes.INTEGER
      },
      inIcuCumulative: {
        type: DataTypes.INTEGER
      },
      onVentilatorCurrently: {
        type: DataTypes.INTEGER,
      },
      onVentilatorCumulative: {
        type: DataTypes.INTEGER
      },
      recovered: {
        type: DataTypes.INTEGER
      },
      dataQualityGrade: {
        type: DataTypes.STRING
      },
      
      dateModified: {
        type: DataTypes.DATE
      },
     
      death: {
        type: DataTypes.INTEGER
      },
      hospitalized: {
        type: DataTypes.INTEGER
      },
      dateChecked: {
        type: DataTypes.DATE
      },
      totalTestsViral: {
        type: DataTypes.INTEGER
      },
      positiveTestsViral: {
        type: DataTypes.INTEGER
      },
      negativeTestsViral: {
        type: DataTypes.INTEGER
      },
      positiveCasesViral: {
        type: DataTypes.INTEGER
      },
      deathConfirmed: {
        type: DataTypes.INTEGER
      },
      deathProbable: {
        type: DataTypes.INTEGER
      },
      fips: {
        type: DataTypes.INTEGER
      },
      positiveIncrease: {
        type: DataTypes.INTEGER
      },
      negativeIncrease: {
        type: DataTypes.INTEGER
      },
      total: {
        type: DataTypes.INTEGER
      },
      totalTestResults: {
        type: DataTypes.INTEGER
      },
      totalTestResultsIncrease: {
        type: DataTypes.INTEGER
      },
      posNeg: {
        type: DataTypes.INTEGER
      },
      deathIncrease: {
        type: DataTypes.INTEGER
      },
      hospitalizedIncrease: {
        type: DataTypes.INTEGER
      },
      hash: {
        type: DataTypes.STRING
      },
      commercialScore: {
        type: DataTypes.INTEGER
      },
      negativeRegularScore: {
        type: DataTypes.INTEGER
      },
      negativeScore: {
        type: DataTypes.INTEGER
      },
      positiveScore: {
        type: DataTypes.INTEGER
      },
      score: {
        type: DataTypes.INTEGER
      },
      grade: {
        type: DataTypes.STRING
      },
    });
  
    return Stat;
  };