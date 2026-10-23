import{R as e}from"./iframe-prTVX46R.js";import{g as l}from"./utils-ePvtT4un.js";import{R as o}from"./ReferenceArea-DKO-hEz7.js";import{R as m}from"./zIndexSlice-BBM3QNxr.js";import{C as p}from"./ComposedChart-JM9IJLAu.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-S_RK1IMs.js";import{X as u}from"./XAxis-CAekIzf1.js";import{Y as h}from"./YAxis-BP1gJNh-.js";import{L as y}from"./Line-jTAj4npb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-1a5Zn_r7.js";import"./resolveDefaultProps-CgD2AS6S.js";import"./Label-CVltcmCw.js";import"./Text-DjfbNrah.js";import"./pageBackground-DWO83YrS.js";import"./isWellBehavedNumber-sGfX6V07.js";import"./useId-ClNpWPkJ.js";import"./useBackwardsCompatibleTheme-CSXD7-a6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BUy73e0U.js";import"./index-DxBxvBWq.js";import"./index-Bh60i1A4.js";import"./dataEntryStyles-D6au6UrY.js";import"./CartesianAxis-vl41q2bl.js";import"./types-D57XnYuF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-iUiCR_an.js";import"./throttle-DvEGNDvN.js";import"./index-BB-SpmyJ.js";import"./index-DnW1VngH.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-3LSQXoSu.js";import"./useAnimationId-BWMAKk3V.js";import"./util-Dxo8gN5i.js";import"./RechartsWrapper-D3mCvzlT.js";import"./axisSelectors-C2RKwHTh.js";import"./d3-scale-CFQbB9BF.js";import"./index-BQtEBMtF.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-D5BTPRp4.js";import"./chartDataContext-C7eScBxX.js";import"./CategoricalChart-DhkwWrJ_.js";import"./Curve-CuhJA6qj.js";import"./step-DkGj8L15.js";import"./path-DyVhHtw_.js";import"./activeStyles-DLUKuBq3.js";import"./ActivePoints-BByUh20Z.js";import"./Dot-B6R-m7zq.js";import"./RegisterGraphicalItemId-Cwh2uO7M.js";import"./ErrorBarContext-Bm4lfbUj.js";import"./GraphicalItemClipPath-BBiEKuCI.js";import"./SetGraphicalItem-FbCkTx_q.js";import"./getRadiusAndStrokeWidthFromDot-GrV3uc-f.js";import"./ActiveShapeUtils-CXxeeNqe.js";import"./useEffectiveDataKey-Byody78s.js";const i={children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of a single Label component, such as `value` and `position`\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},onClick:{description:"The customized event handler of click on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOut:{description:"The customized event handler of mouseout on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOver:{description:"The customized event handler of mouseover on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},radius:{description:`The radius of corners.

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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"100"}},defaultValue:100}},be={argTypes:i,component:o},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(y,{dataKey:"uv"}),e.createElement(o,{...s}))),args:{...l(i),x1:"Page B",x2:"Page E",y1:1e3,y2:1500,stroke:"red",strokeOpacity:.3}},xe=["API"];var r,a,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{t as API,xe as __namedExportsOrder,be as default};
