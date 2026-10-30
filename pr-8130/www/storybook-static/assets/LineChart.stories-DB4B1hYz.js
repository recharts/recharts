import{r as i,R as e}from"./iframe-BmKqhsPF.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-WmFbwZbh.js";import{R as C}from"./zIndexSlice-CBQM2Gyg.js";import{L as s}from"./Line-DFSz05PX.js";import{X as p}from"./XAxis-B1Y97cNG.js";import{T as c}from"./Tooltip-DwZsicEu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CdEiQwLq.js";import"./resolveDefaultProps-BDqp1YKl.js";import"./get-cF5BDHN6.js";import"./axisSelectors-De-QIQw0.js";import"./throttle-DFLwZbH7.js";import"./index-3u8XkdeO.js";import"./index-BGZm-V5p.js";import"./polarAxisSelectors-3J3j4TTi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-66RSqjvR.js";import"./index-B3BeYDVW.js";import"./index-BlCA3-m5.js";import"./renderedTicksSlice-1_lrB1iK.js";import"./index-CBz7nTI3.js";import"./fillDefinitions-miIei5Ak.js";import"./CartesianChart-DwN6Hmpg.js";import"./ZIndexPortal-DFoHfC3q.js";import"./CategoricalChart-DDmHhC4k.js";import"./Layer-DFK8Q48P.js";import"./Curve--g8UutGF.js";import"./types-8TEdLcfT.js";import"./step-DxyJMaY2.js";import"./path-DyVhHtw_.js";import"./LabelList-Cw7YYHKY.js";import"./Label-DJuyIpr6.js";import"./Text-CrMJTYNw.js";import"./DOMUtils-DtycWmz8.js";import"./ZIndexLayer-E2zC26PS.js";import"./ActivePoints-CVBU67Gc.js";import"./Dot-BY7ekD9g.js";import"./activeStyles-B9WkYOlU.js";import"./useAnimationId-Cw8-NrKa.js";import"./dataEntryStyles-BYeCTEXf.js";import"./Symbols-C1ZJFDve.js";import"./symbol-Cwivg1At.js";import"./ErrorBarContext-DjFDtKDe.js";import"./SetGraphicalItem-DaR9Vkxk.js";import"./getRadiusAndStrokeWidthFromDot-DwT_-E51.js";import"./ActiveShapeUtils-CmFmkU6o.js";import"./useEffectiveDataKey-etJHmmHX.js";import"./CartesianAxis-Ch4CXp2q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Dg2vO0r-.js";import"./uniqBy-DIJRTBn5.js";import"./iteratee-CzzbuyX8.js";import"./isArguments-yB-y1yaH.js";import"./Cross-NXQm5MWe.js";import"./Rectangle-Dph07-O4.js";import"./util-Dxo8gN5i.js";import"./Sector-CXVHJrRe.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
