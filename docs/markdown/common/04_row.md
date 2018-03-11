**Row** wraps the **Column** components and is responsible for how columns are ordered, aligned and distributed across the available space.

All props of **Row** are [responsive-props](https://www.npmjs.com/package/responsive-props), and accept a values in any of the formats described in the [responsive-props API](https://www.npmjs.com/package/responsive-props#api).

Available props are described in detail bellow.

> The examples bellow assumes you have followed the steps in **Getting started**.

 ---
 ```javascript
 /// Row import path
 import { Row } from 'styledFlexboxGrid';
 ```

 ### Props
 | property         | type                 | Description                                                 | Default      |[responsive-props](https://www.npmjs.com/package/responsive-props)|
 |------------------|----------------------|-------------------------------------------------------------|--------------|------------------------------------------------------------------|
 | align            | String               | Sets the alignment of columns                               | -            | Yes                                                              |
 | justify          | String               | Determines how columns should be distributes across the row | -            | Yes                                                              |
 | direction        | String               | Determines how columns should be ordered                    | -            | Yes                                                              |
 | fullWidth        | Boolean              | Allows for row to take up the full width of it's parent     | false        | Yes                                                              |
 | center           | Number               | Centers the row                                             | true         | Yes                                                               |

 ---
