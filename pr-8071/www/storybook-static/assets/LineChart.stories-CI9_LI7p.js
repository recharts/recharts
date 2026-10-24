import{r as i,R as e}from"./iframe-B1_QfljJ.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CPfPvG4h.js";import{R as C}from"./zIndexSlice-Cb-_WhSJ.js";import{L as s}from"./Line-CSU9tv9c.js";import{X as p}from"./XAxis-C5w_o036.js";import{T as c}from"./Tooltip-wOLs8XdN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-eNWWZf5L.js";import"./resolveDefaultProps-BKBpJeVO.js";import"./get-cF5BDHN6.js";import"./axisSelectors-7XQKMXbV.js";import"./throttle-D7IvOyg1.js";import"./index-C0R_VbD9.js";import"./index-C4Bv3TLI.js";import"./isWellBehavedNumber-CjzDakCh.js";import"./d3-scale-Ch4lSu5M.js";import"./index-DrIBMx-a.js";import"./index-PfBmA6Mj.js";import"./renderedTicksSlice-QhE759w-.js";import"./index-D_5ex_s0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-0PUgz-fD.js";import"./chartDataContext-W36SsBCK.js";import"./CategoricalChart-Bnl3KIy2.js";import"./Layer-B_0rxCBF.js";import"./Curve-BRi-m77E.js";import"./types-DbTvfnZ9.js";import"./step-CRnCkLM-.js";import"./path-DyVhHtw_.js";import"./activeStyles-Cj23hm4O.js";import"./Label-Dq-PRmXE.js";import"./Text-l_2w-j-6.js";import"./pageBackground-C2L5RPBY.js";import"./useId-5cvDRGiM.js";import"./useBackwardsCompatibleTheme-Cn0U0gME.js";import"./ZIndexLayer-DCJHrufs.js";import"./dataEntryStyles-DFEzHfWh.js";import"./useAnimationId-g_gs6Adq.js";import"./ActivePoints-DeQ4AICV.js";import"./Dot-Dys0AMJj.js";import"./RegisterGraphicalItemId-nMZsofRB.js";import"./ErrorBarContext-teR4Ylft.js";import"./SetGraphicalItem-BVP4iL4X.js";import"./getRadiusAndStrokeWidthFromDot-DrVK3vcj.js";import"./ActiveShapeUtils-DhsBwk0C.js";import"./useEffectiveDataKey-FDkhhmBo.js";import"./CartesianAxis-Bufnbb1Y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Bo0SdiMk.js";import"./uniqBy-LQrir7c7.js";import"./iteratee-B9ldopPv.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Zt2D04Zu.js";import"./Rectangle-CLSVVjg0.js";import"./util-Dxo8gN5i.js";import"./Sector-Bm0U5Ptd.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
