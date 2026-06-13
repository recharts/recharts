import{r as s,R as e}from"./iframe-ii_SdKaT.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CDEoxbU3.js";import{R as C}from"./zIndexSlice-CewrGiZi.js";import{L as n}from"./Line-BCh4BadY.js";import{X as p}from"./XAxis-n_W7ptOo.js";import{T as c}from"./Tooltip-CnFF0eY_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BJ7nVo9I.js";import"./index-CoHu65TP.js";import"./index-BWUxHoQX.js";import"./index-CipO9bHT.js";import"./index-C9rA4SBW.js";import"./immer-BRK5VplU.js";import"./get-IlujCcRJ.js";import"./renderedTicksSlice-6QIQv7lN.js";import"./axisSelectors-BEJlbTgh.js";import"./d3-scale-DqldvK9e.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DmtqLCBR.js";import"./isWellBehavedNumber-Bl4DTDWz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-hQrjvxNc.js";import"./chartDataContext-WEDyGrAX.js";import"./CategoricalChart-BC-K0qUt.js";import"./Layer-1o6wJcjz.js";import"./Curve-CvjftyU5.js";import"./types-CROtPh6T.js";import"./step-CynPry_M.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ddier9mI.js";import"./Label-CWAFalVX.js";import"./Text-D6jUUcir.js";import"./DOMUtils-CspLYEuU.js";import"./ZIndexLayer-C_pljZlN.js";import"./useAnimationId-DETjp9PR.js";import"./ActivePoints-DUYbyaX_.js";import"./Dot-D93Ls2Za.js";import"./RegisterGraphicalItemId-Bd8rL4_6.js";import"./ErrorBarContext-BbBngZhz.js";import"./GraphicalItemClipPath-BIR1mLdK.js";import"./SetGraphicalItem-Ke19tpjU.js";import"./getRadiusAndStrokeWidthFromDot-ouGtJSmE.js";import"./ActiveShapeUtils-_FaeFiVy.js";import"./CartesianAxis-C12Pbczw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-tGPEXiEv.js";import"./uniqBy--oKwp8uZ.js";import"./iteratee-DMX-jnSx.js";import"./Cross-Fj8WcxtO.js";import"./Rectangle-DzvlK_vY.js";import"./Sector-CCDTIu2s.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
