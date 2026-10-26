import{r as i,R as e}from"./iframe-DfmqqqCr.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CvLyjXJ6.js";import{R as C}from"./zIndexSlice-d0YHK6xw.js";import{L as s}from"./Line-Dip9Rer8.js";import{X as p}from"./XAxis-B0knr_7L.js";import{T as c}from"./Tooltip-C6TAD7LP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D6KUw4si.js";import"./resolveDefaultProps-ComwQ6WC.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DWglHHAi.js";import"./throttle-DAA8X2l5.js";import"./index-Lp2jcwfG.js";import"./index-CSO17-J0.js";import"./polarAxisSelectors-DpDn-hFD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ci_zYY1V.js";import"./index-pJqwg3_d.js";import"./index-hdUN889v.js";import"./renderedTicksSlice-C4mLmnSQ.js";import"./index-CQMOT26p.js";import"./CartesianChart-LSHb6JPq.js";import"./ZIndexPortal-BDrojabW.js";import"./CategoricalChart-BsBaBvnF.js";import"./Layer-BrcDHHcB.js";import"./Curve-DdFuR-cZ.js";import"./types-9Kx7AXVb.js";import"./step-pAgvwVo8.js";import"./path-DyVhHtw_.js";import"./LabelList-C0IeivS9.js";import"./Label-C130jv2t.js";import"./Text-CG3VrxOm.js";import"./pageBackground-dHeomk-I.js";import"./ZIndexLayer-Cvk6PIs7.js";import"./dataEntryStyles-CeCkFK1K.js";import"./ActivePoints-h83UhP7R.js";import"./Dot-BTf9HS3j.js";import"./activeStyles-CHOILxkP.js";import"./useAnimationId-RNI69aEn.js";import"./Symbols-BOmwAADp.js";import"./symbol-CvaR8Ff4.js";import"./RegisterGraphicalItemId-CzjpJBeg.js";import"./ErrorBarContext-C3AKnlrm.js";import"./SetGraphicalItem-41fol6Y1.js";import"./getRadiusAndStrokeWidthFromDot-CCLTT3lF.js";import"./ActiveShapeUtils-Csx1hMVo.js";import"./useEffectiveDataKey-Ri-wD3JN.js";import"./CartesianAxis-CYll20RU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BIpV4hkj.js";import"./uniqBy-B-Zb9oWg.js";import"./iteratee-KP65sc9-.js";import"./isArguments-yB-y1yaH.js";import"./Cross-I7yLc-X5.js";import"./Rectangle-CCmTs9GK.js";import"./util-Dxo8gN5i.js";import"./Sector-BnHkZCan.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
