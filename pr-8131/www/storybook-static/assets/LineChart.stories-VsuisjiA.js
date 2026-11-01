import{r as i,R as e}from"./iframe-CcMBsn7a.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-HAW0TI6Z.js";import{R as C}from"./zIndexSlice-DFRlFrsj.js";import{L as s}from"./Line-CsN0isYC.js";import{X as p}from"./XAxis-Dcud2AjR.js";import{T as c}from"./Tooltip-B3Mrs5p-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C5Uizgqh.js";import"./resolveDefaultProps-C_I-9eVr.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CpYzXpFY.js";import"./throttle-LNv5qelv.js";import"./index-BSB29nKH.js";import"./index-SlWo1Crq.js";import"./polarAxisSelectors-DoAcr0yY.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DgNN2Fjk.js";import"./index-CdPGreQS.js";import"./index-CVuW9U_Y.js";import"./renderedTicksSlice-BvTPYPK6.js";import"./index-DNvfWRuY.js";import"./fillDefinitions-Cn95lAWR.js";import"./CartesianChart-GrqiJAJ3.js";import"./ZIndexPortal-CBXOiKa0.js";import"./CategoricalChart-BZVQkMIT.js";import"./Layer-CeaFY6L3.js";import"./Curve-CgTOK48B.js";import"./types-6qK0DF3w.js";import"./step-Dj8K5zlQ.js";import"./path-DyVhHtw_.js";import"./LabelList-BOiHk-iP.js";import"./Label-M1IGuJE8.js";import"./Text-Dz_XqFLj.js";import"./DOMUtils-DHsAC8dS.js";import"./ZIndexLayer-BQYqJ9ai.js";import"./ActivePoints-BpaOU93T.js";import"./Dot-DnefNcpX.js";import"./activeStyles-CkIUhE4Y.js";import"./useAnimationId-BiyhMFfV.js";import"./dataEntryStyles-Bttpss0z.js";import"./Symbols-BeP2l-ue.js";import"./symbol-ZVm563IN.js";import"./ErrorBarContext-B0K3ejq2.js";import"./SetGraphicalItem-D39u22t5.js";import"./getRadiusAndStrokeWidthFromDot-DGeLWXaD.js";import"./ActiveShapeUtils-Ce6BVgWv.js";import"./useEffectiveDataKey-C8oLMiMN.js";import"./CartesianAxis-Dr7Ti05X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CIR_VWXQ.js";import"./uniqBy-Cq9UYuC_.js";import"./iteratee-CPdK2ALT.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DUG9Ikbh.js";import"./Rectangle-BJTdQbL8.js";import"./util-Dxo8gN5i.js";import"./Sector-5AB5GNHW.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
