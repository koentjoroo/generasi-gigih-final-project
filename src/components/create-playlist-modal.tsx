import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast
} from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../store'
import { clearSelectedTracks, setFormTitle, setFormDescription } from '../store/playlist'
import { postPlaylist, postPlaylistTracks } from '../libs/spotify'
import * as React from 'react'

const CreatePlaylistModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const dispatch = useAppDispatch()
  const toast = useToast()
  const { accessToken, user } = useAppSelector(state => state.auth)
  const { selectedTracks, form } = useAppSelector(state => state.playlist)

  const handleSubmit: React.FormEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
    postPlaylist(accessToken, user?.id as string, {
      name: form.title,
      description: form.description,
      public: false,
    }).then(({ data }) => {
      return postPlaylistTracks(accessToken, data.id as string, {
        uris: selectedTracks,
      })
    }).then(() => {
      dispatch(clearSelectedTracks())
      onClose()
      return toast({
        title: 'Woohoo!',
        description: 'Playlist has been created successfully!',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form">
        <ModalHeader>Create New Playlist</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="title">
            <FormLabel>Title</FormLabel>
            <Input type="text" name="title" onChange={e => dispatch(setFormTitle(e.target.value))} />
          </FormControl>
          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Textarea name="description" onChange={e => dispatch(setFormDescription(e.target.value))} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="brand" onClick={handleSubmit}>Create</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CreatePlaylistModal