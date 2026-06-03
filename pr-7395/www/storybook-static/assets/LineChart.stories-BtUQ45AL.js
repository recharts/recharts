import{P as s,c as e}from"./iframe-DWpXT6OO.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-DPte-9pC.js";import{L as i}from"./LineChart-BQY9pHty.js";import{g as C}from"./zIndexSlice-BI8aBdB2.js";import{L as n}from"./Line-CQQWht13.js";import{X as p}from"./XAxis-BjHcYZV7.js";import{T as c}from"./Tooltip-BDoI7nsn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C7TEH3BS.js";import"./index-4-WnE7FO.js";import"./index-CnH4suYJ.js";import"./index-C9JIL6RB.js";import"./index-CJpuQcHC.js";import"./immer-CtD26uCH.js";import"./get-CAMMj0jB.js";import"./renderedTicksSlice-DwGC_mjp.js";import"./axisSelectors-D3pmM5ea.js";import"./d3-scale-CNTc-b9c.js";import"./resolveDefaultProps-CU4FGCoK.js";import"./isWellBehavedNumber-CW4w7lw5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BL_alDPA.js";import"./chartDataContext-CQfTawPZ.js";import"./CategoricalChart-CQFeC6FI.js";import"./Curve-wqoEsp4f.js";import"./types-B1PNqcSi.js";import"./step-C03CUoTX.js";import"./path-DyVhHtw_.js";import"./Layer-DdIFnola.js";import"./ReactUtils-CGwSHaxd.js";import"./Label-BLTDXbDF.js";import"./Text-y6qBsXbA.js";import"./DOMUtils-x2D0RHyJ.js";import"./ZIndexLayer-Cqbl6fly.js";import"./ActivePoints-D8LyVTVu.js";import"./Dot-B_vusOKB.js";import"./RegisterGraphicalItemId-CI_L8duS.js";import"./ErrorBarContext-BPuM-bX0.js";import"./GraphicalItemClipPath-Xef2qiO-.js";import"./SetGraphicalItem-Brjb-bLT.js";import"./useAnimationId-CbTt72_H.js";import"./getRadiusAndStrokeWidthFromDot-N8lTwYxy.js";import"./ActiveShapeUtils-6dq8aYlX.js";import"./CartesianAxis-3iObmYRO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-90O8KY7B.js";import"./uniqBy-BYp6XD8y.js";import"./iteratee-S--T3Ost.js";import"./Cross-CsC1zjvc.js";import"./Rectangle-B23U2X2N.js";import"./Sector-C1HiTMuN.js";const Ce={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const [isHovered, setIsHovered] = useState(false);
    const onMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, [setIsHovered]);
    const onMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, [setIsHovered]);
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} dataKey="uv" strokeWidth={isHovered ? 8 : 4} animationDuration={5000} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
        </LineChart>
        <LineChart {...args} id="BookTwo" className="BookTwo">
          <Line isAnimationActive={false} name="BookTwo" type="monotone" dataKey="uv" stroke="#ff7300" />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData,
    syncId: 'example-syncId',
    width: 400,
    height: 400
  }
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ee=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ee as __namedExportsOrder,Ce as default};
