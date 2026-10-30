import{R as e}from"./iframe-BvC_nX2I.js";import{g as l}from"./utils-ePvtT4un.js";import{R as n}from"./ReferenceArea-BP2QYyLs.js";import{R as m}from"./zIndexSlice-Deux2KLj.js";import{C as c}from"./ComposedChart-D6o-RTOM.js";import{p}from"./Page-Cj8EiXz7.js";import{C as d}from"./CartesianGrid-SNfuGx3f.js";import{X as u}from"./XAxis-DJblgq_P.js";import{Y as h}from"./YAxis-Dnd7ECK6.js";import{L as y}from"./Line-DlYE1LdE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-BgbmxeTS.js";import"./resolveDefaultProps-DT691zhh.js";import"./Label-CNqVbewr.js";import"./Text-3ao1DtcI.js";import"./DOMUtils-DlV8uPCF.js";import"./pageBackground-BygNKisP.js";import"./ZIndexLayer-CJcw2vh_.js";import"./index-CbvgqQkR.js";import"./index-C-6557Zz.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bv7-VLAe.js";import"./throttle-CirueaOA.js";import"./CartesianAxis-CcuHoEVr.js";import"./types-CcK0_WR7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bg6jRWvt.js";import"./index-CVNtrs8_.js";import"./index-Cthsl8Eg.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-CaXkiWJ0.js";import"./fillDefinitions-CZGVPI6N.js";import"./useAnimationId-CfSQBeBZ.js";import"./util-Dxo8gN5i.js";import"./RechartsWrapper-YXBLwPUp.js";import"./axisSelectors-D1Op89Ra.js";import"./d3-scale-oQwuANVt.js";import"./index-C59oTpld.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-C1otsVa1.js";import"./ZIndexPortal-BgIvcEBP.js";import"./CategoricalChart-BNHZ2U_e.js";import"./Curve-Dwq2onbG.js";import"./step-MgrEs1-v.js";import"./path-DyVhHtw_.js";import"./LabelList-CRaDVB5f.js";import"./ActivePoints-K5tloKEU.js";import"./Dot-B0BFGoSP.js";import"./activeStyles-D5yKyFeN.js";import"./dataEntryStyles-DH8AExSk.js";import"./Symbols-DHQWc_0k.js";import"./symbol-BOIFwd4y.js";import"./ErrorBarContext-p-ctGfT-.js";import"./SetGraphicalItem-P596Nxos.js";import"./getRadiusAndStrokeWidthFromDot-BvCb0Nrn.js";import"./ActiveShapeUtils-CHw2ZkCc.js";import"./useEffectiveDataKey-B9rISrD-.js";const i={children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},fill:{description:"The fill of the area. Either a color string, or a {@link RechartsFill} object with an SVG definition,\nsuch as a pattern or a gradient. Recharts renders the definition with a unique ID.\nIf the fill object has no `color`, the definition gets the theme color.",control:{type:"color"},table:{type:{summary:"RechartsFill | string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of a single Label component, such as `value` and `position`\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},onClick:{description:"The customized event handler of click on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOut:{description:"The customized event handler of mouseout on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOver:{description:"The customized event handler of mouseover on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},radius:{description:`The radius of corners.

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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"100"}},defaultValue:100}},we={argTypes:i,component:n},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(c,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(y,{dataKey:"uv"}),e.createElement(n,{...s}))),args:{...l(i),x1:"Page B",x2:"Page E",y1:1e3,y2:1500,stroke:"red",strokeOpacity:.3}},xe=["API"];var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{t as API,xe as __namedExportsOrder,we as default};
