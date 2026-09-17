import{r as i,R as e}from"./iframe-tVU98U3S.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DkbKv262.js";import{R as C}from"./zIndexSlice-CyBuhAxg.js";import{L as s}from"./Line-DB7R10NU.js";import{X as p}from"./XAxis-B6lV3McA.js";import{T as c}from"./Tooltip-DG72CCZo.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B6c-k2Ww.js";import"./resolveDefaultProps-yCAU9vb4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Dk0RXaf-.js";import"./throttle-7FDSZAP-.js";import"./index-BHaD7xdN.js";import"./index-Dkxefu6-.js";import"./isWellBehavedNumber-Cm_Hybde.js";import"./d3-scale-DsWe6xo3.js";import"./index-D5U9ICSu.js";import"./index-CelAevGI.js";import"./renderedTicksSlice-B6OJ4cSv.js";import"./index-Dkiks_wh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-cRl5-qnH.js";import"./chartDataContext-gF0asL1b.js";import"./CategoricalChart-ZVxjTQBd.js";import"./Layer-BI456J7x.js";import"./Curve-Ba9QZAHb.js";import"./types-B3--bUgQ.js";import"./step-BPWa_HmE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CqlhlM_R.js";import"./Label-BiGv8_RF.js";import"./Text-BIcirXpx.js";import"./DOMUtils-ZXubKPMD.js";import"./useId-Bhu2YHP8.js";import"./useBackwardsCompatibleTheme-BKS2Kex1.js";import"./ZIndexLayer-uxtsIBVq.js";import"./useAnimationId-3DY0RP1D.js";import"./ActivePoints-DterfL9t.js";import"./Dot-B9zwDON4.js";import"./RegisterGraphicalItemId-BUrw94Fl.js";import"./ErrorBarContext-D5CP1D9F.js";import"./GraphicalItemClipPath-DLKqhYTd.js";import"./SetGraphicalItem-BAgFstOS.js";import"./getRadiusAndStrokeWidthFromDot-Cld96GCx.js";import"./ActiveShapeUtils-D132qIUj.js";import"./useGraphicalItemIdentity-BYgYeKaf.js";import"./CartesianAxis-BOF0DDEi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-Bhj0sPEh.js";import"./uniqBy-C2Zh7Teh.js";import"./iteratee-BRu2ejZj.js";import"./Cross-BmhU8c99.js";import"./Rectangle-DmTy6SeT.js";import"./util-Dxo8gN5i.js";import"./Sector-B8MOhbqA.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
