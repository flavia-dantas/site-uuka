export async function strapiFetch<T>(
  endpoint: string,
  params?: URLSearchParams
): Promise<T | null> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}${params ? `?${params}` : ''}`;

  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` },
      cache: 'no-store',
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Erro na API:', errorText);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error('Erro inesperado:', err);
    return null;
  }
}
