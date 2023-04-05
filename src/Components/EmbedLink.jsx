import React, { useState } from 'react'

const EmbedLink = ({ city }) => {
    const [copySuccessLight, setCopySuccessLight] = useState(false);
    const [copySuccessDark, setCopySuccessDark] = useState(false);
    const link = encodeURI(`${window.location.origin}/embed?city=${city}&theme=`);

    const copyToClipboard = async (text, setCopySuccess) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 3000);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='mx-auto flex flex-col mt-10'>
            <div className='text-center max-w-10'>
                <h3 className='font-bold mb-2'>Embed Links</h3>
                <div className='bg-gray-100 rounded text-gray-900 grid grid-cols-2 divide-x border-gray-800'>
                    <button
                        className='p-3 hover:bg-gray-300 rounded font-medium'
                        onClick={() => copyToClipboard(`${link}light`, setCopySuccessLight)}>
                            {copySuccessLight ? 'Copied' : 'Light'}
                    </button>
                    <button
                        className='p-3 hover:bg-gray-300 rounded font-medium'
                        onClick={() => copyToClipboard(`${link}dark`, setCopySuccessDark)}>
                            {copySuccessDark ? 'Copied' : 'Dark'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EmbedLink