import{r as i,R as e}from"./iframe-BpQ7m7wo.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-C5I9tXBJ.js";import{R as C}from"./zIndexSlice-MwSCz61s.js";import{L as s}from"./Line-D_WboHkY.js";import{X as p}from"./XAxis-DE6o4Zll.js";import{T as c}from"./Tooltip-N7KlvHuJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BVbz7wfB.js";import"./resolveDefaultProps-33rcogn6.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BYDkrwMW.js";import"./throttle-dkzrvgSW.js";import"./index-DAB_MUnB.js";import"./index-CD4MTvij.js";import"./isWellBehavedNumber-BVcmp2ni.js";import"./d3-scale-Byhs4CrR.js";import"./index-CXa8VbQ8.js";import"./index-BbHMTUSJ.js";import"./renderedTicksSlice-82sk-Quf.js";import"./index-ByFVwCBJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DMhVIjmV.js";import"./chartDataContext-84s_zl93.js";import"./CategoricalChart-CxhuSAqC.js";import"./Layer-DlRoNKW0.js";import"./Curve-B_xnDCFo.js";import"./types-XUWAitbU.js";import"./step-aBp-EU0i.js";import"./path-DyVhHtw_.js";import"./activeStyles-C2IhZeJz.js";import"./Label-BBIpfhf_.js";import"./Text-QB9mhIk2.js";import"./pageBackground-jCojFoRf.js";import"./useId-Ba0OHruW.js";import"./useBackwardsCompatibleTheme-BV9LHmnt.js";import"./ZIndexLayer-BrTVgKud.js";import"./useAnimationId-D3uGeL-A.js";import"./dataEntryStyles-CFn7kNor.js";import"./ActivePoints-B2GxPwP4.js";import"./Dot-BNcOOzPX.js";import"./ErrorBarContext-DyJjK28E.js";import"./GraphicalItemClipPath-CDr7mMLr.js";import"./SetGraphicalItem-FOIPn71v.js";import"./getRadiusAndStrokeWidthFromDot-_Kbwexmc.js";import"./ActiveShapeUtils-DiATo6ey.js";import"./useEffectiveDataKey-yqjBtOm2.js";import"./CartesianAxis-1RRtp3t2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CVtmla25.js";import"./uniqBy-dxNZ9HnU.js";import"./iteratee-Cblj0Mci.js";import"./Cross-DB-PNF2H.js";import"./Rectangle-DVkCRlhI.js";import"./util-Dxo8gN5i.js";import"./Sector-OZH_Lo5n.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
