import Constants from 'expo-constants';

const apiUrl = Constants.expoConfig?.extra?.API_URL;

export async function deleteAccount(userId: number): Promise<string> {
    try {
        const response = await fetch(`${apiUrl}/user/delete?userId=${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Failed to delete account');
        }

        return 'Account deleted successfully';
    } catch (error: any) {
        console.error('Delete account error:', error);
        throw new Error(error.message || 'Failed to delete account');
    }
}

export async function updateUserProfile(userId: number, profileData: any): Promise<any> {
    try {
        const response = await fetch(`${apiUrl}/user/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profileData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Failed to update profile');
        }

        return await response.json();
    } catch (error: any) {
        console.error('Update profile error:', error);
        throw new Error(error.message || 'Failed to update profile');
    }
}

export async function getUserById(userId: number): Promise<any> {
    try {
        const response = await fetch(`${apiUrl}/user/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }

        return await response.json();
    } catch (error: any) {
        console.error('Get user error:', error);
        throw new Error(error.message || 'Failed to fetch user');
    }
}