import{r as i,R as e}from"./iframe-DKiAUKfj.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DP8IFttT.js";import{R as C}from"./zIndexSlice-DRDYTCs-.js";import{L as s}from"./Line-6oCir5Dk.js";import{X as p}from"./XAxis-BHxip6nG.js";import{T as c}from"./Tooltip-62Dqd3SI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-V6OGhvVE.js";import"./resolveDefaultProps-wQyeqB4t.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CgDB5I1Y.js";import"./throttle-C4io43Xn.js";import"./index-B0JUl7NQ.js";import"./index-CGte46WL.js";import"./isWellBehavedNumber-BQkgEIAs.js";import"./d3-scale-DhJR9ZRz.js";import"./index-D64JEJSP.js";import"./index-BZWqRos3.js";import"./renderedTicksSlice-BJG2XwKW.js";import"./index-CTMR6STe.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BTQ_MHvG.js";import"./chartDataContext-CVDaw3GU.js";import"./CategoricalChart-DJIGb7_j.js";import"./Layer-TOA8EzlX.js";import"./Curve-NEEyYudm.js";import"./types-CesjT3HQ.js";import"./step-DrkPABVT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CPnSyqXV.js";import"./Label-BqJsTdph.js";import"./Text-DzjLOXSn.js";import"./DOMUtils-kE23eB48.js";import"./useId-DXDEV1Zs.js";import"./useBackwardsCompatibleTheme-Bntz2N2r.js";import"./ZIndexLayer-Cu2kJPTs.js";import"./useAnimationId-D05enbBD.js";import"./ActivePoints-loRSqDJl.js";import"./Dot-B085JP8i.js";import"./RegisterGraphicalItemId-DL0AdrUW.js";import"./ErrorBarContext-CdB3k_cz.js";import"./GraphicalItemClipPath-DJ7nq7QD.js";import"./SetGraphicalItem-B2eXT-xm.js";import"./getRadiusAndStrokeWidthFromDot-Bn_cXEBB.js";import"./ActiveShapeUtils-CameuY1c.js";import"./useGraphicalItemIdentity-BklSfqcr.js";import"./CartesianAxis-C20v2lN6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CfjQprQ-.js";import"./uniqBy-BRiSgWCU.js";import"./iteratee-DYj_iQuR.js";import"./Cross-CxyMpGOk.js";import"./Rectangle-C3_ltPRK.js";import"./util-Dxo8gN5i.js";import"./Sector-gklvmQfA.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
