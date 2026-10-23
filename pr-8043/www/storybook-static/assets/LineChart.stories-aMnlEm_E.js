import{r as i,R as e}from"./iframe-x9YCwuVc.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Cy8Yflxs.js";import{R as C}from"./zIndexSlice-BV1eDa8t.js";import{L as s}from"./Line-B5t4aXxo.js";import{X as p}from"./XAxis-DOrrA_AO.js";import{T as c}from"./Tooltip-CXDzUWmd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DuSi3yuo.js";import"./resolveDefaultProps-IMSWVxjI.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DUrnAUTK.js";import"./throttle-CFpl0b0L.js";import"./index-4vAc-1PY.js";import"./index-_DnjTFHH.js";import"./isWellBehavedNumber-BfcoqVbY.js";import"./d3-scale-DeFHX2Lm.js";import"./index-CnDSa4vm.js";import"./index-BC1Gmj01.js";import"./renderedTicksSlice-BQZVpqNr.js";import"./index-BC2a9-E_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-pmy50aWE.js";import"./chartDataContext-CCIkzP_F.js";import"./CategoricalChart-DqHAXNep.js";import"./Layer-byU46PKm.js";import"./Curve-8b-Qxogq.js";import"./types-fCYwQ83-.js";import"./step-DWJVpFVS.js";import"./path-DyVhHtw_.js";import"./activeStyles-B5NsC4ZM.js";import"./Label-BWVi17tM.js";import"./Text-COBhbjuo.js";import"./pageBackground-TE-MQad5.js";import"./useId-CMngnmGp.js";import"./useBackwardsCompatibleTheme-BQTuAdi2.js";import"./ZIndexLayer-DrSAG7iO.js";import"./dataEntryStyles-Drm_aJ2X.js";import"./useAnimationId-DxnlQorl.js";import"./ActivePoints-BL8qk4Kh.js";import"./Dot-B98z2wU8.js";import"./RegisterGraphicalItemId-DNM5emxE.js";import"./ErrorBarContext-a5it_Nak.js";import"./GraphicalItemClipPath-DXDK6Y35.js";import"./SetGraphicalItem-D1wyT9-l.js";import"./getRadiusAndStrokeWidthFromDot-DRWTNSpx.js";import"./ActiveShapeUtils-CYeGEQWR.js";import"./useEffectiveDataKey-D48S_iiZ.js";import"./CartesianAxis-C1FOk_u6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Q7vbrrOH.js";import"./uniqBy-bvQ6Ay4K.js";import"./iteratee-_rf4IMM8.js";import"./isArguments-yB-y1yaH.js";import"./Cross-B9ZBBQd6.js";import"./Rectangle-B-VzFgv3.js";import"./util-Dxo8gN5i.js";import"./Sector-e9C-YfcB.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
