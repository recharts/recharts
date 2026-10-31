import{r as i,R as e}from"./iframe-BcoARvhY.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-p5RsXGOs.js";import{R as C}from"./zIndexSlice-Cap7bOGW.js";import{L as s}from"./Line-DWyUakfU.js";import{X as p}from"./XAxis-CW4XRUun.js";import{T as c}from"./Tooltip-4lPV6aA7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cwmh20d2.js";import"./resolveDefaultProps-DgaC_Lp9.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CF6rFxXt.js";import"./throttle-DozmwBSC.js";import"./index-DVE_dPhD.js";import"./index-BIq0I_KS.js";import"./polarAxisSelectors-C4L0U3vA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BLsEuD7O.js";import"./index-SzPYUv7o.js";import"./index-DvX40RdG.js";import"./renderedTicksSlice-Dsox9MKA.js";import"./index-BhqvlJ2k.js";import"./fillDefinitions-D74AVg8N.js";import"./CartesianChart-C4x2bsCb.js";import"./ZIndexPortal-CGHsRqD4.js";import"./CategoricalChart-DUIKL0FO.js";import"./Layer-BMBcyrHw.js";import"./Curve-hSwQe_mn.js";import"./types-CjeLalhs.js";import"./step-BV4gh9k1.js";import"./path-DyVhHtw_.js";import"./LabelList-DqQuwlzD.js";import"./Label-Db4oLrbv.js";import"./Text-DEB5NFXE.js";import"./DOMUtils-BwQh9Mln.js";import"./ZIndexLayer-e5VNMC6H.js";import"./ActivePoints-qZlMEdOF.js";import"./Dot-CeoPT2zv.js";import"./activeStyles-Bdk5Xw9p.js";import"./useAnimationId-DZvEuqRY.js";import"./dataEntryStyles-oli1U5SG.js";import"./Symbols-DvLknyR9.js";import"./symbol-D2mHl5_S.js";import"./ErrorBarContext-BGCJ_sZx.js";import"./SetGraphicalItem-D7kHQmaa.js";import"./getRadiusAndStrokeWidthFromDot-DIgm2Flo.js";import"./ActiveShapeUtils-CvEqRJU-.js";import"./useEffectiveDataKey-1O9VfdX1.js";import"./CartesianAxis-Dfmzj1DX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-KsdSYS8B.js";import"./uniqBy-CzEHPKx1.js";import"./iteratee-CEqHQ8un.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BYGgjkzq.js";import"./Rectangle-C_t9hqFj.js";import"./util-Dxo8gN5i.js";import"./Sector-DAFfY2-U.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
