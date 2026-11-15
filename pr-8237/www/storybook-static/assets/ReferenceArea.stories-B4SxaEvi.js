import{R as e}from"./iframe-C75BlFXB.js";import{g as l}from"./utils-ePvtT4un.js";import{R as o}from"./ReferenceArea-C_U7jlsw.js";import{R as m}from"./zIndexSlice-4GxCw66H.js";import{C as c}from"./ComposedChart-Bw6iA5fE.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BLhPxh__.js";import{X as u}from"./XAxis-bu4t9p5Z.js";import{Y as h}from"./YAxis-CM0RKDPz.js";import{L as y}from"./Line-BTHOdtzg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-9txovic7.js";import"./resolveDefaultProps-CF3TLSY4.js";import"./Label-D2Ecv790.js";import"./Text-CFNdT-9W.js";import"./ZIndexLayer-SbUjc4VB.js";import"./index-Ce13AGyB.js";import"./index-CWJaW9bb.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dz-eHC-D.js";import"./throttle-BrgJpY2A.js";import"./CartesianAxis-Cq0K36Zo.js";import"./types-B1z8Z6Cy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Culw3tiU.js";import"./index-BoIFErVW.js";import"./index-EzgMka2g.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-LhN5JgeO.js";import"./fillDefinitions-Bn6BAHMd.js";import"./useAnimationId-BsyXEGTp.js";import"./util-Dxo8gN5i.js";import"./RechartsWrapper-Di9_KxKG.js";import"./axisSelectors-DvLkyA4P.js";import"./d3-scale-PhqlfAou.js";import"./index-aBb4My7l.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-DnnmNz3w.js";import"./chartDataContext-BTXdmqoO.js";import"./CategoricalChart-FqiOzffn.js";import"./Curve-BlWbOZj8.js";import"./step--aXjfd4u.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-D_1EIJ1_.js";import"./ActivePoints-CHWcM_kG.js";import"./Dot-DNLFUQdl.js";import"./activeStyles-DZYHYdm_.js";import"./Symbols-DWw2Hw6G.js";import"./symbol-BbI-T7nn.js";import"./ErrorBarContext-C2oPAhQ2.js";import"./SetGraphicalItem-CZU_HqN4.js";import"./getRadiusAndStrokeWidthFromDot-DHebNLcs.js";import"./ActiveShapeUtils-5rtEYr00.js";import"./useEffectiveDataKey-8cfDXulc.js";const i={children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},fill:{description:"The fill of the area. Either a color string, or a {@link RechartsFill} object with an SVG definition,\nsuch as a pattern or a gradient. Recharts renders the definition with a unique ID.\nIf the fill object has no `color`, the definition gets the theme color.",control:{type:"color"},table:{type:{summary:"RechartsFill | string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of a single Label component, such as `value` and `position`\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},onClick:{description:"The customized event handler of click on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOut:{description:"The customized event handler of mouseout on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOver:{description:"The customized event handler of mouseover on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},radius:{description:`The radius of corners.

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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"100"}},defaultValue:100}},ge={argTypes:i,component:o},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(c,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(y,{dataKey:"uv"}),e.createElement(o,{...s}))),args:{...l(i),x1:"Page B",x2:"Page E",y1:1e3,y2:1500,stroke:"red",strokeOpacity:.3}},be=["API"];var r,a,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{t as API,be as __namedExportsOrder,ge as default};
