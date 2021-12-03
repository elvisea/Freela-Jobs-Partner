// import { Alert, Platform } from 'react-native';
// import IAP, { purchaseUpdatedListener } from 'react-native-iap'

// const itensSubs = Platform.select({
//   android: [
//     'android.test.purchased',
//     'android.test.canceled',
//     'android.test.refunded',
//     'android.test.item_unavailable',
//   ]
// })

// export const purchased = async (productId: any) => {
//   let isPurchased = false;

//   try {
//     const purchases = await IAP.getAvailablePurchases();

//     purchases.forEach(purchase => {
//       if (purchase.productId === productId) {
//         isPurchased = true;
//         return;
//       }
//     });

//     return isPurchased;
//   } catch (error) {
//     return false;
//   }
// }

// export const requestPurchase = async (productId: any) => {
//   try {
//     await IAP.requestSubscription(productId)
//   } catch (error) {
//     Alert.alert(
//       'Erro ao recuperar os dados de produto. Por favor, tente novamente.'
//     )
//   }
// }

// export const fetchAvailableProducts = async (productIds: any) => {
//   try {
//     const getProducts = await IAP.getProducts(productIds)
//   } catch (error) {

//   }
// }

// export const purchaseUpdateSubscription = async () => {
//   purchaseUpdatedListener(async (purchase) => {
//     const receipt = purchase.transactionReceipt;

//     if (receipt) {
//       const askResult = await IAP.finishTransaction(purchase)
//       console.debug(askResult)
//     }
//   })

//   try {

//   } catch (error) {

//   }
// }
