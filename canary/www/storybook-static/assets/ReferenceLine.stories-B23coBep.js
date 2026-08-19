import{R as e}from"./iframe-BxezfZww.js";import{g as l}from"./utils-ePvtT4un.js";import{R as o}from"./ReferenceLine-DveGaOVM.js";import{R as m}from"./zIndexSlice-HcjonX2F.js";import{C as d}from"./ComposedChart-lZLISn57.js";import{p}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-Dprc3lls.js";import{X as c}from"./XAxis-CiqbzTox.js";import{Y as h}from"./YAxis-CLrmrnP-.js";import{L as y}from"./Line-C7LVm8Rz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-B7Lou8N3.js";import"./resolveDefaultProps-BIZk73OJ.js";import"./Label-Cwi7qDe-.js";import"./Text-BDhYhtIl.js";import"./DOMUtils-DML8OagK.js";import"./isWellBehavedNumber-CIfm0Fso.js";import"./useBackwardsCompatibleTheme-B3ckLjAp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DCAxC-a3.js";import"./index-7ARW1nXD.js";import"./index-BXbofj5h.js";import"./CartesianAxis-DN3oreA6.js";import"./types-CqtRzysP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DT6H86Gd.js";import"./throttle-kDZpq7hG.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CAWBTKvy.js";import"./index-apQUDkx_.js";import"./index-jirKooN3.js";import"./axisSelectors-Cqbxg7Vx.js";import"./d3-scale-D269iDuq.js";import"./CategoricalChart-BhuBu3pE.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-DdIyro--.js";import"./chartDataContext-BSYSRccK.js";import"./Curve-D-Z_q46N.js";import"./step-Dc9pogTJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-szXuAxdz.js";import"./useAnimationId-DlB6WviS.js";import"./ActivePoints-B8-Z2u2e.js";import"./Dot-_cBoNrM4.js";import"./RegisterGraphicalItemId-CDMBYjL1.js";import"./ErrorBarContext-1IA4vt79.js";import"./GraphicalItemClipPath-dU8N3SPe.js";import"./SetGraphicalItem-CwJs58Td.js";import"./getRadiusAndStrokeWidthFromDot-BQG6lvrP.js";import"./ActiveShapeUtils-CSRwAi3u.js";import"./graphicalItemIdentity-CdZfZkJ-.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},he={argTypes:n,component:o},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(d,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(o,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(n),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ye=["API"];export{t as API,ye as __namedExportsOrder,he as default};
