import{c as e}from"./iframe-CR5xUcH4.js";import{g as l}from"./utils-ePvtT4un.js";import{R as o}from"./ReferenceLine-CeKJgA4I.js";import{g as m}from"./zIndexSlice-Coakq-0y.js";import{C as p}from"./ComposedChart-DbazSM9x.js";import{p as d}from"./Page-DPte-9pC.js";import{C as u}from"./CartesianGrid-DwdQhCQQ.js";import{X as c}from"./XAxis-CPvIxoVT.js";import{Y as h}from"./YAxis-7a5sZdUx.js";import{L as y}from"./Line-V8UyMqJh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CdpBIjqV.js";import"./Layer-DDAYqTxx.js";import"./resolveDefaultProps-Ceeul6CI.js";import"./Label-gV3sJO-c.js";import"./Text-Diq_68Pn.js";import"./DOMUtils-HE2atAIH.js";import"./isWellBehavedNumber-VNzXGTrj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Br2sJvd3.js";import"./index-vQTj3wjJ.js";import"./index-BwAW1XSH.js";import"./CartesianAxis-CM2xAnRM.js";import"./types-vWyLmemb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BX_9N5fQ.js";import"./immer-MiNeKFai.js";import"./RechartsWrapper-DqbEnq-O.js";import"./index-BL2MNBFa.js";import"./index-C1C-S7u7.js";import"./axisSelectors-GqEe5nOB.js";import"./d3-scale-Cr_JmSke.js";import"./CategoricalChart-DNMItnv2.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-C1PsmK-N.js";import"./chartDataContext-YedE8BO5.js";import"./Curve-7AAFvrE4.js";import"./step-CBodA2th.js";import"./path-DyVhHtw_.js";import"./ReactUtils-D5HGwZm0.js";import"./ActivePoints-BYKq7ayk.js";import"./Dot-DyT4z2sM.js";import"./RegisterGraphicalItemId-BwAGbVF8.js";import"./ErrorBarContext-C7CGAddG.js";import"./GraphicalItemClipPath-BXgSat3L.js";import"./SetGraphicalItem-Duk0nTzk.js";import"./useAnimationId-qfC-4EnL.js";import"./getRadiusAndStrokeWidthFromDot-CVCg-N3i.js";import"./ActiveShapeUtils-G1Nz0YGi.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},de={argTypes:n,component:o},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(o,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(n),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ue=["API"];export{t as API,ue as __namedExportsOrder,de as default};
