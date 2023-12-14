"""Welcome to Nextpy! This file outlines the steps to create a basic app."""
from xtconfig import config

import nextpy as xt


class State(xt.State):
    """The app state."""

    pass


def index():
    _main =xt.container(
        xt.box(
            xt.box(
                xt.image(src="./icon.svg",width="200px",height="200px",margin_top="160px",margin_left="30px"),
                xt.text("Nextpy",fontSize="80px",color="black",font_weight="bold",margin_top="175px",),
                display="flex",
            ),
            xt.box(
                xt.box(
                    xt.box(
                        xt.text(
                            "Login to your account",
                            fontSize="35px",
                            color="#eaeaea",
                            font_weight="bold",
                            letter_spacing="1.3px",
                        ),
                        xt.text(
                            "The Pure Python Framework for Web Apps, Meticulously Optimized for AI agents. World's first AMS.",
                            fontSize="14px",
                            font_weight="bold",
                            width="350px",
                            margin_left="175px",
                            margin_top="12px",
                            color = "#dbdbdc"
                        ),
                        text_align="center",
                        padding_top = "60px"
                    ),
                    xt.box(
                        xt.form(
                        xt.vstack(
                            xt.input(
                                placeholder="Email / Phone number",
                                name="first_name",
                                width = "240px",
                                border="none",
                                bg = "#222222"
                            ),
                            xt.input(
                                placeholder="Password",
                                name="password",
                                width = "240px",
                                border="none",
                                bg = "#222222",
                            ),
                            xt.button(
                                "Login to your account",
                                 width = "240px",
                                 background_image= "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
                                 text_align ="left",
                                 font_weight = "bold"
                            ),
                            align_items = "left",
                            margin_left="60px",
                            margin_top="60px"
                        ),
                    ),
                        xt.form(
                        xt.vstack(
                            xt.input(
                                placeholder="Email / Phone number",
                                name="first_name",
                                width = "240px",
                                border="none",
                                bg = "#222222"
                            ),
                            xt.input(
                                placeholder="Password",
                                name="password",
                                width = "240px",
                                border="none",
                                bg = "#222222",
                            ),
                            xt.button(
                                "Login to your account",
                                 width = "240px",
                                 background_image= "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
                                 text_align ="right",
                                 font_weight = "bold"
                            ),
                            align_items = "right",
                            margin_left="90px",
                            margin_top="60px"
                        ),
                    ),
                    display = "flex"
                    ),
                    
                    width="700px",
                    height="500px",
                    bg="#1d1d1d",
                    margin_left="50px",
                    border_radius = "10px",
                    margin_top="40px"
                ),

            ),
            display="flex",
        ),
        
        maxWidth ="auto",
        height = "100vh",
        bg="#d8cafc",
    )
    return _main


# Add state and page to the app.
app = xt.App()
app.add_page(index)
app.compile()
