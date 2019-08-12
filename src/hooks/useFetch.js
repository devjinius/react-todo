export default async ({ fn, errorFn, url }) => {
  try {
    const rawData = await fetch(url);
    const jsonData = await rawData.json();

    if (/^2/.test(jsonData.statusCode)) {
      fn(jsonData.body);
      return;
    }

    if (/^4/.test(jsonData.statusCode)) {
      throw new Error(`clientError statusCode: ${jsonData.statusCode}`);
    }

    if (/^5/.test(jsonData.statusCode)) {
      throw new Error(`serverError statusCode: ${jsonData.statusCode}`);
    }

    throw new Error(`알 수 없는 에러입니다. errorData : ${jsonData}`);
  } catch (e) {
    console.log(e);
    return errorFn(e);
  }
};
