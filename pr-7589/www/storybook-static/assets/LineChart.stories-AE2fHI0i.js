import{r as s,R as e}from"./iframe-BYXa1Tn_.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CEUy8wWW.js";import{R as C}from"./zIndexSlice-CoJck3d_.js";import{L as n}from"./Line-6gFOJp9o.js";import{X as p}from"./XAxis-B5zWifv0.js";import{T as c}from"./Tooltip-C6q0x70q.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-OaYp5Da5.js";import"./index-D68cxjh6.js";import"./index-BI8zhQ65.js";import"./index-B0FnoVJH.js";import"./index-DuqGTInP.js";import"./throttle-CoxoiN6t.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CNHtcDgN.js";import"./axisSelectors-CdQyM0Ik.js";import"./resolveDefaultProps-BEKG2AD6.js";import"./isWellBehavedNumber-TGnGu01x.js";import"./d3-scale-BtOkOC4O.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cs0h_EiO.js";import"./chartDataContext-DfKLz63T.js";import"./CategoricalChart-DdtEtndX.js";import"./Layer-C8ZXIHkO.js";import"./Curve-aAd9t3Ts.js";import"./types-BeIXyo3E.js";import"./step-pRYWj5UR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DMwIY_YG.js";import"./Label-CW6jLePn.js";import"./Text-ClavD2Bt.js";import"./DOMUtils-BRP-TV91.js";import"./ZIndexLayer-BQRYe1sp.js";import"./useAnimationId-8c28klLP.js";import"./ActivePoints-Cjb131Hl.js";import"./Dot-CQ0xec6K.js";import"./RegisterGraphicalItemId-D6qWKqiK.js";import"./ErrorBarContext-Cf7wWmw3.js";import"./GraphicalItemClipPath-Dujotke_.js";import"./SetGraphicalItem-C_1bFSrg.js";import"./getRadiusAndStrokeWidthFromDot-DwmygPe4.js";import"./ActiveShapeUtils-DejqAcqQ.js";import"./RechartsThemeContext-Dj7m8Gm_.js";import"./CartesianAxis-C3icPOpT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-COKsSNbR.js";import"./uniqBy-CrCoN25E.js";import"./iteratee-DxJ0e1aw.js";import"./Cross-D1QpEOyM.js";import"./Rectangle-C8TpkBjX.js";import"./util-Dxo8gN5i.js";import"./Sector-DIzP0rv4.js";const Be={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ie=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ie as __namedExportsOrder,Be as default};
