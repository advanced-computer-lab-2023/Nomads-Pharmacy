import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'


export const useLogin = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (loginAsA, email, password) => {
        setIsLoading(true)
        setError(null)

        switch (loginAsA) {
            case '':
            case '------------------Select an option-----------------------':
                setIsLoading(false)
                setError("Please Select Signup As A:");
                break;
            case 'Patient':



                const patientResponse = await fetch('/api/patients/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                })
                const patientJson = await patientResponse.json()

                if (!patientResponse.ok) {
                    setIsLoading(false)
                    setError(patientJson.error)
                }
                if (patientResponse.ok) {
                    //save the user to local storage 
                    localStorage.setItem('user', JSON.stringify(patientJson))
                    console.log('PAT',JSON.parse(localStorage.getItem('user')).id)
                    //update the auth context
                    dispatch({ type: 'LOGIN', payload: patientJson })

                    setIsLoading(false)
                    navigate('/patient-home')
                }

                break;
            case 'Pharmacist':
                const pharmacistResponse = await fetch('/api/pharmacists/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                })
                const pharmacistJson = await pharmacistResponse.json()

                if (!pharmacistResponse.ok) {
                    setIsLoading(false)
                    setError(pharmacistJson.error)
                }
                if (pharmacistResponse.ok) {
                    //save the user to local storage 
                    localStorage.setItem('user', JSON.stringify(pharmacistJson))

                    //update the auth context
                    dispatch({ type: 'LOGIN', payload: pharmacistJson })

                    setIsLoading(false)
                     navigate('/pharmacist-home')
                }
                break;
            default:
                const adminResponse = await fetch('/api/admins/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                })
                const adminJson = await adminResponse.json()

                if (!adminResponse.ok) {
                    setIsLoading(false)
                    setError(adminJson.error)
                }
                if (adminResponse.ok) {
                    //save the user to local storage 
                    localStorage.setItem('user', JSON.stringify(adminJson))

                    //update the auth context
                    dispatch({ type: 'LOGIN', payload: adminJson })

                    setIsLoading(false)
                    navigate('/admin-home')
                }
                break;

        }
    }
    return { login, isLoading, error }
}