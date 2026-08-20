import{r as s,R as e}from"./iframe-1ThqpvbR.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-N7VRS76I.js";import{R as C}from"./zIndexSlice-D1UhtHk3.js";import{L as m}from"./Line-CQ64EOYy.js";import{X as p}from"./XAxis-P8CW3MKP.js";import{T as c}from"./Tooltip-qvvWeQJ8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DcjLdZwM.js";import"./index-CfQ7Fwii.js";import"./index-CktiEatn.js";import"./index-DoTHKFlr.js";import"./index-QzMa9_Xi.js";import"./throttle-C73VAA69.js";import"./get-C2VjdU0L.js";import"./axisSelectors-1futPsBe.js";import"./resolveDefaultProps-DArzca5M.js";import"./isWellBehavedNumber-B7CQu1xd.js";import"./d3-scale-nVhhBbRx.js";import"./renderedTicksSlice-0CGdVobN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-dewq0r_z.js";import"./chartDataContext-DvyAzMjZ.js";import"./CategoricalChart-XR-igInW.js";import"./Layer-CO3sdEK1.js";import"./Curve-BFr4LVo1.js";import"./types-BACZxUTO.js";import"./step-K_9BfkCY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CScMa6hv.js";import"./Label-Dga6ObK8.js";import"./Text-MDWEE3g_.js";import"./DOMUtils-BsT2H8yg.js";import"./useId-Cq2DHNjh.js";import"./useBackwardsCompatibleTheme-CdEwSBID.js";import"./ZIndexLayer-B6xphlKa.js";import"./useAnimationId-xKJzFs5I.js";import"./ActivePoints-DT7ZsPv5.js";import"./Dot-fVKNfdE9.js";import"./RegisterGraphicalItemId-DZFAuRVF.js";import"./ErrorBarContext-DBffz6et.js";import"./GraphicalItemClipPath-Tv0C2Wnw.js";import"./SetGraphicalItem-DGTvGn78.js";import"./getRadiusAndStrokeWidthFromDot-Zg2QbZcY.js";import"./ActiveShapeUtils-BlimohsT.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-LO87TYgw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-D_JS3Ekf.js";import"./uniqBy-BWHb0M0I.js";import"./iteratee-DkQJTWAO.js";import"./Cross-ClqssIZ3.js";import"./Rectangle-DlLkmtYk.js";import"./util-Dxo8gN5i.js";import"./Sector-DQNnGbD_.js";const Se={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const we=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,we as __namedExportsOrder,Se as default};
