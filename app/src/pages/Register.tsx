import { IonButton, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { checkmarkDoneOutline } from 'ionicons/icons';
import fLogo from '../assets/save-money.png'

const Register: React.FC = () => {

    const doRegister = (event: any) => {
        event.preventDefault();
        console.log('doLogin')
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Testing Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color='light' scrollY={false}>
                <div className='ion-text-center ion-padding'>

                    <img src={fLogo} alt='Logo'
                        width={'50%'} />
                </div>
                <IonCardContent>
                    <form onSubmit={doRegister}>
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

                        <IonButton type='button'
                            routerLink='/register'
                            color={'secondary'}
                            className='ion-margin-top'
                            expand='full'
                        >
                            Create account
                            <IonIcon icon={checkmarkDoneOutline} slot='end' />
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

export default Register;