import{r as s,R as e}from"./iframe-Cimk_otj.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CfWE946H.js";import{R as C}from"./zIndexSlice-CzTLX9Ul.js";import{L as n}from"./Line-CRuVEpLB.js";import{X as p}from"./XAxis-ByDDt0Jf.js";import{T as c}from"./Tooltip-iHYM4Kfb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-qjuL0Rr3.js";import"./index-C-Q8rOGq.js";import"./index-DpbiwnIc.js";import"./index-ByALFeZD.js";import"./index-2URJhorS.js";import"./throttle-QmRScbE8.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BjpwO9gg.js";import"./resolveDefaultProps-D_EjTjeu.js";import"./isWellBehavedNumber-CkDKja6q.js";import"./d3-scale-BqwCILGz.js";import"./renderedTicksSlice-CI4nPvu-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-dDfHuBVf.js";import"./chartDataContext-BpdsFuQG.js";import"./CategoricalChart-B7puZOGH.js";import"./Layer-CCEBq6CR.js";import"./Curve-VqOwF4YW.js";import"./types-BP4gFlyy.js";import"./step-CBLStXIf.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-tyjZKRCa.js";import"./Label-DQCQB4o-.js";import"./Text-qgns90rX.js";import"./DOMUtils-702B5NVq.js";import"./ZIndexLayer-DKEQN7E1.js";import"./useAnimationId-CWH9KLrM.js";import"./ActivePoints-DtOrXveG.js";import"./Dot-DcWN47E-.js";import"./RegisterGraphicalItemId-Cwz21l7x.js";import"./ErrorBarContext-BNzrl5kL.js";import"./GraphicalItemClipPath-C4jOZ0zB.js";import"./SetGraphicalItem-BARCofhG.js";import"./graphicalItemIdentity-dpRLTV2V.js";import"./ActiveShapeUtils-BOZkqM_j.js";import"./RechartsThemeContext-BOkXgDyG.js";import"./CartesianAxis-GRhBxYn8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CjumVQtv.js";import"./uniqBy-CdIGlW57.js";import"./iteratee-F9gv8B-y.js";import"./Cross-DMlRKkj6.js";import"./Rectangle-CgoJ-bg6.js";import"./util-Dxo8gN5i.js";import"./Sector-BivCzjVW.js";const Be={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ie=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ie as __namedExportsOrder,Be as default};
