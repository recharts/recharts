import{r as i,R as e}from"./iframe-DDlpcCnl.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BKwIHSgj.js";import{R as C}from"./zIndexSlice-IyRnOGSL.js";import{L as s}from"./Line-BeAdfBzZ.js";import{X as p}from"./XAxis-BoZpTebr.js";import{T as c}from"./Tooltip-KqHdu6QC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CEsAbTQz.js";import"./resolveDefaultProps-DdcIcuy0.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DJ_js28E.js";import"./throttle-BEGaSLni.js";import"./index-BrGVAlaK.js";import"./index-DgZ0S6kR.js";import"./polarAxisSelectors-CmUB7T9A.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C8E3wvOe.js";import"./index-DQ5N6C5N.js";import"./index-CVLdebNc.js";import"./renderedTicksSlice-CDUEc77e.js";import"./index-DwERpMJ8.js";import"./fillDefinitions-B51hWH8m.js";import"./CartesianChart-EWd5fLMj.js";import"./ZIndexPortal-cCqCXZCV.js";import"./CategoricalChart-fIZxwY-X.js";import"./Layer-G7QHPTqV.js";import"./Curve-BE_oIUBL.js";import"./types-9pREsRXw.js";import"./step-8fTxxi9s.js";import"./path-DyVhHtw_.js";import"./LabelList-D8buJxhL.js";import"./Label-CZPjkQy2.js";import"./Text-BYHxKQhi.js";import"./DOMUtils-CEWteLOc.js";import"./ZIndexLayer-6Wt9kpTG.js";import"./ActivePoints-sqb6X4Yl.js";import"./Dot-D-KXvVde.js";import"./activeStyles-cdXgOxXT.js";import"./useAnimationId-BvctuRLt.js";import"./dataEntryStyles-DFT_PI06.js";import"./Symbols-CUes1UBB.js";import"./symbol-DbG6j_AG.js";import"./ErrorBarContext-BKlvoAQJ.js";import"./SetGraphicalItem-tysqpR10.js";import"./getRadiusAndStrokeWidthFromDot-DKbshIsH.js";import"./ActiveShapeUtils-9MmIWSgd.js";import"./useEffectiveDataKey-DdYNwp-E.js";import"./CartesianAxis-B9o_pqzh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-C-qpYo5b.js";import"./uniqBy-5vufMWU3.js";import"./iteratee-DRvaSPOJ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DO5nm-k1.js";import"./Rectangle-CJnKnMxE.js";import"./util-Dxo8gN5i.js";import"./Sector-BLL9Klsh.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,He as __namedExportsOrder,Oe as default};
