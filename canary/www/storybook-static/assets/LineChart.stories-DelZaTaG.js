import{r as i,R as e}from"./iframe-7ia7cOns.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BJz6jXaq.js";import{R as C}from"./zIndexSlice-CNZG0Y5y.js";import{L as s}from"./Line-C0Z-Ezm6.js";import{X as p}from"./XAxis-CyA_GXTr.js";import{T as c}from"./Tooltip-C4oc2Rl5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CDikf3PH.js";import"./resolveDefaultProps-C774hdeP.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D31_gBEg.js";import"./throttle-CuvGuAUJ.js";import"./index-CbtDNwdV.js";import"./index-lD6nPUSg.js";import"./polarAxisSelectors-0UsOTGQK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DDTCvpuX.js";import"./index-B7Wz_zu1.js";import"./index-uEerYH_x.js";import"./renderedTicksSlice-DHygufHc.js";import"./index-DP-wgMO5.js";import"./CartesianChart-C1quWpWE.js";import"./ZIndexPortal-CBpzcmkv.js";import"./CategoricalChart-BjEI-7io.js";import"./Layer-DH-Bpj5F.js";import"./Curve-DRmYCb_P.js";import"./types-CoWppO1p.js";import"./step-DopNAfqi.js";import"./path-DyVhHtw_.js";import"./LabelList-BkznOaj8.js";import"./Label-Y02zXLeF.js";import"./Text-CkBg3X4g.js";import"./DOMUtils-BskzGjW1.js";import"./ZIndexLayer-BsU293fp.js";import"./ActivePoints-B8drpMZ8.js";import"./Dot-djHPvui5.js";import"./activeStyles-CyfixWYK.js";import"./useAnimationId-dFi6qGfW.js";import"./dataEntryStyles-B9lOpBft.js";import"./fillDefinitions-Bh-Idu0v.js";import"./themeFill-B_wPexqX.js";import"./Symbols-COiuuhwV.js";import"./symbol-Q9XLyBk-.js";import"./ErrorBarContext-CxoeLCh5.js";import"./SetGraphicalItem-Cl9ASqDV.js";import"./getRadiusAndStrokeWidthFromDot-CWANwgvT.js";import"./ActiveShapeUtils--ULkn_AA.js";import"./useEffectiveDataKey-DpgRN79Y.js";import"./CartesianAxis-B17J1uIc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CLrMTlCN.js";import"./uniqBy-BdDgBJqj.js";import"./iteratee-7m6p-S4N.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Dv-7A8UM.js";import"./Rectangle-nIz-cHMY.js";import"./util-Dxo8gN5i.js";import"./Sector-DG3Kvf8d.js";const He={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},xe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
