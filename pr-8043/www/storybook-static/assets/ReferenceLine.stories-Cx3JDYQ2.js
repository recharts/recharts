import{R as e}from"./iframe-prTVX46R.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-D6d-xGfC.js";import{R as m}from"./zIndexSlice-BBM3QNxr.js";import{C as p}from"./ComposedChart-JM9IJLAu.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-S_RK1IMs.js";import{X as u}from"./XAxis-CAekIzf1.js";import{Y as h}from"./YAxis-BP1gJNh-.js";import{L as y}from"./Line-jTAj4npb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-1a5Zn_r7.js";import"./resolveDefaultProps-CgD2AS6S.js";import"./Label-CVltcmCw.js";import"./Text-DjfbNrah.js";import"./pageBackground-DWO83YrS.js";import"./isWellBehavedNumber-sGfX6V07.js";import"./useId-ClNpWPkJ.js";import"./useBackwardsCompatibleTheme-CSXD7-a6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BUy73e0U.js";import"./index-DxBxvBWq.js";import"./index-Bh60i1A4.js";import"./dataEntryStyles-D6au6UrY.js";import"./CartesianAxis-vl41q2bl.js";import"./types-D57XnYuF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-iUiCR_an.js";import"./throttle-DvEGNDvN.js";import"./index-BB-SpmyJ.js";import"./index-DnW1VngH.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D3mCvzlT.js";import"./axisSelectors-C2RKwHTh.js";import"./d3-scale-CFQbB9BF.js";import"./index-BQtEBMtF.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-D5BTPRp4.js";import"./chartDataContext-C7eScBxX.js";import"./CategoricalChart-DhkwWrJ_.js";import"./Curve-CuhJA6qj.js";import"./step-DkGj8L15.js";import"./path-DyVhHtw_.js";import"./activeStyles-DLUKuBq3.js";import"./useAnimationId-BWMAKk3V.js";import"./ActivePoints-BByUh20Z.js";import"./Dot-B6R-m7zq.js";import"./RegisterGraphicalItemId-Cwh2uO7M.js";import"./ErrorBarContext-Bm4lfbUj.js";import"./GraphicalItemClipPath-BBiEKuCI.js";import"./SetGraphicalItem-FbCkTx_q.js";import"./getRadiusAndStrokeWidthFromDot-GrV3uc-f.js";import"./ActiveShapeUtils-CXxeeNqe.js";import"./useEffectiveDataKey-Byody78s.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of a single Label component, such as `value` and `position`\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
