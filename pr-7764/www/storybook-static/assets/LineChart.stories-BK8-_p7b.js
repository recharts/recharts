import{r as i,R as e}from"./iframe-BKCxgEu7.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-JZ_NKtMH.js";import{R as C}from"./zIndexSlice-DPN7gMs_.js";import{L as s}from"./Line-BTQ-dt1P.js";import{X as p}from"./XAxis-DBpqCofo.js";import{T as c}from"./Tooltip-BFAWrx2Z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BUOX-u1t.js";import"./resolveDefaultProps-hjqhlyP6.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D2VU5o1r.js";import"./throttle-SvLRig2f.js";import"./index-C0FXEVD9.js";import"./index-ByWdUQTm.js";import"./isWellBehavedNumber-4uIsFCV6.js";import"./d3-scale-fKLPTI5B.js";import"./index-BQwfhQz_.js";import"./index-bhQBCTAA.js";import"./renderedTicksSlice-7MFbI2Ip.js";import"./index-BL0gWy2l.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dx01wauZ.js";import"./chartDataContext-D7QilCwv.js";import"./CategoricalChart-TFuOhU4H.js";import"./Layer-GDBs0RPs.js";import"./Curve-DJnDjTkh.js";import"./types--eHqqtV8.js";import"./step-Bha1rdtW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BXOuP06z.js";import"./Label-D0bShNKS.js";import"./Text-DbzVeL34.js";import"./DOMUtils-B8pyYDTq.js";import"./useId-DtzVtqW0.js";import"./useBackwardsCompatibleTheme-D4Zi4gsK.js";import"./ZIndexLayer-Bi2QbHjK.js";import"./useAnimationId-Dludl8d_.js";import"./ActivePoints-CP4nca60.js";import"./Dot-DKhQ94yz.js";import"./RegisterGraphicalItemId-DzHzaEjw.js";import"./ErrorBarContext-8H81gPWM.js";import"./GraphicalItemClipPath-Qfm8sxPZ.js";import"./SetGraphicalItem-BTjD6Tnz.js";import"./getRadiusAndStrokeWidthFromDot-CQKvs0EM.js";import"./ActiveShapeUtils-EGktKins.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CuN00Lvq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-DpTYfk3M.js";import"./uniqBy-BerM9mz3.js";import"./iteratee-DALipbtq.js";import"./Cross-DAVrNPRG.js";import"./Rectangle-DaSdwAeX.js";import"./util-Dxo8gN5i.js";import"./Sector-Djy_oLhj.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
