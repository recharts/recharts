import{r as i,R as e}from"./iframe-BqFv--n0.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DQAfyNsp.js";import{R as C}from"./zIndexSlice-CQSP_367.js";import{L as s}from"./Line-Cu7SDvK4.js";import{X as p}from"./XAxis-Dd_n4Mfj.js";import{T as c}from"./Tooltip-CKUlzj5y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CRaC0TZF.js";import"./resolveDefaultProps-D0e0pmfJ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-ZWEeDNRz.js";import"./throttle-u_PA2Aue.js";import"./index-BLvw7yWi.js";import"./index-Bv6EKtOE.js";import"./isWellBehavedNumber-xy8z0j2l.js";import"./d3-scale-CFuq5uTk.js";import"./index-CDAyT67T.js";import"./index-BxavCyTA.js";import"./renderedTicksSlice-CjmFqNX-.js";import"./index-3DQVsuvq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CWGitRSv.js";import"./chartDataContext-uAg4LOvf.js";import"./CategoricalChart-LtTngwAd.js";import"./Layer-VP2k7KQb.js";import"./Curve-B2qT8EGI.js";import"./types-A41OMRS1.js";import"./step-DAllZbzr.js";import"./path-DyVhHtw_.js";import"./activeStyles-C0pD60nL.js";import"./Label-DI-ST-i-.js";import"./Text-BW5R7YWF.js";import"./pageBackground-B1lJR1Eh.js";import"./useId-Ddcb8ROb.js";import"./useBackwardsCompatibleTheme-NnVOi814.js";import"./ZIndexLayer-m5JcFv6F.js";import"./useAnimationId-CZ2QT6KZ.js";import"./dataEntryStyles-Ijd8738K.js";import"./ActivePoints-BuaaOhKZ.js";import"./Dot-Ck25bOyu.js";import"./ErrorBarContext-CHaebdqW.js";import"./GraphicalItemClipPath-DlDw9PG0.js";import"./SetGraphicalItem-DarYZt9y.js";import"./getRadiusAndStrokeWidthFromDot-pw39BaVD.js";import"./ActiveShapeUtils-4w4oDN2L.js";import"./useEffectiveDataKey-B-x1_7m_.js";import"./CartesianAxis-CpohuUTj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DK8O9wAS.js";import"./uniqBy-BAbl3tI-.js";import"./iteratee-DOA0wS8i.js";import"./isArguments-yB-y1yaH.js";import"./Cross-FUOJO6PC.js";import"./Rectangle-Bht2f_LE.js";import"./util-Dxo8gN5i.js";import"./Sector-Bm9vHCvm.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
