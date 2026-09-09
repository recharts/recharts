import{r as i,R as e}from"./iframe-CrjMmK-P.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-t4VMNNkZ.js";import{R as C}from"./zIndexSlice-BjJGmtkk.js";import{L as s}from"./Line-BdPUp7B4.js";import{X as p}from"./XAxis-Bf99Djp-.js";import{T as c}from"./Tooltip-CPrKDQ9h.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-W15Lm7G0.js";import"./resolveDefaultProps-1lRPudDL.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CArdhpNf.js";import"./throttle-DvPRoUwa.js";import"./index-C29X7Fc2.js";import"./index-BDweFuqO.js";import"./isWellBehavedNumber-i-P4IxnU.js";import"./d3-scale-60bYpT2W.js";import"./index-DhUbeUHh.js";import"./index-C0KmE10p.js";import"./renderedTicksSlice-CoKKbA57.js";import"./index-p1bk8TMl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CtX-pqzv.js";import"./chartDataContext-rtr64WFG.js";import"./CategoricalChart-RhdZ5xjE.js";import"./Layer-D9-s7BIj.js";import"./Curve-DmmzRQeA.js";import"./types-DQIGWyvO.js";import"./step-XIk4Qxhk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DhhQShtD.js";import"./Label-BUscAhBU.js";import"./Text-CvoG-yND.js";import"./DOMUtils-BLhe2-Wn.js";import"./useId-BEuvre-A.js";import"./useBackwardsCompatibleTheme-C_kcEgOz.js";import"./ZIndexLayer-BnhEIQdT.js";import"./useAnimationId-yNh7qZi1.js";import"./ActivePoints-l6QKzYun.js";import"./Dot-BglkAryw.js";import"./RegisterGraphicalItemId-BtD1DcTG.js";import"./ErrorBarContext-DVTSO5_6.js";import"./GraphicalItemClipPath-d2m1y1AJ.js";import"./SetGraphicalItem-Cz1BmFYo.js";import"./getRadiusAndStrokeWidthFromDot-BZvBgzm6.js";import"./ActiveShapeUtils-DNRW1wio.js";import"./useGraphicalItemIdentity-D4eInQUL.js";import"./CartesianAxis-B8LyCo9q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-D3QBqJsK.js";import"./uniqBy-BOWmp87N.js";import"./iteratee-5CO9aB2p.js";import"./Cross-CcupEozg.js";import"./Rectangle-4U1uwwED.js";import"./util-Dxo8gN5i.js";import"./Sector-DVSg-Fqk.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
