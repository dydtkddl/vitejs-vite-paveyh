import React, { useState, useEffect } from 'react';
import {
  Grid,
  Divider,
  TextField,
  Button,
  Box,
  Slider,
  Paper,
  Typography,
  Avatar,
  AppBar,
} from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import { Data, initialData } from './Data.jsx';
import { useForm, Form } from '../components/useForm.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import { PrettoSlider } from '../components/Slider';
const useStyle = makeStyles((theme) => ({
  nextBtn: {
    width: '150px',
  },
}));

const Page = { 1: 'H', 2: 'L', 3: 'SDT', 4: 'resultWait' };

export default function SurveyForm() {
  const classes = useStyle();
  const { values, setValues, valueChange } = useForm(initialData);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  // 사용자가 선택한 값을 표시할 때 허용 범위를 벗어나지 않도록 조정
  const valueLabelFormat = (value) => {
    if (value < 0) {
      return 0; // 최솟값으로 설정
    } else if (value > 10) {
      return 10; // 최댓값으로 설정
    } else {
      return value;
    }
  };
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 25,
      label: '25',
    },
    {
      value: 50,
      label: '50',
    },
    {
      value: 75,
      label: '75',
    },
    {
      value: 100,
      label: '100',
    },
  ];
  // 다음 페이지로 이동하는 함수
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1); // 현재 페이지 상태를 업데이트하여 다음 페이지로 이동
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Form>
      {/* H Question */}
      <Typography variant="p" component="subtitle2">
        Surveys > "Leadership Discretion Survey"
      </Typography>
      <Divider orientation="horizontal" flexItem />
      <br />
      <Grid
        container
        name="H"
        style={{ display: currentPage === 1 ? 'flex' : 'none' }}
      >
        <Grid item xs={12} sx={{ marginTop: '10px', marginBottom: '50px' }}>
          <Typography variant="h6" component="subtitle2">
            Thank you for agreeing to participate in the leadership survey.
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: 'red', fontWeight: 'medium' }}
            >
              Please provide your personal information first.
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Gender"
            name="H1"
            value={values.H1}
            onChange={valueChange}
          />
          <TextField
            variant="outlined"
            name="H2"
            label="Continent"
            value={values.H2}
            onChange={valueChange}
          />
          <TextField
            variant="outlined"
            name="H3"
            label="Age"
            onChange={valueChange}
            value={values.H3}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Choose following option describe you the best"
            name="H4"
            value={values.H1}
            onChange={valueChange}
          />
          <TextField
            variant="outlined"
            name="H5"
            label="Rate Your Leadership Score"
            value={values.H2}
            onChange={valueChange}
          />
        </Grid>
        <Grid item xs={12}>
          {/* 이게 소질문 집단 */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                  Before we delve into the survey,
                </Typography>
                <Typography sx={{ ml: 2 }} variant="subtitle1">
                  please rate your leadership skills on a scale of 1 to 100.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <PrettoSlider
                defaultValue={50}
                min={0}
                max={100}
                step={10}
                marks={marks}
                name="L_ST1"
                valueLabelDisplay="auto"
                onChange={valueChange}
                // 값 표시 포맷 지정
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Button
              sx={{ marginTop: '15px' }}
              className={classes.nextBtn}
              variant="contained"
              onClick={handleNextPage}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* L Question */}
      <Grid
        container
        name="L"
        style={{ display: currentPage === 2 ? 'flex' : 'none' }}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
        spacing={5}
      >
        <Grid item>
          <Paper elevation={10} sx={{ p: 5 }} variant="outlined">
            <Typography variant="h6" component="subtitle2">
              In this section, we will conduct a survey on a total of <b>8</b>{' '}
              key leadership discretion. <br />
              <Typography
                variant="subtitle1"
                component="p"
                sx={{ color: 'red', fontWeight: 'medium' }}
              >
                Please read the following description of each competency and
                rate your own competency in that competency on a scale of 100
                points.
              </Typography>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {/* 소질문 페이퍼 섹션 */}
          <Typography variant="h5" gutterBottom fontWeight="medium">
            01 : [System Thinking]
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <b>Systems thinking competency</b>: the abilities to recognize and
            understand relationships; to analyze complex systems; to think of
            how systems are embedded within different domains and different
            scales; and to deal with uncertainty.
          </Typography>
          <Paper elevation={10} sx={{ p: 5 }}>
            {/* 이게 소질문 집단 */}
            <Grid
              container
              spacing={2}
              sx={{ alignItems: 'flex-end', justifyContent: 'center' }}
            >
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Systems thinking - Q1
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The abilities to recognize and understand interrelationships
                    between all things
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Systems thinking - Q2
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to analyze complex systems
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST2"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Systems thinking - Q3
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to think of how systems are embedded within
                    different domains and different scales
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST3"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Systems thinking - Q4
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to deal with uncertainty
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST4"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {/* 소질문 페이퍼 섹션 */}
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="medium"
            sx={{ mt: 5 }}
          >
            02 : [Anticipatory]
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <b>Anticipatory competency</b>: the ability to understand and
            evaluate multiple futures – possible, probable, and desirable; to
            create visions for the future to apply the precautionary principle,
            to assess the consequences of actions, and to deal with risks and
            changes.
          </Typography>
          <Paper elevation={10} sx={{ p: 5 }}>
            {/* 이게 소질문 집단 */}
            <Grid
              container
              spacing={2}
              sx={{ alignItems: 'flex-end', justifyContent: 'center' }}
            >
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Anticipatory - Q1
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to understand and evaluate multiple futures –
                    possible, probable and desirable
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_A1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Anticipatory - Q2
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to create one’s own visions for the future
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_A2"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Anticipatory - Q3
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to apply the precautionary principle
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_A3"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Anticipatory - Q4
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to assess the consequences of actions
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_A4"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Anticipatory - Q5
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to deal with risks and changes
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_A5"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {/* 소질문 페이퍼 섹션 */}
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="medium"
            sx={{ mt: 5 }}
          >
            03 : [Normative]
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <b>Normative competency</b>: the abilities to understand and reflect
            on the norms and values that underlie one’s actions; and to
            negotiate sustainability values, principles, goals, and targets in a
            context of conflicts of interests and trade-offs, uncertain
            knowledge, and contradictions.
          </Typography>
          <Paper elevation={10} sx={{ p: 5 }}>
            {/* 이게 소질문 집단 */}
            <Grid
              container
              spacing={2}
              sx={{ alignItems: 'flex-end', justifyContent: 'center' }}
            >
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Normative - Q1
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to understand and reflect on the norms and
                    values that underlie one’s actions
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_N1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Normative - Q2
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to negotiate sustainability values, principles,
                    goals, and targets, in a context of conflicts of interests
                    and trade-offs, uncertain knowledge and contradiction
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_N2"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {/* 소질문 페이퍼 섹션 */}
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="medium"
            sx={{ mt: 5 }}
          >
            04 : [Strategic]
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <b>Strategic competency</b>: the abilities to collectively develop
            and implement innovative actions that further sustainability at the
            local level and further afield.
          </Typography>
          <Paper elevation={10} sx={{ p: 5 }}>
            {/* 이게 소질문 집단 */}
            <Grid
              container
              spacing={2}
              sx={{ alignItems: 'flex-end', justifyContent: 'center' }}
            >
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Strategic - Q1
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to collectively develop and implement innovative
                    actions that further sustainability at the local level and
                    further afield
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_S1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Strategic - Q2
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to intervene and transition into situations,
                    develop and select strategic options to transform and
                    improve governance
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_S2"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {/* 소질문 페이퍼 섹션 */}
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="medium"
            sx={{ mt: 5 }}
          >
            05 : [Collaboration]
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <b>Collaboration competency</b>: the abilities to learn from others;
            to understand and respect the needs, perspectives, and actions of
            others (empathy); to understand, relate to and be sensitive to
            others (empathic leadership); to deal with conflicts in a group; and
            to facilitate collaborative and participatory problem-solving.
          </Typography>
          <Paper elevation={10} sx={{ p: 5 }}>
            {/* 이게 소질문 집단 */}
            <Grid
              container
              spacing={2}
              sx={{ alignItems: 'flex-end', justifyContent: 'center' }}
            >
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Collaboration - Q1
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to learn from others
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_C1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Collaboration - Q2
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to understand and respect the needs,
                    perspectives and actions of others (empathy)
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_C2"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Collaboration - Q3
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to understand, relate to and be sensitive to
                    others (empathic leadership)
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_C3"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Collaboration - Q4
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to deal with conflicts in a group
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_C4"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Collaboration - Q5
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to facilitate collaborative and participatory
                    problem solving
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_C5"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {/* 소질문 페이퍼 섹션 */}
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="medium"
            sx={{ mt: 5 }}
          >
            06 : [Critical thinking]
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <b>Critical thinking competency</b>: the ability to question norms,
            practices, and opinions, to reflect on one’s own values,
            perceptions, and actions, and to take a position in the
            sustainability discourse.
          </Typography>
          <Paper elevation={10} sx={{ p: 5 }}>
            {/* 이게 소질문 집단 */}
            <Grid
              container
              spacing={2}
              sx={{ alignItems: 'flex-end', justifyContent: 'center' }}
            >
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Critical thinking - Q1
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to question norms, practices and opinions
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_CT1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Critical thinking - Q2
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to reflect on own one’s values, perceptions and
                    actions
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_CT2"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Critical thinking - Q3
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to take a position in the sustainability
                    discourse
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_CT3"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {/* 소질문 페이퍼 섹션 */}
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="medium"
            sx={{ mt: 5 }}
          >
            07 : [Self-awareness]
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <b>Self-awareness competency</b>: the ability to reflect on one’s
            own role in the local community and (global) society; to continually
            evaluate and further motivate one’s actions and to deal with one’s
            feelings and desires.
          </Typography>
          <Paper elevation={10} sx={{ p: 5 }}>
            {/* 이게 소질문 집단 */}
            <Grid
              container
              spacing={2}
              sx={{ alignItems: 'flex-end', justifyContent: 'center' }}
            >
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Self-awareness - Q1
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to reflect on my own role in the local community
                    and (global) society
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_SA1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Self-awareness - Q2
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to continually evaluate and further motivate
                    one’s actions
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_SA2"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Self-awareness - Q3
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to deal with one’s feelings and desires
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_SA3"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {/* 소질문 페이퍼 섹션 */}
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="medium"
            sx={{ mt: 5 }}
          >
            08 : [Integrated Problem-solving]
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <b>Integrated problem-solving competency</b>: the overarching
            ability to apply different problem-solving frameworks to complex
            sustainability problems and develop viable, inclusive and equitable
            solution options that promote sustainable development, integrating
            the competencies mentioned earlier.
          </Typography>
          <Paper elevation={10} sx={{ p: 5 }}>
            {/* 이게 소질문 집단 */}
            <Grid
              container
              spacing={2}
              sx={{ alignItems: 'flex-end', justifyContent: 'center' }}
            >
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Integrated problem-solving competency - Q1
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to use a variety of systems to address complex
                    issues of sustainable development
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_PS1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    Integrated problem-solving competency - Q2
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    The ability to apply different problem-solving frameworks to
                    complex sustainability problems and develop viable,
                    inclusive and equitable solution options that promote
                    sustainable development, integrating the above-mentioned
                    competencies
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_PS2"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Button
              sx={{ marginTop: '45px' }}
              className={classes.nextBtn}
              variant="contained"
              onClick={handleNextPage}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* SDT Question */}

      <Grid
        container
        name="SDT"
        display="none"
        style={{ display: currentPage === 3 ? 'flex' : 'none' }}
      >
        <Grid item>
          <Paper elevation={10} sx={{ p: 5 }} variant="outlined">
            <Box>
              <img src="/assets/unmark.png"></img>
            </Box>
            <Typography variant="h6" component="subtitle2">
              This section surveys your interest in 17 sustainability topics.
              <br />
              United Nations' Sustainable Development Goals (SDGs) are a set of
              17 objectives aimed at promoting sustainable development globally.
              Here are the 17 SDGs
              <br />
              <Typography
                variant="subtitle1"
                component="p"
                sx={{ color: 'red', fontWeight: 'medium' }}
              >
                Please rate your level of interest in each topic on a scale of 1
                to 100 points.
              </Typography>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <br />
          <Paper elevation={10} sx={{ p: 5 }}>
            {/* 이게 소질문 집단 */}
            <Grid
              container
              spacing={2}
              sx={{ alignItems: 'flex-end', justifyContent: 'center' }}
            >
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 1. No Poverty
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Efforts to eradicate poverty and ensure a decent standard of
                    living for all.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 2: Zero Hunger
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Working towards ending hunger, achieving food security, and
                    promoting sustainable agriculture.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 3: Good Health and Well-being
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Improving health and well-being for individuals of all ages,
                    focusing on access to healthcare services.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 4: Quality Education
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Ensuring inclusive and equitable quality education for all,
                    promoting lifelong learning opportunities.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 5: Gender Equality
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Achieving gender equality and empowering all women and
                    girls, eliminating discrimination.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 6: Clean Water and Sanitation
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Ensuring access to clean water and adequate sanitation
                    facilities for all.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 7: Affordable and Clean Energy
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Promoting sustainable energy sources and ensuring access to
                    affordable, reliable, and modern energy for all.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 8: Decent Work and Economic Growth
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Promoting inclusive and sustainable economic growth, full
                    and productive employment, and decent work for all.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 9: Industry, Innovation and Infrastructure
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Building resilient infrastructure, promoting inclusive and
                    sustainable industrialization, fostering innovation.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 10: Reduced Inequality
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Reducing inequalities within and among countries, ensuring
                    equal opportunities for all.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 11: Sustainable Cities and Communities
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Making cities and human settlements inclusive, safe,
                    resilient, and sustainable.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 12: Responsible Consumption and Production
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Promoting sustainable consumption and production patterns,
                    resource efficiency, and waste reduction.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 13: Climate Action
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Combating climate change and its impacts, taking urgent
                    action to address its adverse effects.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 14: Life Below Water
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Conserving and sustainably using the oceans, seas, and
                    marine resources for sustainable development.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 15: Life on Land
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Protecting, restoring, and promoting the sustainable use of
                    terrestrial ecosystems, halting biodiversity loss.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 16: Peace and Justice Strong Institutions
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Promoting peaceful and inclusive societies, providing access
                    to justice for all, building effective, accountable, and
                    inclusive institutions.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box>
                  <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                    GOAL 17: Partnerships to achieve the Goal
                  </Typography>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    Strengthening the means of implementation and revitalizing
                    the global partnership for sustainable development.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <PrettoSlider
                  defaultValue={50}
                  min={0}
                  max={100}
                  step={10}
                  marks={marks}
                  name="L_ST1"
                  valueLabelDisplay="auto"
                  onChange={valueChange}
                  // 값 표시 포맷 지정
                />
              </Grid>
              <Grid item xs={12}>
                <Divider orientation="horizontal" flexItem />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Button
              sx={{ marginTop: '15px' }}
              className={classes.nextBtn}
              variant="contained"
              color="success"
              onClick={handleNextPage}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        name="resultWait"
        display="none"
        style={{ display: currentPage === 4 ? 'flex' : 'none' }}
      >
        Your submitted data will soon be analyzed and the results will be
        available shortly. Please wait for the analysis to be completed.{' '}
        <CircularProgress />
      </Grid>
    </Form>
  );
}
