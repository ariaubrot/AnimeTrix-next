import React from 'react';
import Anime from '@/types/animetypes';
import { Frown } from 'lucide-react';
import ContentNotFound from '@/components/error/Contentnotfound';

export default function CharacterCard({ characters }: { characters: Anime[] }) {
    return (
        <>
            {characters.length > 0 ? (
                <>
                    <h1 className=' text-4xl font-bold'>Characters</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 max-h-96 overflow-y-scroll  gap-5 2xl:grid-cols-4">
                        {characters.map((anime: Anime, index: number) => (
                            <div
                                key={index}
                                className="bg-white/10 border-white/40 border-2 rounded-lg items-center p-4 flex justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={anime.image}
                                        alt={`an image of ${anime?.name?.full}`}
                                        className="w-20 rounded-lg"
                                        loading="lazy"
                                    />
                                    <div className="flex gap-3 flex-col">
                                        <h1 className="font-bold text-2xl">{anime?.name?.full}</h1>
                                        <span className="text-sm font-semibold tracking-widest">
                                            {anime?.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {characters.map((anime: Anime) => (
                            <div className="bg-white/10 hover:scale-75 duration-200 border-white/40 border-2 rounded-lg items-center p-4 flex justify-between">
                                <div className='flex items-center gap-4'>
                                    <img src={anime.image} alt={`an image of ${anime?.name?.full}`} className=' w-20 rounded-lg' loading='lazy' />
                                    <div className=' flex gap-3 flex-col'>
                                        <h1 className='font-bold text-2xl'>{anime?.name?.full}</h1>
                                        <span className=' text-sm font-semibold tracking-widest'>{anime?.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </>
            ) : (
                <ContentNotFound message='character' />
            )}
        </>
    );
}
