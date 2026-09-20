import{r as i,R as e}from"./iframe-CgFNOWkZ.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DWR_vU4y.js";import{R as C}from"./zIndexSlice-CnfPauoq.js";import{L as s}from"./Line-4xvbcNSQ.js";import{X as p}from"./XAxis-Bdjd5PBO.js";import{T as c}from"./Tooltip-hzNlJo4b.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CU75wXMo.js";import"./resolveDefaultProps-B5p3Q00G.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CDnWxexV.js";import"./throttle-CwNcKmkm.js";import"./index-hYkm-J_b.js";import"./index-DjTwooh3.js";import"./isWellBehavedNumber-Cr26aOyF.js";import"./d3-scale-EAUzpRo7.js";import"./index-DlEkrCr0.js";import"./index-CIxokqwK.js";import"./renderedTicksSlice-dpz4HLD4.js";import"./index-BKLtIohb.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C2LWrJC3.js";import"./chartDataContext-BPHBCGRy.js";import"./CategoricalChart-DEeDNDbs.js";import"./Layer-DQEpCXa4.js";import"./Curve-O27qjVv6.js";import"./types-C1vo7smu.js";import"./step-D28zNE0u.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-UKua_m0c.js";import"./Label-DM_lkfp6.js";import"./Text-BCy-48NS.js";import"./DOMUtils-BuWky4GR.js";import"./useId-Cn22DgH8.js";import"./useBackwardsCompatibleTheme-qMLBJgjs.js";import"./ZIndexLayer-ZdAzMWJW.js";import"./useAnimationId-DZ6wcHPj.js";import"./ActivePoints-DfS8V4yA.js";import"./Dot-DaO5ThZO.js";import"./RegisterGraphicalItemId-DQaeZdby.js";import"./ErrorBarContext-he3EC3WX.js";import"./GraphicalItemClipPath-BUB4x5xD.js";import"./SetGraphicalItem-CsabRogn.js";import"./getRadiusAndStrokeWidthFromDot-BfxRkwb-.js";import"./ActiveShapeUtils-CgLseHdF.js";import"./useGraphicalItemIdentity-Z3uBGV6O.js";import"./CartesianAxis-CE5tgyYR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-DFZH7CAW.js";import"./uniqBy-B6NCt-4C.js";import"./iteratee-DHR339hL.js";import"./Cross-t6tx45j-.js";import"./Rectangle-lr0FbpfG.js";import"./util-Dxo8gN5i.js";import"./Sector-ClDWYj6L.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
