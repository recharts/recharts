import{R as e}from"./iframe-BP-lIJn6.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-BxU_JGI7.js";import{R as m}from"./zIndexSlice-D3RgJgQF.js";import{C as p}from"./ComposedChart-Di3osW4J.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DjveYuJT.js";import{X as u}from"./XAxis-D7UL0yEG.js";import{Y as h}from"./YAxis-Dyx7Nivk.js";import{L as y}from"./Line-Do4a8iV9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-Dh6XQbJK.js";import"./resolveDefaultProps-BpLU83gk.js";import"./Label-eMzNaTJc.js";import"./Text-sFd385s3.js";import"./pageBackground-BxeZOm5U.js";import"./isWellBehavedNumber-B-TYzgiQ.js";import"./useId-BEGNTi1u.js";import"./useBackwardsCompatibleTheme-CNFi_woZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C0Gq1XyH.js";import"./index-B8dZU-9J.js";import"./index-C8ITQajG.js";import"./dataEntryStyles-DtR4SG-M.js";import"./CartesianAxis-B7dTibl7.js";import"./types-BDcuyNFB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B2e0mRjq.js";import"./throttle-CRwrBkn8.js";import"./index-BOoGZrpB.js";import"./index-j3_diSu4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BGn36pC9.js";import"./axisSelectors-B6bM08CR.js";import"./d3-scale-BUOxWIbI.js";import"./index-BmFIm_LJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-BrvlcuUX.js";import"./chartDataContext-DxnoCrzs.js";import"./CategoricalChart-BLzi3Mv1.js";import"./Curve-B-WHWf6z.js";import"./step-1Avpntyj.js";import"./path-DyVhHtw_.js";import"./activeStyles-CaOdi5W_.js";import"./useAnimationId-BeUNfbh5.js";import"./ActivePoints-BnUbRfQW.js";import"./Dot-B-Fku2ox.js";import"./RegisterGraphicalItemId-CJi8bpow.js";import"./ErrorBarContext-BVsxDLFP.js";import"./GraphicalItemClipPath-_Vh94eGb.js";import"./SetGraphicalItem-CL36LKX_.js";import"./getRadiusAndStrokeWidthFromDot-Bcq6fsJt.js";import"./ActiveShapeUtils-QZxg5z0Q.js";import"./useEffectiveDataKey-C-3Q7bIW.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of a single Label component, such as `value` and `position`\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ge={argTypes:o,component:i},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(i,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(o),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}},be=["API"];var r,a,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{t as API,be as __namedExportsOrder,ge as default};
