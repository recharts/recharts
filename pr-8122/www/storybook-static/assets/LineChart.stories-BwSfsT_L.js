import{r as i,R as e}from"./iframe-BmdtsHI1.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Dt39tboA.js";import{R as C}from"./zIndexSlice-CLt9waUo.js";import{L as s}from"./Line-BFAqQ4J_.js";import{X as p}from"./XAxis-SiUufnTD.js";import{T as c}from"./Tooltip-DQ6Ncotp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CW25TSBD.js";import"./resolveDefaultProps-D3fedd0f.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CWAMaE0j.js";import"./throttle-DIqkA_6B.js";import"./index-D1G26n6J.js";import"./index-BU9XUo1g.js";import"./polarAxisSelectors-DqiScafe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C4n2-g_Q.js";import"./index-dsp9FHu2.js";import"./index-B-lO_Vmy.js";import"./renderedTicksSlice-Cbbwd8m4.js";import"./index-JJYVBYhC.js";import"./CartesianChart-Q5wSSY7L.js";import"./ZIndexPortal-BR-Xx9Bs.js";import"./CategoricalChart-BetF0ARA.js";import"./Layer-uwW889ah.js";import"./Curve-St2o1Zg2.js";import"./types-TcTpNVA6.js";import"./step-C3G0yHTA.js";import"./path-DyVhHtw_.js";import"./LabelList-BBJeoy6S.js";import"./Label-efFOyHP_.js";import"./Text-DgdwosBP.js";import"./DOMUtils-BrHrYr07.js";import"./ZIndexLayer-BPViM-b3.js";import"./ActivePoints-DOV6z7vt.js";import"./Dot-D4FfFK1V.js";import"./activeStyles-0PlrA4t0.js";import"./useAnimationId-C4l6OBef.js";import"./dataEntryStyles-C-VVWe1s.js";import"./Symbols-DTd7inGs.js";import"./symbol-OLqGol2l.js";import"./ErrorBarContext-C7bFffEo.js";import"./SetGraphicalItem-wZmxt-s3.js";import"./getRadiusAndStrokeWidthFromDot-J3eGzewL.js";import"./ActiveShapeUtils-Du3AePOl.js";import"./useEffectiveDataKey-Bt6hIrJm.js";import"./CartesianAxis-6ZKwTVD2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Dh1asSMz.js";import"./uniqBy-BUDfukUQ.js";import"./iteratee-B0xN_w6V.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BJJumAQM.js";import"./Rectangle-oyaeTZIU.js";import"./util-Dxo8gN5i.js";import"./Sector-D68kMANZ.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
