Columns make up the majority of the layout in a grid. The ***Column*** componets are wrapped by the ***Row*** component and comes with a lot of props to controll the layout.

All props of ***Column*** are [responsive-props](https://www.npmjs.com/package/responsive-props), and accept a values in any of the formats described in the [responsive-props API](https://www.npmjs.com/package/responsive-props#api).

Available props are described in detail bellow.

> The examples bellow asumes you have followed the steps in ***Setup***, and wrapped your componetns in the ***styled-components*** ***ThemeProvider***.

```javascript
/// Column import path
import { Column } from 'styledFlexboxGrid';
```

### Props
| property         | type                 | Description                                        | Default      |[responsive-props](https://www.npmjs.com/package/responsive-props)|
|------------------|----------------------|----------------------------------------------------|--------------|------------------------------------------------------------------|
| span             | Number               | Number of columns to span across                   | 1            | Yes                                                              |
| grow             | Number               | Flex grow property                                 | 0            | Yes                                                              |
| shrink           | Number               | Flex shrink property                               | 0            | Yes                                                              |
| offset           | Number               | Offsets the column                                 | 0            | Yes                                                              |
| align            | Number               | Set the alignment relative to other columns        | 0            | Yes                                                              |
| order            | Number               | Changed the order of the column                    | 0            | Yes                                                              |
| hidden           | Boolean              | Hides the column                                   | false        | Yes                                                              |
| fixed            | Boolean              | The column retains it's calculated size in pixels  | false        | Yes                                                              |
| gutterless       | Boolean              | Removes the gutter                                 | false        | Yes                                                              |

---
