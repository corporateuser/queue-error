const cds = require('@sap/cds')

cds.on('connect', async (service) => {
  if (service.name === "db") {
    // try{
    //   const sp = await cds.connect.to('cds.xt.SaasProvisioningService');
    //   const response = await sp.get("/tenant")
    //   console.log(response);
    // } catch (e) {
    //   console.log("SaasProvisioningService is not available yet!!!")
    // }
  }
})
cds.on('listening', async (srv) => {
  try{
    const sp = await cds.connect.to('cds.xt.SaasProvisioningService')
    const response = await sp.get("/tenant")
    console.log(response)
    } catch (e) {
    console.log("SaasProvisioningService is still not available!!!")
  }
}
)

module.exports = cds.server