import{e}from"./iframe-CldnC2PN.js";import{g as l}from"./utils-ePvtT4un.js";import{R as n}from"./ReferenceArea-CwoJ5-9C.js";import{R as m}from"./arrayEqualityCheck-BkMemVly.js";import{C as p}from"./ComposedChart-BngszoqL.js";import{C as c}from"./CartesianGrid-BEaZvAgk.js";import{X as d}from"./XAxis-Cj8qZ5rT.js";import{Y as u}from"./YAxis-CrDGCN3a.js";import{L as h}from"./Line-ByBYJUYI.js";import{R as y}from"./RechartsHookInspector-D62gTWo0.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-Bdw6vRTF.js";import"./resolveDefaultProps-BwrkZ9kS.js";import"./Label-CL4-mp52.js";import"./Text-DSAVQ0ab.js";import"./DOMUtils-CLNPxtlu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bu6n17y5.js";import"./zIndexSlice-Dkmz4iFf.js";import"./immer-DMaWcifR.js";import"./CartesianAxis-BLyyO5TZ.js";import"./types-dYqueN3V.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Be71JRZt.js";import"./Rectangle-CtzrYFnf.js";import"./useAnimationId-3owPHR_y.js";import"./RechartsWrapper-DAnE3XKK.js";import"./index-B042oD1N.js";import"./hooks-C8l2rjci.js";import"./axisSelectors-DvlPsvJ3.js";import"./d3-scale-fXH-4SOh.js";import"./CategoricalChart-SLN0-3Ts.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-D5D4yxlx.js";import"./chartDataContext-HhqUZ6D1.js";import"./ReactUtils-vDwQR-8r.js";import"./ActivePoints-BUuw4K3w.js";import"./Dot-5FROqbSu.js";import"./RegisterGraphicalItemId-BmpgF9p0.js";import"./ErrorBarContext-Bu40-WC5.js";import"./GraphicalItemClipPath-_SIbPbOr.js";import"./SetGraphicalItem-QHdiFTBm.js";import"./getRadiusAndStrokeWidthFromDot-BeEBfGl6.js";import"./ActiveShapeUtils-PUYnWCIP.js";import"./isPlainObject-DfSr4O01.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-TT50IcST.js";import"./Sector-Olx8axXc.js";import"./Symbols-CezzAArh.js";import"./symbol-ChaweOtd.js";import"./step-DeOo6rRX.js";import"./Curve-Cs2JifYn.js";import"./index-VkK4RKSk.js";import"./ChartSizeDimensions-De6H2yR6.js";import"./OffsetShower-QG2XVoqu.js";import"./PlotAreaShower-x9Z3Lf2d.js";const i={children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},onClick:{description:"The customized event handler of click on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOut:{description:"The customized event handler of mouseout on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOver:{description:"The customized event handler of mouseover on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},radius:{description:`The radius of corners.

If you provide a single number, it applies to all four corners.
If you provide an array of four numbers, they apply to top-left, top-right, bottom-right, bottom-left corners respectively.`,table:{type:{summary:"[number, number, number, number] | number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},shape:{description:`If set a ReactElement, the shape of the reference area can be customized.
If set a function, the function will be called to render customized shape.`,table:{type:{summary:"Function | ReactNode"},category:"General"}},x1:{description:`Starting X-coordinate of the area.
This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceArea will internally calculate the correct pixel position.

If undefined then the area will extend to the left edge of the chart plot area.`,table:{type:{summary:"number | string"},category:"General"}},x2:{description:`Ending X-coordinate of the area.
This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceArea will internally calculate the correct pixel position.

If undefined then the area will extend to the right edge of the chart plot area.`,table:{type:{summary:"number | string"},category:"General"}},xAxisId:{description:"The id of XAxis which is corresponding to the data. Required when there are multiple XAxes.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},y1:{description:`Starting Y-coordinate of the area.
This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceArea will internally calculate the correct pixel position.

If undefined then the area will extend to the top edge of the chart plot area.`,table:{type:{summary:"number | string"},category:"General"}},y2:{description:`Ending Y-coordinate of the area.
This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceArea will internally calculate the correct pixel position.

If undefined then the area will extend to the bottom edge of the chart plot area.`,table:{type:{summary:"number | string"},category:"General"}},yAxisId:{description:"The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"100"}},defaultValue:100}},we={argTypes:i,component:n},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(u,{type:"number"}),e.createElement(h,{dataKey:"uv"}),e.createElement(n,{...s}),e.createElement(y,null))),args:{...l(i),x1:"Page B",x2:"Page E",y1:1e3,y2:1500,stroke:"red",strokeOpacity:.3}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceArea {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ReferenceAreaArgs),
    x1: 'Page B',
    x2: 'Page E',
    y1: 1000,
    y2: 1500,
    stroke: 'red',
    strokeOpacity: 0.3
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const Ee=["API"];export{t as API,Ee as __namedExportsOrder,we as default};
