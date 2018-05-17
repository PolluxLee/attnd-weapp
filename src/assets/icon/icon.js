import wepy from 'wepy'

export default class Icon extends wepy.mixin {
  
  data = {
    successIcon: `data:image/png;base64,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`,
    failIcon: `data:image/png;base64,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`,
    search: `data:image/png;base64,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`,
    arrow: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACxElEQVR4Xu3bu6sTQRQG8G/We5U0VkkKO1vTCpZhF0SNYGUjNlrZWwuC1hZa2ghWGnzhI5XsLFG7oFX+BJsUFkHC9RFGBhIIsl5zPc7sOcPZOl8y88uXzM5uYqAHScCQ0hqGAhJLoIAKSBQgxrWBCkgUIMa1gQpIFCDGtYHcAcfj8Ynlcnm02+1+7PV634njZRcP2kBr7Q0At/2snXNfAFwtiuIlOwXCgIIBTiaT3fl8vmeMyTbG9xPApTzPnxDGzCoaG9BPPinEYIBeqizLO8aY6zWVSQYxKKBzLquq6iGAy6kiBgVcLR5JIwYHTB0xCmDKiNEAU0WMCriB+BjAxRQWluiAHm04HB7qdDqPUkBsBDAlxMYAU0FsFDAFxMYBpSOyAFwjttvtZ8aYC5JWZzaAHs1au+OceyoJkRWgRER2gNIQWQJKQmQLKAWRNeAaEcBrAGc4rs7sAT3adDo9PJvN/N08dogiADkjigHkiigKkCOiOMAtEH9kWXaq3+9/inEHXiTgBuIHACd/h3LO3SqK4qYC7iNQVdVp59wbALs1gNeKorivgH8Q2A8PwDsARZ7n/tcPwQ9xH+G/4L0HcC7P86/B5VYvIAqQG543FAPIEU8MIFc8EYCc8dgDcsdjDSgBjy2gFDyWgJLw2AGWZXneGPO8bnsGIPpJ8jYn42zOA1d4LwDs1AycJR6bBkrFYwEoGa9xQOl4jQKmgNcYYCp4jQCmhBcdMDW8qIAp4kUDTBUvCmDKeMEBrbVnAbyStj3bZg+8fkzQvXBZlp+NMcck7W0Pghe0gas/W+/VXFlhe2HgoHhBAf2TW2sfALiyMbCk8IIDjkajI61W665z7niWZW8Xi8W9wWDw7V/eaa6ZoN+BXCf9P8elgERNBVRAogAxrg1UQKIAMa4NVECiADGuDVRAogAxrg1UQKIAMa4NJAL+AnoAwmBsQwp/AAAAAElFTkSuQmCC`,
    config: `data:image/png;base64,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`,
    remove: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAFXklEQVR4Xu2cS2hcVRiA/39ItM1UsbWoSK2PVixdKXQhCLqyPgkqVTcK6kaNYg1zzu0MKg5ijZn/TMcohrrxvRBDFyWCVlcKupCC7nxWfICvioo6aY0z88vRTDi5eZ376L0z8F/IIpP/+eU/9/z33DkHQa5EBDCRtiiDAExYBAJQACYkkFC9pyqwWq0Wms3mtcx8DSJeCgBbbH7M/CUiftjpdKbr9fqbCXNOVb1nAJZKpZsQcR8inrtShsz8QaFQuKtWq32WKomYxnoCoNZ6NwA8FSGH4wBwHxE9H0HnhIjmDlApdR0ivhEnO2YeNsZMx9FNSydXgKVSaSMiHkHEU0MJHQWAMWb+aO7zMxDxdgC43pVj5j8GBwe3jo2NWflcrlwBaq1fAIA7Qpk3mPkRY0wzTEQp9SAiNkIQXzLGhG1kBjM3gKOjo2sHBgZ+B4CTutky87QxZnil7LXW+wBg1JGZbbVapzUajWOZUXMc5QYwCIJhZj7ogpidnd08MTHx00ogyuXy+na7/WMI/A3GGNdWZixzA6iUegARJ5zqO2SMudonc6217QXnZZl5tzHmaR/dtGXyBPg4Ij7kAHzOGHOPT4JKqf2IeLeju9cY87CPbtoyiwAGQbCDmU3ajsL2mPkCRDzH+fx7APjC0++FAHC2A/A7RPzKUze2GCKqWq122DWwCKDWeicAHIrtxVORmQExnQGQpq1Vwr+KiN7ue4AZAgvz7B2ASwzp1CrScxDEEfMCuIWZbdcfvgYAYP6mP/dHe69c1PDGiSwvHWZeh4gl1z8z2wmuHY4JEV8hoiMrDuHlEqlWq2uazeaCZpWZzzTG/JxX8mn41VqfBQA/uLaKxeLJ1Wp11se+911cAC6NUwBKBfoMtOVlZAgn4wcCUAAmJJBQXSpQACYkkFBdKlAAJiSQUL3vKtAGzMzuwukxY8x4HA5KqT0AsLari4j7icgu93tf/QjwYgDovq60if5GRBu8M3YEtda/AsB656NLiOjjKLYEoACUCoy0nKW1liHcvcfEWQ8UgM4dWgCC/3ek01pQlQqUClzQJWW+Ii0VKBUoFegSkCcReRKRJxF5EvFZvZA+sEderEsbI22MtDHSxswRkBXp/0HIkr7PLN6VkUlEJhGZRGQSkUlE3gv/VwPyTkTeifTfN1SljZE2Jt82ZmRkZN3Q0NCObhSI+A8RvR+lGXea8suYebD7+8zMzOHJycm/otjquyX9KMllIZsZQABApdTfiDj/HweAreG9Y1kknaYPrbXde/y5Y7NFRG6OK7rzfi9srWitvwGAzV2LnU5nZ71efyfNhLK2tcT+6K+J6HzfOCIBVEq9i4iXO8brRKR8nfWiXPgUEGZ+zxhzhW+sUQFWEPEJx/jRYrG4yXdno29QWcnNnQBit6+633KtENGTvjFEAhgEwUXM/GnI+KNE9Jivw16S01q/BgC3ujEh4rYoB5tFAmgdKaWmEHFXCMT9RPRsL8FZLZYgCEpLHK4xRUS3rKa7AHgUYStbLpfPa7fbnwDAmpDuM/YYk1qt9mdUm1nKB0FwCjPbXQH3hvwe73Q62+r1up0ova/IFWgta61vBoDXw16Y+RcAeJmZ37INsncUJ1iQmTcUCoXtALCdma9ExI1LuNxFRAeihhIL4NxQ1ohYi+qwR+X3EFGsXGIDdCrxVfccqx4FtFxY9lyE24hoKm7ciQA698QKM98ZekqJG1MWehbci4VCYe/4+Pi3SRwmBth1XqlUTm+1WjcCgP2xR6dsQsRikuDS0mVmu8DQPVrqYLvdPtBoNOwup8RXagATR9KnBgRgwn+cABSACQkkVJcKTAjwX/IBZpwwwNPiAAAAAElFTkSuQmCC`,
    plus: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABNUlEQVR4Xu3bwQ2CUBRFQX67xh7UIqz3GSrQZCRBc1xz4DvchRvXdqLPzDy3bbu8OdJzrXU9y7HXWQ6ynyNAfBsBBogCmLfAAFEA8xYYIApg3gIDRAHMW2CAKIB5CwwQBTBvgQGiAOYtMEAUwLwFBogCmLfAAFEA8xYYIApg3gIDRAHMW2CAKIB5CwwQBTBvgQGiAOYtMEAUwPwnFzgzd/ze38xvH97s8eF1h1+2ZmYOf8ofPyBAfLkBBogCmLfAAFEA8xYYIApgvi+wH9KA2H/lAG9PAwwQBTBvgQGiAOYtMEAUwLwFBogCmLfAAFEA8xYYIApg3gIDRAHMW2CAKIB5CwwQBTBvgQGiAOYtMEAUwLwFBogCmLfAAFEA8xYYIApg3gIDRAHMW2CAKIB5CwwQBTB/AaQMhzrntv34AAAAAElFTkSuQmCC`,
    clear: `data:image/png;base64,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`,
  }

}
