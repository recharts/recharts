import{r as s,R as e}from"./iframe-Czgh02fE.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CjM5anvS.js";import{R as C}from"./zIndexSlice-Do8f9YWK.js";import{L as m}from"./Line-BEYssJ_8.js";import{X as p}from"./XAxis-C2Mn3Na8.js";import{T as c}from"./Tooltip-Cd1ARCyE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DIxKKW90.js";import"./index-BjeOf0Dt.js";import"./index-B1amEOit.js";import"./index-BzAJTpLC.js";import"./index-BnAmj1WN.js";import"./throttle-D1C4cigO.js";import"./get-C2VjdU0L.js";import"./axisSelectors-H5jwzs9R.js";import"./resolveDefaultProps-D61FhKsp.js";import"./isWellBehavedNumber-BenVrlkW.js";import"./d3-scale-DjzQ61DY.js";import"./renderedTicksSlice-DljNETqX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BAydra3V.js";import"./chartDataContext-9fwvPw2D.js";import"./CategoricalChart-BgAf9cWH.js";import"./Layer-zCmZcP2I.js";import"./Curve--OBRtabt.js";import"./types-BOqsceM0.js";import"./step-BjIepLza.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DQ5WKLo7.js";import"./Label-4BEQg_vH.js";import"./Text-CR_8UZPv.js";import"./DOMUtils-CFgNHwO1.js";import"./useBackwardsCompatibleTheme-CqikxVTG.js";import"./ZIndexLayer-s-28Q74q.js";import"./useAnimationId-CBLxCaT-.js";import"./ActivePoints-D5lyHxm4.js";import"./Dot-BPNUB50S.js";import"./RegisterGraphicalItemId-_1lxrS6Z.js";import"./ErrorBarContext-Cjm5t7eM.js";import"./GraphicalItemClipPath-BFEL_l8x.js";import"./SetGraphicalItem-BSCJBMvO.js";import"./getRadiusAndStrokeWidthFromDot-DSA1Map0.js";import"./ActiveShapeUtils-DxWOnmm2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-B4k6OJQ9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-cCtdJ_2d.js";import"./uniqBy-DH6vkAOH.js";import"./iteratee-dtD612zi.js";import"./Cross-bL23mcd1.js";import"./Rectangle-BuJcrudB.js";import"./util-Dxo8gN5i.js";import"./Sector-Dbvha4hq.js";const Ie={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Se=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Se as __namedExportsOrder,Ie as default};
