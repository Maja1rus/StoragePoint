import { umi_macro } from "./umiMacro.js";

export async function deleteFn (element) {
    element.style.display = 'none';
    await actualDelete(element);
}

async function actualDelete(element) {
    let id = element.dataset.id;
    await umi_macro('data', 'delete_storage', [id]);
}