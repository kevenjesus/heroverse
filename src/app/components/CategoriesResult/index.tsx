import EmptyState from "../EmptyState";
import { uid } from "uid";
import { CategoriesResultTypes } from "./types";
import Typographic from "@/app/DesignSystem/Typographic";
import * as S from './style'

export default function CategoriesResult({categories, onDeleteCategory, onEditCategory}: CategoriesResultTypes) {
    if(categories.length === 0) {
        return <EmptyState text="Não existem categorias cadastradas" />
    }else {
        return (
            <S.Table>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map(category => (
                            <tr key={uid()}>
                                <td>{category.Name}</td>
                                <td>
                                    <S.WrapperActions>
                                        <button onClick={() => onEditCategory(category)}>
                                            <img src="/edit.png" alt="Editar" />
                                        </button>
                                        <button onClick={() => onDeleteCategory(category)}>
                                            <img src="/trash.png" alt="Excluir" />
                                        </button>
                                    </S.WrapperActions>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
        </S.Table>
    )
    }
}