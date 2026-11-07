import{r as i,R as e}from"./iframe-CAwz8uN7.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-9lfdGqai.js";import{R as C}from"./zIndexSlice-TMbeSoaw.js";import{L as s}from"./Line-C7Pmhg54.js";import{X as p}from"./XAxis-DaHA7aw5.js";import{T as c}from"./Tooltip-ZJbItvbk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dxg_wm9v.js";import"./resolveDefaultProps-DMIb7SBs.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CpwbL3Oz.js";import"./throttle-DghoigHv.js";import"./index-DgXSxR_f.js";import"./index-Bzw5OmaH.js";import"./polarAxisSelectors-Cc_qYj6o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CIIJy1t9.js";import"./index-Bn6lI9jh.js";import"./index-DXtXm7rl.js";import"./renderedTicksSlice-GqHDAcQt.js";import"./index-D4t20APB.js";import"./fillDefinitions-CB-_Qdnq.js";import"./CartesianChart-Cfm778D2.js";import"./chartDataContext-BqdYE3y4.js";import"./CategoricalChart-BV8BHimy.js";import"./Layer-LEH2Le6G.js";import"./Curve-S9C-Z9CI.js";import"./types-BWdHpl7S.js";import"./step-D__pRIvp.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BvT9zs0X.js";import"./Label-CdS579rS.js";import"./Text-B8IGolEi.js";import"./ZIndexLayer-BXCDLr1d.js";import"./ActivePoints-CVXTLllc.js";import"./Dot-CLdEzait.js";import"./activeStyles-WxNZ0DKg.js";import"./useAnimationId-p8KP1za0.js";import"./Symbols-B_L6SHWg.js";import"./symbol-EvKS_tYy.js";import"./ErrorBarContext-Qh2D0zyI.js";import"./SetGraphicalItem-BpveB_1U.js";import"./getRadiusAndStrokeWidthFromDot-E1a8C94b.js";import"./ActiveShapeUtils-CWtt7knh.js";import"./useEffectiveDataKey-DBkqmySO.js";import"./CartesianAxis-VsizMTED.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DlbUgjzV.js";import"./uniqBy-D-DUMfVG.js";import"./iteratee-BAcU7c4m.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Bj4UTGDm.js";import"./Rectangle-COjWgFDq.js";import"./util-Dxo8gN5i.js";import"./Sector-DiqzRaDU.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Ke as __namedExportsOrder,we as default};
