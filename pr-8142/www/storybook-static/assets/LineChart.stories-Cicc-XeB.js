import{r as i,R as e}from"./iframe-Dzq6KhZI.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CpZykxoT.js";import{R as C}from"./zIndexSlice-DYy_9E3f.js";import{L as s}from"./Line-BjRSCYND.js";import{X as p}from"./XAxis-Cwq9lpMm.js";import{T as c}from"./Tooltip-Db2d9pWw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Du3nHOoA.js";import"./resolveDefaultProps-BRjkVoLn.js";import"./get-cF5BDHN6.js";import"./axisSelectors-B8Xp5jln.js";import"./throttle-PAjjPANm.js";import"./index-BecjNu5M.js";import"./index-DZ0fS5qA.js";import"./polarAxisSelectors-BWIDzk5M.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BwgC5IAo.js";import"./index-CVNCOx1i.js";import"./index-CMF9Loaq.js";import"./renderedTicksSlice-B-37bEiL.js";import"./index-DAhgw1CA.js";import"./fillDefinitions-BkZRDt9Y.js";import"./CartesianChart-Bid-fMci.js";import"./ZIndexPortal-D7MLJjGY.js";import"./CategoricalChart-dB5tt0RG.js";import"./Layer-DdRdeMHx.js";import"./Curve-GBvSi4lY.js";import"./types-Bt-JjK9T.js";import"./step-CPy7v0ge.js";import"./path-DyVhHtw_.js";import"./LabelList-0dTnEet5.js";import"./Label-ns1HN8QT.js";import"./Text-D6SfU34x.js";import"./DOMUtils-Dv3oYuXo.js";import"./ZIndexLayer-B0fPlQAE.js";import"./ActivePoints-APIfm04L.js";import"./Dot-BGvDEhvz.js";import"./activeStyles-B6qdsX9q.js";import"./useAnimationId-B5vYW3bS.js";import"./dataEntryStyles-BDzv2dJf.js";import"./Symbols-CuwHSUOy.js";import"./symbol-5MHZNE2z.js";import"./ErrorBarContext-DWqusyea.js";import"./SetGraphicalItem-C8-iEcE-.js";import"./getRadiusAndStrokeWidthFromDot-CAouDUSk.js";import"./ActiveShapeUtils-qY34SWQy.js";import"./useEffectiveDataKey-2DeBYWTa.js";import"./CartesianAxis-DeYfDX_6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-L0DqCH6F.js";import"./uniqBy-wUI6H3pU.js";import"./iteratee-2KPcfIOh.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DM8bh02F.js";import"./Rectangle-BEWurK0o.js";import"./util-Dxo8gN5i.js";import"./Sector-Cnt-x8fY.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
