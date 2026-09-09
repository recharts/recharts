import{r as i,R as e}from"./iframe-D0hbihpw.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BUYxz17P.js";import{R as C}from"./zIndexSlice-BQR9Og2n.js";import{L as s}from"./Line-DNABoAU9.js";import{X as p}from"./XAxis-BAOUXnRk.js";import{T as c}from"./Tooltip-PXWDBjYQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CXRkLc1K.js";import"./resolveDefaultProps-Dmu88e8o.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Va6d-v4h.js";import"./throttle-DvTX4uc0.js";import"./index-BZ9qdzrn.js";import"./index-Dh99j1-7.js";import"./isWellBehavedNumber-CZhc5lub.js";import"./d3-scale-O8h2L0ph.js";import"./index-DrgC61Jv.js";import"./index-8bi5BFX5.js";import"./renderedTicksSlice-CXB8MRbw.js";import"./index-BDFJggKj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-V6lubhpa.js";import"./chartDataContext-DAXrP6D1.js";import"./CategoricalChart-Byua6Cow.js";import"./Layer-DikASeyh.js";import"./Curve-ar9QbNVF.js";import"./types-C5BTVxoc.js";import"./step-DPrNd-pa.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-SbRPQVaD.js";import"./Label-CuFmC-Nb.js";import"./Text-CuYqG2IB.js";import"./DOMUtils-pnmg3tR-.js";import"./useId-CqMWBNZ1.js";import"./useBackwardsCompatibleTheme-BB_m6SGU.js";import"./ZIndexLayer-J_UAcRhh.js";import"./useAnimationId-qESP7nT-.js";import"./ActivePoints-CEQslcDp.js";import"./Dot-bpGHDnlK.js";import"./RegisterGraphicalItemId-DeHO2KGG.js";import"./ErrorBarContext-BWM6Th1h.js";import"./GraphicalItemClipPath-BlTfPWVo.js";import"./SetGraphicalItem-DqlrOVj_.js";import"./getRadiusAndStrokeWidthFromDot-DEVmJr6b.js";import"./ActiveShapeUtils-5v_sCHFD.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DbFRpkHK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-Npapc4qs.js";import"./uniqBy-BS3q8RgG.js";import"./iteratee-kuyUhPZO.js";import"./Cross-CMALfafA.js";import"./Rectangle-C_uu3MYE.js";import"./util-Dxo8gN5i.js";import"./Sector-DFu2VDPJ.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
