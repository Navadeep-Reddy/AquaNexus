class TrafficLight:
    def __init__(self):
        self.state =  RedLight()
        print("Light is Red")

    def change(self):
        self.state.change(self)

class RedLight:
    def change(self, light):
        light.state = YellowLight()
        print("Light is Yellow")

class YellowLight:
    def change(self, light):
        light.state = GreenLight()
        print("Light is Green")


class GreenLight:
    def change(self, light):
        light.state = RedLight()
        print("Light is Red")


def main():
    obj = TrafficLight()
    for i in range(6):
        obj.change()
main()