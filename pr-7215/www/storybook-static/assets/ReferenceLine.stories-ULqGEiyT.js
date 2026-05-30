import{c as e}from"./iframe-D2N5XcPI.js";import{g as l}from"./utils-ePvtT4un.js";import{R as o}from"./ReferenceLine-CDoRras2.js";import{g as m}from"./zIndexSlice-RoIFDUUO.js";import{C as p}from"./ComposedChart-Blurisz3.js";import{p as d}from"./Page-DPte-9pC.js";import{C as u}from"./CartesianGrid-DJafnYKC.js";import{X as c}from"./XAxis-CXIGR-DS.js";import{Y as h}from"./YAxis-BOjzt3yv.js";import{L as y}from"./Line-CeIcMNSX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DEEjpUoM.js";import"./Layer-BVkY8iZh.js";import"./resolveDefaultProps-Bi-9DeEE.js";import"./Label-Cnng5bNL.js";import"./Text-S_HdFT4_.js";import"./DOMUtils-i2_cO7II.js";import"./isWellBehavedNumber-TNE8-lTU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C0bDYuES.js";import"./index-DnYw-Xim.js";import"./index-B5AuwgDI.js";import"./CartesianAxis-By2KL9D2.js";import"./types-O2bCi3CM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-uobIs_9Z.js";import"./immer-DD2jh41l.js";import"./RechartsWrapper-CuZS2kGu.js";import"./index-mVudWXdT.js";import"./index-BhCsKlJc.js";import"./axisSelectors-CRrbvK-r.js";import"./d3-scale-BsFKuCR3.js";import"./string-yHBgcFlJ.js";import"./CategoricalChart-BLp4HgeB.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-1QuMF_W-.js";import"./chartDataContext-CC_X3BVp.js";import"./Curve-QwKIY61o.js";import"./step-CVnlc3Ua.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BoZ9ojjB.js";import"./useAnimationId-DqQ-6Bs7.js";import"./ActivePoints-DlrEajwU.js";import"./Dot-CsqPwlDd.js";import"./RegisterGraphicalItemId-B3-aUvfY.js";import"./ErrorBarContext-AJvViA7S.js";import"./GraphicalItemClipPath-C443LB5B.js";import"./SetGraphicalItem-Bb7tRa3R.js";import"./getRadiusAndStrokeWidthFromDot-DOJOfu6K.js";import"./ActiveShapeUtils-hlQp3kXL.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
