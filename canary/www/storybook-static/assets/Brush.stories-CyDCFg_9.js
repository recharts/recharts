import{e}from"./iframe-BUUPGxKW.js";import{g as s}from"./utils-ePvtT4un.js";import{B as o}from"./Brush-BGEPtu-3.js";import{R as i}from"./arrayEqualityCheck-uAaGhnkl.js";import{C as r}from"./ComposedChart-DSmYFUeE.js";import{L as g}from"./Line-CtLW08yR.js";import{R as m}from"./RechartsHookInspector-Bw28QuEh.js";import{A as f}from"./Area-BBRN58d4.js";import{B as b}from"./Bar-Bzl0KGI-.js";import{T as j}from"./Tooltip-DAyQG3j_.js";import{S as v}from"./ScatterChart-BCyr28gY.js";import{S as E}from"./Scatter-CKRmynUr.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./d3-scale-b1qoVJWC.js";import"./immer-kqZDXGZE.js";import"./Layer-DlNKk7f2.js";import"./resolveDefaultProps-DyTAkq0H.js";import"./Text-CHP1LCbq.js";import"./DOMUtils-z8uKMvkf.js";import"./chartDataContext-D2ei2EEV.js";import"./RechartsWrapper-DdW9qina.js";import"./index-oLTRUqnU.js";import"./hooks-BNCSk-QW.js";import"./axisSelectors-CQVyKxdV.js";import"./zIndexSlice-DsPDLjCa.js";import"./renderedTicksSlice-GPCqPVlj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-npq1asZ9.js";import"./CategoricalChart-BjzN8N8f.js";import"./ReactUtils-BaDlyhyr.js";import"./Label-C0y-OKmx.js";import"./ZIndexLayer-CiKkYojy.js";import"./ActivePoints-oTNshfX-.js";import"./Dot-3oFAy5A0.js";import"./types-DBwevUA7.js";import"./RegisterGraphicalItemId-F7IP_4jr.js";import"./ErrorBarContext-CwmlQaa8.js";import"./GraphicalItemClipPath-D_imBHSf.js";import"./SetGraphicalItem-BXWccnGO.js";import"./useAnimationId-CMTrGaHR.js";import"./getRadiusAndStrokeWidthFromDot-CPj_WkC-.js";import"./ActiveShapeUtils-yXhTLdG6.js";import"./isPlainObject-BGZcR8iC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-3zO8wV20.js";import"./Trapezoid-BV5ztp3S.js";import"./Sector-DdslfAV3.js";import"./Symbols-xIV2Z4Ym.js";import"./symbol-BvvTpJyA.js";import"./step-C9wD-hig.js";import"./Curve-C5yOoaqn.js";import"./index-ByfBPDju.js";import"./ChartSizeDimensions-Db9Stn-A.js";import"./OffsetShower-Di7UReX2.js";import"./PlotAreaShower-BDM2L963.js";import"./graphicalItemSelectors-CfXVXN3C.js";import"./tooltipContext-C54dPmVz.js";import"./tiny-invariant-CopsF_GD.js";import"./getZIndexFromUnknown-Ypu64hNE.js";import"./useElementOffset-DfNe91Mv.js";import"./uniqBy-RZOC8lwP.js";import"./iteratee-D8peaFHS.js";import"./Cross-CXyiErJn.js";const n={alwaysShowText:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},ariaLabel:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},dataKey:{description:"The data that you provide via the `data` prop is an array of objects.\nEach object can have multiple properties, each representing a different data dimension.\nUse the `dataKey` prop to specify which property (or dimension) to use for this component.\n\nTypically, you will want to have one dataKey on the X axis, and different dataKey on the Y axis,\nwhere they extract different values from the same data objects.\n\nDecides how to extract the value from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value.",table:{type:{summary:"TypedDataKey<DataPointType, DataValueType>"},category:"General"}},dy:{table:{type:{summary:"number | string"},category:"General"}},endIndex:{description:`The default end index of brush.
If the option is not set, the end index will be calculated by the length of data.`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},gap:{description:"Number of data points to skip between chart refreshes.",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"1"}},defaultValue:1},height:{description:"Height of the brush in pixels.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"40"}},defaultValue:40},leaveTimeOut:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"1000"}},defaultValue:1e3},onChange:{description:"The handler of changing the active scope of brush.",table:{type:{summary:"OnBrushUpdate"},category:"Events"}},onDragEnd:{table:{type:{summary:"OnBrushUpdate"},category:"Events"}},padding:{table:{type:{summary:"Padding"},category:"General",defaultValue:{summary:'{"top":1,"right":1,"bottom":1,"left":1}'}},defaultValue:{top:1,right:1,bottom:1,left:1}},startIndex:{description:`The default start index of brush.
If the option is not set, the start index will be 0.`,control:{type:"number"},table:{type:{summary:"number"},category:"General"}},tickFormatter:{description:"The formatter function of ticks.",table:{type:{summary:"BrushTickFormatter"},category:"General"}},traveller:{table:{type:{summary:"Function | ReactNode"},category:"General"}},travellerWidth:{description:"The width of each traveller.",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},width:{description:`Width of the brush in pixels.
If undefined, defaults to the chart width.`,table:{type:{summary:"number | string"},category:"General"}},x:{description:`The x-coordinate of brush.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:"number | string"},category:"General"}},y:{description:`The y-coordinate of brush.
If left undefined, it will be computed from the chart's offset and margins.`,table:{type:{summary:"number | string"},category:"General"}}},{fireEvent:y,within:k,expect:L}=__STORYBOOK_MODULE_TEST__,Ze={component:o,argTypes:n},l={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(g,{dataKey:"uv"}),e.createElement(o,{...t}),e.createElement(m,null))),args:s(n),play:async({canvasElement:t})=>{const p=(await k(t).findAllByRole("slider"))[0];L(p).toBeTruthy(),y.mouseDown(p),y.mouseMove(p,{clientX:200}),y.mouseUp(p)}},c={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(g,{dataKey:"uv"}),e.createElement(j,null),e.createElement(o,{...t},e.createElement(r,{data:a},e.createElement(g,{dataKey:"uv"}))),e.createElement(m,null))),args:s(n)},d={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(f,{dataKey:"uv"}),e.createElement(o,{...t},e.createElement(r,{data:a},e.createElement(f,{dataKey:"uv"}))),e.createElement(m,null))),args:s(n)},u={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(r,{data:a},e.createElement(b,{dataKey:"uv"}),e.createElement(o,{...t},e.createElement(r,{data:a},e.createElement(b,{dataKey:"uv"}))),e.createElement(m,null))),args:s(n)},h={render:t=>e.createElement(i,{width:"100%",height:400},e.createElement(v,{data:a},e.createElement(E,{dataKey:"uv"}),e.createElement(o,{...t},e.createElement(v,{data:a},e.createElement(E,{dataKey:"uv"}))),e.createElement(m,null))),args:s(n)};var C,A,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var B,w,T;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var K,R,x;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(x=(R=d.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var D,G,I;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(G=u.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var O,V,P;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(V=h.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};const $e=["API","PanoramaWithLine","PanoramaWithArea","PanoramaWithBar","PanoramaWithScatter"];export{l as API,d as PanoramaWithArea,u as PanoramaWithBar,c as PanoramaWithLine,h as PanoramaWithScatter,$e as __namedExportsOrder,Ze as default};
