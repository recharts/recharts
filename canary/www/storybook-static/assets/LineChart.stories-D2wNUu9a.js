import{r as i,R as e}from"./iframe-DQsNmxmG.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BCUJdCcc.js";import{R as C}from"./zIndexSlice-fYCbSPba.js";import{L as s}from"./Line-C3FLWaiJ.js";import{X as p}from"./XAxis-BeNbg6hp.js";import{T as c}from"./Tooltip-CGSlMXp0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-MEg26Y_7.js";import"./resolveDefaultProps-C9L4dsEq.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BsRkt3Xk.js";import"./throttle-zQAbuFwu.js";import"./index-6jBLt3fF.js";import"./index-DieS8gnr.js";import"./polarAxisSelectors-B-0rkllN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BIy4_L5R.js";import"./index-CbIjVRAX.js";import"./index-CCZsgeAv.js";import"./renderedTicksSlice-vSa4eBxF.js";import"./index-Cq0Y-kP9.js";import"./fillDefinitions-CxoYZDG2.js";import"./CartesianChart-B32Zddgy.js";import"./chartDataContext-S0JtTO97.js";import"./CategoricalChart-CKZnphjR.js";import"./Layer-JjdEQyi5.js";import"./Curve-C5fpylM9.js";import"./types-wkisKABV.js";import"./step-pQrH6ncJ.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CArKPFy6.js";import"./Label-BGoCqB35.js";import"./Text-Qtf5nEek.js";import"./ZIndexLayer-DJNsuc82.js";import"./ActivePoints-BlJUvkga.js";import"./Dot-CyU-jpb1.js";import"./activeStyles-BgO2Wbsx.js";import"./useAnimationId-CfQHWCsS.js";import"./Symbols-CXxuzOPp.js";import"./symbol-0bvODblh.js";import"./ErrorBarContext-WH4H2KKq.js";import"./SetGraphicalItem-BG-GEzcM.js";import"./getRadiusAndStrokeWidthFromDot-B1d6CA7m.js";import"./ActiveShapeUtils-t6nFfTlu.js";import"./useEffectiveDataKey-CR-coZ9_.js";import"./CartesianAxis-Crywq0Oq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Cpkvj5mB.js";import"./uniqBy-sQmteKOL.js";import"./iteratee-v4pwgsAc.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C38HGCS0.js";import"./Rectangle-rFuZYgZx.js";import"./util-Dxo8gN5i.js";import"./Sector-DiUTWqUB.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
