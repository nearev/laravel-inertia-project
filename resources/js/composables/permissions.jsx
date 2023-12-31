import { usePage } from "@inertiajs/react";

export function usePermissions() {
    const hasRole = (name) => usePage().props.auth.user.roles.includes(name);
    const hasPermission = (name) => usePage().props.auth.user.permissions.includes(name);
    return { hasRole, hasPermission };
}