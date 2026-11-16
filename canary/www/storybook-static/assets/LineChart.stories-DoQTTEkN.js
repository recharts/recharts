import{r as i,R as e}from"./iframe-KWoDlvv0.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BqGOzDd7.js";import{R as C}from"./zIndexSlice-D6_TQa48.js";import{L as s}from"./Line-CoYDa0ns.js";import{X as p}from"./XAxis-Dha5DL-7.js";import{T as c}from"./Tooltip-DyIqXAOf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cd2ytf7V.js";import"./resolveDefaultProps-fIhDXQnx.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CV2At8Yo.js";import"./throttle-BvqCZ8Vh.js";import"./index-Li49Ujhl.js";import"./index-D_eG4QRf.js";import"./polarAxisSelectors-8HEoWBh0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oWIqdaah.js";import"./index-BfCybvCF.js";import"./index-CCYlIY-z.js";import"./renderedTicksSlice-C40hju2e.js";import"./index-Dv3wNeKm.js";import"./fillDefinitions-BahzxKfc.js";import"./CartesianChart-D1x7M7Ji.js";import"./chartDataContext-CRRlgIpa.js";import"./CategoricalChart-539yhc35.js";import"./Layer-waQQT3dP.js";import"./Curve-B7-98jub.js";import"./types-DGnljtoN.js";import"./step-e6HwNXpN.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-B50QbiA3.js";import"./Label-BPcs5PEB.js";import"./Text-DoeJcgDd.js";import"./ZIndexLayer-UqbdP99s.js";import"./ActivePoints-DgWtUVYM.js";import"./Dot-8l7EA-ok.js";import"./activeStyles-DdJ_j3KP.js";import"./useAnimationId-Dr1qu-UX.js";import"./Symbols-etFAQ42y.js";import"./symbol-DnM84iFX.js";import"./ErrorBarContext-B7AiZePC.js";import"./SetGraphicalItem-C36UrnCq.js";import"./getRadiusAndStrokeWidthFromDot-CjrqjHcw.js";import"./ActiveShapeUtils-C8mQk9io.js";import"./useEffectiveDataKey-Dnh6CHxJ.js";import"./CartesianAxis-CyfkCIs2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-1JyRc5h3.js";import"./uniqBy-CbPnR-9p.js";import"./iteratee-DIz1rWLv.js";import"./isArguments-yB-y1yaH.js";import"./Cross-XnGezxgG.js";import"./Rectangle-9Jhf_J89.js";import"./util-Dxo8gN5i.js";import"./Sector-sU6YNYVD.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
