import{r as i,R as e}from"./iframe-BoIdwylW.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-bS6_-KnL.js";import{R as C}from"./zIndexSlice-PMZXbuz8.js";import{L as s}from"./Line-C9V6t-D9.js";import{X as p}from"./XAxis-ClVSu1zU.js";import{T as c}from"./Tooltip-BZSYLkSX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-KwWkpOaO.js";import"./resolveDefaultProps-CtzWd-qA.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CnNiq6Rh.js";import"./throttle-DJovDE6i.js";import"./index-DNtzd00k.js";import"./index-D93QOL6W.js";import"./polarAxisSelectors-BUrHoreM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Asjkzq2w.js";import"./index-Cb6O7Zhr.js";import"./index-DeVO3TjK.js";import"./renderedTicksSlice-BcY34TaC.js";import"./index-DLxdIIWm.js";import"./fillDefinitions-CK96g-PQ.js";import"./CartesianChart-RjOUEsRj.js";import"./chartDataContext-XVkCEP1D.js";import"./CategoricalChart-8Ce8TnvZ.js";import"./Layer-DnLGFXqh.js";import"./Curve-BucXWP1n.js";import"./types-D0djA_gg.js";import"./step-cn3vFhcC.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CG-hLtdl.js";import"./Label-B2lBcb4D.js";import"./Text-D_S4fT48.js";import"./ZIndexLayer-BYJgF0xG.js";import"./ActivePoints-Dv9hEuIy.js";import"./Dot-CLBNcaQB.js";import"./activeStyles-kk8IGRJt.js";import"./useAnimationId-BZtpw3X8.js";import"./Symbols-Cpgbh6kd.js";import"./symbol-ChnJAo1F.js";import"./ErrorBarContext-DqGqKTxS.js";import"./SetGraphicalItem-B5MmjNJa.js";import"./getRadiusAndStrokeWidthFromDot-DvyJSF9f.js";import"./ActiveShapeUtils-BK27ZWgW.js";import"./useEffectiveDataKey-QRSJB29_.js";import"./CartesianAxis-DE9aH7XM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DHSsrRA3.js";import"./uniqBy-C09z32gb.js";import"./iteratee-C-EJIXKE.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CMokWgug.js";import"./Rectangle-Cws0XjiK.js";import"./util-Dxo8gN5i.js";import"./Sector-CcN-T5T3.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
