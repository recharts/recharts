import{r as i,R as e}from"./iframe-C478ayfe.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BlAaP-o7.js";import{R as C}from"./zIndexSlice-T3ZFb7Aa.js";import{L as s}from"./Line-CGbNyLDk.js";import{X as p}from"./XAxis-CU4ivSNq.js";import{T as c}from"./Tooltip-DRflteeY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D6tIgYO1.js";import"./resolveDefaultProps-BQGOYpJv.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Biv-SyAO.js";import"./throttle-B99v42cc.js";import"./index-J8Ragxup.js";import"./index-Dt6G_B5v.js";import"./polarAxisSelectors-CAckEIKE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Cz0p_M0k.js";import"./index-Bgd7L3TE.js";import"./index-CujM32ev.js";import"./renderedTicksSlice-BwSyvBJ_.js";import"./index-NXORGKPb.js";import"./CartesianChart-D2eUya_e.js";import"./ZIndexPortal-CaG6-xRf.js";import"./CategoricalChart-nvv--0et.js";import"./Layer-BzE3AtiA.js";import"./Curve-BR7rWdNb.js";import"./types-1IO_LGzE.js";import"./step-5qm5cD0x.js";import"./path-DyVhHtw_.js";import"./LabelList-CXPk-iUW.js";import"./Label-yNY_-txU.js";import"./Text-rWn3Xmx5.js";import"./DOMUtils-DMUojBll.js";import"./ZIndexLayer-B9pzlGWv.js";import"./ActivePoints-CRj_seyq.js";import"./Dot-BEwirPZP.js";import"./activeStyles-BTHRjD5i.js";import"./useAnimationId-DsdBvcVE.js";import"./dataEntryStyles-DLRWmObc.js";import"./Symbols-B5clnuWh.js";import"./symbol-Djp9TiFA.js";import"./ErrorBarContext-Cxtks1NA.js";import"./SetGraphicalItem-7DZt9-vL.js";import"./getRadiusAndStrokeWidthFromDot-0vkflCw5.js";import"./ActiveShapeUtils-em0-Yj9t.js";import"./useEffectiveDataKey-HlgT5Uu2.js";import"./themeFill-BkM1x4hA.js";import"./CartesianAxis-D6yrNWVj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BEuMbuoA.js";import"./uniqBy-kU7oDpQ6.js";import"./iteratee-bJQZKjxj.js";import"./isArguments-yB-y1yaH.js";import"./Cross-LboJznFC.js";import"./Rectangle-DvnRkiIM.js";import"./util-Dxo8gN5i.js";import"./Sector-BrpLJe1k.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,He as __namedExportsOrder,Oe as default};
