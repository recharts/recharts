import{r as i,R as e}from"./iframe-u5XvksY5.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-I1UBMscY.js";import{R as C}from"./zIndexSlice-qPjBbXUc.js";import{L as s}from"./Line-LFMSmh-s.js";import{X as p}from"./XAxis-FOCUFVAl.js";import{T as c}from"./Tooltip-CZaSC32l.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-By94_cXW.js";import"./resolveDefaultProps-BLkmbHVR.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Bi0OjrmZ.js";import"./throttle-B8qtKcg2.js";import"./index-vwmUrPFZ.js";import"./index-CtoGLGiN.js";import"./polarAxisSelectors-D58IkYNc.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C5Gzvvl7.js";import"./index-BpuM8AnC.js";import"./index-HZYgYW5E.js";import"./renderedTicksSlice-CduAdCWE.js";import"./index-DkZbI5V5.js";import"./CartesianChart-9oGErKhp.js";import"./ZIndexPortal-B1bAvAqr.js";import"./CategoricalChart-BBgGbCCg.js";import"./Layer-DZaDPYK5.js";import"./Curve-DQLFDL8K.js";import"./types-B_Vy1dAM.js";import"./step-Bpvz6PO-.js";import"./path-DyVhHtw_.js";import"./LabelList-BkhbrOAx.js";import"./Label-VbOnr0hr.js";import"./Text-DCsWNeTw.js";import"./pageBackground-XEfDP_WE.js";import"./ZIndexLayer-Y9UkGb_Q.js";import"./ActivePoints-BV0ddqGy.js";import"./Dot-Wys9DpOC.js";import"./activeStyles-CGX86F5-.js";import"./useAnimationId-BOOGmCHa.js";import"./dataEntryStyles-RGg8_IXa.js";import"./Symbols-dBRKeymS.js";import"./symbol-CdXzcvWo.js";import"./ErrorBarContext-D-07T4-U.js";import"./SetGraphicalItem-kkTP1No9.js";import"./getRadiusAndStrokeWidthFromDot-bEnvbNkp.js";import"./ActiveShapeUtils-I4oRUBzq.js";import"./useEffectiveDataKey-CHJtUCr7.js";import"./CartesianAxis-C9X2Uzsi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BLaMOS3s.js";import"./uniqBy-BCkqKtFw.js";import"./iteratee-CAJfiHj4.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Cd30wCuH.js";import"./Rectangle-Bs9jcdbm.js";import"./util-Dxo8gN5i.js";import"./Sector-Dx_HQUzt.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Oe as __namedExportsOrder,Ke as default};
