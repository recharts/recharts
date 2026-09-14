import{r as i,R as e}from"./iframe-CazybM5Q.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BXv9BDwX.js";import{R as C}from"./zIndexSlice-C8_Ry1FK.js";import{L as s}from"./Line-BeMUZHhs.js";import{X as p}from"./XAxis-DU0DQOG4.js";import{T as c}from"./Tooltip-bg-Rq8Zl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CpPe0RTB.js";import"./resolveDefaultProps-CBYYqUCW.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DZkp_M3U.js";import"./throttle-l1Kptz9a.js";import"./index-DnBm6OUb.js";import"./index-DOWHA8mY.js";import"./isWellBehavedNumber-CpA3kMgp.js";import"./d3-scale-pDPjkkGb.js";import"./index-SN9fh9yC.js";import"./index-7BXYpUCT.js";import"./renderedTicksSlice-kdcY3T7P.js";import"./index-D_RyOPxQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DVi_4rZ_.js";import"./chartDataContext-D7DiZH02.js";import"./CategoricalChart-CzkgI-hR.js";import"./Layer-fj-XlG60.js";import"./Curve-DGBASg2P.js";import"./types-BzWyleSx.js";import"./step-CrScPSNY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DoL70GVg.js";import"./Label-jvSJhliV.js";import"./Text-x2aI-_E3.js";import"./DOMUtils-D953XyQL.js";import"./useId-C2k1DfII.js";import"./useBackwardsCompatibleTheme-Busncj89.js";import"./ZIndexLayer-ytwD_49s.js";import"./useAnimationId-Bh-TCZxX.js";import"./ActivePoints-BsSeTHgb.js";import"./Dot-BNIKPTnU.js";import"./RegisterGraphicalItemId-DaFrO76U.js";import"./ErrorBarContext-BX_x-hk-.js";import"./GraphicalItemClipPath-Gh_0CyLf.js";import"./SetGraphicalItem-CGh1GzJA.js";import"./getRadiusAndStrokeWidthFromDot-BNmcBPi1.js";import"./ActiveShapeUtils-D_rLTXV3.js";import"./useGraphicalItemIdentity-C973phhc.js";import"./CartesianAxis-CjSMZkKI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-4OfpAhcO.js";import"./uniqBy-DV26r5Rr.js";import"./iteratee-Ry3r0H3-.js";import"./Cross-DQVhrJAA.js";import"./Rectangle-Bh1teys1.js";import"./util-Dxo8gN5i.js";import"./Sector-BCUKlagA.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
