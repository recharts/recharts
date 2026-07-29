import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{H as r,J as i,Rt as a,Vn as o,W as s,X as c,ct as l,g as u,t as d,u as f}from"./iframe-BqVvK_R4.js";import{t as p}from"./data-J2vpPkF6.js";import{r as m}from"./Page-C0w_0_Yr.js";import{n as h,t as g}from"./utils-4uF5A2JM.js";var _,v=e((()=>{_={alwaysShowText:{control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},ariaLabel:{control:{type:`text`},table:{type:{summary:`string`},category:`General`}},children:{table:{type:{summary:`ReactNode`},category:`General`}},className:{control:{type:`text`},table:{type:{summary:`string`},category:`Style`}},dataKey:{description:`The data that you provide via the \`data\` prop is an array of objects.
Each object can have multiple properties, each representing a different data dimension.
Use the \`dataKey\` prop to specify which property (or dimension) to use for this component.

Typically, you will want to have one dataKey on the X axis, and different dataKey on the Y axis,
where they extract different values from the same data objects.

Decides how to extract the value from the data:
- \`string\`: the name of the field in the data object;
- \`number\`: the index of the field in the data;
- \`function\`: a function that receives the data object and returns the value.`,table:{type:{summary:`TypedDataKey<DataPointType, DataValueType>`},category:`General`}},dy:{table:{type:{summary:`number | string`},category:`General`}},endIndex:{description:`The default end index of brush.
If the option is not set, the end index will be calculated by the length of data.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`}},gap:{description:`Number of data points to skip between chart refreshes.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`1`}},defaultValue:1},height:{description:`Height of the brush in pixels.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`40`}},defaultValue:40},leaveTimeOut:{control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`1000`}},defaultValue:1e3},onChange:{description:`The handler of changing the active scope of brush.`,table:{type:{summary:`OnBrushUpdate`},category:`Events`}},onDragEnd:{table:{type:{summary:`OnBrushUpdate`},category:`Events`}},padding:{table:{type:{summary:`Padding`},category:`General`,defaultValue:{summary:`{"top":1,"right":1,"bottom":1,"left":1}`}},defaultValue:{top:1,right:1,bottom:1,left:1}},startIndex:{description:`The default start index of brush.
If the option is not set, the start index will be 0.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`}},tickFormatter:{description:`The formatter function of ticks.`,table:{type:{summary:`BrushTickFormatter`},category:`General`}},traveller:{table:{type:{summary:`Function | ReactNode`},category:`General`}},travellerWidth:{description:`The width of each traveller.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`5`}},defaultValue:5},width:{description:`Width of the brush in pixels.
If undefined, defaults to the chart width.`,table:{type:{summary:`number | string`},category:`General`}},x:{description:`The x-coordinate of brush.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:`number | string`},category:`General`}},y:{description:`The y-coordinate of brush.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:`number | string`},category:`General`}}}})),y,b,x,S,C,w,T,E,D,O,k;e((()=>{y=t(n()),p(),d(),h(),v(),{fireEvent:b,within:x,expect:S}=__STORYBOOK_MODULE_TEST__,C={component:l,argTypes:_},w={render:e=>y.createElement(o,{width:`100%`,height:400},y.createElement(f,{data:m},y.createElement(c,{dataKey:`uv`}),y.createElement(l,e))),args:g(_),play:async({canvasElement:e})=>{let t=(await x(e).findAllByRole(`slider`))[0];S(t).toBeTruthy(),b.mouseDown(t),b.mouseMove(t,{clientX:200}),b.mouseUp(t)}},T={render:e=>y.createElement(o,{width:`100%`,height:400},y.createElement(f,{data:m},y.createElement(c,{dataKey:`uv`}),y.createElement(a,null),y.createElement(l,e,y.createElement(f,{data:m},y.createElement(c,{dataKey:`uv`}))))),args:g(_)},E={render:e=>y.createElement(o,{width:`100%`,height:400},y.createElement(f,{data:m},y.createElement(i,{dataKey:`uv`}),y.createElement(l,e,y.createElement(f,{data:m},y.createElement(i,{dataKey:`uv`}))))),args:g(_)},D={render:e=>y.createElement(o,{width:`100%`,height:400},y.createElement(f,{data:m},y.createElement(s,{dataKey:`uv`}),y.createElement(l,e,y.createElement(f,{data:m},y.createElement(s,{dataKey:`uv`}))))),args:g(_)},O={render:e=>y.createElement(o,{width:`100%`,height:400},y.createElement(u,{data:m},y.createElement(r,{dataKey:`uv`}),y.createElement(l,e,y.createElement(u,{data:m},y.createElement(r,{dataKey:`uv`}))))),args:g(_)},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Line dataKey="uv" />
        <Brush {...args} />
      </ComposedChart>
    </ResponsiveContainer>,
  args: getStoryArgsFromArgsTypesObject(BrushArgs),
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const slider = await canvas.findAllByRole('slider');
    const leftSlider = slider[0];
    expect(leftSlider).toBeTruthy();
    fireEvent.mouseDown(leftSlider);
    fireEvent.mouseMove(leftSlider, {
      clientX: 200
    });
    fireEvent.mouseUp(leftSlider);
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Line dataKey="uv" />
        <Tooltip />
        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" />
          </ComposedChart>
        </Brush>
      </ComposedChart>
    </ResponsiveContainer>,
  args: getStoryArgsFromArgsTypesObject(BrushArgs)
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Area dataKey="uv" />

        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Area dataKey="uv" />
          </ComposedChart>
        </Brush>
      </ComposedChart>
    </ResponsiveContainer>,
  args: getStoryArgsFromArgsTypesObject(BrushArgs)
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Bar dataKey="uv" />

        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Bar dataKey="uv" />
          </ComposedChart>
        </Brush>
      </ComposedChart>
    </ResponsiveContainer>,
  args: getStoryArgsFromArgsTypesObject(BrushArgs)
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => <ResponsiveContainer width="100%" height={400}>
      <ScatterChart data={pageData}>
        <Scatter dataKey="uv" />

        <Brush {...args}>
          <ScatterChart data={pageData}>
            <Scatter dataKey="uv" />
          </ScatterChart>
        </Brush>
      </ScatterChart>
    </ResponsiveContainer>,
  args: getStoryArgsFromArgsTypesObject(BrushArgs)
}`,...O.parameters?.docs?.source}}},k=[`API`,`PanoramaWithLine`,`PanoramaWithArea`,`PanoramaWithBar`,`PanoramaWithScatter`]}))();export{w as API,E as PanoramaWithArea,D as PanoramaWithBar,T as PanoramaWithLine,O as PanoramaWithScatter,k as __namedExportsOrder,C as default};