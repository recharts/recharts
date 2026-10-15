import{r as i,R as e}from"./iframe-DMAX8_B_.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CDmFh0tK.js";import{R as C}from"./zIndexSlice-BVHCVdkF.js";import{L as s}from"./Line-Baz5RTuv.js";import{X as p}from"./XAxis-C1NK8RoH.js";import{T as c}from"./Tooltip-f6oj6N-9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-1Z3_sa1T.js";import"./resolveDefaultProps-Q3rDitrf.js";import"./get-C2VjdU0L.js";import"./axisSelectors-xVjud6VL.js";import"./throttle-B-jnSQsL.js";import"./index-Dqqrq3j2.js";import"./index-t_NEKWw0.js";import"./isWellBehavedNumber-9EXxFos5.js";import"./d3-scale-BX29oM_v.js";import"./index-KGIc8sd0.js";import"./index-CBEUuOpp.js";import"./renderedTicksSlice-C6uANPht.js";import"./index-BQc2wBrK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bezscfrc.js";import"./chartDataContext-D-vUUGf6.js";import"./CategoricalChart-lpsuDSMi.js";import"./Layer-bgHLcwl9.js";import"./Curve-BI1HfCSQ.js";import"./types-mmDyRX3a.js";import"./step-CY3LQZxJ.js";import"./path-DyVhHtw_.js";import"./activeStyles-B1Ozispl.js";import"./Label-CAcaahuf.js";import"./Text-BwCj1acG.js";import"./pageBackground-BEqOe7lR.js";import"./useId-BVZoqUN1.js";import"./useBackwardsCompatibleTheme-BxWKmMDT.js";import"./ZIndexLayer-YH55ha4J.js";import"./useAnimationId-DjHV_c7w.js";import"./dataEntryStyles-Bgri-3l2.js";import"./ActivePoints-C7MlG4p_.js";import"./Dot-CxQ4QLtB.js";import"./ErrorBarContext-eOToNj9e.js";import"./GraphicalItemClipPath-DrxfmPj-.js";import"./SetGraphicalItem-Car8jOkS.js";import"./getRadiusAndStrokeWidthFromDot-CzuCL_No.js";import"./ActiveShapeUtils-CH9-BPrn.js";import"./useEffectiveDataKey-BofpFvC7.js";import"./CartesianAxis-BiWmv3xt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-irp2r8bU.js";import"./uniqBy-DSnL4fsO.js";import"./iteratee-BgbH2_Qr.js";import"./Cross-Cjp1Cd0j.js";import"./Rectangle-PLb_DD4F.js";import"./util-Dxo8gN5i.js";import"./Sector-CDCH7ALJ.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
