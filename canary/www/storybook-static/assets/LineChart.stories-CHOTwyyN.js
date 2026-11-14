import{r as i,R as e}from"./iframe-CFiYbyYn.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Dvn7FrEs.js";import{R as C}from"./zIndexSlice-CfnjI_J7.js";import{L as s}from"./Line-Bdu49nu9.js";import{X as p}from"./XAxis-RpmZ_jE_.js";import{T as c}from"./Tooltip-DXHLHEHF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DnJ3Lnfw.js";import"./resolveDefaultProps-D5Jgld6M.js";import"./get-cF5BDHN6.js";import"./axisSelectors-ZJRlSH7p.js";import"./throttle-C32GRzNi.js";import"./index-BgXu95am.js";import"./index-D8Rvzs5o.js";import"./polarAxisSelectors-C73NV54c.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BQZOe2uw.js";import"./index-CeN26RCh.js";import"./index-B2eeTemT.js";import"./renderedTicksSlice-DEUuAR6D.js";import"./index-CTcpyI6-.js";import"./fillDefinitions-DQn9hMkI.js";import"./CartesianChart-BI7GK76V.js";import"./chartDataContext-CxLvIdoH.js";import"./CategoricalChart-CA4HG4Fk.js";import"./Layer-BfyvsZKx.js";import"./Curve-CKgWn92F.js";import"./types-BgyTt6P7.js";import"./step-DxzKinYr.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CEdPYhQz.js";import"./Label-BO6v_mC5.js";import"./Text-BvA3DBG3.js";import"./ZIndexLayer-BDfLEL3A.js";import"./ActivePoints-Dj8mj1pc.js";import"./Dot-DG45E_Jc.js";import"./activeStyles-P0GMx-UH.js";import"./useAnimationId-BDSeKkxz.js";import"./Symbols-dPAJMo6f.js";import"./symbol-aLQJyVpc.js";import"./ErrorBarContext-DjJwPTFH.js";import"./SetGraphicalItem-CGu2i_Hy.js";import"./getRadiusAndStrokeWidthFromDot-Ce32xTZu.js";import"./ActiveShapeUtils-CsNOZNpW.js";import"./useEffectiveDataKey-Dy2gs8KS.js";import"./CartesianAxis-D_9vstbH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-B4AwO3QR.js";import"./uniqBy-4Wq1ZNuh.js";import"./iteratee-B-Fq5cCX.js";import"./isArguments-yB-y1yaH.js";import"./Cross-IGGmzroz.js";import"./Rectangle-BSxvUYTo.js";import"./util-Dxo8gN5i.js";import"./Sector-BGw3hAub.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
