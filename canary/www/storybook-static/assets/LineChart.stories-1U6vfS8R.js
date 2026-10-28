import{r as i,R as e}from"./iframe-v0-Os2yM.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-J7H0G1Pi.js";import{R as C}from"./zIndexSlice-_iZ3OTIR.js";import{L as s}from"./Line-CMP1V8O2.js";import{X as p}from"./XAxis-DNiYKSvx.js";import{T as c}from"./Tooltip-B21ab-pA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DpMxjJPI.js";import"./resolveDefaultProps-BcTNVKvX.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Db_FhKX_.js";import"./throttle-CSC07CA1.js";import"./index-CjGezUyu.js";import"./index-DwxXslvM.js";import"./polarAxisSelectors-Bp8G6CJB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dv-uHWFd.js";import"./index-DjMmN7uR.js";import"./index-COci_OUD.js";import"./renderedTicksSlice-Z7zIrOC1.js";import"./index-ClZJ5H50.js";import"./CartesianChart-CSMk8NrA.js";import"./ZIndexPortal-IUufwUyf.js";import"./CategoricalChart-DUPn6ZbT.js";import"./Layer--oy12MjQ.js";import"./Curve-NJea3yIB.js";import"./types-BJeT-aZk.js";import"./step-DpC9Q9rs.js";import"./path-DyVhHtw_.js";import"./LabelList-lSE4rpjb.js";import"./Label-DI0UjsSd.js";import"./Text-CJd7Lo81.js";import"./pageBackground-BMquVDd2.js";import"./ZIndexLayer-CZxM3zqX.js";import"./ActivePoints-B5HER2Lt.js";import"./Dot-D0cTKtS9.js";import"./activeStyles-CbGGlVk2.js";import"./useAnimationId-CXPH24GZ.js";import"./dataEntryStyles-DfwnSxIB.js";import"./Symbols-Cw6oiD0A.js";import"./symbol-DlOomsec.js";import"./ErrorBarContext-Dj2syV2g.js";import"./SetGraphicalItem-C-WANBtu.js";import"./getRadiusAndStrokeWidthFromDot-BkVmaDqw.js";import"./ActiveShapeUtils-BRXSym3E.js";import"./useEffectiveDataKey-DAI_6E1U.js";import"./CartesianAxis-BkO3xjcX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-C7YVK8J4.js";import"./uniqBy-l27jBtp-.js";import"./iteratee-C2U1tTrM.js";import"./isArguments-yB-y1yaH.js";import"./Cross-I_CZgQpk.js";import"./Rectangle-C4C7r0Pi.js";import"./util-Dxo8gN5i.js";import"./Sector-BBv4yBun.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Oe as __namedExportsOrder,Ke as default};
