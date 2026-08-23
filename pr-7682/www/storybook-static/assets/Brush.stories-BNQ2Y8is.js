import{R as e}from"./iframe-mnAzB4o-.js";import{g as s}from"./utils-ePvtT4un.js";import{B as n}from"./Brush-CNh-g9ni.js";import{R as i}from"./zIndexSlice-D6JZj8nu.js";import{C as r}from"./ComposedChart-CBdoahrj.js";import{p as a}from"./Page-Cj8EiXz7.js";import{L as y}from"./Line-ClUmRFWF.js";import{A as g}from"./Area-DIvXU_KZ.js";import{B as f}from"./Bar-Dcpt5fA7.js";import{T as P}from"./Tooltip-CkPVTX4w.js";import{S as b}from"./ScatterChart-BK9VnGhJ.js";import{S as v}from"./Scatter-DcKv5Btq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-Cr54uUjf.js";import"./resolveDefaultProps-DC3M7TEl.js";import"./Text-BI5zaK2n.js";import"./DOMUtils-CS3XthwK.js";import"./isWellBehavedNumber-Csz_97LF.js";import"./useId-DlzE9UHI.js";import"./useBackwardsCompatibleTheme-D4uIz6B3.js";import"./chartDataContext-d1JBVIv3.js";import"./axisSelectors-C1jFNzqn.js";import"./throttle-DkA8wIil.js";import"./index-BVGAPrUY.js";import"./index-CtygltyQ.js";import"./d3-scale-CRNCXhx2.js";import"./RechartsWrapper-C7l6xfyV.js";import"./index-DwcIeoVT.js";import"./index-UdOV9nJO.js";import"./renderedTicksSlice-Bqv1L3Am.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D3iAW6ju.js";import"./CategoricalChart-Dvtv2sve.js";import"./Curve-o9IX9QPv.js";import"./types-CREZv15c.js";import"./step-BYsm7KBD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DKc9cClm.js";import"./Label-CHzafVhK.js";import"./ZIndexLayer-B_AeVWGh.js";import"./useAnimationId-C2CD38MP.js";import"./ActivePoints-0ixA6i7h.js";import"./Dot-CbnujumB.js";import"./RegisterGraphicalItemId-CVIGTwbR.js";import"./ErrorBarContext-BqNwP9Uy.js";import"./GraphicalItemClipPath-2kfGKsY1.js";import"./SetGraphicalItem-C3b_Fk26.js";import"./getRadiusAndStrokeWidthFromDot-CGiQ8j25.js";import"./ActiveShapeUtils-CPpaX7pN.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CAzK6o2T.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D-paqn8Q.js";import"./util-Dxo8gN5i.js";import"./tooltipContext-Bg_MrhK6.js";import"./getZIndexFromUnknown-BperYcPF.js";import"./useElementOffset-Bv8ynH_4.js";import"./uniqBy-xa31W4My.js";import"./iteratee-BHZlqNLc.js";import"./isBuffer-BG75eWKN.js";import"./Cross-ixwHigiP.js";import"./Sector-B_puyY74.js";import"./Symbols-Kcb7M6d1.js";import"./symbol-CzjYWchS.js";const o={alwaysShowText:{description:`When true, the start and end index labels are always visible. By
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
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:"number | string"},category:"General"}}},{fireEvent:u,within:j,expect:W}=__STORYBOOK_MODULE_TEST__,Qe={component:n,argTypes:o},d={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}),e.createElement(n,{...t}))),args:s(o),play:async({canvasElement:t})=>{const m=(await j(t).findAllByRole("slider"))[0];W(m).toBeTruthy(),u.mouseDown(m),u.mouseMove(m,{clientX:200}),u.mouseUp(m)}},l={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}),e.createElement(P,null),e.createElement(n,{...t},e.createElement(r,{data:a},e.createElement(y,{dataKey:"uv"}))))),args:s(o)},p={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(g,{dataKey:"uv"}),e.createElement(n,{...t},e.createElement(r,{data:a},e.createElement(g,{dataKey:"uv"}))))),args:s(o)},c={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(f,{dataKey:"uv"}),e.createElement(n,{...t},e.createElement(r,{data:a},e.createElement(f,{dataKey:"uv"}))))),args:s(o)},h={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(b,{data:a},e.createElement(v,{dataKey:"uv"}),e.createElement(n,{...t},e.createElement(b,{data:a},e.createElement(v,{dataKey:"uv"}))))),args:s(o)};var C,E,w;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(O=h.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};const Ze=["API","PanoramaWithLine","PanoramaWithArea","PanoramaWithBar","PanoramaWithScatter"];export{d as API,p as PanoramaWithArea,c as PanoramaWithBar,l as PanoramaWithLine,h as PanoramaWithScatter,Ze as __namedExportsOrder,Qe as default};
