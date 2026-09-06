import{R as e}from"./iframe-BxrJSuEo.js";import{g as s}from"./utils-ePvtT4un.js";import{B as n}from"./Brush-vyauTUJn.js";import{R as i}from"./zIndexSlice-BT09z8vD.js";import{C as r}from"./ComposedChart-7h-py7CY.js";import{p as a}from"./Page-Cj8EiXz7.js";import{L as y}from"./Line-BpdOGrrm.js";import{A as g}from"./Area-B4p3gb3m.js";import{B as f}from"./Bar-BO2PSRtL.js";import{T as P}from"./Tooltip-BHaBXnv_.js";import{S as b}from"./ScatterChart-C9vG6Tzw.js";import{S as v}from"./Scatter-Bf_omH6N.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-NfsQLk-M.js";import"./resolveDefaultProps-vU4RggVs.js";import"./Text-ChzbpadS.js";import"./DOMUtils-BV3IXFQQ.js";import"./isWellBehavedNumber-CpUOh-vc.js";import"./useId-D7n7M89L.js";import"./useBackwardsCompatibleTheme-BBdb5Xlh.js";import"./chartDataContext-BsAxXToq.js";import"./axisSelectors-JUmVyq34.js";import"./throttle-CoaYbzsD.js";import"./index-BhD1rzMR.js";import"./index-DGAZ_OJd.js";import"./d3-scale-B5WK_JhK.js";import"./RechartsWrapper-CWFnbdFS.js";import"./index-BHq5Sa6E.js";import"./index-CLaZmg3F.js";import"./renderedTicksSlice-CAPgIIpT.js";import"./index-Dd2r1808.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D1XAoGxw.js";import"./CategoricalChart-Clhvfpfg.js";import"./Curve-CJPHKOZN.js";import"./types-DWdcB5KA.js";import"./step-MKlG5seU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-2V-RFRVt.js";import"./Label-DaJavsxU.js";import"./ZIndexLayer-K4qh24Ap.js";import"./useAnimationId-BTkxH0KN.js";import"./ActivePoints-BclQBruf.js";import"./Dot-CcNc-KMS.js";import"./RegisterGraphicalItemId-BvxwJdeC.js";import"./ErrorBarContext-DuvrknuQ.js";import"./GraphicalItemClipPath-Cu9TKpDv.js";import"./SetGraphicalItem-xqqXYUDX.js";import"./getRadiusAndStrokeWidthFromDot-Cdya3Bfq.js";import"./ActiveShapeUtils-CodrMQ8l.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-hp8xxE1P.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-f27aWKX5.js";import"./util-Dxo8gN5i.js";import"./tooltipContext-B4HvzUEA.js";import"./getZIndexFromUnknown-Bml9b-BI.js";import"./useElementOffset-D8S_6cvI.js";import"./uniqBy-BDPR47By.js";import"./iteratee-kgLyRxOy.js";import"./isBuffer-BG75eWKN.js";import"./Cross-DtNHYdF1.js";import"./Sector-DENyUpw5.js";import"./Symbols-D_fRwM0Z.js";import"./symbol-CXPh_nhc.js";const o={alwaysShowText:{description:`When true, the start and end index labels are always visible. By
default, they only appear while the user is interacting with the brush
(dragging, hovering, or focused via keyboard).`,control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},ariaLabel:{description:`Custom accessible label applied to the brush's traveller handles. If
not provided, one is generated automatically from the data at the
current start and end index.`,control:{type:"text"},table:{type:{summary:"string"},category:"General"}},children:{description:`A single chart element (e.g. an AreaChart) rendered as a small preview
inside the brush, showing an overview of the full dataset. If zero or
more than one child is passed, nothing is rendered.`,table:{type:{summary:"ReactNode"},category:"General"}},className:{description:"The SVG element's class name.",control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},dataKey:{description:"The data that you provide via the `data` prop is an array of objects.\nEach object can have multiple properties, each representing a different data dimension.\nUse the `dataKey` prop to specify which property (or dimension) to use for this component.\n\nTypically, you will want to have one dataKey on the X axis, and different dataKey on the Y axis,\nwhere they extract different values from the same data objects.\n\nDecides how to extract the value from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value.",table:{type:{summary:"TypedDataKey<DataPointType, DataValueType>"},category:"General"}},dy:{description:"Vertical offset added to the brush's computed y-coordinate.",table:{type:{summary:"number | string"},category:"General"}},endIndex:{description:`The default end index of brush.
If the option is not set, the end index will be calculated by the length of data.`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},gap:{description:"Number of data points to skip between chart refreshes.",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"1"}},defaultValue:1},height:{description:"Height of the brush in pixels.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"40"}},defaultValue:40},leaveTimeOut:{description:`Delay, in milliseconds, after the mouse leaves the brush, before an
in-progress drag interaction is ended.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"1000"}},defaultValue:1e3},onChange:{description:"The handler of changing the active scope of brush.",table:{type:{summary:"OnBrushUpdate"},category:"Events"}},onDragEnd:{description:`The handler called when the user finishes dragging a traveller or the
brush slide, receiving the final startIndex and endIndex.`,table:{type:{summary:"OnBrushUpdate"},category:"Events"}},padding:{description:"Padding applied only to the small overview chart rendered inside the\nbrush (via `children`) has no effect on the brush's own position or\nsize.",table:{type:{summary:"Padding"},category:"General",defaultValue:{summary:'{"top":1,"right":1,"bottom":1,"left":1}'}},defaultValue:{top:1,right:1,bottom:1,left:1}},startIndex:{description:`The default start index of brush.
If the option is not set, the start index will be 0.`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},tickFormatter:{description:"The formatter function of ticks.",table:{type:{summary:"BrushTickFormatter"},category:"General"}},traveller:{description:`Custom element or render function used to render each draggable handle
(the "traveller") at the start and end of the selection. Defaults to a
small rectangle with two vertical lines.`,table:{type:{summary:"Function | ReactNode"},category:"General"}},travellerWidth:{description:"The width of each traveller.",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},width:{description:`Width of the brush in pixels.
If undefined, defaults to the chart width.`,table:{type:{summary:"number | string"},category:"General"}},x:{description:`The x-coordinate of brush.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:"number | string"},category:"General"}},y:{description:`The y-coordinate of brush.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:"number | string"},category:"General"}}},{fireEvent:u,within:j,expect:W}=__STORYBOOK_MODULE_TEST__,Ze={component:n,argTypes:o},d={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}),e.createElement(n,{...t}))),args:s(o),play:async({canvasElement:t})=>{const m=(await j(t).findAllByRole("slider"))[0];W(m).toBeTruthy(),u.mouseDown(m),u.mouseMove(m,{clientX:200}),u.mouseUp(m)}},l={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}),e.createElement(P,null),e.createElement(n,{...t},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}))))),args:s(o)},p={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(g,{dataKey:"uv"}),e.createElement(n,{...t},e.createElement(r,{data:a},e.createElement(g,{dataKey:"uv"}))))),args:s(o)},c={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(f,{dataKey:"uv"}),e.createElement(n,{...t},e.createElement(r,{data:a},e.createElement(f,{dataKey:"uv"}))))),args:s(o)},h={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(b,{data:a},e.createElement(v,{dataKey:"uv"}),e.createElement(n,{...t},e.createElement(b,{data:a},e.createElement(v,{dataKey:"uv"}))))),args:s(o)},$e=["API","PanoramaWithLine","PanoramaWithArea","PanoramaWithBar","PanoramaWithScatter"];var C,E,w;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(E=d.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var A,S,B;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(B=(S=l.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var T,x,K;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(K=(x=p.parameters)==null?void 0:x.docs)==null?void 0:K.source}}};var D,R,G;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(R=c.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var V,O,I;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(I=(O=h.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};export{d as API,p as PanoramaWithArea,c as PanoramaWithBar,l as PanoramaWithLine,h as PanoramaWithScatter,$e as __namedExportsOrder,Ze as default};
