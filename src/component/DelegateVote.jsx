import { Box, Button, Card, Flex, Text, TextField } from "@radix-ui/themes";
import useDelegateVote from "../hooks/useDelegateVote";
import { useState } from "react";

const DelegateVote = () => {

    const [address, setAddress] = useState("");

    const handleDelegateVote = useDelegateVote()

    return (
        <Card size="2" style={{ width: 425 }}>
            <Flex gap="" align="center">
                <Box width={"100%"}>
                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Delegate&apos;s Address
                            </Text>
                            <TextField.Input
                                placeholder="Enter Delegate's Address" 
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </label>
                        <Button onClick={() => handleDelegateVote(address)}>
                            Delegate vote
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Card>
    );
};

export default DelegateVote;
