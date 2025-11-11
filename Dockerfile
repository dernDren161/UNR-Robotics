# start from official minimal ROS2 Humble image
FROM ros:humble-ros-core

ENV DEBIAN_FRONTEND=noninteractive

# install demo nodes, turtlesim and rosbridge (websocket)
RUN apt-get update && apt-get install -y \
    ros-humble-demo-nodes-cpp \
    ros-humble-turtlesim \
    ros-humble-rosbridge-server \
    && rm -rf /var/lib/apt/lists/*

# make /ros_entrypoint.sh the entrypoint (provided by base image)
ENTRYPOINT ["/ros_entrypoint.sh"]
CMD ["bash"]
