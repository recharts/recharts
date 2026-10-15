import{r as i,R as e}from"./iframe-VT8pQoe7.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-7LoIT0TH.js";import{R as C}from"./zIndexSlice-DEK4NARd.js";import{L as s}from"./Line-CP0v65zu.js";import{X as p}from"./XAxis-D4USI7eu.js";import{T as c}from"./Tooltip-SL3hW6tH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C5t5FA9b.js";import"./resolveDefaultProps-aXzZoAdw.js";import"./get-C2VjdU0L.js";import"./axisSelectors-rzVbGAjY.js";import"./throttle-DAkHgZkc.js";import"./index-dScKVoLs.js";import"./index-CiAsw9yg.js";import"./isWellBehavedNumber-CWd9TGG5.js";import"./d3-scale-CNl0eHX-.js";import"./index-DaTNpRtK.js";import"./index-B3obxpbN.js";import"./renderedTicksSlice-BV0dqoNF.js";import"./index-BZU6X58j.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D86ig2Qu.js";import"./chartDataContext-C-2DcCuQ.js";import"./CategoricalChart-xbuH4iHs.js";import"./Layer-C1VwbLrz.js";import"./Curve-BDSThsVb.js";import"./types-7pH1IAPS.js";import"./step-BpcsguCq.js";import"./path-DyVhHtw_.js";import"./activeStyles-XDL1Xm2T.js";import"./Label-CntNwugN.js";import"./Text-5GPWLOFl.js";import"./pageBackground-biSlCu9n.js";import"./useId-CUgdtS7Q.js";import"./useBackwardsCompatibleTheme-BVkaGEGO.js";import"./ZIndexLayer-BK4Sn8Ml.js";import"./useAnimationId-D_S6bHPT.js";import"./dataEntryStyles-D0zUo3h2.js";import"./ActivePoints-DbYtZgI1.js";import"./Dot-LKfGzrCm.js";import"./ErrorBarContext-BYw6WEd3.js";import"./GraphicalItemClipPath-TTQOfMqQ.js";import"./SetGraphicalItem-B3Fmseum.js";import"./getRadiusAndStrokeWidthFromDot-B6XdCt_x.js";import"./ActiveShapeUtils-C3QPXajl.js";import"./useEffectiveDataKey-DiTGjvML.js";import"./CartesianAxis-32TBg9e_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-Bmh88r8k.js";import"./uniqBy-D3UAOLvb.js";import"./iteratee-CECdn73k.js";import"./Cross-D6BTP9MZ.js";import"./Rectangle-DpCZdUxE.js";import"./util-Dxo8gN5i.js";import"./Sector-BeRkhjap.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
