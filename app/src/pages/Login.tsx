import { IonButton, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import fLogo from '../assets/save-money.png'

const Login: React.FC = () => {

    const doLogin = (event: any) => {
        event.preventDefault();
        console.log('doLogin')
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Creating Account</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color='light' scrollY={false}>
                <div className='ion-text-center ion-padding'>

                    <img src={fLogo} alt='Logo'
                        width={'50%'} />
                </div>
                <IonCardContent>
                    <form onSubmit={doLogin}>
                        <IonInput label='Email'
                            labelPlacement='floating'
                            fill='outline'
                            type='email'
                            placeholder='example@example.com' />
                        <IonInput label='Password'
                            className='ion-margin-top'
                            labelPlacement='floating'
                            fill='outline'
                            type='password'
                            placeholder='12345' />
                        <IonButton type='submit'
                            className='ion-margin-top'
                            expand='full'
                        >
                            Login
                            <IonIcon icon={logInOutline} slot='end' />
                        </IonButton>
                        <IonButton type='button'
                            routerLink='/Register'
                            color={'secondary'}
                            className='ion-margin-top'
                            expand='full'
                        >
                            Create account
                            <IonIcon icon={personCircleOutline} slot='end' />
                        </IonButton>
                    </form>

                </IonCardContent>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    Footer
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Login;