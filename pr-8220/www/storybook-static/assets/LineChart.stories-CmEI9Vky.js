import{r as i,R as e}from"./iframe-DNXhgPY2.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DSPpIi-X.js";import{R as C}from"./zIndexSlice-C_G2hm8X.js";import{L as s}from"./Line-DrXCd3ny.js";import{X as p}from"./XAxis-CJs7Huhu.js";import{T as c}from"./Tooltip-DdJiayHr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C4y6DVLx.js";import"./resolveDefaultProps-DX55Ajk9.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CTPBeHC3.js";import"./throttle-OaXA1Z9W.js";import"./index-CfUX9U3P.js";import"./index-BHfOcO_x.js";import"./polarAxisSelectors-z81ryBra.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B8LWxob5.js";import"./index-BF5Wrxm3.js";import"./index-BBIEjaB7.js";import"./renderedTicksSlice-By9MTVsP.js";import"./index-CjdFEwMf.js";import"./fillDefinitions-DJ3S14WH.js";import"./CartesianChart-Czh_fqoQ.js";import"./chartDataContext-BJtoY4FG.js";import"./CategoricalChart-DPAZKGgc.js";import"./Layer-EsfR_jDG.js";import"./Curve-DQsYvz2A.js";import"./types-DuvV7zSt.js";import"./step-DKewonm6.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Wu6ggnF0.js";import"./Label-Ds6wWWz7.js";import"./Text-_51Pk49J.js";import"./ZIndexLayer-wMGGFAui.js";import"./ActivePoints-B_3_DJ4t.js";import"./Dot-BLhlTrFS.js";import"./activeStyles-DSoUr8Vz.js";import"./useAnimationId-CljrEDcm.js";import"./Symbols-d0jhdEjn.js";import"./symbol-D8br0DPp.js";import"./ErrorBarContext-j0Aj2Uq7.js";import"./SetGraphicalItem-COzEpMHH.js";import"./getRadiusAndStrokeWidthFromDot-CP6kgx-1.js";import"./ActiveShapeUtils-B7gfZ4ip.js";import"./useEffectiveDataKey-CcJJJpcL.js";import"./CartesianAxis-Dr28b-wt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-D5YMnEix.js";import"./uniqBy-ClVkJmze.js";import"./iteratee-DgvxGvrf.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DGGaRhQ1.js";import"./Rectangle-BDMoKugF.js";import"./util-Dxo8gN5i.js";import"./Sector-KfbG1aLo.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
