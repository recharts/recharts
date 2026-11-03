import{r as i,R as e}from"./iframe-BquPZQZR.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-pb6VXo4D.js";import{R as C}from"./zIndexSlice-DfoMGwwJ.js";import{L as s}from"./Line-BUXIJhlS.js";import{X as p}from"./XAxis-B0NTBS_i.js";import{T as c}from"./Tooltip-iSktKwDP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BOh7Al31.js";import"./resolveDefaultProps-C1-PhdLj.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Ra6SuVrn.js";import"./throttle-Ifciv68t.js";import"./index-BeXk3gq4.js";import"./index-CY_4egx2.js";import"./polarAxisSelectors-Bi2qo_WA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B2Z3tDr8.js";import"./index-BBIQOsY9.js";import"./index-DeLNFakb.js";import"./renderedTicksSlice-DkVmzd5W.js";import"./index-C389QzGe.js";import"./fillDefinitions-bKlUAuaq.js";import"./CartesianChart-DusmDSbk.js";import"./ZIndexPortal-ChcM8kac.js";import"./CategoricalChart-DY8SYWQ4.js";import"./Layer-DgCLyWmw.js";import"./Curve-DPOrxZAK.js";import"./types-HVxQrabK.js";import"./step-CUnUoUW9.js";import"./path-DyVhHtw_.js";import"./LabelList-c67UtHfn.js";import"./Label-QfyPAwEN.js";import"./Text-Cz9Qm4K-.js";import"./DOMUtils-Hop2FGiK.js";import"./ZIndexLayer-BKwk9Ckz.js";import"./ActivePoints-BzSHcWj6.js";import"./Dot-B5ySELDq.js";import"./activeStyles-7MX0jGA5.js";import"./useAnimationId-BAgUZZzE.js";import"./dataEntryStyles-DcYBdp4K.js";import"./Symbols-BOEhDLOF.js";import"./symbol-BytJGu2b.js";import"./ErrorBarContext-LEjhprcI.js";import"./SetGraphicalItem-DVTOJBGj.js";import"./getRadiusAndStrokeWidthFromDot-Dz2gbesP.js";import"./ActiveShapeUtils-B8wKgjG7.js";import"./useEffectiveDataKey-Dv0si8CY.js";import"./CartesianAxis-G--oVlcc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-v0E65nTN.js";import"./uniqBy-Dp4AeUu6.js";import"./iteratee-CvxwxQ4E.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BoFANieQ.js";import"./Rectangle-BR95K4Qq.js";import"./util-Dxo8gN5i.js";import"./Sector-DnFLuyiy.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
