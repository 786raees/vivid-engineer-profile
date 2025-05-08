
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      quote:
        "Working with this developer was a game-changer for our company. They delivered a complex web application ahead of schedule and exceeded all our expectations. Their technical expertise and problem-solving skills are truly exceptional.",
    },
    {
      name: "Michael Chen",
      position: "CTO, InnovateCorp",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      quote:
        "I've worked with many developers over my 15-year career, but none have impressed me as much as this engineer. Their attention to detail, clean code practices, and ability to architect scalable solutions set them apart from others in the field.",
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager, CreativeDesign",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      quote:
        "The 3D visualization work they did for our product was nothing short of amazing. Our customers now have an interactive way to explore our offerings, and it has significantly increased our conversion rates. A true professional!",
    },
    {
      name: "David Kim",
      position: "Founder, StartupLaunch",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      quote:
        "From concept to execution, working with this developer was seamless. They took our vague idea and turned it into a beautifully functioning application. Their communication was clear, and they were always available to answer questions.",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container-section">
        <h2 className="section-heading">Client Testimonials</h2>

        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <div className="p-1">
                    <Card className="card-gradient border-none overflow-hidden h-full">
                      <CardContent className="p-6">
                        <div className="flex flex-col h-full">
                          <div className="mb-6">
                            <svg
                              className="h-8 w-8 text-primary"
                              fill="currentColor"
                              viewBox="0 0 32 32"
                              aria-hidden="true"
                            >
                              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                          </div>
                          <p className="text-muted-foreground mb-6 flex-grow">
                            {testimonial.quote}
                          </p>
                          <div className="flex items-center">
                            <div className="relative h-10 w-10 rounded-full overflow-hidden mr-4">
                              <div className="w-full h-full bg-secondary flex items-center justify-center">
                                {testimonial.image ? (
                                  <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <span className="text-lg font-medium">
                                    {testimonial.name[0]}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold">
                                {testimonial.name}
                              </h4>
                              <p className="text-muted-foreground text-sm">
                                {testimonial.position}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
