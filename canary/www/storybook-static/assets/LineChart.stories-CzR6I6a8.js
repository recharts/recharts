import{r as i,R as e}from"./iframe-D_khPHZ1.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-viFhErxX.js";import{R as C}from"./zIndexSlice-KFlckT-7.js";import{L as s}from"./Line-CHEB0oTV.js";import{X as p}from"./XAxis-CG7KNKev.js";import{T as c}from"./Tooltip-B6p5KddX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Do2gsgG0.js";import"./resolveDefaultProps-BBG9DHK8.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CBjKjY28.js";import"./throttle-BBn7lrSC.js";import"./index-CB03tEHO.js";import"./index-BuxDgG-t.js";import"./isWellBehavedNumber-DGsU9FBh.js";import"./d3-scale-BLOap0UK.js";import"./index-syOpg8yK.js";import"./index-BI2dlpsL.js";import"./renderedTicksSlice-Jho7gpOC.js";import"./index-CHrlhwwU.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ci9HbE6G.js";import"./chartDataContext-DTR5p3jS.js";import"./CategoricalChart-Bfua2ObC.js";import"./Layer-D1docXzT.js";import"./Curve-D4vzOHVD.js";import"./types-DL7z7syQ.js";import"./step-BnRh-hkR.js";import"./path-DyVhHtw_.js";import"./activeStyles-DVSsJDko.js";import"./Label-DNajAghq.js";import"./Text-CRLTQjiS.js";import"./pageBackground-Cdf9H4fo.js";import"./useId-DisFqhsr.js";import"./useBackwardsCompatibleTheme-BLiMjfFD.js";import"./ZIndexLayer-BGvEmvHh.js";import"./dataEntryStyles-2My5Q2VA.js";import"./useAnimationId-BOA4oZA_.js";import"./ActivePoints-B4rNmWdt.js";import"./Dot-DSp-kazZ.js";import"./RegisterGraphicalItemId-CFGUNGbT.js";import"./ErrorBarContext-DWMtIAoI.js";import"./SetGraphicalItem-CGqBV4nA.js";import"./getRadiusAndStrokeWidthFromDot-ycj1XfTC.js";import"./ActiveShapeUtils-C8SJzoVE.js";import"./useEffectiveDataKey-B2F1WAcU.js";import"./CartesianAxis-DtPap_2c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-9IHiAY7G.js";import"./uniqBy-DXUw7-JM.js";import"./iteratee-C2BbWe9-.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BSu4ikXf.js";import"./Rectangle-BifmVm-G.js";import"./util-Dxo8gN5i.js";import"./Sector-B4BO-2Ae.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
