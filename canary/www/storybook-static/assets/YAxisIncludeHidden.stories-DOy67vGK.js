import{r as f,R as e}from"./iframe-CiBEWf8Q.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-By5XyMD9.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CF6C51G2.js";import{C as k}from"./ComposedChart-BHUU1HHB.js";import{X as K}from"./XAxis-CbgzK4MI.js";import{L as v}from"./Legend-CWcnCzB9.js";import{B as a}from"./Bar-hFDIRDmN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DPc6TFRy.js";import"./Text-CsV3VR-3.js";import"./resolveDefaultProps-Cheer07s.js";import"./DOMUtils-9fJMrmCV.js";import"./isWellBehavedNumber-CTCV4BvK.js";import"./useId-fAK_bkox.js";import"./useBackwardsCompatibleTheme-CXlfy45z.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D9-T3nqJ.js";import"./index-ChQP2zgF.js";import"./index-DQl4yRvy.js";import"./RechartsWrapper-DwV4v4eg.js";import"./axisSelectors-B1sNcXcW.js";import"./throttle-Br6qQatL.js";import"./d3-scale-DOQDVnBo.js";import"./index-B7Lle2z-.js";import"./index-4YB-Ccb_.js";import"./renderedTicksSlice-CoMChRdU.js";import"./index-2IKC_5hn.js";import"./CartesianAxis-DSFQC2E9.js";import"./Layer-Cb-HZ0sR.js";import"./types-P989fbDX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-J5V6zdaG.js";import"./chartDataContext-DDFLXgxQ.js";import"./CategoricalChart-D02G0NrG.js";import"./Symbols-DnAcSvRt.js";import"./symbol-BUPcR90A.js";import"./path-DyVhHtw_.js";import"./useElementOffset-veMYPWYT.js";import"./uniqBy-DZZnv1Z6.js";import"./iteratee-DYSkR0rl.js";import"./AnimatedItems-BvlvVcPM.js";import"./useAnimationId-DjyXFux3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CGbECz4J.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BlIjGu9a.js";import"./tooltipContext-_PF8ziuh.js";import"./RegisterGraphicalItemId-CHeBqfEu.js";import"./ErrorBarContext-BpAFB1gw.js";import"./GraphicalItemClipPath-DMEdIjUU.js";import"./SetGraphicalItem-CegZ7sSO.js";import"./getZIndexFromUnknown-Df9d_AP2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-e2lxP05N.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
