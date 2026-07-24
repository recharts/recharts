import{r as s,R as e}from"./iframe-DkECMRhY.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DW8N1r9e.js";import{R as C}from"./zIndexSlice-DrphCOe8.js";import{L as n}from"./Line-1UeX_xo7.js";import{X as p}from"./XAxis-CnIY0uCY.js";import{T as c}from"./Tooltip-BHwenyfJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DT2t4UUR.js";import"./index-CubO9nle.js";import"./index-48_ZTq2u.js";import"./index-Bs5MO9B0.js";import"./index-B2EkAXQG.js";import"./throttle-OeP2NIwG.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Dz89v3et.js";import"./axisSelectors-O1utMkLJ.js";import"./resolveDefaultProps-9kFOeAbx.js";import"./isWellBehavedNumber-C5D-spqh.js";import"./d3-scale-DCyD-m6k.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DlZ9N_1W.js";import"./chartDataContext-Buh6poim.js";import"./CategoricalChart-Ctl-0XVF.js";import"./Layer-BR_lx081.js";import"./Curve-55NMYWP1.js";import"./types-BhAPDMfv.js";import"./step-BU5cS4PN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D_PfprH1.js";import"./Label-D0EmKjrf.js";import"./Text-D0YGp1Dc.js";import"./DOMUtils-m9hSMA-C.js";import"./ZIndexLayer-CJnfUCXF.js";import"./useAnimationId-BLnnlAbr.js";import"./ActivePoints-CRIWlOJ4.js";import"./Dot-DRTvDWT7.js";import"./RegisterGraphicalItemId-DM_TAUFh.js";import"./ErrorBarContext-Do1YuZSV.js";import"./GraphicalItemClipPath-B9n7ZYaN.js";import"./SetGraphicalItem-AXvs4ZTf.js";import"./getRadiusAndStrokeWidthFromDot-BOG-LMh5.js";import"./ActiveShapeUtils-BkWJCflD.js";import"./CartesianAxis-Bbd2gVOF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-DrvFMWs-.js";import"./uniqBy-C0Xto3XN.js";import"./iteratee-CfKSMI6F.js";import"./Cross-DfR8EU22.js";import"./Rectangle-DN85SES_.js";import"./util-Dxo8gN5i.js";import"./Sector-B5vkZ1Z7.js";const Te={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Be=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Be as __namedExportsOrder,Te as default};
