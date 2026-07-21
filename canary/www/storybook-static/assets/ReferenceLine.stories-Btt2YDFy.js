import{R as e}from"./iframe-2CSQwnzh.js";import{g as l}from"./utils-ePvtT4un.js";import{R as n}from"./ReferenceLine-VhyOPG-h.js";import{R as m}from"./zIndexSlice-BFAyLu2K.js";import{C as d}from"./ComposedChart-Drp8NLPv.js";import{p}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-wDjJNs7b.js";import{X as c}from"./XAxis-Q_FxDFmH.js";import{Y as h}from"./YAxis-CGxWNSi-.js";import{L as y}from"./Line-DawadGfv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-whPw80AU.js";import"./resolveDefaultProps-BHTXK_Jm.js";import"./Label-BgiiW0df.js";import"./Text-D8BcLzfv.js";import"./DOMUtils-CR7HkqrI.js";import"./isWellBehavedNumber-Dcam8SOU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BmQ9stZJ.js";import"./index-Cea4V0if.js";import"./index-DaE0ahnp.js";import"./CartesianAxis-B1LfcQH3.js";import"./types-Co_C0j8x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-HMFum7ql.js";import"./throttle-D6AnBAnr.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DBVst9hu.js";import"./index-cEZOrgfU.js";import"./index-DiEzMPwb.js";import"./axisSelectors-svppWMH6.js";import"./d3-scale-Dt9cpg9w.js";import"./CategoricalChart-DtXBMgKk.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-DSNUg0OG.js";import"./chartDataContext-CjOi85nN.js";import"./Curve-BVeBGaCZ.js";import"./step-cLfMjHgU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ba6tXj_A.js";import"./useAnimationId-CkCcxDPT.js";import"./ActivePoints-fb37GVPw.js";import"./Dot-D2O1VtDH.js";import"./RegisterGraphicalItemId-D-cwWngY.js";import"./ErrorBarContext-B19vexPG.js";import"./GraphicalItemClipPath-DcZNtOEm.js";import"./SetGraphicalItem-DiGKkNAO.js";import"./getRadiusAndStrokeWidthFromDot-DvI-6mn5.js";import"./ActiveShapeUtils-CiureFp6.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ue={argTypes:o,component:n},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(d,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(n,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(o),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
