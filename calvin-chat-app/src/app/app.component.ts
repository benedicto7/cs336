import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Timestamp } from 'firebase/firestore';
import firebase from 'firebase/compat/app'

interface FirestoreRec {
  name: string;
  message: string;
  timestamp: firebase.firestore.Timestamp; // or Timestamp
  color?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-app';

  public chats: FirestoreRec[] = [];
  public name: string = "";
  public message: string = "";
  public color: string = "";

  constructor(private db: AngularFirestore) {
    // Get all the documents inside the cs336-chat collection
    const collectionDatabase = db.collection<FirestoreRec>('/cs336-chat', (ref) =>
      ref.orderBy('timestamp'));
    collectionDatabase.valueChanges().subscribe((result) => {
      if (result) {
        this.chats = result;
      }
    })

    // Get the name and color in localStorage
    this.name = localStorage.getItem("name") || ""; // if getItem is not found, return null, else string of color
    this.color = localStorage.getItem('color') || ""; // if getItem is not found, return null, else string of color
  }

  async addToDatabase(): Promise<void> {
    console.log(this.message);
    // if (this.name === "") {
    //   this.name = 'none';
    // }

    // Data object
    const data: FirestoreRec = {
      name: this.name,
      message: this.message,
      timestamp: Timestamp.now(),
      color: this.color,
    };

    // Add data object into the firebase
    const result = await this.db.collection('cs336-chat').add(data);
    this.message = "";
  }


  saveNameToLocalStorage(): void {
    localStorage.setItem("name", this.name);
  }

  saveColorToLocalStorage(): void {
    localStorage.setItem("color", this.color);
  }

  async deleteChat(): Promise<void> {
    await this.db.doc('/cs336-chat').delete();
  }
}
