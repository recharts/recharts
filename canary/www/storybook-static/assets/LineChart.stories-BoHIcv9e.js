import{P as s,c as e}from"./iframe-fo49l_7F.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-DPte-9pC.js";import{L as i}from"./LineChart-CLEx1P_C.js";import{g as C}from"./zIndexSlice-DRP-3MQ6.js";import{L as n}from"./Line-CEcsqQwp.js";import{X as p}from"./XAxis-BzBl98RW.js";import{T as c}from"./Tooltip-CluNubwH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DNEpPwFB.js";import"./index-3vxLE14G.js";import"./index-Dnm6qrQS.js";import"./index-Cq9JpdB2.js";import"./index-LHlEkonc.js";import"./immer-Cnd_vM0p.js";import"./get-BUAOm5zY.js";import"./renderedTicksSlice-DvOi1XF2.js";import"./axisSelectors-DA_mvJaq.js";import"./d3-scale-qag23egh.js";import"./resolveDefaultProps-CVMfvQ41.js";import"./isWellBehavedNumber-B0btAC56.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C_VrjQWn.js";import"./chartDataContext-DeCM2GRR.js";import"./CategoricalChart-Di0rvdap.js";import"./Curve-C8R-he6_.js";import"./types-Bblnl65_.js";import"./step-D7HygetQ.js";import"./path-DyVhHtw_.js";import"./Layer-Cshlv-Qa.js";import"./ReactUtils-Bb0TLcRV.js";import"./Label-B622NV2p.js";import"./Text-BTD0u6_t.js";import"./DOMUtils-7oUYJi4I.js";import"./ZIndexLayer-D6UFvHMF.js";import"./ActivePoints-Dt3Cg6Px.js";import"./Dot-C2AIzy-O.js";import"./RegisterGraphicalItemId-zZVZ96Iy.js";import"./ErrorBarContext-BBLhm3gp.js";import"./GraphicalItemClipPath-qLKfObJe.js";import"./SetGraphicalItem-BMqVgIbs.js";import"./useAnimationId-AS8JtY64.js";import"./getRadiusAndStrokeWidthFromDot-BviS3R6P.js";import"./ActiveShapeUtils-nlm4-u2n.js";import"./CartesianAxis-BLZxyXIk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-DrLD4_4t.js";import"./uniqBy-DCYBvHHV.js";import"./iteratee-COYh5OnJ.js";import"./Cross-CWdtNHCJ.js";import"./Rectangle-Bu1eqIwN.js";import"./Sector-CStgtrVQ.js";const Ce={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ee=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ee as __namedExportsOrder,Ce as default};
