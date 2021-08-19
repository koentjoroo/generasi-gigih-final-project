import { render, screen } from '../test-utils'
import CreatePlaylist from '../../pages/create-playlist'

describe('create playlist implementation', () => {
  beforeEach(() => render(<CreatePlaylist />))

  it('should have title', () => {
    const title = screen.getByRole('heading', { name: 'Create Playlist' })
    expect(title).toBeInTheDocument()
  })

  it('should have clear selection button', () => {
    const clearSelection = screen.getByRole('button', { name: 'Clear Selection' })
    expect(clearSelection).toBeInTheDocument()
  })

  it('should have create playlist button', () => {
    const createPlaylist = screen.getByRole('button', { name: 'Create Playlist' })
    expect(createPlaylist).toBeInTheDocument()
  })
})