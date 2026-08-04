import{R as e}from"./iframe-BpT5bjyP.js";import{g as s}from"./utils-ePvtT4un.js";import{B as o}from"./Brush-CKp8RBfx.js";import{R as i}from"./zIndexSlice-6ZjUmd8N.js";import{C as r}from"./ComposedChart-VG8L4Dm0.js";import{p as a}from"./Page-Cj8EiXz7.js";import{L as y}from"./Line-DAOOXY1c.js";import{A as g}from"./Area-DEL2_xiF.js";import{B as f}from"./Bar-Cy-Oq5wl.js";import{T as j}from"./Tooltip-DKBl8YHf.js";import{S as b}from"./ScatterChart-DpqB7pqA.js";import{S as v}from"./Scatter-DjSzeMxH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-JsFzk0bC.js";import"./resolveDefaultProps-DDabcDAr.js";import"./Text-HFJbCo1I.js";import"./DOMUtils-DLC4sCDo.js";import"./isWellBehavedNumber-C47drcC6.js";import"./chartDataContext-vyuuOWQ4.js";import"./RechartsWrapper-CU2X_CAJ.js";import"./index-DEeMmmG_.js";import"./index-rBmp_rAe.js";import"./index-D8dxtA6W.js";import"./index-BdWqmQ-h.js";import"./throttle-DrtrRvnQ.js";import"./renderedTicksSlice-DruWQWhq.js";import"./axisSelectors-DSgRntKH.js";import"./d3-scale-CxG8NgTa.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BHxGC6l9.js";import"./CategoricalChart-B5HQoLMh.js";import"./Curve-BfRxDj3b.js";import"./types-TjqF4iRF.js";import"./step-BYJgq2pg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CJc5QMM0.js";import"./Label-BW7muwsN.js";import"./ZIndexLayer-BeMfDg3A.js";import"./useAnimationId-C2b5i1-K.js";import"./ActivePoints-C2xP28N-.js";import"./Dot-C23HV8Lj.js";import"./RegisterGraphicalItemId-rnVsHys1.js";import"./ErrorBarContext-DwESbJwv.js";import"./GraphicalItemClipPath-B_g_u1qL.js";import"./SetGraphicalItem-Bi4oedQq.js";import"./graphicalItemIdentity-N_badT-U.js";import"./ActiveShapeUtils-BtBl96a6.js";import"./RechartsThemeContext-BtlbTq9b.js";import"./graphicalItemSelectors-eSkf4DNa.js";import"./tooltipContext-uDZYFT-L.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CHZg89XO.js";import"./util-Dxo8gN5i.js";import"./getZIndexFromUnknown-CQrw8Qh5.js";import"./useElementOffset-Cr8-5ClZ.js";import"./uniqBy-B00lS2JO.js";import"./iteratee-DXhAWmJ8.js";import"./isBuffer-BG75eWKN.js";import"./Cross-Cp8Y5M1B.js";import"./Sector-CNKHsTkm.js";import"./Symbols-DdG4jW4z.js";import"./symbol-BbcEI7QM.js";const n={alwaysShowText:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},ariaLabel:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},dataKey:{description:"The data that you provide via the `data` prop is an array of objects.\nEach object can have multiple properties, each representing a different data dimension.\nUse the `dataKey` prop to specify which property (or dimension) to use for this component.\n\nTypically, you will want to have one dataKey on the X axis, and different dataKey on the Y axis,\nwhere they extract different values from the same data objects.\n\nDecides how to extract the value from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value.",table:{type:{summary:"TypedDataKey<DataPointType, DataValueType>"},category:"General"}},dy:{table:{type:{summary:"number | string"},category:"General"}},endIndex:{description:`The default end index of brush.
If the option is not set, the end index will be calculated by the length of data.`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},gap:{description:"Number of data points to skip between chart refreshes.",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"1"}},defaultValue:1},height:{description:"Height of the brush in pixels.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"40"}},defaultValue:40},leaveTimeOut:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"1000"}},defaultValue:1e3},onChange:{description:"The handler of changing the active scope of brush.",table:{type:{summary:"OnBrushUpdate"},category:"Events"}},onDragEnd:{table:{type:{summary:"OnBrushUpdate"},category:"Events"}},padding:{table:{type:{summary:"Padding"},category:"General",defaultValue:{summary:'{"top":1,"right":1,"bottom":1,"left":1}'}},defaultValue:{top:1,right:1,bottom:1,left:1}},startIndex:{description:`The default start index of brush.
If the option is not set, the start index will be 0.`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},tickFormatter:{description:"The formatter function of ticks.",table:{type:{summary:"BrushTickFormatter"},category:"General"}},traveller:{table:{type:{summary:"Function | ReactNode"},category:"General"}},travellerWidth:{description:"The width of each traveller.",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},width:{description:`Width of the brush in pixels.
If undefined, defaults to the chart width.`,table:{type:{summary:"number | string"},category:"General"}},x:{description:`The x-coordinate of brush.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:"number | string"},category:"General"}},y:{description:`The y-coordinate of brush.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:"number | string"},category:"General"}}},{fireEvent:h,within:L,expect:W}=__STORYBOOK_MODULE_TEST__,ze={component:o,argTypes:n},p={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}),e.createElement(o,{...t}))),args:s(n),play:async({canvasElement:t})=>{const m=(await L(t).findAllByRole("slider"))[0];W(m).toBeTruthy(),h.mouseDown(m),h.mouseMove(m,{clientX:200}),h.mouseUp(m)}},d={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}),e.createElement(j,null),e.createElement(o,{...t},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}))))),args:s(n)},l={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(g,{dataKey:"uv"}),e.createElement(o,{...t},e.createElement(r,{data:a},e.createElement(g,{dataKey:"uv"}))))),args:s(n)},c={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(f,{dataKey:"uv"}),e.createElement(o,{...t},e.createElement(r,{data:a},e.createElement(f,{dataKey:"uv"}))))),args:s(n)},u={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(b,{data:a},e.createElement(v,{dataKey:"uv"}),e.createElement(o,{...t},e.createElement(b,{data:a},e.createElement(v,{dataKey:"uv"}))))),args:s(n)};var C,E,A;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(A=(E=p.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var S,B,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(B=d.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var T,K,x;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(x=(K=l.parameters)==null?void 0:K.docs)==null?void 0:x.source}}};var R,D,G;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(G=(D=c.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var O,V,P;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(V=u.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};const Je=["API","PanoramaWithLine","PanoramaWithArea","PanoramaWithBar","PanoramaWithScatter"];export{p as API,l as PanoramaWithArea,c as PanoramaWithBar,d as PanoramaWithLine,u as PanoramaWithScatter,Je as __namedExportsOrder,ze as default};
