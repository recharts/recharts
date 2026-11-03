import{r as i,R as e}from"./iframe-C9Icmvn-.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-C8PKGvzB.js";import{R as C}from"./zIndexSlice-BtEgXkTj.js";import{L as s}from"./Line-CQVEJkC8.js";import{X as p}from"./XAxis-3c-aZ5Pt.js";import{T as c}from"./Tooltip-AmZhScsQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CtHkjOy7.js";import"./resolveDefaultProps-Ca82pTCc.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C12AZXdM.js";import"./throttle-BP58Oxor.js";import"./index-Dmxp60UK.js";import"./index-OnkxBtFQ.js";import"./polarAxisSelectors-BlT-4ON5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DZcRnjza.js";import"./index-WAfrpxeX.js";import"./index-D9kzRPzU.js";import"./renderedTicksSlice-wh0y1ne7.js";import"./index-Dwiu-D7S.js";import"./fillDefinitions-BsgJeWYO.js";import"./CartesianChart-TwWF9vdI.js";import"./ZIndexPortal-Dm-GjtZl.js";import"./CategoricalChart-PMdsySjF.js";import"./Layer-wqByJTCO.js";import"./Curve-C441Qxgg.js";import"./types-C9Uy4GKt.js";import"./step-DBIWc43o.js";import"./path-DyVhHtw_.js";import"./LabelList-BBURyYAC.js";import"./Label-B5iIonTH.js";import"./Text-sNGi1G51.js";import"./DOMUtils-B21FeQ1N.js";import"./ZIndexLayer-B_nMkGpF.js";import"./ActivePoints-CHnUvRu_.js";import"./Dot-DC8dfn9r.js";import"./activeStyles-h91K6JZi.js";import"./useAnimationId-BL9AhoYr.js";import"./dataEntryStyles-BjZqswDr.js";import"./Symbols-ColLzRAz.js";import"./symbol-4cE6vjyv.js";import"./ErrorBarContext-BlDg14Jm.js";import"./SetGraphicalItem-xkXC5Q40.js";import"./getRadiusAndStrokeWidthFromDot-Df9gcykC.js";import"./ActiveShapeUtils-B_TPSWTk.js";import"./useEffectiveDataKey-C0LxQIpq.js";import"./CartesianAxis-R6B48fBq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Cww1lqIJ.js";import"./uniqBy-D4B7yWHg.js";import"./iteratee-e68Efg3c.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Cgq-2Krw.js";import"./Rectangle-BsmVPfs4.js";import"./util-Dxo8gN5i.js";import"./Sector-BsULQggV.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
