import{R as e}from"./iframe-h_l55m_t.js";import{g as l}from"./utils-ePvtT4un.js";import{R as o}from"./ReferenceLine-Ce84kj6j.js";import{R as m}from"./zIndexSlice-DtOJxrcv.js";import{C as p}from"./ComposedChart-BAup3dHc.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-DnUZu_hk.js";import{X as c}from"./XAxis-CsptUwef.js";import{Y as h}from"./YAxis-Db6yYFWM.js";import{L as y}from"./Line-7LYQCCSG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DBMd4dxk.js";import"./Layer-rrxq_JkN.js";import"./resolveDefaultProps-D8-0lbpZ.js";import"./Label-Biqo5Eli.js";import"./Text-Cm107LG_.js";import"./DOMUtils-CG_MvRCE.js";import"./isWellBehavedNumber-B1Li3gr_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D7uTd8cS.js";import"./index-BdQ12acY.js";import"./index-wHKnWgSU.js";import"./CartesianAxis-CTJIWXoj.js";import"./types-7ZgAaUHx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CmHU-lei.js";import"./immer-3kgM1Yrm.js";import"./RechartsWrapper-GmtYc35d.js";import"./index-CCMntdAh.js";import"./index-CY3OpiR2.js";import"./axisSelectors-DWvAkDEO.js";import"./d3-scale-D1BOaHId.js";import"./string-B6fdYHAA.js";import"./CategoricalChart-sP3BCXGi.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-BQCaFT7C.js";import"./chartDataContext-Bq9tVFqt.js";import"./Curve-BUDj-vjw.js";import"./step-D8_8cE93.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BMyeCqfp.js";import"./useAnimationId-Dn6PcdJm.js";import"./ActivePoints-BgXP9QSv.js";import"./Dot-CN1BxqM7.js";import"./RegisterGraphicalItemId-MWElRUOD.js";import"./ErrorBarContext-BL5qoR-W.js";import"./GraphicalItemClipPath-BwjhPGOP.js";import"./SetGraphicalItem-tyshoNX9.js";import"./getRadiusAndStrokeWidthFromDot-BDAvmvPt.js";import"./ActiveShapeUtils-DIPFKhPu.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ue={argTypes:n,component:o},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(o,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(n),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ce=["API"];export{t as API,ce as __namedExportsOrder,ue as default};
