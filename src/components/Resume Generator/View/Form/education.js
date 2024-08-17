import { SaveEducationData, ModifyEducationCount } from "../../../../actions/auth";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
  Paper
} from "@material-ui/core";


import { connect } from "react-redux";
import { propTypes } from "react-bootstrap/esm/Image";



const useStyles = makeStyles((theme) => ({
  deleteButton: {
   marginRight: "1%"
  },
  addButton: {

  },
  footer: {
    alignItems: "left",
    padding: "1%"
  },

  instance: {
    marginBottom: "1%",
    padding: "1%"
  }
 
  
}));



const EducationForm = ({educationFormData}) => {
  const classes = useStyles();


  const handleChange = (index) => (event) =>  {
   const {name , value} = event.target;
   const list = [educationFormData.Data];
   console.log(index+1 , list.length)
   if(index+1 > list.length){
    while(index+1 != list.length){
      list.push({courseName: null , completionYear: null, college: null , percentage: null })
    }
   }
   console.log(list)
   list[index][name] =value;
   SaveEducationData(list)
  };



  const onSubmit = (data) => {
    console.log(data)
  }

const Deleteducation = () => {
  console.log("Decreasing count")
  const list = [educationFormData.Data];
  list.pop();
  SaveEducationData(list)
  ModifyEducationCount( educationFormData.Count-1)
}

const AddEducation = () => {
  const list = [educationFormData.Data];
  list.push({courseName: null , completionYear: null, college: null , percentage: null });
  SaveEducationData(list)
  ModifyEducationCount( educationFormData.Count+1)
}



  let Form = [];
  for (let i = 0; i <  educationFormData.Count ; i++) {
    Form.push(
      <div className={classes.instance}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              required
              fullWidth
              name={`courseName`}
              defaultValue={educationFormData.Data && educationFormData.Data[i] ? educationFormData.Data[i].courseName : ""}
              label="Course Name"
              onChange={handleChange(i)}
              variant="outlined"
              formControlProps={{
                fullWidth: true
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              required
              fullWidth
              name={`completionYear`}
              defaultValue={educationFormData.Data && educationFormData.Data[i] ? educationFormData.Data[i].completionYear : ""}
              label="Completion Year"
              type="number"
              onChange={handleChange(i)}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              required
              fullWidth
              defaultValue={educationFormData.Data && educationFormData.Data[i] ? educationFormData.Data[i].college : ""}
              name={`college`}
              label="College/School"
              onChange={handleChange(i)}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              required
              fullWidth
              defaultValue={educationFormData.Data && educationFormData.Data[i] ? educationFormData.Data[i].percentage : ""}
              name={`percentage`}
              label="Percentage"
              onChange={handleChange(i)}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Divider />
      </div>
    );
  }

  return (
    <>
      <form autoComplete="off" noValidate>
        <Card>
          <CardHeader subheader="Add your Education Details" /> 
          {Form.map((instance) => instance)}
          <div className={classes.footer}>
           <Button disabled={educationFormData.Count<2} className={classes.deleteButton} onClick={Deleteducation} variant="outlined" color="primary" >
            Delete
          </Button>
          <Button  className={classes.addButton} onClick={AddEducation} variant="contained" color="primary">
            ADD EDUCATION
          </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  educationFormData: state.Education
});

EducationForm.propTypes = {
  educationFormData: propTypes
};

export default connect(mapStateToProps, {SaveEducationData , ModifyEducationCount })(EducationForm);
