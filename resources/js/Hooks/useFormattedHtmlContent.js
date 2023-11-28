import { useState, useEffect } from "react";

const useFormattedHtmlContent = (initialHtmlContent) => {
    const [formattedHtmlContent, setFormattedHtmlContent] =
        useState(initialHtmlContent);

    useEffect(() => {
        const formattedContent = initialHtmlContent
            .replace(
                /<ul>/g,
                '<ul class="list-disc" style="display: block; list-style-type: disc; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px; margin-inline-end: 0px; padding-inline-start: 40px;">'
            )
            .replace(
                /<ol>/g,
                '<ol class="list-decimal" style="display: block; list-style-type: decimal; margin-block-start: 1em; margin-block-end: 1em; margin-inline-start: 0px; margin-inline-end: 0px; padding-inline-start: 40px;">'
            )
            .replace(/<h1>/g, '<h1 class="text-3xl">')
            .replace(/<p>/g, '<p class="whitespace-pre-wrap">');

        setFormattedHtmlContent(formattedContent);
    }, [initialHtmlContent]);

    return formattedHtmlContent;
}; 

export default useFormattedHtmlContent;
