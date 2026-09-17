import{R as e}from"./iframe-MgA714vo.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-DiJ4n12-.js";import{R as m}from"./zIndexSlice-BFtzjsbT.js";import{C as p}from"./ComposedChart-DLmauAU1.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CJCqY4vS.js";import{X as u}from"./XAxis-BO_zCdYE.js";import{Y as h}from"./YAxis-BWw82tYQ.js";import{L as y}from"./Line-DZr5k1zJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-B-SLfZPM.js";import"./resolveDefaultProps-CB1SP_2F.js";import"./Label-cwVDT-eO.js";import"./Text-DScWdIKY.js";import"./DOMUtils-79tWRulU.js";import"./isWellBehavedNumber-DFMdcmiK.js";import"./useId-Wj9uSNps.js";import"./useBackwardsCompatibleTheme-DSXeHE4Z.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CrYLcujZ.js";import"./index-yQC3T5y5.js";import"./index-DFNNaDkT.js";import"./CartesianAxis-DiAsTuGj.js";import"./types-CZP1hKch.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C4wx_D1w.js";import"./throttle-CokMtKXH.js";import"./index-Gf96Mz3o.js";import"./index-BISHQAp4.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-D1iPbMRH.js";import"./axisSelectors-D8SlF3gx.js";import"./d3-scale-DxJKI2TE.js";import"./index-Bvn5aErC.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-BsRTJ-St.js";import"./chartDataContext-j9c_a0aH.js";import"./CategoricalChart-DPsIkKm4.js";import"./Curve-BBMmlamO.js";import"./step-Jmsq3o4W.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DYaErfcH.js";import"./useAnimationId-Dkacjwid.js";import"./ActivePoints-BYWv-6T2.js";import"./Dot-DxSSo-Hw.js";import"./RegisterGraphicalItemId-DjHk3rYd.js";import"./ErrorBarContext-DOEhJtWW.js";import"./GraphicalItemClipPath-CuTt-XI_.js";import"./SetGraphicalItem-C0yQ7ETh.js";import"./getRadiusAndStrokeWidthFromDot-DoNGVpMm.js";import"./ActiveShapeUtils-GenD1j5W.js";import"./useGraphicalItemIdentity-BtRSxKs5.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
(e.g., a band scale). This determines where within the band
the line is drawn.`,control:{type:"select"},options:["end","middle","start"],table:{type:{summary:'"end" | "middle" | "start"'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},segment:{description:"Tuple of coordinates. If defined, renders a diagonal line segment.",table:{type:{summary:"[{ x?: XValueType | undefined; y?: YValueType | undefined; }, { x?: XValueType | undefined; y?: YValueType | undefined; }]"},category:"General"}},shape:{table:{type:{summary:"Function | ReactNode"},category:"General"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},x:{description:`If defined, renders a vertical line on this position.

This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceLine will internally calculate the correct pixel position.`,table:{type:{summary:"number | string"},category:"General"}},xAxisId:{description:`The id of x-axis which is corresponding to the data.
Required when there are multiple XAxes.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},y:{description:`If defined, renders a horizontal line on this position.

This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceLine will internally calculate the correct pixel position.`,table:{type:{summary:"number | string"},category:"General"}},yAxisId:{description:`The id of y-axis which is corresponding to the data.
Required when there are multiple YAxes.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},fe={argTypes:o,component:i},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(i,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(o),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}},ge=["API"];var r,a,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <ReferenceLine {...args} />
          <Line dataKey="uv" />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ReferenceLineArgs),
    y: 1520,
    stroke: 'blue',
    strokeWidth: 2,
    strokeDasharray: '4 1',
    label: 'My example label'
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{t as API,ge as __namedExportsOrder,fe as default};
