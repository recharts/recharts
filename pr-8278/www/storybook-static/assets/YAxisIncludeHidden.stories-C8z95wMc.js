import{r as f,R as e}from"./iframe-CsBzJ_oY.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BcwvR8DG.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DMNrA3gR.js";import{C as k}from"./ComposedChart-DxnPzYcP.js";import{X as K}from"./XAxis-DUfavQsq.js";import{L as v}from"./Legend-TM2Lf8pQ.js";import{B as a}from"./Bar-3tQtcM5V.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BqIt3uIU.js";import"./Text-_hT2aORY.js";import"./resolveDefaultProps-DTmgUguK.js";import"./ZIndexLayer-BgP2DxGj.js";import"./index-ZIwCGu9j.js";import"./index-ANSegWuD.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DNMiXlqe.js";import"./throttle-BC8XINhc.js";import"./axisSelectors-C9oSyHKr.js";import"./d3-scale-eAFxYw1v.js";import"./CartesianAxis-Ct89iDgP.js";import"./Layer-DasxrL-P.js";import"./types-BTltodPN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DmEF733K.js";import"./index-BQIdRebQ.js";import"./index-CyJaGzTs.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BbLnuVBa.js";import"./index-Dtk6Fc20.js";import"./fillDefinitions-CiGFpPDU.js";import"./CartesianChart-BkZkGsdO.js";import"./chartDataContext-C_pMILpz.js";import"./CategoricalChart-DGDB_d9-.js";import"./Symbols-u-7YXq8E.js";import"./symbol-BqQr48xZ.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CgJ049Q8.js";import"./uniqBy-BzxtSZSo.js";import"./iteratee-deGr8F35.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BxNkTaqU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BSyLp_F2.js";import"./useAnimationId-CwEH45Ii.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DlQXgIQN.js";import"./tooltipContext-CrB6rlIN.js";import"./ErrorBarContext-DJQ_oRWY.js";import"./activeStyles-CWJgi0Pp.js";import"./SetGraphicalItem-Cd415TqE.js";import"./getZIndexFromUnknown-8xU1Q5SP.js";import"./useEffectiveDataKey-P2OtOQRT.js";import"./omit-ZE1N8yBE.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
