import{r as i,R as e}from"./iframe-Mdt8VJ2w.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BYZDdmEB.js";import{R as C}from"./zIndexSlice-BsdMuIdb.js";import{L as s}from"./Line-CZenb3m6.js";import{X as p}from"./XAxis-GQVgJzZC.js";import{T as c}from"./Tooltip-BR1ZVej3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BSXOrQ0o.js";import"./resolveDefaultProps-CpPg4Klh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BFf5BOkR.js";import"./throttle-VIBdIbYw.js";import"./index-aQiBtsFK.js";import"./index-CBF1PFXA.js";import"./isWellBehavedNumber-t2MA1Hj2.js";import"./d3-scale-DhLC6v_0.js";import"./index-Bh66vNwH.js";import"./index-BNwNegUe.js";import"./renderedTicksSlice-DSt8-RgC.js";import"./index-DXJpIZWy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cjv56MYV.js";import"./chartDataContext-bPArfWn-.js";import"./CategoricalChart-DQulxF7t.js";import"./Layer-CcarLXD9.js";import"./Curve-Bg2QEuKe.js";import"./types-6Q4AmTS7.js";import"./step-CRIOY1t7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B_SFlbBu.js";import"./Label-CtCuuSl7.js";import"./Text-C4xsU_o9.js";import"./DOMUtils-BUFAvfGk.js";import"./useId-DFFN6HWZ.js";import"./useBackwardsCompatibleTheme-CUPajrH3.js";import"./ZIndexLayer-Di_3Ujup.js";import"./useAnimationId-BjS9VFFE.js";import"./ActivePoints-BlFeeX4-.js";import"./Dot-BWITrl2w.js";import"./RegisterGraphicalItemId-B7ELoHw_.js";import"./ErrorBarContext-_5c9Wah_.js";import"./GraphicalItemClipPath-D5E8uSuA.js";import"./SetGraphicalItem-DcJbL-HK.js";import"./getRadiusAndStrokeWidthFromDot-CbmfEoix.js";import"./ActiveShapeUtils-COWK-Ag5.js";import"./useGraphicalItemIdentity-Dbl0dkEe.js";import"./CartesianAxis-CC5aUDzH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CJ7XjXe1.js";import"./uniqBy-Bre31482.js";import"./iteratee-BzS5DkOb.js";import"./Cross-CBpSwFb9.js";import"./Rectangle-Cz_1U9tO.js";import"./util-Dxo8gN5i.js";import"./Sector-kdH_P5bF.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
