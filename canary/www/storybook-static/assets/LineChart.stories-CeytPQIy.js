import{r as i,R as e}from"./iframe-DVXtBbhv.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-B7Mg6udk.js";import{R as C}from"./zIndexSlice-CRXmCTqm.js";import{L as s}from"./Line-ZRT5g1vt.js";import{X as p}from"./XAxis-BQ7gOxOo.js";import{T as c}from"./Tooltip-DWV6q4l_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-AdQm7Ax9.js";import"./resolveDefaultProps-eZCAl6aH.js";import"./get-cF5BDHN6.js";import"./axisSelectors-M5GsU3rg.js";import"./throttle-CSTRLONy.js";import"./index-kgrSM8GI.js";import"./index-HiZVMws2.js";import"./polarAxisSelectors-Jcl3obl_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ctk2L_AK.js";import"./index-BfyWBC3f.js";import"./index-CMkKBRRd.js";import"./renderedTicksSlice-ZV6qlBU2.js";import"./index-BZygq-Tx.js";import"./fillDefinitions-RTxS13Os.js";import"./CartesianChart-AaBKVVVh.js";import"./ZIndexPortal-D-pQJaCe.js";import"./CategoricalChart-DkOrwY__.js";import"./Layer-DvCe8pYL.js";import"./Curve-Cv9dH7Wv.js";import"./types-DRd1AoLJ.js";import"./step-CaWVPUsr.js";import"./path-DyVhHtw_.js";import"./LabelList-h2AkLue_.js";import"./Label-5Ji-gJCy.js";import"./Text-vABaHyza.js";import"./DOMUtils-BAyS9uvf.js";import"./ZIndexLayer-CLiiJgzL.js";import"./ActivePoints-COJ33MUQ.js";import"./Dot-C4qnCcQo.js";import"./activeStyles-C5r4Jq_u.js";import"./useAnimationId-mwIlAEpa.js";import"./dataEntryStyles-aRHeEgvk.js";import"./Symbols-_bj5ojYc.js";import"./symbol-w9HomPlm.js";import"./ErrorBarContext-DvlMCK3a.js";import"./SetGraphicalItem-DIzHPpXP.js";import"./getRadiusAndStrokeWidthFromDot-CoVHwyP0.js";import"./ActiveShapeUtils-nIAhhh4O.js";import"./useEffectiveDataKey-sNV4f9xq.js";import"./CartesianAxis-BnuaOFtw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-R8U0hgkF.js";import"./uniqBy-DRpOlyJe.js";import"./iteratee-BH10e2Wz.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Bk3jg-xs.js";import"./Rectangle-DWRYsjhQ.js";import"./util-Dxo8gN5i.js";import"./Sector-Di21Oj5C.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
