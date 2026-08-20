import{R as e}from"./iframe-Bxb7fTI_.js";import{g as s}from"./utils-ePvtT4un.js";import{B as o}from"./Brush-Cvn4L3sD.js";import{R as i}from"./zIndexSlice-Dc8AhsBR.js";import{C as r}from"./ComposedChart-BUiYgrq1.js";import{p as a}from"./Page-Cj8EiXz7.js";import{L as y}from"./Line-BOYN2QnI.js";import{A as g}from"./Area-y6eSB7HM.js";import{B as f}from"./Bar-D-A_PtMs.js";import{T as j}from"./Tooltip-79hrGs82.js";import{S as b}from"./ScatterChart-DFiunPzD.js";import{S as v}from"./Scatter-fPU_n0j9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-DjfrzuA0.js";import"./resolveDefaultProps-BI7lk0Xh.js";import"./Text-CjptF509.js";import"./DOMUtils-pu9LPEtL.js";import"./isWellBehavedNumber-CwdI5Moi.js";import"./useId-BnCOmIJ8.js";import"./useBackwardsCompatibleTheme-4TZTHq_s.js";import"./chartDataContext-BelA56cJ.js";import"./axisSelectors-B6Hc05Ed.js";import"./throttle-CFHzUNT1.js";import"./index-Cx8Wpi4i.js";import"./index-Bo-C2AfN.js";import"./d3-scale-Dc6IGH61.js";import"./RechartsWrapper-DZ0rQEPQ.js";import"./index-DTEA-FIe.js";import"./index-C-XRKF5d.js";import"./renderedTicksSlice-CGX0B5OX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DeUsHf5g.js";import"./CategoricalChart-D-PTwWFe.js";import"./Curve-D4ESszCl.js";import"./types-sJxYiwgt.js";import"./step-DmsSDk4K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C_-SWE1b.js";import"./Label-CTFdx9tw.js";import"./ZIndexLayer-oyOyBp5p.js";import"./useAnimationId-BhzzmCcY.js";import"./ActivePoints-Bdd5ZL2k.js";import"./Dot-CatBtppS.js";import"./RegisterGraphicalItemId-B823gFGg.js";import"./ErrorBarContext-D8MkcOwe.js";import"./GraphicalItemClipPath-BKsG1i1n.js";import"./SetGraphicalItem-DB73g3d2.js";import"./getRadiusAndStrokeWidthFromDot-CEcgVwhz.js";import"./ActiveShapeUtils-bT-Xy9SL.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DU_mD4XQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCwWx1xN.js";import"./util-Dxo8gN5i.js";import"./tooltipContext-CMpYJro3.js";import"./getZIndexFromUnknown-59T52RrH.js";import"./useElementOffset-CvkVVO4z.js";import"./uniqBy-DL7Bhf0u.js";import"./iteratee-CRSpQ1DK.js";import"./isBuffer-BG75eWKN.js";import"./Cross-BnIYPAob.js";import"./Sector-CSyIb4pU.js";import"./Symbols-S6zB6E4A.js";import"./symbol-DVgX-W97.js";const n={alwaysShowText:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},ariaLabel:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},dataKey:{description:"The data that you provide via the `data` prop is an array of objects.\nEach object can have multiple properties, each representing a different data dimension.\nUse the `dataKey` prop to specify which property (or dimension) to use for this component.\n\nTypically, you will want to have one dataKey on the X axis, and different dataKey on the Y axis,\nwhere they extract different values from the same data objects.\n\nDecides how to extract the value from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value.",table:{type:{summary:"TypedDataKey<DataPointType, DataValueType>"},category:"General"}},dy:{table:{type:{summary:"number | string"},category:"General"}},endIndex:{description:`The default end index of brush.
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
