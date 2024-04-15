/*
 * Copyright 2024 Jorge Toro Hoyos (jolthgs@gmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

import config from "config";
import express from "express";
import deviceRoutes from "./routes/devices.js";

const httpServer = config.get("api.httpServer");

const app = express();
app.use(express.json());

app.use('/devices', deviceRoutes);

app.get('/', (req, res) => {
  res.status(200).send('oinik storage')
})

app.listen(httpServer.port, httpServer.host, () => {
  console.log(`oinik storage running on port ${httpServer.port}`);
})
