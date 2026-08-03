import{R as e}from"./iframe-zGdozCQh.js";import{g as l}from"./utils-ePvtT4un.js";import{R as n}from"./ReferenceLine-Bf0X8YHI.js";import{R as m}from"./zIndexSlice-CEf5y4wD.js";import{C as d}from"./ComposedChart-Dqdl2vPn.js";import{p}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-UhJmQ7sb.js";import{X as c}from"./XAxis-PIf9M3x3.js";import{Y as h}from"./YAxis-BF2yy0dt.js";import{L as y}from"./Line-pA2XX7ul.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-C16c9YM8.js";import"./resolveDefaultProps-DGss-nCf.js";import"./Label-Cn4tQISS.js";import"./Text-BFD_FCb6.js";import"./DOMUtils-BJDR7s4v.js";import"./isWellBehavedNumber-BpeZz3pN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BxlIB-HR.js";import"./index-Be9faTsQ.js";import"./index-BA1qNDAx.js";import"./CartesianAxis-7tIOhqG7.js";import"./types-D_e406XV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BCsCwo08.js";import"./throttle-DvYlmrcU.js";import"./RechartsThemeContext-DKHHji-l.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-S6h0L_Sx.js";import"./index-Byuc73NK.js";import"./index-lgjWstKk.js";import"./axisSelectors-BKjuK8lH.js";import"./d3-scale-MsmZCvzu.js";import"./CategoricalChart-BpCZjXPz.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-C5t9uLew.js";import"./chartDataContext-cAMS_PG1.js";import"./Curve-4P44R3Ym.js";import"./step-B84DZizD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-jN_ADWTf.js";import"./useAnimationId-ZvRvsbh2.js";import"./ActivePoints-CAJ4vJY1.js";import"./Dot-D23X09CK.js";import"./RegisterGraphicalItemId-COPie9tE.js";import"./ErrorBarContext-5XLz8TVO.js";import"./GraphicalItemClipPath-DyeI25HQ.js";import"./SetGraphicalItem-CU1gvNiL.js";import"./graphicalItemIdentity-CDiHfDkn.js";import"./ActiveShapeUtils-9hROMAJM.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
