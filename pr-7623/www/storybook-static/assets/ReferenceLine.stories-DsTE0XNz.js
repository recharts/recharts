import{R as e}from"./iframe-B67xakaW.js";import{g as l}from"./utils-ePvtT4un.js";import{R as n}from"./ReferenceLine-BI-kziYS.js";import{R as m}from"./zIndexSlice-D0TzJ1fR.js";import{C as d}from"./ComposedChart-DYPq6hki.js";import{p}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-CG4D2kRB.js";import{X as c}from"./XAxis-FKOR1g-7.js";import{Y as h}from"./YAxis-CgnEOw1P.js";import{L as y}from"./Line-DV865J21.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-DydnlLJq.js";import"./resolveDefaultProps-B29-kufx.js";import"./Label-DIs948ZI.js";import"./Text-Cz97PcLA.js";import"./DOMUtils-B9paDAsr.js";import"./isWellBehavedNumber-ClgfPGEs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bldiyv4x.js";import"./index-C636565A.js";import"./index-hWCiHkWI.js";import"./CartesianAxis-CPVS6EgD.js";import"./types-CBHC2Uao.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B7Sc1x4H.js";import"./throttle-BKrvbeAi.js";import"./RechartsThemeContext-CKqExDZQ.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Cx8TqoHO.js";import"./index-CvOnsJ-w.js";import"./index-Dk_c5Xjv.js";import"./axisSelectors-DXeKf5vs.js";import"./d3-scale-DAYedkSi.js";import"./CategoricalChart-DgP4TH9i.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-BLDHGv8m.js";import"./chartDataContext-CfIiS_I3.js";import"./Curve-us0lQGQS.js";import"./step-BtzpbeJ-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dlexmd5j.js";import"./useAnimationId-pFv40dAf.js";import"./ActivePoints-C6zOCKUI.js";import"./Dot-DQCUJJj2.js";import"./RegisterGraphicalItemId-Ci2aQjFq.js";import"./ErrorBarContext--xCAx9GD.js";import"./GraphicalItemClipPath-CLLzWZH-.js";import"./SetGraphicalItem-D_jFiRTP.js";import"./graphicalItemIdentity-7Y65Hlf3.js";import"./ActiveShapeUtils-i_QMKwre.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
(e.g., a band scale). This determines where within the band
the line is drawn.`,control:{type:"select"},options:["end","middle","start"],table:{type:{summary:'"end" | "middle" | "start"'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},segment:{description:"Tuple of coordinates. If defined, renders a diagonal line segment.",table:{type:{summary:"[{ x?: XValueType | undefined; y?: YValueType | undefined; }, { x?: XValueType | undefined; y?: YValueType | undefined; }]"},category:"General"}},shape:{table:{type:{summary:"Function | ReactNode"},category:"General"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1"}},defaultValue:1},x:{description:`If defined, renders a vertical line on this position.

This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceLine will internally calculate the correct pixel position.`,table:{type:{summary:"number | string"},category:"General"}},xAxisId:{description:`The id of x-axis which is corresponding to the data.
Required when there are multiple XAxes.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},y:{description:`If defined, renders a horizontal line on this position.

This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceLine will internally calculate the correct pixel position.`,table:{type:{summary:"number | string"},category:"General"}},yAxisId:{description:`The id of y-axis which is corresponding to the data.
Required when there are multiple YAxes.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ce={argTypes:o,component:n},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(d,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(n,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(o),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const he=["API"];export{t as API,he as __namedExportsOrder,ce as default};
