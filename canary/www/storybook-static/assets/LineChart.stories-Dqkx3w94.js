import{r as i,R as e}from"./iframe-C9H6nb8O.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DdxL-ItH.js";import{R as C}from"./zIndexSlice-86DFZZsp.js";import{L as s}from"./Line-CmfR4dPi.js";import{X as p}from"./XAxis-CywV301b.js";import{T as c}from"./Tooltip-DQEtwi0s.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bh_nwwHr.js";import"./resolveDefaultProps-B_vS2EyS.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CaDgI8Oc.js";import"./throttle-BnpdZ0b3.js";import"./index-DkNU9Jwj.js";import"./index-BTq_b2hA.js";import"./isWellBehavedNumber-BxcMlH1H.js";import"./d3-scale-BBLrtWMa.js";import"./index-DOD7xHyz.js";import"./index-d48a0T_2.js";import"./renderedTicksSlice-TzJYRiTZ.js";import"./index-ByTGeVXQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dy945WYe.js";import"./chartDataContext-BNqh0ME9.js";import"./CategoricalChart-BRBdOICb.js";import"./Layer-DNW7nupE.js";import"./Curve-CQId5eMN.js";import"./types-oEFxgIut.js";import"./step-C5UsVhDs.js";import"./path-DyVhHtw_.js";import"./activeStyles-Dwr5_xBc.js";import"./Label-6glZLWD6.js";import"./Text-BU8Is9rY.js";import"./pageBackground-DsggDmpK.js";import"./useId-pZk3BoDa.js";import"./useBackwardsCompatibleTheme-K49OtSF_.js";import"./ZIndexLayer-DL3up6PN.js";import"./useAnimationId-k6lITT5p.js";import"./dataEntryStyles-CmzRurqC.js";import"./ActivePoints-xNyBthG2.js";import"./Dot-CRvB7d-n.js";import"./ErrorBarContext-CBrxfbC1.js";import"./GraphicalItemClipPath-Cizji_0l.js";import"./SetGraphicalItem-B5C7hWKX.js";import"./getRadiusAndStrokeWidthFromDot-C0Lx-uc8.js";import"./ActiveShapeUtils-Cv1ZH2em.js";import"./useEffectiveDataKey-BpO8_klP.js";import"./CartesianAxis-BWYBJgMt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-KKareHqY.js";import"./uniqBy-1ZQrBMnQ.js";import"./iteratee-BR3KUAK-.js";import"./Cross-CYx8WrQR.js";import"./Rectangle-DUAtv8-f.js";import"./util-Dxo8gN5i.js";import"./Sector-RczJUp_V.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
