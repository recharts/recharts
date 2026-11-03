import{r as f,R as e}from"./iframe-KBGw0lyx.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-Bs_I5rsO.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C-xeYs44.js";import{C as k}from"./ComposedChart-Bx7E-Vpt.js";import{X as K}from"./XAxis-ok9FfAxX.js";import{L as v}from"./Legend-BIe-c_vr.js";import{B as a}from"./Bar-DsbIDVGG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B98IZvVF.js";import"./Text-CUmSOGFL.js";import"./resolveDefaultProps-kFtONSvK.js";import"./DOMUtils-plVJ3xwD.js";import"./ZIndexLayer-BNAbNRIQ.js";import"./index-Db-AaMwI.js";import"./index-EF7AV5IJ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BG_XMkul.js";import"./throttle-BjGPoFhQ.js";import"./axisSelectors-CEjenqk6.js";import"./d3-scale-CcHRZEud.js";import"./CartesianAxis-ZwQJNcj_.js";import"./Layer-Du8JdPXM.js";import"./types-BKfndQQ3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DZXVMt_J.js";import"./index-DVqUNpUf.js";import"./index-BSom5vyx.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CcktegzB.js";import"./index-DTImZAxQ.js";import"./fillDefinitions-CJnfgvsJ.js";import"./CartesianChart-DKU75UBR.js";import"./ZIndexPortal-CLKXKALr.js";import"./CategoricalChart-ByWn7DI3.js";import"./Symbols-BD33ILFX.js";import"./symbol-BJV2xy5y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BvetthWK.js";import"./uniqBy-T0ABjzXx.js";import"./iteratee-CiEcwEiU.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DauBxbTi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D6IFr9AJ.js";import"./useAnimationId-BAlrP4Yc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CKM6jbR2.js";import"./tooltipContext-WqOTR5lK.js";import"./dataEntryStyles-DZFUHLoQ.js";import"./ErrorBarContext-CuOMSbvd.js";import"./activeStyles-C4Umy--5.js";import"./SetGraphicalItem-eP4w3gdT.js";import"./getZIndexFromUnknown-Dio5RCnZ.js";import"./useEffectiveDataKey-ycUHTwlw.js";import"./omit-CTvoxP2o.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
