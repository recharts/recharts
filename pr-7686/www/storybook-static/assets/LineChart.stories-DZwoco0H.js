import{r as s,R as e}from"./iframe-DY5yIkq2.js";import{L as n}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-cpvpCrGU.js";import{R as C}from"./zIndexSlice-BJ9sbnI3.js";import{L as m}from"./Line-D8pVJeO2.js";import{X as p}from"./XAxis-DqmgH3_K.js";import{T as c}from"./Tooltip-93QJ3NKk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-fiPqbXet.js";import"./index-CqtRrj2-.js";import"./index-BgsJFNTR.js";import"./index-6CL2Bs_1.js";import"./index-Cl8EGK2P.js";import"./throttle-ClrYp41z.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BA6Z_Ork.js";import"./resolveDefaultProps-CD9o0rsG.js";import"./isWellBehavedNumber-DqVPPSXs.js";import"./d3-scale-L5elDZ4E.js";import"./renderedTicksSlice-CkTe5jVw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BYEGQZkF.js";import"./chartDataContext-CpL7gfA0.js";import"./CategoricalChart-xf3XNLGA.js";import"./Layer-sQPOBB7C.js";import"./Curve-CFlple2Z.js";import"./types-CYQx7sGq.js";import"./step-3W0WqQC-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-0mJPdXUD.js";import"./Label-DF-ljJas.js";import"./Text-CbUk5Nnj.js";import"./DOMUtils-PzmIv2NH.js";import"./useId-s6AFE7pi.js";import"./useBackwardsCompatibleTheme-CQzhlAGv.js";import"./ZIndexLayer-BUoXCop5.js";import"./useAnimationId-bV9tA_xy.js";import"./ActivePoints-DO3E4C9p.js";import"./Dot-CFTB-H51.js";import"./RegisterGraphicalItemId-uvsWx-K_.js";import"./ErrorBarContext-DeFkaPs_.js";import"./GraphicalItemClipPath-pdIKb4VD.js";import"./SetGraphicalItem-CQx7YnIu.js";import"./getRadiusAndStrokeWidthFromDot-9lBJp0HG.js";import"./ActiveShapeUtils-D2cfX5ZD.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Dkt1u38S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-C44gFBr0.js";import"./uniqBy-CrTJkdgV.js";import"./iteratee-5kgpLf6w.js";import"./Cross-W-kdfplD.js";import"./Rectangle-D-WBL6H0.js";import"./util-Dxo8gN5i.js";import"./Sector-D5xY4Hq9.js";const Se={argTypes:n,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(m,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(n),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(m,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(m,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(n),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const we=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,we as __namedExportsOrder,Se as default};
