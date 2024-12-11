import {uploadToAzure} from "../services/files/uploadToAzure.js";
import {getCaptioning} from "../services/coputer_vision/captioning.services.js";
import {translation} from "../services/translations/translations.services.js";


export const uploadFileAzureController = async (req, res) => {


    // Проверяем, есть ли файл в запросе
    if (!req.files || !req.files.avatar) {
        return res.status(400).json({ error: "Файл не загружен" });
    }

    const file = req.files.avatar; // Получаем файл из запроса



    try {
        // Загружаем файл через модуль
        const uploadedFile = await uploadToAzure(file);

        //Add caption
        const caption = await getCaptioning (uploadedFile.url);
        console.log(caption)
        const traslations = await translation(caption);
        res.json({
            message: 'Файл успешно загружен в Azure Storage',
            file: uploadedFile,
            caption: caption, // Добавляем подпись в ответ
            traslations:traslations

        });
    } catch (err) {
        res.status(500).json({
            error: 'Ошибка загрузки файла в Azure Storage',
            details: err.message,
        });
    }


};
