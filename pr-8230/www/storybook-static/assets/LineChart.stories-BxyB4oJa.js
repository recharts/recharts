import{r as i,R as e}from"./iframe-Bs2Fwquo.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CCp5ZOnz.js";import{R as C}from"./zIndexSlice-zNxU83Rq.js";import{L as s}from"./Line-BDg9dyPy.js";import{X as p}from"./XAxis-Da7a1LVz.js";import{T as c}from"./Tooltip-CQk23inZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-H7J0pkbh.js";import"./resolveDefaultProps-D3UZ2IUt.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DqQ1JIAI.js";import"./throttle-CeO6b2ZD.js";import"./index-BKCm3YGD.js";import"./index-uk5XFsYy.js";import"./polarAxisSelectors-C5Qopf47.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DLjk-fTH.js";import"./index-KgWNcN6T.js";import"./index-Czszie77.js";import"./renderedTicksSlice-BVtbpogk.js";import"./index-C74zadtv.js";import"./fillDefinitions-DLkwdqwS.js";import"./CartesianChart-C_O9Wt7i.js";import"./chartDataContext-0HCXDBF8.js";import"./CategoricalChart-DBu6n-Yr.js";import"./Layer-DSICE4z4.js";import"./Curve-FXEPgScl.js";import"./types-BK-Q7FAz.js";import"./step-B-SD4ABD.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BK9Z9etj.js";import"./Label-DziYhFsK.js";import"./Text-ggKHnocX.js";import"./ZIndexLayer-C_DcULPk.js";import"./ActivePoints-wYZ7tQyZ.js";import"./Dot-x4ugbwnH.js";import"./activeStyles-B-3paNFW.js";import"./useAnimationId-6uZicVw9.js";import"./Symbols-CbMvplMD.js";import"./symbol-DShCcapM.js";import"./ErrorBarContext-DQsjNYcx.js";import"./SetGraphicalItem-BoCWO9i9.js";import"./getRadiusAndStrokeWidthFromDot-CATBlCH7.js";import"./ActiveShapeUtils-B_relbt6.js";import"./useEffectiveDataKey-t4gS0ZeN.js";import"./CartesianAxis-DRyjDMvy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-MuvUcavz.js";import"./uniqBy-CT6ciLFK.js";import"./iteratee-CuAFSfED.js";import"./isArguments-yB-y1yaH.js";import"./Cross-ckzgyXQ_.js";import"./Rectangle-bDkm_FXF.js";import"./util-Dxo8gN5i.js";import"./Sector-Cim8UNhj.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
