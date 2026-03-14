import{e}from"./iframe-CMkrvckg.js";import{g as l}from"./utils-ePvtT4un.js";import{R as n}from"./ReferenceArea-BUrQHZIa.js";import{R as m}from"./arrayEqualityCheck-C-j9cVnD.js";import{C as p}from"./ComposedChart-BskBKFZP.js";import{C as c}from"./CartesianGrid-a6TSLvyJ.js";import{X as d}from"./XAxis-CRTScQzT.js";import{Y as u}from"./YAxis-DuUTIFNy.js";import{L as h}from"./Line-DyabMQ5Q.js";import{R as y}from"./RechartsHookInspector-LPNgAumr.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-4Y2Bpro8.js";import"./resolveDefaultProps-0hHUpMbb.js";import"./Label-CK8WpSeL.js";import"./Text-CfL4AkJ2.js";import"./DOMUtils-CY4V2W-_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer--DEMgBxJ.js";import"./zIndexSlice-CRGV0CLv.js";import"./immer-CyD0Wx6o.js";import"./CartesianAxis-BQn2ecgs.js";import"./types-h_n1Y6CX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DRtBvqzi.js";import"./Rectangle-BXlSVzkG.js";import"./useAnimationId-Dnz94C6_.js";import"./RechartsWrapper-B_AEo7CP.js";import"./index-l2b25tqQ.js";import"./hooks-z2F_PL2D.js";import"./axisSelectors-DiKss4V_.js";import"./d3-scale-fpsdvWAN.js";import"./CategoricalChart-Bl6nS1b9.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-mSJGg3IH.js";import"./chartDataContext-Dg6bbq-C.js";import"./ReactUtils-koRtCpPb.js";import"./ActivePoints-DPO6sfmL.js";import"./Dot-WqWz8qFp.js";import"./RegisterGraphicalItemId-B_jKurhL.js";import"./ErrorBarContext-DR1SZQJs.js";import"./GraphicalItemClipPath-CdBUcuRI.js";import"./SetGraphicalItem-D8O9NSBD.js";import"./getRadiusAndStrokeWidthFromDot-BtVMYfvn.js";import"./ActiveShapeUtils-fAQzD1Cv.js";import"./isPlainObject-E65nxFXT.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-B-eKIWgm.js";import"./Sector-BAVvYkxC.js";import"./Symbols-C3K856pn.js";import"./symbol-C1RL9RI_.js";import"./step-BgKCtsuA.js";import"./Curve-D0J3TcJs.js";import"./index-BpykTG3u.js";import"./ChartSizeDimensions-tEh5XVCc.js";import"./OffsetShower-CI6ZxkzS.js";import"./PlotAreaShower-CiPqTN59.js";const i={children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},onClick:{description:"The customized event handler of click on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOut:{description:"The customized event handler of mouseout on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOver:{description:"The customized event handler of mouseover on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},radius:{description:`The radius of corners.

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
