import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState(0);
  const [activeTab, setActiveTab] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    problem: "",
    serviceType: "",
    urgency: "normal",
  });

  const services = [
    { id: "diagnostics", name: "Диагностика ПК", price: 500, icon: "Search" },
    { id: "os-install", name: "Установка ОС", price: 1500, icon: "HardDrive" },
    {
      id: "virus-removal",
      name: "Удаление вирусов",
      price: 1000,
      icon: "Shield",
    },
    {
      id: "hardware-repair",
      name: "Ремонт железа",
      price: 2000,
      icon: "Wrench",
    },
    {
      id: "data-recovery",
      name: "Восстановление данных",
      price: 3000,
      icon: "Database",
    },
    { id: "network-setup", name: "Настройка сети", price: 800, icon: "Wifi" },
    {
      id: "software-install",
      name: "Установка ПО",
      price: 600,
      icon: "Download",
    },
    { id: "pc-assembly", name: "Сборка ПК", price: 2500, icon: "Cpu" },
  ];

  const toggleService = (serviceId: string, price: number) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter((id) => id !== serviceId));
      setTotalCost(totalCost - price);
    } else {
      setSelectedServices([...selectedServices, serviceId]);
      setTotalCost(totalCost + price);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заявка отправлена:", formData);
  };

  return (
    <div className="min-h-screen bg-background font-['Open_Sans']">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Monitor" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-secondary font-['Roboto']">
                TechMaster
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => setActiveTab("home")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "home"
                    ? "bg-primary text-white"
                    : "text-secondary hover:bg-accent"
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveTab("services")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "services"
                    ? "bg-primary text-white"
                    : "text-secondary hover:bg-accent"
                }`}
              >
                Услуги
              </button>
              <button
                onClick={() => setActiveTab("calculator")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "calculator"
                    ? "bg-primary text-white"
                    : "text-secondary hover:bg-accent"
                }`}
              >
                Калькулятор
              </button>
              <button
                onClick={() => setActiveTab("contact")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "contact"
                    ? "bg-primary text-white"
                    : "text-secondary hover:bg-accent"
                }`}
              >
                Контакты
              </button>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Вызвать мастера
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {activeTab === "home" && (
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-6 font-['Roboto']">
              Профессиональный ремонт компьютеров
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Быстро, надежно, с гарантией. Диагностика, ремонт, настройка любой
              сложности
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => setActiveTab("services")}
              >
                <Icon name="Wrench" size={20} className="mr-2" />
                Наши услуги
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => setActiveTab("calculator")}
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Калькулятор цен
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {activeTab === "services" && (
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 font-['Roboto'] text-secondary">
              Наши услуги
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="text-center">
                    <Icon
                      name={service.icon}
                      size={48}
                      className="mx-auto mb-4 text-primary"
                    />
                    <CardTitle className="text-lg font-['Roboto']">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-2xl font-bold text-primary mb-4">
                      от {service.price} ₽
                    </p>
                    <Button
                      className="w-full"
                      onClick={() => setActiveTab("contact")}
                    >
                      Заказать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Calculator Section */}
      {activeTab === "calculator" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 font-['Roboto'] text-secondary">
              Калькулятор стоимости
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-['Roboto']">
                    Выберите необходимые услуги
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedServices.includes(service.id)
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => toggleService(service.id, service.price)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Icon
                              name={service.icon}
                              size={24}
                              className="text-primary"
                            />
                            <span className="font-medium">{service.name}</span>
                          </div>
                          <Badge
                            variant={
                              selectedServices.includes(service.id)
                                ? "default"
                                : "secondary"
                            }
                          >
                            {service.price} ₽
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center text-2xl font-bold">
                      <span>Итого:</span>
                      <span className="text-primary">{totalCost} ₽</span>
                    </div>
                    <Button
                      className="w-full mt-4"
                      size="lg"
                      onClick={() => setActiveTab("contact")}
                      disabled={selectedServices.length === 0}
                    >
                      Заказать выбранные услуги
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Contact & Diagnostic Form */}
      {activeTab === "contact" && (
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 font-['Roboto'] text-secondary">
              Заказать услугу
            </h2>
            <div className="max-w-2xl mx-auto">
              <Tabs defaultValue="order" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="order">Заказать вызов</TabsTrigger>
                  <TabsTrigger value="diagnostic">
                    Диагностика проблем
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="order">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl font-['Roboto']">
                        Онлайн заявка на вызов мастера
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Имя *</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Телефон *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="address">Адрес *</Label>
                          <Input
                            id="address"
                            value={formData.address}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                address: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="serviceType">Тип услуги</Label>
                          <Select
                            onValueChange={(value) =>
                              setFormData({ ...formData, serviceType: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите услугу" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service.id} value={service.id}>
                                  {service.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="urgency">Срочность</Label>
                          <Select
                            onValueChange={(value) =>
                              setFormData({ ...formData, urgency: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите срочность" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="normal">
                                Обычная (1-2 дня)
                              </SelectItem>
                              <SelectItem value="urgent">
                                Срочная (в течение дня)
                              </SelectItem>
                              <SelectItem value="emergency">
                                Экстренная (немедленно)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="problem">Описание проблемы</Label>
                          <Textarea
                            id="problem"
                            value={formData.problem}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                problem: e.target.value,
                              })
                            }
                            placeholder="Опишите проблему подробно..."
                            rows={4}
                          />
                        </div>
                        <Button type="submit" className="w-full" size="lg">
                          <Icon name="Send" size={20} className="mr-2" />
                          Отправить заявку
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="diagnostic">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl font-['Roboto']">
                        Диагностика проблем
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="p-4">
                            <div className="flex items-center space-x-3 mb-3">
                              <Icon
                                name="Power"
                                size={24}
                                className="text-primary"
                              />
                              <h3 className="font-semibold">
                                Проблемы с загрузкой
                              </h3>
                            </div>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                              <li>• Компьютер не включается</li>
                              <li>• Зависает при загрузке</li>
                              <li>• Синий экран смерти</li>
                            </ul>
                          </Card>
                          <Card className="p-4">
                            <div className="flex items-center space-x-3 mb-3">
                              <Icon
                                name="Zap"
                                size={24}
                                className="text-primary"
                              />
                              <h3 className="font-semibold">
                                Проблемы с производительностью
                              </h3>
                            </div>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                              <li>• Медленная работа</li>
                              <li>• Зависания программ</li>
                              <li>• Перегрев системы</li>
                            </ul>
                          </Card>
                          <Card className="p-4">
                            <div className="flex items-center space-x-3 mb-3">
                              <Icon
                                name="Wifi"
                                size={24}
                                className="text-primary"
                              />
                              <h3 className="font-semibold">
                                Проблемы с сетью
                              </h3>
                            </div>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                              <li>• Нет подключения к интернету</li>
                              <li>• Медленная скорость</li>
                              <li>• Проблемы с Wi-Fi</li>
                            </ul>
                          </Card>
                          <Card className="p-4">
                            <div className="flex items-center space-x-3 mb-3">
                              <Icon
                                name="Shield"
                                size={24}
                                className="text-primary"
                              />
                              <h3 className="font-semibold">
                                Проблемы с безопасностью
                              </h3>
                            </div>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                              <li>• Подозрение на вирусы</li>
                              <li>• Странное поведение системы</li>
                              <li>• Всплывающие окна</li>
                            </ul>
                          </Card>
                        </div>
                        <div className="text-center">
                          <p className="text-muted-foreground mb-4">
                            Не можете определить проблему? Наш мастер проведет
                            диагностику и определит причину неисправности.
                          </p>
                          <Button
                            size="lg"
                            onClick={() => setActiveTab("contact")}
                          >
                            <Icon name="Search" size={20} className="mr-2" />
                            Заказать диагностику
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Monitor" size={24} className="text-primary" />
                <h3 className="text-xl font-bold font-['Roboto']">
                  TechMaster
                </h3>
              </div>
              <p className="text-gray-300">
                Профессиональный ремонт и обслуживание компьютерной техники с
                2010 года
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@techmaster.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Преимущества</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Гарантия на все работы</li>
                <li>• Выезд на дом</li>
                <li>• Оригинальные запчасти</li>
                <li>• Опытные мастера</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechMaster. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
