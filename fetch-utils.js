const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkamZ3c3djcWxzZnVodGVtYnVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTM1ODksImV4cCI6MTk2MzEyOTU4OX0.UL14baUjdJa7Tgx9CS1Ky_ZJ78nsDmyOwDEPePPJe10'
const SUPABASE_URL = "https://kdjfwswcqlsfuhtembua.supabase.co"

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPlanets() {
    const response = await client
        .from('Planets')
        .select('*');

    return response.body;
}