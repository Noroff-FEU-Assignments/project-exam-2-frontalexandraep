/*import React from "react";
import axios from "axios";
import Form from "react-bootstrap/form";
import useAxios from "../../../../hooks/useAxios";
import { BASE_URL } from "../../../../constants/api";

export default function ImgUpload() {
  const http = useAxios();
  const url = BASE_URL + "upload";

  async function handleChange(event) {
    event.preventDefault();
    const data = new FormData();
    data.append()

    try {
      const response = await http.post(url, data)
    } catch
  }
}

/*<Form.File name="file" onChange={this.handleChange} label="Add image" custom />*/