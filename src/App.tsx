import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Card,
  CardContent,
  Sheet,
  Grid,
} from '@mui/joy'
import './App.css'

function App() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      {/* Navigation */}
      <Sheet
        variant="outlined"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: 'background.body',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ py: 2 }}
          >
            <Typography level="title-lg" sx={{ fontWeight: 'bold' }}>
              ReadyOG
            </Typography>
            <Button 
              size="md" 
              variant="solid" 
              color="primary"
              onClick={() => window.open('https://www.google.com', '_blank')}
            >
              Sign up now
            </Button>
          </Stack>
        </Container>
      </Sheet>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center' }}>
          <Typography
            level="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              maxWidth: '900px',
            }}
          >
            Transform Your Orton-Gillingham Lesson Planning
          </Typography>
          <Typography
            level="body-lg"
            sx={{
              fontSize: { xs: '1.125rem', md: '1.25rem' },
              maxWidth: '700px',
              color: 'text.secondary',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 2 }}>
            <Button 
              size="lg" 
              variant="solid" 
              color="primary" 
              sx={{ px: 4 }}
              onClick={() => window.open('https://www.google.com', '_blank')}
            >
              Sign up now
            </Button>
            <Button size="lg" variant="outlined" color="neutral" sx={{ px: 4 }}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>

      {/* Features Section */}
      <Box
        sx={{
          backgroundColor: 'background.surface',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={6} alignItems="center">
            <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: '600px' }}>
              <Typography level="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                Everything You Need
              </Typography>
              <Typography level="body-lg" sx={{ color: 'text.secondary' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Stack>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid xs={12} md={4}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography level="title-lg">Intuitive Planning</Typography>
                      <Typography level="body-md" sx={{ color: 'text.secondary' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} md={4}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography level="title-lg">OG-Aligned Resources</Typography>
                      <Typography level="body-md" sx={{ color: 'text.secondary' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} md={4}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography level="title-lg">Progress Tracking</Typography>
                      <Typography level="body-md" sx={{ color: 'text.secondary' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <Typography level="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                Streamline Your Teaching Workflow
              </Typography>
              <Typography level="body-lg" sx={{ color: 'text.secondary' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </Typography>
              <Stack spacing={2} sx={{ pt: 2 }}>
                <Typography level="body-md">
                  • Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
                <Typography level="body-md">
                  • Sed do eiusmod tempor incididunt ut labore et dolore
                </Typography>
                <Typography level="body-md">
                  • Ut enim ad minim veniam, quis nostrud exercitation
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Card variant="outlined" sx={{ p: 4 }}>
              <Stack spacing={3} alignItems="center">
                <Box
                  sx={{
                    width: '100%',
                    height: '300px',
                    backgroundColor: 'background.level1',
                    borderRadius: 'md',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography level="body-md" sx={{ color: 'text.tertiary' }}>
                    Placeholder for product image or demo
                  </Typography>
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          backgroundColor: 'primary.50',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center' }}>
            <Typography
              level="h2"
              sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 'bold' }}
            >
              Ready to Get Started?
            </Typography>
            <Typography
              level="body-lg"
              sx={{ color: 'text.secondary', maxWidth: '600px' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Button 
              size="lg" 
              variant="solid" 
              color="primary" 
              sx={{ px: 4, mt: 2 }}
              onClick={() => window.open('https://www.google.com', '_blank')}
            >
              Sign up now
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Sheet
        variant="outlined"
        sx={{
          borderTop: '1px solid',
          borderColor: 'divider',
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
              © 2024 ReadyOG. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={3}>
              <Typography
                level="body-sm"
                component="a"
                href="#"
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                Privacy
              </Typography>
              <Typography
                level="body-sm"
                component="a"
                href="#"
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                Terms
              </Typography>
              <Typography
                level="body-sm"
                component="a"
                href="#"
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                Contact
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Sheet>
    </Box>
  )
}

export default App
