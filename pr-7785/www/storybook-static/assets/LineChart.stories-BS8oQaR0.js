import{r as i,R as e}from"./iframe-WBosH1gH.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CaPvgBv8.js";import{R as C}from"./zIndexSlice-DY0UoJ4l.js";import{L as s}from"./Line-CfXL_ESg.js";import{X as p}from"./XAxis-m7Q_C79b.js";import{T as c}from"./Tooltip-rif23icC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B0qr77rU.js";import"./resolveDefaultProps-B2r9_mKe.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DVaMQoZI.js";import"./throttle-XsvTB-sR.js";import"./index-BwqgnM9k.js";import"./index-VfXF9cRB.js";import"./isWellBehavedNumber-BkYn7WHA.js";import"./d3-scale-D0rOwI1X.js";import"./index-vxpjOmvK.js";import"./index-0eRMU_eW.js";import"./renderedTicksSlice-w1R0M-NQ.js";import"./index-C25eF-tn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DVqibfCK.js";import"./chartDataContext-CniWriLR.js";import"./CategoricalChart-DG5t8KxI.js";import"./Layer-DlEXHs0c.js";import"./Curve-CWu1k2x-.js";import"./types-CXdVyMYF.js";import"./step-774Uk35K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DJehR24_.js";import"./Label-BCHXbIDv.js";import"./Text-DUKo7lId.js";import"./DOMUtils-Cua0edvn.js";import"./useId-QCeL7Xpe.js";import"./useBackwardsCompatibleTheme-Dm9WBqGk.js";import"./ZIndexLayer-Ceqldfm9.js";import"./useAnimationId-B1IfIBZT.js";import"./ActivePoints-CpdsnThn.js";import"./Dot-DxEZ3OZ8.js";import"./RegisterGraphicalItemId-CooVBKDB.js";import"./ErrorBarContext-LEGekQDa.js";import"./GraphicalItemClipPath-t-5ZkTcv.js";import"./SetGraphicalItem-C5z9UzHr.js";import"./getRadiusAndStrokeWidthFromDot-CwInr6tA.js";import"./ActiveShapeUtils-DhiQ5sHd.js";import"./useGraphicalItemIdentity-BcmjlH91.js";import"./CartesianAxis-Bjry6SmX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-VmdMhEAv.js";import"./uniqBy-CDDW1t5J.js";import"./iteratee-C0LkWsI5.js";import"./Cross-4kelqF0b.js";import"./Rectangle-CCQKHFOK.js";import"./util-Dxo8gN5i.js";import"./Sector-CQKr0wQc.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
