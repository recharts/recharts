import{r as s,R as e}from"./iframe-DDZvWz04.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CzonUZl6.js";import{R as C}from"./zIndexSlice-Dl_4acsk.js";import{L as n}from"./Line-gYyeMRzs.js";import{X as p}from"./XAxis-Dq8ay66-.js";import{T as c}from"./Tooltip-BiO0tLvP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BgX57Ihb.js";import"./index-DdYDVMgh.js";import"./index-DEl5rper.js";import"./index-DmZKUkji.js";import"./index-BmsWrTVR.js";import"./immer-DcmssRfV.js";import"./get-Dd2obrAg.js";import"./renderedTicksSlice-D1_yHzJs.js";import"./axisSelectors-M3yg6AJ9.js";import"./d3-scale-BmewetN_.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BL5_8bl7.js";import"./isWellBehavedNumber-BqwSOCro.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C1c9k30X.js";import"./chartDataContext-hTPBvtpR.js";import"./CategoricalChart-DTcOD6T5.js";import"./Layer-C4SWy0Ia.js";import"./Curve-sIzeAZHK.js";import"./types-Du07Jl7S.js";import"./step-BEPub2ZD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DJruvPbG.js";import"./Label-Cyb3kyRK.js";import"./Text-dGyvvmq0.js";import"./DOMUtils-EJWG7PRQ.js";import"./ZIndexLayer-Dxkr3Ydq.js";import"./useAnimationId-CXggq5FE.js";import"./ActivePoints-VMcsu_Fc.js";import"./Dot-CtB54zVw.js";import"./RegisterGraphicalItemId-CPL9aXD0.js";import"./ErrorBarContext-BYuEjy_F.js";import"./GraphicalItemClipPath-1JKRh9Qz.js";import"./SetGraphicalItem-DQRf2yyu.js";import"./getRadiusAndStrokeWidthFromDot-Ba3A1cdU.js";import"./ActiveShapeUtils-C9HYZ7qc.js";import"./CartesianAxis-CHHSHG1a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-CUIuFj27.js";import"./uniqBy-aPqG2Rlh.js";import"./iteratee-hWa_REQK.js";import"./Cross-B9Z2IOcq.js";import"./Rectangle-C7Fz1mfx.js";import"./Sector-yTNUroLz.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
