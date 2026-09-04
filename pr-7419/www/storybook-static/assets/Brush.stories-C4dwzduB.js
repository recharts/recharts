import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-CfT4cgn7.js";import{n as a,t as o}from"./Tooltip-YHivrOZa.js";import{n as s,t as c}from"./Brush-BT3Khapq.js";import{n as l,t as u}from"./Line---TR8N4V.js";import{n as d,t as f}from"./Area-CqYIOjBK.js";import{n as p,t as m}from"./Bar-CQB3-sR3.js";import{n as h,t as g}from"./Scatter-1pIxgP4h.js";import{n as _,t as v}from"./ScatterChart-CRWwXPlP.js";import{n as y,t as b}from"./ComposedChart-CZOHGVI-.js";import{r as x,t as S}from"./Page-DUsfWi7y.js";import{n as C,t as w}from"./utils-vqcWnakT.js";var T;function E(){return(E=t((()=>{T={alwaysShowText:{description:`When true, the start and end index labels are always visible. By
default, they only appear while the user is interacting with the brush
(dragging, hovering, or focused via keyboard).`,control:{type:`boolean`},table:{type:{summary:`boolean`},category:`General`,defaultValue:{summary:`false`}},defaultValue:!1},ariaLabel:{description:`Custom accessible label applied to the brush's traveller handles. If
not provided, one is generated automatically from the data at the
current start and end index.`,control:{type:`text`},table:{type:{summary:`string`},category:`General`}},children:{description:`A single chart element (e.g. an AreaChart) rendered as a small preview
inside the brush, showing an overview of the full dataset. If zero or
more than one child is passed, nothing is rendered.`,table:{type:{summary:`ReactNode`},category:`General`}},className:{description:`The SVG element's class name.`,control:{type:`text`},table:{type:{summary:`string`},category:`Style`}},dataKey:{description:`The data that you provide via the \`data\` prop is an array of objects.
Each object can have multiple properties, each representing a different data dimension.
Use the \`dataKey\` prop to specify which property (or dimension) to use for this component.

Typically, you will want to have one dataKey on the X axis, and different dataKey on the Y axis,
where they extract different values from the same data objects.

Decides how to extract the value from the data:
- \`string\`: the name of the field in the data object;
- \`number\`: the index of the field in the data;
- \`function\`: a function that receives the data object and returns the value.`,table:{type:{summary:`TypedDataKey<DataPointType, DataValueType>`},category:`General`}},dy:{description:`Vertical offset added to the brush's computed y-coordinate.`,table:{type:{summary:`number | string`},category:`General`}},endIndex:{description:`The default end index of brush.
If the option is not set, the end index will be calculated by the length of data.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`}},gap:{description:`Number of data points to skip between chart refreshes.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`1`}},defaultValue:1},height:{description:`Height of the brush in pixels.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`40`}},defaultValue:40},leaveTimeOut:{description:`Delay, in milliseconds, after the mouse leaves the brush, before an
in-progress drag interaction is ended.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`1000`}},defaultValue:1e3},onChange:{description:`The handler of changing the active scope of brush.`,table:{type:{summary:`OnBrushUpdate`},category:`Events`}},onDragEnd:{description:`The handler called when the user finishes dragging a traveller or the
brush slide, receiving the final startIndex and endIndex.`,table:{type:{summary:`OnBrushUpdate`},category:`Events`}},padding:{description:`Padding applied only to the small overview chart rendered inside the
brush (via \`children\`) has no effect on the brush's own position or
size.`,table:{type:{summary:`Padding`},category:`General`,defaultValue:{summary:`{"top":1,"right":1,"bottom":1,"left":1}`}},defaultValue:{top:1,right:1,bottom:1,left:1}},startIndex:{description:`The default start index of brush.
If the option is not set, the start index will be 0.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`}},tickFormatter:{description:`The formatter function of ticks.`,table:{type:{summary:`BrushTickFormatter`},category:`General`}},traveller:{description:`Custom element or render function used to render each draggable handle
(the "traveller") at the start and end of the selection. Defaults to a
small rectangle with two vertical lines.`,table:{type:{summary:`Function | ReactNode`},category:`General`}},travellerWidth:{description:`The width of each traveller.`,control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`5`}},defaultValue:5},width:{description:`Width of the brush in pixels.
If undefined, defaults to the chart width.`,table:{type:{summary:`number | string`},category:`General`}},x:{description:`The x-coordinate of brush.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:`number | string`},category:`General`}},y:{description:`The y-coordinate of brush.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:`number | string`},category:`General`}}}})))()}var D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=t((()=>{D=e(n()),S(),s(),i(),y(),l(),d(),p(),h(),_(),a(),C(),E(),{fireEvent:O,within:k,expect:A}=__STORYBOOK_MODULE_TEST__,j={component:c,argTypes:T},M={render:e=>D.createElement(r,{width:`100%`,height:400},D.createElement(b,{data:x},D.createElement(u,{dataKey:`uv`}),D.createElement(c,e))),args:w(T),play:async({canvasElement:e})=>{let t=(await k(e).findAllByRole(`slider`))[0];A(t).toBeTruthy(),O.mouseDown(t),O.mouseMove(t,{clientX:200}),O.mouseUp(t)}},N={render:e=>D.createElement(r,{width:`100%`,height:400},D.createElement(b,{data:x},D.createElement(u,{dataKey:`uv`}),D.createElement(o,null),D.createElement(c,e,D.createElement(b,{data:x},D.createElement(u,{dataKey:`uv`}))))),args:w(T)},P={render:e=>D.createElement(r,{width:`100%`,height:400},D.createElement(b,{data:x},D.createElement(f,{dataKey:`uv`}),D.createElement(c,e,D.createElement(b,{data:x},D.createElement(f,{dataKey:`uv`}))))),args:w(T)},F={render:e=>D.createElement(r,{width:`100%`,height:400},D.createElement(b,{data:x},D.createElement(m,{dataKey:`uv`}),D.createElement(c,e,D.createElement(b,{data:x},D.createElement(m,{dataKey:`uv`}))))),args:w(T)},I={render:e=>D.createElement(r,{width:`100%`,height:400},D.createElement(v,{data:x},D.createElement(g,{dataKey:`uv`}),D.createElement(c,e,D.createElement(v,{data:x},D.createElement(g,{dataKey:`uv`}))))),args:w(T)},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L=[`API`,`PanoramaWithLine`,`PanoramaWithArea`,`PanoramaWithBar`,`PanoramaWithScatter`]})))()}R();export{M as API,P as PanoramaWithArea,F as PanoramaWithBar,N as PanoramaWithLine,I as PanoramaWithScatter,L as __namedExportsOrder,j as default};