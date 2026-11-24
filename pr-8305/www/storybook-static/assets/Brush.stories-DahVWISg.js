import{R as e}from"./iframe-rnrsK-Eh.js";import{g as s}from"./utils-ePvtT4un.js";import{B as n}from"./Brush-ChsTNIt0.js";import{R as i}from"./zIndexSlice-D3HmR0ZR.js";import{C as r}from"./ComposedChart-D54WX9hH.js";import{p as a}from"./Page-Cj8EiXz7.js";import{L as y}from"./Line-BDX7TuS6.js";import{A as g}from"./Area-pdWG59h_.js";import{B as f}from"./Bar-BUeCKdYR.js";import{T as P}from"./Tooltip-DFlRaAqD.js";import{S as b}from"./ScatterChart-DEtW4PYT.js";import{S as v}from"./Scatter-CcPmtpG7.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-D4ktbd_J.js";import"./resolveDefaultProps-b1TTGhvT.js";import"./get-CjriyByo.js";import"./Text-WHgqMzAs.js";import"./ZIndexLayer-dsZ60IUc.js";import"./index-BSOAsjef.js";import"./index-D8r-4r4t.js";import"./chartDataContext-BaXmKLtm.js";import"./axisSelectors-CIZ-q5JG.js";import"./throttle-BHymO33n.js";import"./polarAxisSelectors-B1h4eON8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BaDfMMmk.js";import"./RechartsWrapper-tBuCuUXe.js";import"./index-BZjQac1j.js";import"./index-BcrgJFGN.js";import"./renderedTicksSlice-3O1E6NtI.js";import"./index-BWQTU1nE.js";import"./fillDefinitions-ooWue1m4.js";import"./CartesianChart-CdGDQA5c.js";import"./CategoricalChart-B0mb1tZK.js";import"./getRadiusAndStrokeWidthFromDot-Aa26YM9W.js";import"./Curve-B8ieUi4B.js";import"./types-CAJhQIqW.js";import"./step-BNGv-ij0.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DPy91L9k.js";import"./Label-DJYYuUsE.js";import"./ActivePoints-G3nCAY-X.js";import"./Dot-CpkbvyGy.js";import"./activeStyles-9CDj_AEF.js";import"./useAnimationId-COqzWo9S.js";import"./Symbols-CFUB5kvN.js";import"./symbol-B4eSOryt.js";import"./ErrorBarContext-YhaLsFzE.js";import"./SetGraphicalItem-Bhp-y0Ji.js";import"./ActiveShapeUtils-O7QOH_04.js";import"./useEffectiveDataKey-DftwbdUx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-8OmFGHQb.js";import"./util-Dxo8gN5i.js";import"./tooltipContext-DbU0ZZ86.js";import"./getZIndexFromUnknown-CY1dy49c.js";import"./omit-Cn0MF7xB.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BnxZL8WN.js";import"./uniqBy-C0Cq__z-.js";import"./iteratee-CngnK0pj.js";import"./Cross-BmKhywuH.js";import"./Sector-C0IDAhtH.js";const o={alwaysShowText:{description:`When true, the start and end index labels are always visible. By
default, they only appear while the user is interacting with the brush
(dragging, hovering, or focused via keyboard).`,control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},ariaLabel:{description:`Custom accessible label applied to the brush's traveller handles. If
not provided, one is generated automatically from the data at the
current start and end index.`,control:{type:"text"},table:{type:{summary:"string"},category:"General"}},children:{description:`A single chart element (e.g. an AreaChart) rendered as a small preview
inside the brush, showing an overview of the full dataset. If zero or
more than one child is passed, nothing is rendered.`,table:{type:{summary:"ReactNode"},category:"General"}},className:{description:"The SVG element's class name.",control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},dataKey:{description:"The data that you provide via the `data` prop is an array of objects.\nEach object can have multiple properties, each representing a different data dimension.\nUse the `dataKey` prop to specify which property (or dimension) to use for this component.\n\nTypically, you will want to have one dataKey on the X axis, and different dataKey on the Y axis,\nwhere they extract different values from the same data objects.\n\nDecides how to extract the value from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value.",table:{type:{summary:"TypedDataKey<DataPointType, DataValueType>"},category:"General"}},dy:{description:"Vertical offset added to the brush's computed y-coordinate.",table:{type:{summary:"number | string"},category:"General"}},endIndex:{description:`The default end index of brush.
If the option is not set, the end index will be calculated by the length of data.`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},fill:{description:`The fill of the brush background: a color, or a {@link RechartsFill} object with an SVG definition,
such as a pattern or a gradient. The travellers use the plain color.`,control:{type:"color"},table:{type:{summary:"RechartsFill | string"},category:"Style"}},gap:{description:"Number of data points to skip between chart refreshes.",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"1"}},defaultValue:1},height:{description:"Height of the brush in pixels.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"40"}},defaultValue:40},leaveTimeOut:{description:`Delay, in milliseconds, after the mouse leaves the brush, before an
in-progress drag interaction is ended.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"1000"}},defaultValue:1e3},onChange:{description:"The handler of changing the active scope of brush.",table:{type:{summary:"OnBrushUpdate"},category:"Events"}},onDragEnd:{description:`The handler called when the user finishes dragging a traveller or the
brush slide, receiving the final startIndex and endIndex.`,table:{type:{summary:"OnBrushUpdate"},category:"Events"}},padding:{description:"Padding applied only to the small overview chart rendered inside the\nbrush (via `children`) has no effect on the brush's own position or\nsize.",table:{type:{summary:"Padding"},category:"General",defaultValue:{summary:'{"top":1,"right":1,"bottom":1,"left":1}'}},defaultValue:{top:1,right:1,bottom:1,left:1}},startIndex:{description:`The default start index of brush.
If the option is not set, the start index will be 0.`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},tickFormatter:{description:"The formatter function of ticks.",table:{type:{summary:"BrushTickFormatter"},category:"General"}},traveller:{description:`Custom element or render function used to render each draggable handle
(the "traveller") at the start and end of the selection. Defaults to a
small rectangle with two vertical lines.`,table:{type:{summary:"Function | ReactNode"},category:"General"}},travellerWidth:{description:"The width of each traveller.",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},width:{description:`Width of the brush in pixels.
If undefined, defaults to the chart width.`,table:{type:{summary:"number | string"},category:"General"}},x:{description:`The x-coordinate of brush.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:"number | string"},category:"General"}},y:{description:`The y-coordinate of brush.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:"number | string"},category:"General"}}},{fireEvent:u,within:j,expect:F}=__STORYBOOK_MODULE_TEST__,Je={component:n,argTypes:o},d={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}),e.createElement(n,{...t}))),args:s(o),play:async({canvasElement:t})=>{const m=(await j(t).findAllByRole("slider"))[0];F(m).toBeTruthy(),u.mouseDown(m),u.mouseMove(m,{clientX:200}),u.mouseUp(m)}},l={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}),e.createElement(P,null),e.createElement(n,{...t},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}))))),args:s(o)},p={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(g,{dataKey:"uv"}),e.createElement(n,{...t},e.createElement(r,{data:a},e.createElement(g,{dataKey:"uv"}))))),args:s(o)},c={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(f,{dataKey:"uv"}),e.createElement(n,{...t},e.createElement(r,{data:a},e.createElement(f,{dataKey:"uv"}))))),args:s(o)},h={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(b,{data:a},e.createElement(v,{dataKey:"uv"}),e.createElement(n,{...t},e.createElement(b,{data:a},e.createElement(v,{dataKey:"uv"}))))),args:s(o)},Qe=["API","PanoramaWithLine","PanoramaWithArea","PanoramaWithBar","PanoramaWithScatter"];var C,E,w;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(E=d.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var S,A,T;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(A=l.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var B,x,K;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(K=(x=p.parameters)==null?void 0:x.docs)==null?void 0:K.source}}};var R,D,G;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(G=(D=c.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var V,O,I;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(I=(O=h.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};export{d as API,p as PanoramaWithArea,c as PanoramaWithBar,l as PanoramaWithLine,h as PanoramaWithScatter,Qe as __namedExportsOrder,Je as default};
