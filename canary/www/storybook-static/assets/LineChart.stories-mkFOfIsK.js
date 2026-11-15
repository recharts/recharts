import{r as i,R as e}from"./iframe-CVlx7bU_.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DOtm20JA.js";import{R as C}from"./zIndexSlice-CQ18OEDz.js";import{L as s}from"./Line-coLulIXR.js";import{X as p}from"./XAxis-DMF0oTJ1.js";import{T as c}from"./Tooltip-D54drNp1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CV-Y7KZ3.js";import"./resolveDefaultProps-7sOSs16A.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BJrugk6A.js";import"./throttle-CmXgXLjc.js";import"./index-ERWqFFX0.js";import"./index-CfNfKDTi.js";import"./polarAxisSelectors-DTyI3qGf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CkwZs2c8.js";import"./index-2xma1Lio.js";import"./index-Ddvmj82W.js";import"./renderedTicksSlice-AgOWQ12r.js";import"./index-DJ4zrN92.js";import"./fillDefinitions-DW8KGRte.js";import"./CartesianChart-BAhcz4nC.js";import"./chartDataContext-Uf3cfJiw.js";import"./CategoricalChart-DFdLumMg.js";import"./Layer-CTBEbigF.js";import"./Curve-ByMphQa4.js";import"./types-BMFpEHKT.js";import"./step-B-eN0hXo.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CMoIO_lw.js";import"./Label-DOtvRCj8.js";import"./Text-GjS4GngU.js";import"./ZIndexLayer-DRYYNy0H.js";import"./ActivePoints-DO2U3Unb.js";import"./Dot-CLTLLAqo.js";import"./activeStyles-5RuXhDxF.js";import"./useAnimationId-JkE7TXZo.js";import"./Symbols-Gcx9n-lU.js";import"./symbol-D4b_9FWO.js";import"./ErrorBarContext-DzVhOjsh.js";import"./SetGraphicalItem-voaRHEeZ.js";import"./getRadiusAndStrokeWidthFromDot-BIjWGvqa.js";import"./ActiveShapeUtils-B7UTpWmH.js";import"./useEffectiveDataKey-B4CdAFdU.js";import"./CartesianAxis-BdpTb-nX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CJNVPp8V.js";import"./uniqBy-Cw4jSxoQ.js";import"./iteratee-Cke1s3Tj.js";import"./isArguments-yB-y1yaH.js";import"./Cross-EkJHXXuk.js";import"./Rectangle-BzACz78L.js";import"./util-Dxo8gN5i.js";import"./Sector-DIaGg7Xj.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
