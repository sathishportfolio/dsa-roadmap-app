// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private firestore: AngularFirestore) {}

  // Method to add a document
  addDocument(data: User): Promise<DocumentReference<User>> {
    const collectionRef = this.firestore.collection<User>('users'); // Reference to 'users' collection
    return collectionRef.add(data); // This returns a DocumentReference<User>
  }

  // Method to get documents
  getDocuments(): Observable<User[]> {
    return this.firestore.collection<User>('users', ref => ref.where('age', '>', 40)).valueChanges(); // Filter for age > 40
  }
}