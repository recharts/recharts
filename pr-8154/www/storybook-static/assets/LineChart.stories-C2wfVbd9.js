import{r as i,R as e}from"./iframe-KBGw0lyx.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DFvx_vfn.js";import{R as C}from"./zIndexSlice-C-xeYs44.js";import{L as s}from"./Line-CeC9baUi.js";import{X as p}from"./XAxis-ok9FfAxX.js";import{T as c}from"./Tooltip-DP-3tpm7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CcktegzB.js";import"./resolveDefaultProps-kFtONSvK.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CEjenqk6.js";import"./throttle-BjGPoFhQ.js";import"./index-Db-AaMwI.js";import"./index-EF7AV5IJ.js";import"./polarAxisSelectors-BG_XMkul.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CcHRZEud.js";import"./index-DVqUNpUf.js";import"./index-BSom5vyx.js";import"./renderedTicksSlice-DZXVMt_J.js";import"./index-DTImZAxQ.js";import"./fillDefinitions-CJnfgvsJ.js";import"./CartesianChart-DKU75UBR.js";import"./ZIndexPortal-CLKXKALr.js";import"./CategoricalChart-ByWn7DI3.js";import"./Layer-Du8JdPXM.js";import"./Curve-r2B0eutN.js";import"./types-BKfndQQ3.js";import"./step-BbiIrKZ6.js";import"./path-DyVhHtw_.js";import"./LabelList-DauBxbTi.js";import"./Label-B98IZvVF.js";import"./Text-CUmSOGFL.js";import"./DOMUtils-plVJ3xwD.js";import"./ZIndexLayer-BNAbNRIQ.js";import"./ActivePoints-CGR7NTAp.js";import"./Dot-BPCwUkSx.js";import"./activeStyles-C4Umy--5.js";import"./useAnimationId-BAlrP4Yc.js";import"./dataEntryStyles-DZFUHLoQ.js";import"./Symbols-BD33ILFX.js";import"./symbol-BJV2xy5y.js";import"./ErrorBarContext-CuOMSbvd.js";import"./SetGraphicalItem-eP4w3gdT.js";import"./getRadiusAndStrokeWidthFromDot-Cv-NOSS3.js";import"./ActiveShapeUtils-CKM6jbR2.js";import"./useEffectiveDataKey-ycUHTwlw.js";import"./CartesianAxis-ZwQJNcj_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BvetthWK.js";import"./uniqBy-T0ABjzXx.js";import"./iteratee-CiEcwEiU.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BxQg94Oo.js";import"./Rectangle-D6IFr9AJ.js";import"./util-Dxo8gN5i.js";import"./Sector-BaKJKGrn.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
