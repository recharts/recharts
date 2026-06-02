import{c as e}from"./iframe-NcbJjIA-.js";import{g as l}from"./utils-ePvtT4un.js";import{R as n}from"./ReferenceArea-DEGuak_9.js";import{g as m}from"./zIndexSlice-aCnp2Btu.js";import{C as c}from"./ComposedChart-DfrMZJ_4.js";import{p as d}from"./Page-DPte-9pC.js";import{C as p}from"./CartesianGrid-Bdvce9Bh.js";import{X as u}from"./XAxis-DiCo7qCN.js";import{Y as h}from"./YAxis-ChVwWRRp.js";import{L as y}from"./Line-RSDTcduu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DHJyV6O8.js";import"./Layer-DCqaOLDO.js";import"./resolveDefaultProps-9rxZz0BJ.js";import"./Label-CCVmR4pI.js";import"./Text-DqOWrbn9.js";import"./DOMUtils-VR3x78qW.js";import"./isWellBehavedNumber-CRF88Te0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-HA7Kz5Ib.js";import"./index-YT6PLmfy.js";import"./index-B2hMZxT9.js";import"./CartesianAxis-psqNgsI7.js";import"./types-B9riDZKf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CazECbsF.js";import"./immer-BrPcfpKJ.js";import"./Rectangle-mfMkikui.js";import"./useAnimationId-DLPXxqZ8.js";import"./RechartsWrapper-C1F7SUdh.js";import"./index-CASzwsd1.js";import"./index-CFcgoPKL.js";import"./axisSelectors--8zPyqGt.js";import"./d3-scale-B1TlVjVH.js";import"./CategoricalChart-DRPlCLZK.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-nvfGUb02.js";import"./chartDataContext-D7rZipVq.js";import"./Curve-Cp63qh_R.js";import"./step-C2x-UOx0.js";import"./path-DyVhHtw_.js";import"./ReactUtils-DWeLU6sY.js";import"./ActivePoints-B2_IpYKn.js";import"./Dot-mM6yrIUr.js";import"./RegisterGraphicalItemId-BKDuHm0F.js";import"./ErrorBarContext-B9yYejtE.js";import"./GraphicalItemClipPath-Ck3Yxo8v.js";import"./SetGraphicalItem-BB4v-B7H.js";import"./getRadiusAndStrokeWidthFromDot-D1I_pbtw.js";import"./ActiveShapeUtils-BwCeE1t9.js";const i={children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},onClick:{description:"The customized event handler of click on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOut:{description:"The customized event handler of mouseout on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOver:{description:"The customized event handler of mouseover on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},radius:{description:`The radius of corners.

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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"100"}},defaultValue:100}},pe={argTypes:i,component:n},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(c,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(y,{dataKey:"uv"}),e.createElement(n,{...s}))),args:{...l(i),x1:"Page B",x2:"Page E",y1:1e3,y2:1500,stroke:"red",strokeOpacity:.3}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const ue=["API"];export{t as API,ue as __namedExportsOrder,pe as default};
