import{r as i,R as e}from"./iframe-2TbE3qYT.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-tm61HVF4.js";import{R as C}from"./zIndexSlice-CDl_l-89.js";import{L as s}from"./Line-C0MGKIx5.js";import{X as p}from"./XAxis-J5474B1k.js";import{T as c}from"./Tooltip-DhqtrPJ9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DSdhDIUK.js";import"./resolveDefaultProps-CmNgnsrp.js";import"./get-CjriyByo.js";import"./axisSelectors-BRsQeeHB.js";import"./throttle-AC4zKKET.js";import"./index-zPMeTUky.js";import"./index-CF9MDp9v.js";import"./polarAxisSelectors-BVGWIciz.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-gVDFTlHt.js";import"./index-vCQ15aHt.js";import"./index-DZAwbT7O.js";import"./renderedTicksSlice-hzdTS8Zy.js";import"./index-Cp7R3dKQ.js";import"./fillDefinitions-DTcu8a6k.js";import"./CartesianChart-Doi0i7F0.js";import"./chartDataContext-zU1PANlW.js";import"./CategoricalChart-BlCkd7eS.js";import"./getRadiusAndStrokeWidthFromDot-DrA60Arr.js";import"./Layer-7DEP56Bj.js";import"./Curve-Z7vcnGYC.js";import"./types-Dx30sS-2.js";import"./step-DFCmv64b.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-T1g5qPBF.js";import"./Label-BqpWbzgg.js";import"./Text-BBu6qFds.js";import"./ZIndexLayer-CZh1ghPv.js";import"./ActivePoints-D8FfETBR.js";import"./Dot-_rUk0L2M.js";import"./activeStyles-Rm_R6i1P.js";import"./useAnimationId-D_GZEFYT.js";import"./Symbols-BqG7sYmQ.js";import"./symbol-CUR1FaxD.js";import"./ErrorBarContext-D7D-MJNc.js";import"./SetGraphicalItem-Dl3lwAU1.js";import"./ActiveShapeUtils-Bsp6lbzE.js";import"./useEffectiveDataKey-CWpkrBwa.js";import"./CartesianAxis-DY1zMkgy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-D9QIVvZV.js";import"./uniqBy-B9J3txXo.js";import"./iteratee-BLZOulYj.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DBCSj7Wj.js";import"./Rectangle-DnludKWy.js";import"./util-Dxo8gN5i.js";import"./Sector-dUg13oG9.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
