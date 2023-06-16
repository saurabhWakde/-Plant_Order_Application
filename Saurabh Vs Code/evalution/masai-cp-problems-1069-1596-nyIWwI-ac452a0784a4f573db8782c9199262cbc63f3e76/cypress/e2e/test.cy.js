import data from "../../submissionData.json"; // do not create this file

// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

data.forEach((ele) => {
  describe("Test", () => {
    let url = ele.submission_link;
    let acc_score = 1;
    if (url && url.trim().length) {
      it("The Navbar has been built with flex", () => {
        cy.visit(url);
        cy.get(".nav").should("have.css", "display", "flex");
        cy.get(".nav img");
        cy.get(".nav button");
        cy.get(".nav>div p");

        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1
      it("Top part has display flex & the basic structure", () => {
        cy.visit(url);
        cy.get(".top").should("have.css", "display", "flex");
        cy.get(".top").should("have.css", "flex-direction", "row");
        cy.get(".top").children("img").should("have.length", 4);
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1

      it("Mid Part has display grid and the basic structure", () => {
        cy.visit(url);
        cy.get(".mid").should("have.css", "display", "grid");

        cy.get(".mid").children("div").should("have.length", 8);

        cy.get(".mid>div img");
        cy.get(".mid>div p");
        cy.get(".mid>div h2");

        cy.then(() => {
          acc_score += 2;
        });
      }); // Giving a score of 2

      it("Bottom part has display flex and the basic structure", () => {
        cy.get(".bottom>div").children("img").should("have.length", 3);
        cy.get(".bottom>div").should("have.css", "display", "flex");
        cy.get(".bottom>div").should("have.css", "flex-direction", "row");
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1
      it(`Check the responsiveness in medium screen`, () => {
        cy.viewport(700, 800);
        cy.get(".nav>div")
          .should("not.be.visible")
          .then(() => {
            acc_score += 2;
          });
      }); // 2

      it(`Check the responsiveness in small screens`, () => {
        cy.viewport(400, 800);
        cy.get(".top").should("have.css", "flex-direction", "column");
        cy.get(".bottom>div").should("have.css", "flex-direction", "column");
        cy.then(() => {
          acc_score += 2;
        });
      }); // 2
    }
    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id: ele.id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  });
});
