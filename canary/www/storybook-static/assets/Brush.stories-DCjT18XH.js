import{R as e}from"./iframe-Bw423yT3.js";import{g as s}from"./utils-ePvtT4un.js";import{B as o}from"./Brush-D275bnWa.js";import{R as i}from"./zIndexSlice-C0Ur0qQv.js";import{C as r}from"./ComposedChart-Cz46LnAr.js";import{p as a}from"./Page-Cj8EiXz7.js";import{L as y}from"./Line-BMKWlib2.js";import{A as g}from"./Area-Bkwx2OTW.js";import{B as f}from"./Bar-KrOtFTVD.js";import{T as j}from"./Tooltip-Be8nokA1.js";import{S as b}from"./ScatterChart-Dn_-3j4L.js";import{S as v}from"./Scatter-RJqhCtaL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-D4oXIaGo.js";import"./resolveDefaultProps-DecYMRDs.js";import"./Text-C_UyMP2R.js";import"./DOMUtils-B-o7bCMD.js";import"./isWellBehavedNumber-Bhsok9Kl.js";import"./useId-DVN36WJe.js";import"./useBackwardsCompatibleTheme-BiX6i8Ds.js";import"./chartDataContext-ChmL2TgJ.js";import"./axisSelectors-DvFF09lq.js";import"./throttle-DoQ6jmeU.js";import"./index-CSmn3lR3.js";import"./index-Cmb77t22.js";import"./d3-scale-B6w1DC_B.js";import"./RechartsWrapper-Bq4pCedS.js";import"./index-DY-6WoYl.js";import"./index-Dzxogdh4.js";import"./renderedTicksSlice-C7gnJRFb.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-KYAmso8l.js";import"./CategoricalChart-BFEAf3EH.js";import"./Curve-ROVFdQ-G.js";import"./types-Ds-DwS6F.js";import"./step-BJpmgVSO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-hYYLyghD.js";import"./Label-CDuT1dKE.js";import"./ZIndexLayer-BMLxUbw3.js";import"./useAnimationId-Ys0eqrlL.js";import"./ActivePoints-Di-vyWVm.js";import"./Dot-BzofvkeI.js";import"./RegisterGraphicalItemId-C_cjgYuq.js";import"./ErrorBarContext-BUSWNFOb.js";import"./GraphicalItemClipPath-C6OEajox.js";import"./SetGraphicalItem-OiZoorhv.js";import"./getRadiusAndStrokeWidthFromDot-BZS_5G6a.js";import"./ActiveShapeUtils-DXmjz54Y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DR5-8UeR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B-9AixLW.js";import"./util-Dxo8gN5i.js";import"./tooltipContext-DCAYRXV5.js";import"./getZIndexFromUnknown-BT_u-srI.js";import"./useElementOffset-ChV6ndkv.js";import"./uniqBy-DXUX_vZx.js";import"./iteratee-CM1mNqCJ.js";import"./isBuffer-BG75eWKN.js";import"./Cross-B0QGpBVq.js";import"./Sector-Dk7MJm7o.js";import"./Symbols-BuIuBD8Q.js";import"./symbol-CqIeDhWk.js";const n={alwaysShowText:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},ariaLabel:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},dataKey:{description:"The data that you provide via the `data` prop is an array of objects.\nEach object can have multiple properties, each representing a different data dimension.\nUse the `dataKey` prop to specify which property (or dimension) to use for this component.\n\nTypically, you will want to have one dataKey on the X axis, and different dataKey on the Y axis,\nwhere they extract different values from the same data objects.\n\nDecides how to extract the value from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value.",table:{type:{summary:"TypedDataKey<DataPointType, DataValueType>"},category:"General"}},dy:{table:{type:{summary:"number | string"},category:"General"}},endIndex:{description:`The default end index of brush.
If the option is not set, the end index will be calculated by the length of data.`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},gap:{description:"Number of data points to skip between chart refreshes.",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"1"}},defaultValue:1},height:{description:"Height of the brush in pixels.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"40"}},defaultValue:40},leaveTimeOut:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"1000"}},defaultValue:1e3},onChange:{description:"The handler of changing the active scope of brush.",table:{type:{summary:"OnBrushUpdate"},category:"Events"}},onDragEnd:{table:{type:{summary:"OnBrushUpdate"},category:"Events"}},padding:{table:{type:{summary:"Padding"},category:"General",defaultValue:{summary:'{"top":1,"right":1,"bottom":1,"left":1}'}},defaultValue:{top:1,right:1,bottom:1,left:1}},startIndex:{description:`The default start index of brush.
If the option is not set, the start index will be 0.`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},tickFormatter:{description:"The formatter function of ticks.",table:{type:{summary:"BrushTickFormatter"},category:"General"}},traveller:{table:{type:{summary:"Function | ReactNode"},category:"General"}},travellerWidth:{description:"The width of each traveller.",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},width:{description:`Width of the brush in pixels.
If undefined, defaults to the chart width.`,table:{type:{summary:"number | string"},category:"General"}},x:{description:`The x-coordinate of brush.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:"number | string"},category:"General"}},y:{description:`The y-coordinate of brush.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:"number | string"},category:"General"}}},{fireEvent:h,within:L,expect:W}=__STORYBOOK_MODULE_TEST__,Qe={component:o,argTypes:n},p={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}),e.createElement(o,{...t}))),args:s(n),play:async({canvasElement:t})=>{const m=(await L(t).findAllByRole("slider"))[0];W(m).toBeTruthy(),h.mouseDown(m),h.mouseMove(m,{clientX:200}),h.mouseUp(m)}},d={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}),e.createElement(j,null),e.createElement(o,{...t},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}))))),args:s(n)},l={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(g,{dataKey:"uv"}),e.createElement(o,{...t},e.createElement(r,{data:a},e.createElement(g,{dataKey:"uv"}))))),args:s(n)},c={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(f,{dataKey:"uv"}),e.createElement(o,{...t},e.createElement(r,{data:a},e.createElement(f,{dataKey:"uv"}))))),args:s(n)},u={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(b,{data:a},e.createElement(v,{dataKey:"uv"}),e.createElement(o,{...t},e.createElement(b,{data:a},e.createElement(v,{dataKey:"uv"}))))),args:s(n)};var C,E,A;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(V=u.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};const Ze=["API","PanoramaWithLine","PanoramaWithArea","PanoramaWithBar","PanoramaWithScatter"];export{p as API,l as PanoramaWithArea,c as PanoramaWithBar,d as PanoramaWithLine,u as PanoramaWithScatter,Ze as __namedExportsOrder,Qe as default};
