import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Grid, Card, CardContent, Typography } from '@material-ui/core';
import { getTopPosts } from '../../actions/getTopPosts';
import useStyles from './topstyles';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const MESSAGE_MAX_LENGTH = 450;

const Top5 = () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);
  const sortedPosts = [...posts].sort((a, b) => b.likeCount - a.likeCount);
  const classes = useStyles();
  const containerRef = useRef(null);

  useEffect(() => {
    dispatch(getTopPosts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Grid container justify="center" alignItems="center">
        <CircularProgress />
      </Grid>
    );
  }

  const truncateText = (text) => {
    if (text.length <= MESSAGE_MAX_LENGTH) {
      return text;
    }
    return `${text.substring(0, MESSAGE_MAX_LENGTH)}...`;
  };

  const handleDownload = () => {
    const container = containerRef.current;

    html2canvas(container).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('top_posts.pdf');
    });
  };

  return (
    <div>
      <h1>Best 5 Experiences to have with TourGenie according to the Customer Reviews</h1>
      <button onClick={handleDownload}>Download as PDF</button>

      <Grid container spacing={3} ref={containerRef}>
        {sortedPosts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2" className={classes.reviewTitle}>
                  Review Title: {post.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" className={classes.reviewerName}>
                  Review posted by: {post.name}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" className={classes.postedAt}>
                  Review posted at: {post.createdAt.substring(0, 10)}
                </Typography>
                <Typography variant="body2" component="p" className={classes.reviewMessage}>
                  Review Message: {truncateText(post.message)}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" className={classes.totalLikes}>
                  Total Likes: {post.likeCount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Top5;
