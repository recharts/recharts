import{r as s,R as e}from"./iframe-n1jsfVDG.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-PHcoPUnS.js";import{R as C}from"./zIndexSlice-BRlbTYqB.js";import{L as m}from"./Line-CYxi_v-i.js";import{X as p}from"./XAxis-XfJlYZND.js";import{T as c}from"./Tooltip-407_u1jn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CtxvIequ.js";import"./resolveDefaultProps-BAQjLDG_.js";import"./get-C2VjdU0L.js";import"./axisSelectors-7NZ6PaeE.js";import"./throttle-BndXY2H8.js";import"./index-CgFE3bjK.js";import"./index-WXWaFicj.js";import"./isWellBehavedNumber-51Xh59nn.js";import"./d3-scale-DHoUxLai.js";import"./index-CBp2l__h.js";import"./index-DNYwsh8I.js";import"./renderedTicksSlice-rKTqRgg8.js";import"./index-C2dJWAfM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dfjy31tx.js";import"./chartDataContext-XRtQdSke.js";import"./CategoricalChart-CYGfKh2e.js";import"./Layer-CoRWBRFX.js";import"./Curve-B5xOTs2B.js";import"./types-DxCRAK1R.js";import"./step-B7eMn8MW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CK27PxaM.js";import"./Label-B5dy1Vd6.js";import"./Text-BwTkl3FB.js";import"./DOMUtils-B7JqCpD5.js";import"./useId-CqUHn1t3.js";import"./useBackwardsCompatibleTheme-BrtymnuF.js";import"./ZIndexLayer-B-b1Mp40.js";import"./useAnimationId-DmMej8H7.js";import"./ActivePoints-BgeuL4dW.js";import"./Dot-BWSVmybM.js";import"./RegisterGraphicalItemId-CfRcyWlO.js";import"./ErrorBarContext-Ba37a78Y.js";import"./GraphicalItemClipPath-COfUJuyE.js";import"./SetGraphicalItem-DGwR4qus.js";import"./getRadiusAndStrokeWidthFromDot-CpUR_Izt.js";import"./ActiveShapeUtils-D8gDtxNc.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-9JtcSgtY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-ZEcbDPf_.js";import"./uniqBy-BzgSuY-c.js";import"./iteratee-B8fhTNiZ.js";import"./Cross-BzYqCQve.js";import"./Rectangle-CP1iRVSw.js";import"./util-Dxo8gN5i.js";import"./Sector-m1gBP5km.js";const we={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ke=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ke as __namedExportsOrder,we as default};
