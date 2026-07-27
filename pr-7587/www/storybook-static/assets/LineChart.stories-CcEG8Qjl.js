import{r as s,R as e}from"./iframe-DPsVQxbE.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BidktN2X.js";import{R as C}from"./zIndexSlice-1brzNbqc.js";import{L as n}from"./Line-CWQOFj66.js";import{X as p}from"./XAxis-CYt1-RxN.js";import{T as c}from"./Tooltip-BlDZy0rG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BCXiW-f1.js";import"./index-DB0est9g.js";import"./index-CYr1DPeq.js";import"./index-B1wCn-3B.js";import"./index-B_Y-xmpq.js";import"./throttle-Cj8wAsiz.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CC_kknQZ.js";import"./axisSelectors-CEp7-2uA.js";import"./resolveDefaultProps-BIwKMjhn.js";import"./isWellBehavedNumber-Chc7VT9N.js";import"./d3-scale-BNrinBxy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DMOmnFKA.js";import"./chartDataContext-Cc6AxfML.js";import"./CategoricalChart-Bd2BlG5y.js";import"./Layer-DGWGYgzk.js";import"./Curve-DtEeL5Gu.js";import"./types-ColFKgNS.js";import"./step-BU8nTjqD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BlseN1Dx.js";import"./Label-C2Rhcs8s.js";import"./Text-B4JB7zPj.js";import"./DOMUtils-D6NwHzOL.js";import"./ZIndexLayer-MqiRX2rl.js";import"./useAnimationId-CtVxLpdf.js";import"./ActivePoints-qcduKxyw.js";import"./Dot-COXcIf5D.js";import"./RegisterGraphicalItemId-MGM9At2R.js";import"./ErrorBarContext-B2jO-XEn.js";import"./GraphicalItemClipPath-Dj3im7iZ.js";import"./SetGraphicalItem-CNwLGNNY.js";import"./getRadiusAndStrokeWidthFromDot-f0ZiEHIa.js";import"./ActiveShapeUtils-iUHBQUNz.js";import"./CartesianAxis-D5qEkVje.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-d53krvrq.js";import"./uniqBy-DsIVeImw.js";import"./iteratee-CvNQaPV0.js";import"./Cross-j0ZUM9sw.js";import"./Rectangle-BYpMekmC.js";import"./util-Dxo8gN5i.js";import"./Sector-CKL9xBrw.js";const Te={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
