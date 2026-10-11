import{r as i,R as e}from"./iframe-PFnyvlis.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CiFsvbG6.js";import{R as C}from"./zIndexSlice-B0qSSbxG.js";import{L as s}from"./Line-C8KN53PB.js";import{X as p}from"./XAxis-DhJ_whev.js";import{T as c}from"./Tooltip-DLtoj8G7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B3E-J46N.js";import"./resolveDefaultProps-w5xflEp3.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DhkVgott.js";import"./throttle-GW0_gATC.js";import"./index-Bnt3KeU-.js";import"./index-sAeTipYl.js";import"./isWellBehavedNumber-fJrag4D_.js";import"./d3-scale-Ct392CQc.js";import"./index-D5l8ABkB.js";import"./index-Cd7PqRR0.js";import"./renderedTicksSlice-CEcKwYs8.js";import"./index-Bz4JWd5z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CsLYaxaY.js";import"./chartDataContext-DOm0tmmB.js";import"./CategoricalChart-C-GflChV.js";import"./Layer-8HYYz2ZX.js";import"./Curve-BDK-Xp5l.js";import"./types-Cdq40KHv.js";import"./step-DeVCdmYq.js";import"./path-DyVhHtw_.js";import"./activeStyles-DeGfiuQP.js";import"./Label-CHf8Dh9F.js";import"./Text-Bjtm-BnX.js";import"./pageBackground-D9EVWege.js";import"./useId-B6VTORgN.js";import"./useBackwardsCompatibleTheme-BHl7LW2d.js";import"./ZIndexLayer-B4ISEqyM.js";import"./useAnimationId-E_cgqRBb.js";import"./dataEntryStyles-DVpontPM.js";import"./ActivePoints-DOitargu.js";import"./Dot-FM4Coi4D.js";import"./ErrorBarContext-C5e-NQj7.js";import"./GraphicalItemClipPath-Bhp27ob6.js";import"./SetGraphicalItem-TVDRdMaU.js";import"./getRadiusAndStrokeWidthFromDot-fHs-9w3x.js";import"./ActiveShapeUtils-1mgFNr1z.js";import"./useGraphicalItemIdentity-YcO-x1ZM.js";import"./CartesianAxis-D8jcLweO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-B06hB-J_.js";import"./uniqBy-BFzf7hr-.js";import"./iteratee-i8eYuUbO.js";import"./Cross-C9IeymZz.js";import"./Rectangle-BVeyAWJr.js";import"./util-Dxo8gN5i.js";import"./Sector-CuI7D498.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
