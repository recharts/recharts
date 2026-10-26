import{r as i,R as e}from"./iframe-xm0njxpX.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BBo-awEr.js";import{R as C}from"./zIndexSlice-BXJXmFQu.js";import{L as s}from"./Line-8E3Vc0X3.js";import{X as p}from"./XAxis-BO1QGjPl.js";import{T as c}from"./Tooltip-BCFHrh-n.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B8IVe3Ss.js";import"./resolveDefaultProps-B61AogRi.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CvRpVDMX.js";import"./throttle-CQYnjh9B.js";import"./index-sPTpvkxI.js";import"./index-BJuRFged.js";import"./polarAxisSelectors-DQe6GYeu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DRKVpWRJ.js";import"./index--0VHY1xY.js";import"./index-A2yfNmgu.js";import"./renderedTicksSlice-BXAMy43b.js";import"./index-BwWTg3c5.js";import"./CartesianChart-BJCMshR7.js";import"./chartDataContext-Dzgvzmie.js";import"./CategoricalChart-CF01fl7y.js";import"./Layer-BK3cybNP.js";import"./Curve-BAoUkSSw.js";import"./types-dJ8tHIrH.js";import"./step-W8iSilzg.js";import"./path-DyVhHtw_.js";import"./activeStyles-DbHXCiJk.js";import"./Label-S9WiqPCG.js";import"./Text-B0-TExiI.js";import"./pageBackground-DWSrNR00.js";import"./useId-BgEUuOn0.js";import"./ZIndexLayer-DyZHr2FP.js";import"./dataEntryStyles-6HljWj9B.js";import"./useAnimationId-CEkjnsp2.js";import"./ActivePoints-BjJpQq32.js";import"./Dot-CSz5GuhK.js";import"./Symbols-DCRo0j9j.js";import"./symbol-BSoKxRAd.js";import"./RegisterGraphicalItemId-CvVXplwq.js";import"./ErrorBarContext-iSnZN3fR.js";import"./SetGraphicalItem-BWe-V4S4.js";import"./getRadiusAndStrokeWidthFromDot-C3oN3ytl.js";import"./ActiveShapeUtils-BgjHc8Mn.js";import"./useEffectiveDataKey-L1KgQlH4.js";import"./CartesianAxis-C-JfYURt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DlepEBex.js";import"./uniqBy-0D-LcbqQ.js";import"./iteratee-IqDasbN4.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CzL3SQCG.js";import"./Rectangle-y41hMVV_.js";import"./util-Dxo8gN5i.js";import"./Sector-DPbvsCHz.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
