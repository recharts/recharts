import{r as i,R as e}from"./iframe-c2lRejlG.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-2_6kDqkg.js";import{R as C}from"./zIndexSlice-CxBOtYNT.js";import{L as s}from"./Line-Bm9hdzN4.js";import{X as p}from"./XAxis-CTi1ijiA.js";import{T as c}from"./Tooltip-Cobpf8XE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-7WfVgUuu.js";import"./resolveDefaultProps-Cd-PQ1DC.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Deq2x5E-.js";import"./throttle-CLdsKjkB.js";import"./index-BPGiATtt.js";import"./index-IRYG05jg.js";import"./polarAxisSelectors-CqGqTVQP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-FKe385CS.js";import"./index-flaxi9nt.js";import"./index-DiQunSZN.js";import"./renderedTicksSlice-CI_7c3pA.js";import"./index-DtkFulOp.js";import"./fillDefinitions-BJlWg_X2.js";import"./CartesianChart-B9TZHz33.js";import"./chartDataContext-D2dajo_O.js";import"./CategoricalChart-Da60SI3f.js";import"./getRadiusAndStrokeWidthFromDot-BLb9OMZN.js";import"./Layer-3thD2J8o.js";import"./Curve-C61f5jar.js";import"./types-DUYg5b1u.js";import"./step-k_HQUKGn.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CPzad5xB.js";import"./Label-CYzJLkW1.js";import"./Text-DUu108CD.js";import"./ZIndexLayer-wT8ty6aL.js";import"./ActivePoints-DZEdcjq5.js";import"./Dot-DNml-FEM.js";import"./activeStyles-71nScM55.js";import"./useAnimationId-DpyYZ0R1.js";import"./Symbols-ZMuAovUW.js";import"./symbol-BTyzRL6J.js";import"./ErrorBarContext-DkK2QSGk.js";import"./SetGraphicalItem-BqZrsCyw.js";import"./ActiveShapeUtils-CM6VEkzu.js";import"./useEffectiveDataKey-Dakyyayq.js";import"./CartesianAxis-OWNbVRjL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-u32tKDbG.js";import"./uniqBy-Dt7YDWvs.js";import"./iteratee-DhpUlMTO.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BYt0HFMf.js";import"./Rectangle-CubbKCjv.js";import"./util-Dxo8gN5i.js";import"./Sector-b-HwtzLg.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
