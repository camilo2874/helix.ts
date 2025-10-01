# helix.ts

[![GitHub Release](https://img.shields.io/github/v/release/mountayaapp/helix.ts)](https://github.com/mountayaapp/helix.ts/releases/latest)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

helix.ts is designed for consuming public-facing types exposed by services written
with helix.go.

## Example

```typescript
import axios from "axios";

import type { Event } from "@mountayaapp/helix/event";
import type { Response } from "@mountayaapp/helix/integration/rest";

type Metadata = {
  event: Event;
};

type Data = {
  // ...
};

await axios.get<Response<Metadata, Data>>("/anything");
```

## License

Repository licensed under the [MIT License](./LICENSE.md).
