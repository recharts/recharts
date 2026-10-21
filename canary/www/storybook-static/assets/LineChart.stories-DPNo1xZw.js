import{r as i,R as e}from"./iframe-BFObQXXM.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Bp_cne0z.js";import{R as C}from"./zIndexSlice-BvSBG_sk.js";import{L as s}from"./Line-fvr9nFjR.js";import{X as p}from"./XAxis-qu1te6gL.js";import{T as c}from"./Tooltip-qCP9WKi1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D0l9eNV0.js";import"./resolveDefaultProps-BRFxqhI5.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CVf0-qpU.js";import"./throttle-DjO6J8yc.js";import"./index-BDLQEm-M.js";import"./index-DuyOw6al.js";import"./isWellBehavedNumber-Di8XhGY_.js";import"./d3-scale-Da5OAhLE.js";import"./index-D88_648m.js";import"./index-DgBcae_n.js";import"./renderedTicksSlice-ElbwHqBe.js";import"./index-D3gbqmrd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D-DmleFH.js";import"./chartDataContext-DLE8D3iQ.js";import"./CategoricalChart-CTQAivkk.js";import"./Layer-B5sm7Diz.js";import"./Curve-vRM4WLtL.js";import"./types-D0QZpxYL.js";import"./step-DZUEZKzr.js";import"./path-DyVhHtw_.js";import"./activeStyles-CWTGeeaa.js";import"./Label-DDOQ4R0s.js";import"./Text-CJhUB4hq.js";import"./pageBackground-C-W7t-2X.js";import"./useId-C4vD49YQ.js";import"./useBackwardsCompatibleTheme-SoWlTCM6.js";import"./ZIndexLayer-Dx_I1S2M.js";import"./useAnimationId-5IpIdjB8.js";import"./dataEntryStyles-BYgKVvun.js";import"./ActivePoints-u30qQxp9.js";import"./Dot-D0UZAudw.js";import"./ErrorBarContext-A6KbAgUZ.js";import"./GraphicalItemClipPath-Veko-L0U.js";import"./SetGraphicalItem-UiOjxlQM.js";import"./getRadiusAndStrokeWidthFromDot-l8Ertzo7.js";import"./ActiveShapeUtils-3kPY9Bl6.js";import"./useEffectiveDataKey-DoMzN8uO.js";import"./CartesianAxis-LKjUZ976.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CATtOAUw.js";import"./uniqBy-Cqj_Zr9d.js";import"./iteratee-CKc5G6nr.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CGAu3OVA.js";import"./Rectangle-X-8XVq24.js";import"./util-Dxo8gN5i.js";import"./Sector-rRUrdzKs.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
