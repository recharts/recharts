import{r as i,R as e}from"./iframe-BJZoea5Q.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-C79lDmel.js";import{R as C}from"./zIndexSlice-3SrN7G8I.js";import{L as s}from"./Line-BNZk4sLa.js";import{X as p}from"./XAxis-x49kq4XJ.js";import{T as c}from"./Tooltip-B05ie6I6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CEdFNSj2.js";import"./resolveDefaultProps-p2HAfk0o.js";import"./get-C2VjdU0L.js";import"./axisSelectors-10L_Paee.js";import"./throttle-DhjtP12Z.js";import"./index-eqi9YN1t.js";import"./index-BDOUu_G8.js";import"./isWellBehavedNumber-PsmwNW5h.js";import"./d3-scale-Bo47ZJJr.js";import"./index-BdI0Temb.js";import"./index-Q3HRKpx2.js";import"./renderedTicksSlice-DjcslC9u.js";import"./index-ey4yeO--.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DDkwxTw9.js";import"./chartDataContext-2iVlib8J.js";import"./CategoricalChart-DYS4mlap.js";import"./Layer-CY8EZbPL.js";import"./Curve-C2T2vEED.js";import"./types-DB2bYquS.js";import"./step-DQt_azzu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1n61v19.js";import"./Label-CKHttH-g.js";import"./Text-C846DGO8.js";import"./DOMUtils-DMsPd0Jf.js";import"./useId-CgY4hBIS.js";import"./useBackwardsCompatibleTheme-cb-KLBvK.js";import"./ZIndexLayer-gq-nfNXC.js";import"./useAnimationId-DIbB0gmH.js";import"./ActivePoints-BIetIDgh.js";import"./Dot-CgLNu5xp.js";import"./RegisterGraphicalItemId-lL7ggMEp.js";import"./ErrorBarContext-CE1fn35z.js";import"./GraphicalItemClipPath-BEj7XwPx.js";import"./SetGraphicalItem-BvBiLTUU.js";import"./getRadiusAndStrokeWidthFromDot-DajYH82O.js";import"./ActiveShapeUtils-t9roLBb8.js";import"./useGraphicalItemIdentity-CiHiONr1.js";import"./CartesianAxis-zlv9iD03.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-Cr52qiLm.js";import"./uniqBy-C2cKh28N.js";import"./iteratee-DxckVfRJ.js";import"./Cross-BLk8fHnY.js";import"./Rectangle-DShU24mH.js";import"./util-Dxo8gN5i.js";import"./Sector-Dp9ZSCFr.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
