import{e}from"./iframe-CpBR2FD-.js";import{g as d}from"./utils-ePvtT4un.js";import{B as n}from"./Brush-CCrW5g-F.js";import{R as u}from"./arrayEqualityCheck-DfVEXElD.js";import{C as r}from"./ComposedChart-B6g7a6-n.js";import{L as g}from"./Line-CNjCQiDV.js";import{R as h}from"./RechartsHookInspector-C3421ru3.js";import{T as V}from"./Tooltip-CPsaw20l.js";import{A as f}from"./Area-D8EWln9I.js";import{B as b}from"./Bar-DMhfWU20.js";import{S as v}from"./ScatterChart-95d6yDcG.js";import{S as C}from"./Scatter-qSOTgWzI.js";import{p as a}from"./Page-Cj8EiXz7.js";const o={alwaysShowText:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},ariaLabel:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},dataKey:{description:"Decides how to extract the value of this Brush from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this Brush.",table:{type:{summary:"Function | number | string"},category:"General"}},dy:{table:{type:{summary:"number | string"},category:"General"}},endIndex:{description:`The default end index of brush.
If the option is not set, the end index will be calculated by the length of data.`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},gap:{description:"Number of data points to skip between chart refreshes.",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"1"}},defaultValue:1},height:{description:"Height of the brush in pixels.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"40"}},defaultValue:40},leaveTimeOut:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"1000"}},defaultValue:1e3},onChange:{description:"The handler of changing the active scope of brush.",table:{type:{summary:"OnBrushUpdate"},category:"Events"}},onDragEnd:{table:{type:{summary:"OnBrushUpdate"},category:"Events"}},padding:{table:{type:{summary:"Padding"},category:"General",defaultValue:{summary:'{"top":1,"right":1,"bottom":1,"left":1}'}},defaultValue:{top:1,right:1,bottom:1,left:1}},startIndex:{description:`The default start index of brush.
If the option is not set, the start index will be 0.`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},tickFormatter:{description:"The formatter function of ticks.",table:{type:{summary:"BrushTickFormatter"},category:"General"}},traveller:{table:{type:{summary:"Function | ReactNode"},category:"General"}},travellerWidth:{description:"The width of each traveller.",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},width:{description:`Width of the brush in pixels.
If undefined, defaults to the chart width.`,table:{type:{summary:"number | string"},category:"General"}},x:{description:`The x-coordinate of brush.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:"number | string"},category:"General"}},y:{description:`The y-coordinate of brush.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:"number | string"},category:"General"}}},{fireEvent:y,within:j,expect:k}=__STORYBOOK_MODULE_TEST__,F={component:n,argTypes:o},s={render:t=>e.createElement(u,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(g,{dataKey:"uv"}),e.createElement(n,{...t}),e.createElement(h,null))),args:d(o),play:async({canvasElement:t})=>{const p=(await j(t).findAllByRole("slider"))[0];k(p).toBeTruthy(),y.mouseDown(p),y.mouseMove(p,{clientX:200}),y.mouseUp(p)}},m={render:t=>e.createElement(u,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(g,{dataKey:"uv"}),e.createElement(V,null),e.createElement(n,{...t},e.createElement(r,{data:a},e.createElement(g,{dataKey:"uv"}))),e.createElement(h,null))),args:d(o)},i={render:t=>e.createElement(u,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(f,{dataKey:"uv"}),e.createElement(n,{...t},e.createElement(r,{data:a},e.createElement(f,{dataKey:"uv"}))),e.createElement(h,null))),args:d(o)},l={render:t=>e.createElement(u,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(b,{dataKey:"uv"}),e.createElement(n,{...t},e.createElement(r,{data:a},e.createElement(b,{dataKey:"uv"}))),e.createElement(h,null))),args:d(o)},c={render:t=>e.createElement(u,{width:"100%",height:400},e.createElement(v,{data:a},e.createElement(C,{dataKey:"uv"}),e.createElement(n,{...t},e.createElement(v,{data:a},e.createElement(C,{dataKey:"uv"}))),e.createElement(h,null))),args:d(o)};var E,S,A;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: Args) => <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Line dataKey="uv" />
        <Brush {...args} />
        <RechartsHookInspector />
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
}`,...(A=(S=s.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var B,w,T;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args: Args) => <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Line dataKey="uv" />
        <Tooltip />
        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" />
          </ComposedChart>
        </Brush>
        <RechartsHookInspector />
      </ComposedChart>
    </ResponsiveContainer>,
  args: getStoryArgsFromArgsTypesObject(BrushArgs)
}`,...(T=(w=m.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var R,K,x;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args: Args) => <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Area dataKey="uv" />

        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Area dataKey="uv" />
          </ComposedChart>
        </Brush>
        <RechartsHookInspector />
      </ComposedChart>
    </ResponsiveContainer>,
  args: getStoryArgsFromArgsTypesObject(BrushArgs)
}`,...(x=(K=i.parameters)==null?void 0:K.docs)==null?void 0:x.source}}};var G,O,D;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (args: Args) => <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Bar dataKey="uv" />

        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Bar dataKey="uv" />
          </ComposedChart>
        </Brush>
        <RechartsHookInspector />
      </ComposedChart>
    </ResponsiveContainer>,
  args: getStoryArgsFromArgsTypesObject(BrushArgs)
}`,...(D=(O=l.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var I,_,P;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: Args) => <ResponsiveContainer width="100%" height={400}>
      <ScatterChart data={pageData}>
        <Scatter dataKey="uv" />

        <Brush {...args}>
          <ScatterChart data={pageData}>
            <Scatter dataKey="uv" />
          </ScatterChart>
        </Brush>
        <RechartsHookInspector />
      </ScatterChart>
    </ResponsiveContainer>,
  args: getStoryArgsFromArgsTypesObject(BrushArgs)
}`,...(P=(_=c.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};const L=["API","PanoramaWithLine","PanoramaWithArea","PanoramaWithBar","PanoramaWithScatter"],ae=Object.freeze(Object.defineProperty({__proto__:null,API:s,PanoramaWithArea:i,PanoramaWithBar:l,PanoramaWithLine:m,PanoramaWithScatter:c,__namedExportsOrder:L,default:F},Symbol.toStringTag,{value:"Module"}));export{s as A,ae as C};
