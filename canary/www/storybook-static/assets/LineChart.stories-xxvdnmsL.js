import{r as i,R as e}from"./iframe-ClXUkryL.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BcUQ_1hT.js";import{R as C}from"./zIndexSlice-DzUiPhG1.js";import{L as s}from"./Line-CTNZd68_.js";import{X as p}from"./XAxis-DAmFlkh4.js";import{T as c}from"./Tooltip-CVS8zOAR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C4CsKSyh.js";import"./resolveDefaultProps-Be-R1NDV.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BImpBlrZ.js";import"./throttle-CEjR9znF.js";import"./index-1IQ6h1fT.js";import"./index-D1YVhIqp.js";import"./polarAxisSelectors-B2T5HNNu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Crqvu4_S.js";import"./index-DTBjcvrn.js";import"./index-CrY7M_Vr.js";import"./renderedTicksSlice-0uwg5ZfK.js";import"./index-BN7SKK3J.js";import"./fillDefinitions-C705icco.js";import"./CartesianChart-Dl8SN8lO.js";import"./chartDataContext-vv2pvmYC.js";import"./CategoricalChart-B-f9dtfF.js";import"./getRadiusAndStrokeWidthFromDot-BBOOYriq.js";import"./Layer-L872TvYf.js";import"./Curve-MAqNRQ5D.js";import"./types-la06XTph.js";import"./step-DKRQgBi6.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-Br1h1G1A.js";import"./Label-BMxAhfb3.js";import"./Text-C9XRZpa-.js";import"./ZIndexLayer-CVBpK4Om.js";import"./ActivePoints-FWIT6xTU.js";import"./Dot-ACUQcHT1.js";import"./activeStyles-CbEtMY8z.js";import"./useAnimationId-Dks1GaGE.js";import"./Symbols-x2c8SqkY.js";import"./symbol-DbkjlHpo.js";import"./ErrorBarContext-BbIl9cJe.js";import"./SetGraphicalItem-XdL-o-fT.js";import"./ActiveShapeUtils-Co4M2_jg.js";import"./useEffectiveDataKey-OGRxErZi.js";import"./CartesianAxis-DC6JqvO0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DeqYTBDK.js";import"./uniqBy-BpqYijuT.js";import"./iteratee-B2tmauo-.js";import"./isArguments-yB-y1yaH.js";import"./Cross-5JluxCld.js";import"./Rectangle-KaRylKEj.js";import"./util-Dxo8gN5i.js";import"./Sector-BP6odGN8.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
