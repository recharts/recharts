import{r as i,R as e}from"./iframe-Cohm3Mgw.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BXoI0wrZ.js";import{R as C}from"./zIndexSlice-B9ueg08S.js";import{L as s}from"./Line-CSUvTs5t.js";import{X as p}from"./XAxis-CVOvqpzX.js";import{T as c}from"./Tooltip-D5IMBnAQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BRBo2AAI.js";import"./resolveDefaultProps-C0M5TZCe.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CjhsklJ0.js";import"./throttle-yX9WQlUu.js";import"./index-D7CetYi-.js";import"./index-S5rsC3Tw.js";import"./isWellBehavedNumber-gcpDVDB0.js";import"./d3-scale-DvRyM4Sf.js";import"./index-DvtaYKH7.js";import"./index-BauJCgFC.js";import"./renderedTicksSlice-BCr9iPCV.js";import"./index-Cm_kbqdK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cpw2D3LX.js";import"./chartDataContext-H3bm4v7q.js";import"./CategoricalChart-Df9xH4Hr.js";import"./Layer-0g-9u_Rw.js";import"./Curve-BoBL6qva.js";import"./types-DRz-ZInT.js";import"./step-DcnLL6eP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CnXe2R42.js";import"./Label-CjpZErbZ.js";import"./Text-YiVIU37_.js";import"./DOMUtils-txvPDt5R.js";import"./useId-C6wOq3r0.js";import"./useBackwardsCompatibleTheme-VM02li75.js";import"./ZIndexLayer-CYwij2WM.js";import"./useAnimationId-Cli-i2xG.js";import"./ActivePoints-D3t_JlJ4.js";import"./Dot-bF3RsuDa.js";import"./RegisterGraphicalItemId-zE1kxnUQ.js";import"./ErrorBarContext-CroV_pde.js";import"./GraphicalItemClipPath-C_0K_X_g.js";import"./SetGraphicalItem-Cu_GzdoF.js";import"./getRadiusAndStrokeWidthFromDot-BzpvHiho.js";import"./ActiveShapeUtils-Vqel86XU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-ayk5133x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CIa7YSgL.js";import"./uniqBy-DMinejVi.js";import"./iteratee-Cno2h-aJ.js";import"./Cross-u0ASlHbu.js";import"./Rectangle-DOtTacNo.js";import"./util-Dxo8gN5i.js";import"./Sector-BbiA_v6i.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
