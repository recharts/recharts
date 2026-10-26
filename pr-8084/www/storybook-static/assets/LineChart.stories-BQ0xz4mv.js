import{r as i,R as e}from"./iframe-sVYf0T4K.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CfXitxuO.js";import{R as C}from"./zIndexSlice-DCYn61_Z.js";import{L as s}from"./Line-ChZJFWD1.js";import{X as p}from"./XAxis-DBp8xvXF.js";import{T as c}from"./Tooltip-lnOD4kE7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-cX9KnfoQ.js";import"./resolveDefaultProps-BNjxkguA.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DeiSy_-h.js";import"./throttle-B5u3GWWh.js";import"./index-DiC6i9Zs.js";import"./index--6n540TN.js";import"./polarAxisSelectors-BsaBqdPx.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaVFs3zj.js";import"./index-hsh9HVaA.js";import"./index-ByFnZ7XW.js";import"./renderedTicksSlice-BPEsWmdR.js";import"./index-BXr1355W.js";import"./CartesianChart-DjuWDgK1.js";import"./chartDataContext-Dkn-AagS.js";import"./CategoricalChart-BAqEzU7h.js";import"./Layer-BIjeoEg2.js";import"./Curve-DRJ9KjAo.js";import"./types-ZHVwXJa3.js";import"./step-DuwXt4tv.js";import"./path-DyVhHtw_.js";import"./activeStyles-BGq7qwld.js";import"./Label-DWNcL86V.js";import"./Text-BWcB5EFj.js";import"./pageBackground-DIQ0WB3A.js";import"./useId-V8WWGbBi.js";import"./ZIndexLayer-BVANdKv1.js";import"./dataEntryStyles-4CyLqaB1.js";import"./useAnimationId-D71D5MAL.js";import"./ActivePoints-qLv8n1bM.js";import"./Dot-CyGoxzEw.js";import"./Symbols-B9IhfDAO.js";import"./symbol-BnKq_a6Q.js";import"./RegisterGraphicalItemId-CPgTzLUz.js";import"./ErrorBarContext-BIENolIM.js";import"./SetGraphicalItem-BDTNcAra.js";import"./getRadiusAndStrokeWidthFromDot-C9_Ol6X7.js";import"./ActiveShapeUtils-CcGGZZs1.js";import"./useEffectiveDataKey-TZEf5iHD.js";import"./CartesianAxis-BI1VsAr7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Mops_opC.js";import"./uniqBy-DE0GfQ2f.js";import"./iteratee-BQC4Cygg.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DbRi0_-s.js";import"./Rectangle--uO5acWR.js";import"./util-Dxo8gN5i.js";import"./Sector-CUgX515f.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
