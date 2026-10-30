import{r as i,R as e}from"./iframe-3XHGwrzY.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-B8JuFuGy.js";import{R as C}from"./zIndexSlice-Brmhs58T.js";import{L as s}from"./Line-CZeg6v99.js";import{X as p}from"./XAxis-DAbWxmV3.js";import{T as c}from"./Tooltip-DQGZOZkM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DFT9i2CK.js";import"./resolveDefaultProps-B1pnPDuf.js";import"./get-cF5BDHN6.js";import"./axisSelectors-0sscf7qw.js";import"./throttle-CcufCSOD.js";import"./index-DfXu2aPp.js";import"./index-x3pA7Xn9.js";import"./polarAxisSelectors-DX_jscyS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DC4T9Y5K.js";import"./index-CxvxzVyz.js";import"./index-Bka_NUAq.js";import"./renderedTicksSlice-dj_CVdaS.js";import"./index-B22a4gCm.js";import"./CartesianChart-CeapXKiM.js";import"./ZIndexPortal-v1uidM1c.js";import"./CategoricalChart-D2_ES5Wf.js";import"./Layer-Cs_-jK6s.js";import"./Curve-BVBbiuI4.js";import"./types-DBamYHnY.js";import"./step-DpyDB26Q.js";import"./path-DyVhHtw_.js";import"./LabelList-KPZxqPb8.js";import"./Label-DV0q5jx7.js";import"./Text-BPYl0AVs.js";import"./DOMUtils-CArHkVGP.js";import"./ZIndexLayer-Da5OPXz2.js";import"./ActivePoints-CP837bSg.js";import"./Dot-aAEHGIGY.js";import"./activeStyles-Pcudkpr-.js";import"./useAnimationId-9M90yRIF.js";import"./dataEntryStyles-DQz1PP-z.js";import"./fillDefinitions-Czp8LH37.js";import"./themeFill-BM4c2Gyu.js";import"./Symbols-CVFCOhtY.js";import"./symbol-Bnf2KWTy.js";import"./ErrorBarContext-N4SBTIIF.js";import"./SetGraphicalItem-pMWsFYWu.js";import"./getRadiusAndStrokeWidthFromDot-C8YM2wm9.js";import"./ActiveShapeUtils-VZdYbIVb.js";import"./useEffectiveDataKey-3BqFsLAv.js";import"./CartesianAxis-rPfnZIs4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-B4umSDLo.js";import"./uniqBy-B1y1vTmS.js";import"./iteratee-P6PZZRrs.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CcizPSQC.js";import"./Rectangle-BvFpd_DO.js";import"./util-Dxo8gN5i.js";import"./Sector-B8S12vxL.js";const He={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},xe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,xe as __namedExportsOrder,He as default};
