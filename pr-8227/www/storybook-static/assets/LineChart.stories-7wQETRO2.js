import{r as i,R as e}from"./iframe-BaiXEn0-.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-MJYfX_Ki.js";import{R as C}from"./zIndexSlice-CSqAGFLj.js";import{L as s}from"./Line-CDkCfB7G.js";import{X as p}from"./XAxis-BhEilA83.js";import{T as c}from"./Tooltip-BlwcuSuu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BRQNcvpu.js";import"./resolveDefaultProps-CefoQJzZ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-s8isxUHu.js";import"./throttle-D7xKVZuZ.js";import"./index-BK6mpLXi.js";import"./index-BrUJM5DD.js";import"./polarAxisSelectors-Com92wlg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bpc0urwb.js";import"./index-CGBcSxqi.js";import"./index-YBD3MlPN.js";import"./renderedTicksSlice-GEdADU7H.js";import"./index-BuGbfhN1.js";import"./fillDefinitions-mAC2wE0k.js";import"./CartesianChart-DzuueLPv.js";import"./chartDataContext-DoyYqW6X.js";import"./CategoricalChart-D2YsyGqx.js";import"./Layer-Dc68LG4Z.js";import"./Curve-Dg6PTrHd.js";import"./types-C6nAEk1h.js";import"./step-Csdb5mG5.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CA2v1itW.js";import"./Label-CWe40LeI.js";import"./Text-Dz83mHfX.js";import"./ZIndexLayer-BmwEMujN.js";import"./ActivePoints-Dk_HtJnf.js";import"./Dot-CesDwFF2.js";import"./activeStyles-CYcJyLiS.js";import"./useAnimationId-FtoyJDPN.js";import"./Symbols-cv2IRaTf.js";import"./symbol-CRYIzv0a.js";import"./ErrorBarContext-BDsV7QiN.js";import"./SetGraphicalItem-CuWVAy3A.js";import"./getRadiusAndStrokeWidthFromDot-DS02tJFS.js";import"./ActiveShapeUtils-BRs_VSCT.js";import"./useEffectiveDataKey-l-c80nhy.js";import"./CartesianAxis-CXgLYYat.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-53YyRLbB.js";import"./uniqBy-jcM0FYxk.js";import"./iteratee-DwgGl-hX.js";import"./isArguments-yB-y1yaH.js";import"./Cross-irpLZife.js";import"./Rectangle-DBwLqskU.js";import"./util-Dxo8gN5i.js";import"./Sector-CCPexxFy.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
