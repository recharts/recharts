import{r as i,R as e}from"./iframe-AEyLiqgG.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BsYiJGST.js";import{R as C}from"./zIndexSlice-D63QIr0o.js";import{L as s}from"./Line-CatYAh6P.js";import{X as p}from"./XAxis-DSCoP0BT.js";import{T as c}from"./Tooltip-3jx0z5GS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-r-JuCoEl.js";import"./resolveDefaultProps-DP3BTRCk.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Drhca-__.js";import"./throttle-Bat5tgt5.js";import"./index-C1HLBiKP.js";import"./index-DRegLE30.js";import"./isWellBehavedNumber-CgqhIRbA.js";import"./d3-scale-BLrrudvV.js";import"./index-qjC2aIyR.js";import"./index-BZWHGH__.js";import"./renderedTicksSlice-CAIsZf4o.js";import"./index-DlIzpnmQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DnWnPxAf.js";import"./chartDataContext-D_5ADK7F.js";import"./CategoricalChart-h7ez30w9.js";import"./Layer-vEMMDrrH.js";import"./Curve-XYWVXy9Z.js";import"./types-C4U-Yuut.js";import"./step-Dc7t_wqW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Du4BhFIJ.js";import"./Label-dgv50JbQ.js";import"./Text-CjbzIRNa.js";import"./DOMUtils-D23knL3w.js";import"./useId-CE7L0gFR.js";import"./useBackwardsCompatibleTheme-BeLYcOfU.js";import"./ZIndexLayer-CKKDdXeu.js";import"./useAnimationId-DhGl4rOB.js";import"./ActivePoints-DgZdabsv.js";import"./Dot-DYEfFyl7.js";import"./RegisterGraphicalItemId-CBHkDVSs.js";import"./ErrorBarContext-BCLiwnce.js";import"./GraphicalItemClipPath-TjZaHmNz.js";import"./SetGraphicalItem-D3eOc8Q8.js";import"./getRadiusAndStrokeWidthFromDot-BJa_7REZ.js";import"./ActiveShapeUtils-Cns3WvQL.js";import"./useGraphicalItemIdentity-Cs1UF85t.js";import"./CartesianAxis-NrPVgzth.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-__RE1Pit.js";import"./uniqBy-DLTO14X5.js";import"./iteratee-Bm9lS3_Q.js";import"./Cross-jnN_tCXu.js";import"./Rectangle-4fa9PUqa.js";import"./util-Dxo8gN5i.js";import"./Sector-Y0P_Mb4w.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
