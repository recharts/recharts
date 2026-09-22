import{R as e}from"./iframe-DaQbgwSM.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-BK3_xBif.js";import{R as m}from"./zIndexSlice-GtlpPVbP.js";import{C as p}from"./ComposedChart-Bbu2Bio2.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BaDvzjUn.js";import{X as u}from"./XAxis-Dwi6B5gb.js";import{Y as h}from"./YAxis-DJNfgCPe.js";import{L as y}from"./Line-BQic4Z5R.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-Dy562RhS.js";import"./resolveDefaultProps-C03kBNGe.js";import"./Label-BMF2NwhK.js";import"./Text-6pf8QaaJ.js";import"./DOMUtils-B-aaPPhR.js";import"./isWellBehavedNumber-CF6bOuRt.js";import"./useId-C9TE6S2g.js";import"./useBackwardsCompatibleTheme-jIXNHWAs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-e1DF3LHV.js";import"./index-fR-dYqAy.js";import"./index-pcae8h2v.js";import"./CartesianAxis-Dd7LPnIK.js";import"./types-BrU75Oof.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BBiwG0aF.js";import"./throttle-D86JN7dt.js";import"./index-B9PrDzsD.js";import"./index-C_QxJfjv.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BMsAihAT.js";import"./axisSelectors-DiPrK3uM.js";import"./d3-scale-C28Mr6C_.js";import"./index-DVT6pdU4.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-DWDjryZ8.js";import"./chartDataContext-C5kvJ464.js";import"./CategoricalChart-D9AKOXtI.js";import"./Curve-_5Fn1COl.js";import"./step-C8sn29Vk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BlzsOhEO.js";import"./useAnimationId-BjF9VJ68.js";import"./ActivePoints-oBCdZOS2.js";import"./Dot-C7TPiZG8.js";import"./RegisterGraphicalItemId-Clsr70g_.js";import"./ErrorBarContext-B2kb74U-.js";import"./GraphicalItemClipPath-D0ATNOOi.js";import"./SetGraphicalItem-HJSDm9m5.js";import"./getRadiusAndStrokeWidthFromDot-3aetdsat.js";import"./ActiveShapeUtils-CrKaudC-.js";import"./useGraphicalItemIdentity-CLitx1ml.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
