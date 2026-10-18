import{r as i,R as e}from"./iframe-Cs9VT9SX.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BDQJej6B.js";import{R as C}from"./zIndexSlice-BdtHtScS.js";import{L as s}from"./Line-Cx0NJuWb.js";import{X as p}from"./XAxis-ZXwUP9Th.js";import{T as c}from"./Tooltip-DBB7x4xM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C5YZJO9f.js";import"./resolveDefaultProps-BxA5_OWP.js";import"./get-cF5BDHN6.js";import"./axisSelectors-gCAVib4T.js";import"./throttle-DO7D3GPa.js";import"./index-xMFBNBU3.js";import"./index-Ccb8EBp4.js";import"./isWellBehavedNumber-CVBN0S-y.js";import"./d3-scale-B33rCp3E.js";import"./index-Co8WVvE-.js";import"./index-Cjg5XPAC.js";import"./renderedTicksSlice-CLNxhMWR.js";import"./index-iO7lXoIC.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BoDGj9iP.js";import"./chartDataContext-neHnT-17.js";import"./CategoricalChart-D0wW8A9V.js";import"./Layer-DyApFY3D.js";import"./Curve-C5hSs_Mg.js";import"./types-BderJbki.js";import"./step-C0n0sZGY.js";import"./path-DyVhHtw_.js";import"./activeStyles-CIXVWOxz.js";import"./Label-CtA6iQna.js";import"./Text-NwXvdk36.js";import"./pageBackground-Oh548Gvn.js";import"./useId-pJJcLuGB.js";import"./useBackwardsCompatibleTheme-BWsBUWUZ.js";import"./ZIndexLayer-6baMIq5x.js";import"./useAnimationId-1jmYsVjg.js";import"./dataEntryStyles-Bogdu71F.js";import"./ActivePoints-zHs9ig4S.js";import"./Dot-D9tJW78F.js";import"./ErrorBarContext-Ba_qpzYN.js";import"./GraphicalItemClipPath-BhbyQIog.js";import"./SetGraphicalItem-Dqm-RVU6.js";import"./getRadiusAndStrokeWidthFromDot-CqwHrRi4.js";import"./ActiveShapeUtils-DP1vY-Az.js";import"./useEffectiveDataKey-KP9u_G2c.js";import"./CartesianAxis-CkxFyA6u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Dsr0kKKf.js";import"./uniqBy-0hLfVEhM.js";import"./iteratee-DMBh3gc4.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D-h4cxnd.js";import"./Rectangle-B7LH8v7V.js";import"./util-Dxo8gN5i.js";import"./Sector-D65AispO.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Oe as __namedExportsOrder,Ke as default};
