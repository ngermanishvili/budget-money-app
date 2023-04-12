import { useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import useStyles from "./styles";
// # I make this initialState for the form data for example amount, category, type, date etc and we are passing the initialState as the initial value and we are destructuring the formData and setFormData from the useState. for example if we want to change the amount we can do it like this setFormData({ ...formData, amount: 10 }) and this will change the amount to 10 and the rest of the data will remain the same.
const initialState = {
  amuont: "",
  category: "",
  type: "Income",
  date: new Date(),
};

const Form = () => {
  const classes = useStyles();
  // # This usestate is for the form data for example amount, category, type, date etc and we are passing the initialState as the initial value and we are destructuring the formData and setFormData from the useState.
  const [formData, setFormData] = useState(initialState);

  console.log(formData);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Salary">Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          value={formData.amuont}
          onChange={(e) => setFormData({ ...formData, amuont: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="Date"
          label="Date"
          fullWidth
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
