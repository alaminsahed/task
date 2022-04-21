import React from 'react';
import AwardCard from '../components/AwardCard';
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";


const Award = () => {
    const firstCat = JSON.parse(localStorage.getItem("firstCat"));
    const secondCat = JSON.parse(localStorage.getItem("secondCat"));

    const [nominationOne, setNominationOne] = React.useState([]);
    const [nominationTwo, setNominationTwo] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);



    const handleNomination = (movie) => {

        if (nominationOne.length < 1) {

            firstCat.find(element => element.imdbID === movie.imdbID ? setNominationOne([...nominationOne, movie]) : null)
        }
        else if (nominationTwo.length < 1) {

            secondCat.find(element => element.imdbID === movie.imdbID ? setNominationTwo([...nominationTwo, movie]) : null)
        }
        else if (nominationOne.length === 1 || nominationTwo.length === 1) {
            window.alert("You nominate movie for this category")

        }

    }


    return (
        <div className='md:m-5'>
            <h1 className='text-center mt-2'>AWARDS 2021</h1>
            <div>
                <div className='bg-slate-600 m-2'>
                    <h1 className='ml-2 text-sm  md:text-lg text-white'>Category 1</h1>
                </div>
                <div className='grid md:grid-cols-3 gap-1'>
                    {
                        firstCat?.map((movie) => <AwardCard key={movie.imdbID} movie={movie} handleNomination={handleNomination} />)
                    }
                </div>
            </div>
            <div>
                <div className='bg-slate-600 m-2'>
                    <h1 className='ml-2 text-sm md:text-lg text-white'>Category 2</h1>
                </div>
                <div className='grid md:grid-cols-3'>
                    {
                        secondCat?.map((movie) => <AwardCard key={movie.imdbID} movie={movie} handleNomination={handleNomination} />)
                    }
                </div>
                <button className='bg-stone-400 p-2 text-white m-2 md:absolute md:right-0' onClick={(e) => setShowModal(true)}>Submit Ballot Button</button>
                <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
                    <ModalHeader toggler={() => setShowModal(false)}>
                        <p className="hidden">Result</p>
                    </ModalHeader>
                    <ModalBody>
                        <h1 className='text-2xl font-semibold'>Success</h1>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    );
};

export default Award;