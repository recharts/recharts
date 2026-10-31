import{R as e}from"./iframe-CqZM7-m_.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-BCzp7oUY.js";import{R as m}from"./zIndexSlice-C2bhYwAU.js";import{C as p}from"./ComposedChart-bZT0Cb13.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Br8mHJsN.js";import{X as u}from"./XAxis-KlRKQHwy.js";import{Y as h}from"./YAxis-ae7SlnFd.js";import{L as y}from"./Line-Bo0PrlbL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer--KWigSyO.js";import"./resolveDefaultProps-DIo2Sl-P.js";import"./Label-CFulNYa4.js";import"./Text-D-XPvK3p.js";import"./DOMUtils-xk6ID9X9.js";import"./pageBackground-Bhwi_Yxq.js";import"./ZIndexLayer-CcqTqnO7.js";import"./index-C-aUkLsy.js";import"./index-DpXM8lGR.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DaUnHX5G.js";import"./throttle-BMiHfZwg.js";import"./CartesianAxis-F_8zYdOn.js";import"./types-vIB-y3qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D_esDvci.js";import"./index-CztSWwc1.js";import"./index-NyV8lhCm.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C-tKczMb.js";import"./axisSelectors-CU7asiQ5.js";import"./d3-scale-CaJTA9nk.js";import"./index-DtqG7I3W.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./themeFill-CUygaBJV.js";import"./CartesianChart-g7znHwgk.js";import"./ZIndexPortal-xTgrkJOp.js";import"./CategoricalChart-CjJTDTQz.js";import"./fillDefinitions-1X04y-fM.js";import"./Curve-Drzcx3Ud.js";import"./step-v_r5NIvy.js";import"./path-DyVhHtw_.js";import"./LabelList-DhQNMiPW.js";import"./ActivePoints-BpTQnUkT.js";import"./Dot-DqP_pV0T.js";import"./activeStyles-cNHowlQL.js";import"./useAnimationId-Bff8cv61.js";import"./dataEntryStyles-Df1iMIlW.js";import"./Symbols-DzjBnU_i.js";import"./symbol-B1C_m7FV.js";import"./ErrorBarContext-CF_mHvca.js";import"./SetGraphicalItem-BGa3ruh5.js";import"./getRadiusAndStrokeWidthFromDot-CxqTtpIP.js";import"./ActiveShapeUtils-Dat3aOlo.js";import"./useEffectiveDataKey-B0QeK97Q.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of a single Label component, such as `value` and `position`\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},we={argTypes:o,component:i},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(i,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(o),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}},xe=["API"];var r,a,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{t as API,xe as __namedExportsOrder,we as default};
