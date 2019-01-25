#library(tidyverse)

rm(list = ls())

#Import

library(readr)
X2012 <- read_csv("2012.csv")
View(X2012)

X2017 <- read_csv("2017.csv")
View(X2017)

IsoAll <- read_csv("all.csv")

# Outward FDI
Outward <- X2012[X2012$'Direction of investment'=='Outward',]
Outward17 <- X2017[X2017$'Direction of investment'=='Outward',]
Outward <- cbind(Outward, Outward17[,c(4:8)])
Outward[is.na(Outward)] <- 0
Outward <- Outward[,c(2,4:17)]

# Inward FDI
Inward <- X2012[X2012$'Direction of investment'=='Inward',]
Inward17 <- X2017[X2017$'Direction of investment'=='Inward',]
Inward <- cbind(Inward, Inward17[,c(4:8)])
Inward[is.na(Inward)] <- 0
Inward <- Inward[,c(2,4:17)]

# ISO code
isoCode <- IsoAll[,c(1,3)]
isoCode[120,1] <- 'Korea'

# Match
MatchList <- match(Outward$Country, isoCode$name)

# Correct the names of the countries
which(is.na(MatchList))
Outward[48,1] <- isoCode[236,1]
Outward[11, 1] <- isoCode[60, 1]
Outward[17, 1] <- isoCode[235, 1]

Inward[48,1] <- isoCode[236,1]
Inward[11, 1] <- isoCode[60, 1]
Inward[17, 1] <- isoCode[235, 1]

# Make a vector for ISO code according to the order of Inward and Outward
isoOrder <- c("iso_code")
isoOrder <- lapply(isoOrder, function(x) isoCode[[2]][match(Outward$Country, isoCode$name)])
isoOrder <- data.frame(matrix(unlist(isoOrder), nrow=50, byrow=T))
colnames(isoOrder[1]) <- "iso"

# Merge the dataframes
Inward <- cbind(Inward, isoOrder)
Outward <-  cbind(Outward, isoOrder)

# Drop the observation for the total of the world
Inward <- rbind(Inward[1:48,],Inward[50,])
Outward <-  rbind(Outward[1:48,],Outward[50,])


# Export 
write.csv(Inward,'export/inward.csv')
write.csv(Outward,'export/outward.csv')

