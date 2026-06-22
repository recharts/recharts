import{r as s,R as e}from"./iframe-D_SaqINW.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DtRAC6ie.js";import{R as C}from"./zIndexSlice-Nr9A9_cH.js";import{L as n}from"./Line-CktBvgGg.js";import{X as p}from"./XAxis-6wdck5XJ.js";import{T as c}from"./Tooltip-CiiLOeCs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BOxkh1KP.js";import"./index-SZXFPM2d.js";import"./index-C5cOlUnK.js";import"./index-BiWBdnkZ.js";import"./index-TyDw8B7P.js";import"./immer-4i53sgvd.js";import"./get-DRtBRZ7g.js";import"./renderedTicksSlice-nvcrqMwf.js";import"./axisSelectors-KbW_RdYB.js";import"./d3-scale-CQIw_skn.js";import"./resolveDefaultProps-DUbefueE.js";import"./isWellBehavedNumber-BFJTu4EN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CZi0Hd-v.js";import"./chartDataContext-FaAlL944.js";import"./CategoricalChart-DmnISPC2.js";import"./Layer-CLMd0CrH.js";import"./Curve-Sg8XUuU0.js";import"./types-L0YqXeC-.js";import"./step-DyxZJeHE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DrX1vaEn.js";import"./Label-D8rwziA9.js";import"./Text-CDbXravB.js";import"./DOMUtils-olWBsR_G.js";import"./ZIndexLayer-CNKQ_WkY.js";import"./useAnimationId-DJVHCfAF.js";import"./ActivePoints-DaZDHHOd.js";import"./Dot-B7iUah-Z.js";import"./RegisterGraphicalItemId-CDtWnv6Z.js";import"./ErrorBarContext-Cv8g9Tm4.js";import"./GraphicalItemClipPath-ClsDcJaX.js";import"./SetGraphicalItem-HY1vpJNM.js";import"./getRadiusAndStrokeWidthFromDot-UiXMR6RM.js";import"./ActiveShapeUtils-8phtwrmk.js";import"./CartesianAxis-DWHYepa6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-B0pep8Bt.js";import"./uniqBy-DfSS1ssL.js";import"./iteratee-tTd3ivbf.js";import"./Cross-DFz5-w3s.js";import"./Rectangle-CaUfvzDJ.js";import"./util-Dxo8gN5i.js";import"./Sector-CthNfgJi.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Te=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Te as __namedExportsOrder,Ee as default};
