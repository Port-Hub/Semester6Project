package com.bihan.boilerplate.rest;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
class RestApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@Test
	void testGetStudentWithId() throws Exception {
		long studentId = 1; // Change this to a valid student ID
		mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/student/" + studentId)
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isOk());
	}

	@Test
	void testGetCourseWithId() throws Exception {
		long courseId = 1; // Change this to a valid course ID
		mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/course/" + courseId)
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isOk());
	}

	// @Test
	// void testCreateNewStudent() throws Exception {
	// 	String requestBody = "{\n" +
	// 			"    \"name\": \"John Doecvzx\",\n" +
	// 			"    \"email\": \"jozxcvhndoe@examzxcvzple.com\",\n" +
	// 			"    \"birthDate\": \"1990-01-01\",\n" +
	// 			"    \"phone\": \"+1234567890\",\n" +
	// 			"    \"address\": \"123 Main St\",\n" +
	// 			"    \"city\": \"Anytown\",\n" +
	// 			"    \"state\": \"AnyState\",\n" +
	// 			"    \"zip\": \"12345\",\n" +
	// 			"    \"country\": \"USA\"\n" +
	// 			"}";
	// 	mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/student/new")
	// 			.contentType(MediaType.APPLICATION_JSON)
	// 			.content(requestBody))
	// 			.andExpect(MockMvcResultMatchers.status().isOk());
	// }

	// @Test
	// void testCreateNewCourse() throws Exception {
	// 	String requestBody = "{\n" +
	// 			"    \"name\": \"Mathematics\",\n" +
	// 			"    \"description\": \"Introduction to mathematics\",\n" +
	// 			"    \"duration\": 3600000\n" + // Duration in milliseconds (1 hour)
	// 			"}";
	// 	mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/course/new")
	// 			.contentType(MediaType.APPLICATION_JSON)
	// 			.content(requestBody))
	// 			.andExpect(MockMvcResultMatchers.status().isOk());
	// }

	// @Test
	// void testEnrollStudentInCourse() throws Exception {
	// long studentId = 1; // Change this to a valid student ID
	// long courseId = 1; // Change this to a valid course ID
	// mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/course/enroll")
	// .contentType(MediaType.APPLICATION_JSON)
	// .param("studentId", String.valueOf(studentId))
	// .param("courseId", String.valueOf(courseId)))
	// .andExpect(MockMvcResultMatchers.status().isOk());
	// }

}
