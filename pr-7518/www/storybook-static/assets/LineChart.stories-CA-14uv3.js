import{r as s,R as e}from"./iframe-EI0Ls4hC.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Cb4fsKou.js";import{R as C}from"./zIndexSlice-yKXgbZM9.js";import{L as n}from"./Line-B9NkJQGA.js";import{X as p}from"./XAxis-isMopIja.js";import{T as c}from"./Tooltip-Bw5DnfvW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CVfLxVvb.js";import"./index-CzoIO75z.js";import"./index-BIz2bYpH.js";import"./index-nHjkW3_e.js";import"./index-D-rMjtE6.js";import"./throttle-Cdlad3bH.js";import"./get-BON1YutH.js";import"./renderedTicksSlice-CoFXcUVC.js";import"./axisSelectors-Cok1HNra.js";import"./d3-scale-DBYKxB4y.js";import"./resolveDefaultProps-NPYXHAaZ.js";import"./isWellBehavedNumber-DWxIjg9k.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DxsNLdfg.js";import"./chartDataContext-AgenIsJt.js";import"./CategoricalChart-DnbprEZ3.js";import"./Layer-D2PSeBO4.js";import"./Curve-eRlCLt7Q.js";import"./types-C8rhvdfR.js";import"./step-B6IK1iGd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CvuB6fQ_.js";import"./Label-V9mTYK6m.js";import"./Text-BwBPbfGl.js";import"./DOMUtils-DrXieiLo.js";import"./ZIndexLayer-C3S5Zj6R.js";import"./useAnimationId-B72UM_RE.js";import"./ActivePoints-gc55JVjB.js";import"./Dot-Cx4WJ9n0.js";import"./RegisterGraphicalItemId-CXkeXAps.js";import"./ErrorBarContext-BeDV4HJb.js";import"./GraphicalItemClipPath-5KTFkQ5K.js";import"./SetGraphicalItem-BhScXCrX.js";import"./getRadiusAndStrokeWidthFromDot-DzmGdQsa.js";import"./ActiveShapeUtils-CplwhB-J.js";import"./CartesianAxis-C7eaHI9Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-CcBFNVWl.js";import"./uniqBy-DSBYfBdC.js";import"./iteratee-kPsQss5F.js";import"./Cross-C0YHKLl7.js";import"./Rectangle-Dj6dtcwd.js";import"./util-Dxo8gN5i.js";import"./Sector-BMV3V-O7.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
