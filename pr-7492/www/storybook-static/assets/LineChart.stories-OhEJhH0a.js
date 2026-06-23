import{r as s,R as e}from"./iframe-C3hysSwX.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CP7JtMd2.js";import{R as C}from"./zIndexSlice-jLrLCsrp.js";import{L as n}from"./Line-BVlSac6Z.js";import{X as p}from"./XAxis-Bz5F1_iJ.js";import{T as c}from"./Tooltip-DO4Ooh_G.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CJVzzpRJ.js";import"./index-BV0Ox4K8.js";import"./index-By0blv9S.js";import"./index-BUU-eT_B.js";import"./index-DdpCgkK0.js";import"./immer-BNUBbCyS.js";import"./get-4mmuOJ4Q.js";import"./renderedTicksSlice-CSlp22Dw.js";import"./axisSelectors-BKkILLr_.js";import"./d3-scale-Z5oWCNO5.js";import"./resolveDefaultProps-XPHM9Bxg.js";import"./isWellBehavedNumber-Cfqt3JW2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dz5Andp2.js";import"./chartDataContext-Da5IPa1T.js";import"./CategoricalChart-BUhA_1lj.js";import"./Layer-BWZwdMd6.js";import"./Curve-6434-3z9.js";import"./types-B-fiXt0f.js";import"./step-C_2ct0pZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CONL8zCq.js";import"./Label-BY3nn8Dv.js";import"./Text-9LavA5GP.js";import"./DOMUtils-B0ueEniv.js";import"./ZIndexLayer-BbmqSC7x.js";import"./useAnimationId-CTVdzEbK.js";import"./ActivePoints-iKVh12Ay.js";import"./Dot-B1rRcV2J.js";import"./RegisterGraphicalItemId-o0SeLVTS.js";import"./ErrorBarContext-D24MXSMJ.js";import"./GraphicalItemClipPath-Cs8iTjY6.js";import"./SetGraphicalItem-CmkEoewy.js";import"./getRadiusAndStrokeWidthFromDot-CVqEtKFE.js";import"./ActiveShapeUtils-DTMmpBlQ.js";import"./CartesianAxis-DJwGDBXD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-TFATomwh.js";import"./uniqBy-rAXM5un4.js";import"./iteratee-Bj0cTPCe.js";import"./Cross-BGe6GpMn.js";import"./Rectangle-D6Gug0yv.js";import"./util-Dxo8gN5i.js";import"./Sector-Cq5G9PM-.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Te=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Te as __namedExportsOrder,Ee as default};
