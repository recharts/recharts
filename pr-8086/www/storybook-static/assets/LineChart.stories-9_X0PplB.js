import{r as i,R as e}from"./iframe-BK3Sisey.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BuYm4-GU.js";import{R as C}from"./zIndexSlice-BetgAyCc.js";import{L as s}from"./Line-XxjUVcCS.js";import{X as p}from"./XAxis-DZM3ZRq3.js";import{T as c}from"./Tooltip-DziaoSJI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DORC7p_L.js";import"./resolveDefaultProps-C_F1VMOc.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BspbFoiI.js";import"./throttle-biJe8rDV.js";import"./index-DRUOZNOo.js";import"./index-de72ObtI.js";import"./polarAxisSelectors-DUPrNhEV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bzw5IHoB.js";import"./index-c0twB4Fw.js";import"./index-B0fPjlHo.js";import"./renderedTicksSlice-By71GZi8.js";import"./index-LqSrX9BA.js";import"./CartesianChart-BDnUkJu9.js";import"./chartDataContext-DOIuQ-MV.js";import"./CategoricalChart-CF961821.js";import"./Layer-D1HH46xf.js";import"./Curve-DG5NWTvD.js";import"./types-DkavCTl8.js";import"./step-DmrcgL_N.js";import"./path-DyVhHtw_.js";import"./activeStyles-Tawg351V.js";import"./Label-UVuQgYwr.js";import"./Text-CRgN4x4u.js";import"./pageBackground-CgvVcPsa.js";import"./useId-zAfHK1iY.js";import"./ZIndexLayer-BE0p1xel.js";import"./dataEntryStyles-B4V6KkDF.js";import"./useAnimationId-CS-FJwCc.js";import"./ActivePoints-D-7HMJrF.js";import"./Dot-SPXRnAns.js";import"./Symbols-PPNvVUUW.js";import"./symbol-BQrXtAQf.js";import"./RegisterGraphicalItemId-BBZLH_Nk.js";import"./ErrorBarContext-HVXU_-2l.js";import"./SetGraphicalItem-Cx8SQgq9.js";import"./getRadiusAndStrokeWidthFromDot-Bj490LjI.js";import"./ActiveShapeUtils-CgpbZaR3.js";import"./useEffectiveDataKey-Cwm-IkPM.js";import"./CartesianAxis-DZgjpOyW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-C7iIcJbq.js";import"./uniqBy-Bso09DYT.js";import"./iteratee-Bfjg1LJA.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Dxo8y2Lo.js";import"./Rectangle-BNfPDvJT.js";import"./util-Dxo8gN5i.js";import"./Sector-vXpxhJQs.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
