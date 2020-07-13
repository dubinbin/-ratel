import { EditorStore } from './modules/Editor.mobx'
import React, { createContext, useContext } from 'react'
import { useLocalStore } from 'mobx-react'

const EditorStores = new EditorStore()

export const store = {
    EditorStores
}

const StoreContext = createContext(new EditorStore())


export const Provider = ({children}: any) => {
    const store = useLocalStore(() => new EditorStore())
    return (
            <StoreContext.Provider value={store}>
                {children}
            </StoreContext.Provider>
        )
}

export const useStore = () => {
    return useContext(StoreContext)
}