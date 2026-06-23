import{r as s,R as e}from"./iframe-Dgfa45pO.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-Dc0UUvaf.js";import{R as C}from"./zIndexSlice-C1KjhRe9.js";import{L as n}from"./Line-BASvZUAn.js";import{X as p}from"./XAxis-BSLC3Bv_.js";import{T as c}from"./Tooltip-CE3KSJnj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-XphNsNZ5.js";import"./index-ksaWIuWX.js";import"./index-CBjnf8TP.js";import"./index-BgENuBix.js";import"./index-Bo_UbBqc.js";import"./immer-DVLCs_h8.js";import"./get-BZICNy-w.js";import"./renderedTicksSlice-fSTgGnjG.js";import"./axisSelectors-4s-45b5o.js";import"./d3-scale-D3oEXvep.js";import"./resolveDefaultProps-ChQrXTkd.js";import"./isWellBehavedNumber-BrMIbSaZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BC1ybKqz.js";import"./chartDataContext-xlhPPH5F.js";import"./CategoricalChart-BUu6OQ7Y.js";import"./Layer-BwLAkNRA.js";import"./Curve-DtYKQ2VH.js";import"./types-C1ZkWqT0.js";import"./step-BZZfKQz_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CIa4005N.js";import"./Label-Dzw51f8E.js";import"./Text-tvsjfW3h.js";import"./DOMUtils-C6RrxFOP.js";import"./ZIndexLayer-Dy6LsEV1.js";import"./useAnimationId-CjXgi841.js";import"./ActivePoints-jW6GNHGv.js";import"./Dot-DbOxHeVE.js";import"./RegisterGraphicalItemId-DMVQPcLn.js";import"./ErrorBarContext-DUzmHtBE.js";import"./GraphicalItemClipPath-CGgVvw3m.js";import"./SetGraphicalItem-eSn4zQ3n.js";import"./getRadiusAndStrokeWidthFromDot-KiudXz49.js";import"./ActiveShapeUtils-B8QNpF57.js";import"./CartesianAxis-DznDQPew.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-BqMobiPE.js";import"./uniqBy-A8hmwwhf.js";import"./iteratee-B2FVpM9G.js";import"./Cross-Cz3c5tUZ.js";import"./Rectangle-CQY8rJu-.js";import"./util-Dxo8gN5i.js";import"./Sector-iD3Kd2J-.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
