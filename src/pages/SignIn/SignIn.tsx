import * as React from 'react';
import { Box, Typography, Button, Grid, Divider } from '@mui/material';

function SignIn() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 10,
        bgcolor: 'white',
        maxWidth: 600,
        '@media (max-width: 900px)': {
          px: 5,
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          letterSpacing: 'wide',
          lineHeight: '2.5rem',
          color: 'black',
          '@media (max-width: 900px)': {
            maxWidth: '100%',
          },
        }}
      >
        Sign In
      </Typography>
      <Box
        sx={{
          mt: 10,
          '@media (max-width: 900px)': {
            maxWidth: '100%',
          },
        }}
      >
        <Grid
          container
          spacing={5}
          sx={{
            '@media (max-width: 900px)': {
              flexDirection: 'column',
              gap: 0,
            },
          }}
        >
          <Grid
            item
            xs={6}
            sx={{
              '@media (max-width: 900px)': {
                ml: 0,
                width: '100%',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                '@media (max-width: 900px)': {
                  mt: 10,
                },
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="caption"
                    sx={{
                      letterSpacing: 'normal',
                      lineHeight: '0.75rem',
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    Full Name
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      justifyContent: 'center',
                      mt: 1,
                      letterSpacing: 'normal',
                      lineHeight: '1.5rem',
                      whiteSpace: 'nowrap',
                      color: 'rgba(0, 0, 0, 0.9)',
                    }}
                  >
                    Name
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      mt: 1,
                    }}
                  >
                    <Divider
                      sx={{
                        height: '1px',
                        bgcolor: 'rgba(0, 0, 0, 0.4)',
                        borderColor: 'rgba(0, 0, 0, 0.4)',
                      }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    justifyContent: 'center',
                    letterSpacing: 'wide',
                    lineHeight: '1.25rem',
                    color: 'rgba(0, 0, 0, 0.6)',
                  }}
                >
                  Helper text
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', mt: 10 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="caption"
                    sx={{
                      letterSpacing: 'normal',
                      lineHeight: '0.75rem',
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    Phone
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      justifyContent: 'center',
                      mt: 1,
                      letterSpacing: 'normal',
                      lineHeight: '1.5rem',
                      whiteSpace: 'nowrap',
                      color: 'rgba(0, 0, 0, 0.9)',
                    }}
                  >
                    Number
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      mt: 1,
                    }}
                  >
                    <Divider
                      sx={{
                        height: '1px',
                        bgcolor: 'rgba(0, 0, 0, 0.4)',
                        borderColor: 'rgba(0, 0, 0, 0.4)',
                      }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    justifyContent: 'center',
                    letterSpacing: 'wide',
                    lineHeight: '1.25rem',
                    color: 'rgba(0, 0, 0, 0.6)',
                  }}
                >
                  Helper text
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              '@media (max-width: 900px)': {
                ml: 0,
                width: '100%',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                '@media (max-width: 900px)': {
                  mt: 10,
                },
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="caption"
                    sx={{
                      letterSpacing: 'normal',
                      lineHeight: '0.75rem',
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    Company
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      justifyContent: 'center',
                      mt: 1,
                      letterSpacing: 'normal',
                      lineHeight: '1.5rem',
                      whiteSpace: 'nowrap',
                      color: 'rgba(0, 0, 0, 0.9)',
                    }}
                  >
                    Name
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      mt: 1,
                    }}
                  >
                    <Divider
                      sx={{
                        height: '1px',
                        bgcolor: 'rgba(0, 0, 0, 0.4)',
                        borderColor: 'rgba(0, 0, 0, 0.4)',
                      }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    justifyContent: 'center',
                    letterSpacing: 'wide',
                    lineHeight: '1.25rem',
                    color: 'rgba(0, 0, 0, 0.6)',
                  }}
                >
                  Helper text
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', mt: 10 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="caption"
                    sx={{
                      letterSpacing: 'normal',
                      lineHeight: '0.75rem',
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    Email
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      justifyContent: 'center',
                      mt: 1,
                      letterSpacing: 'normal',
                      lineHeight: '1.5rem',
                      whiteSpace: 'nowrap',
                      color: 'rgba(0, 0, 0, 0.9)',
                    }}
                  >
                    Address
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      mt: 1,
                    }}
                  >
                    <Divider
                      sx={{
                        height: '1px',
                        bgcolor: 'rgba(0, 0, 0, 0.4)',
                        borderColor: 'rgba(0, 0, 0, 0.4)',
                      }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    justifyContent: 'center',
                    letterSpacing: 'wide',
                    lineHeight: '1.25rem',
                    color: 'rgba(0, 0, 0, 0.6)',
                  }}
                >
                  Helper text
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 10,
          '@media (max-width: 900px)': {
            maxWidth: '100%',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            '@media (max-width: 900px)': {
              maxWidth: '100%',
            },
          }}
        >
          <Typography
            variant="caption"
            sx={{
              letterSpacing: 'normal',
              lineHeight: '0.75rem',
              color: 'rgba(0, 0, 0, 0.6)',
              '@media (max-width: 900px)': {
                maxWidth: '100%',
              },
            }}
          >
            Comments
          </Typography>
          <Typography
            variant="body1"
            sx={{
              justifyContent: 'center',
              mt: 1,
              letterSpacing: 'normal',
              lineHeight: '1.5rem',
              color: 'rgba(0, 0, 0, 0.9)',
              '@media (max-width: 900px)': {
                maxWidth: '100%',
              },
            }}
          >
            Message Goes Here...
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              mt: 1,
              '@media (max-width: 900px)': {
                maxWidth: '100%',
              },
            }}
          >
            <Divider
              sx={{
                height: '1px',
                bgcolor: 'rgba(0, 0, 0, 0.4)',
                borderColor: 'rgba(0, 0, 0, 0.4)',
                '@media (max-width: 900px)': {
                  maxWidth: '100%',
                },
              }}
            />
          </Box>
        </Box>
        <Typography
          variant="caption"
          sx={{
            justifyContent: 'center',
            letterSpacing: 'wide',
            lineHeight: '1.25rem',
            color: 'rgba(0, 0, 0, 0.6)',
            '@media (max-width: 900px)': {
              maxWidth: '100%',
            },
          }}
        >
          Helper text
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          mt: 10,
          letterSpacing: 'wide',
          lineHeight: '1.75rem',
          color: 'white',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          '@media (max-width: 900px)': {
            maxWidth: '100%',
          },
        }}
      >
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            px: 16,
            bgcolor: 'primary.main',
            borderRadius: 1,
            boxShadow: 1,
            '@media (max-width: 900px)': {
              px: 5,
              maxWidth: '100%',
            },
          }}
        >
          <Box
            sx={{
              justifyContent: 'center',
              px: 6,
              py: 2,
              '@media (max-width: 900px)': {
                px: 5,
              },
            }}
          >
            Submit
          </Box>
        </Button>
      </Box>
    </Box>
  );
}

export default SignIn;
