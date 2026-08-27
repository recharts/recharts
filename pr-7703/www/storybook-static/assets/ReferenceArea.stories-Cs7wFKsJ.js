import{R as e}from"./iframe-COd9kUku.js";import{g as l}from"./utils-ePvtT4un.js";import{R as n}from"./ReferenceArea-CTN3iB_g.js";import{R as m}from"./zIndexSlice-BfP4v1bS.js";import{C as p}from"./ComposedChart-Vvr56aGu.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CgOmeVcK.js";import{X as u}from"./XAxis-B5YW1-Pp.js";import{Y as h}from"./YAxis-Bz97xI6z.js";import{L as y}from"./Line-C6DX3tAD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-riiSoJFM.js";import"./resolveDefaultProps-D_OJMKIx.js";import"./Label-BfhUPh9D.js";import"./Text-osvpinWz.js";import"./DOMUtils-csxZCivv.js";import"./isWellBehavedNumber-Bypxk17g.js";import"./useId-Cuf_ayBp.js";import"./useBackwardsCompatibleTheme-B805O1fX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-06cimeo-.js";import"./index-COL2WR0f.js";import"./index-BSevdux3.js";import"./CartesianAxis-DNJooG1E.js";import"./types-5NhdCA1W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CZAtvUE5.js";import"./throttle-5ro8HE4Y.js";import"./index-BJ9jwzw4.js";import"./index-5Vml1b2p.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-DzmCpk66.js";import"./useAnimationId-xpwU92YM.js";import"./util-Dxo8gN5i.js";import"./RechartsWrapper-CqMN8AUr.js";import"./axisSelectors-i296AGH9.js";import"./d3-scale-uQ_gA658.js";import"./index-RUiFmAll.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-DI_xXxUF.js";import"./chartDataContext-D64HN0cL.js";import"./CategoricalChart-Cy8ngVMI.js";import"./Curve-C2nwlVhI.js";import"./step-C5ZSArS6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-RKe26m0b.js";import"./ActivePoints-ZUmLEJxd.js";import"./Dot-DFTXaHC9.js";import"./RegisterGraphicalItemId-rqUDDANA.js";import"./ErrorBarContext-U_BzfmOa.js";import"./GraphicalItemClipPath-DjJkXpBH.js";import"./SetGraphicalItem-Cdo5fsgn.js";import"./getRadiusAndStrokeWidthFromDot-BduJCXYw.js";import"./ActiveShapeUtils-vcId9Asm.js";import"./graphicalItemIdentity-CdZfZkJ-.js";const i={children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},onClick:{description:"The customized event handler of click on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOut:{description:"The customized event handler of mouseout on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseOver:{description:"The customized event handler of mouseover on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup on the rectangle",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},radius:{description:`The radius of corners.

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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"100"}},defaultValue:100}},be={argTypes:i,component:n},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(y,{dataKey:"uv"}),e.createElement(n,{...s}))),args:{...l(i),x1:"Page B",x2:"Page E",y1:1e3,y2:1500,stroke:"red",strokeOpacity:.3}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const ve=["API"];export{t as API,ve as __namedExportsOrder,be as default};
