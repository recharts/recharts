import{u as f,e}from"./iframe-B82q9u-Y.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-CWyiNt5V.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-CKCQU2qV.js";import{C}from"./ComposedChart-CBqvY07d.js";import{X as K}from"./XAxis-BRaoe5W0.js";import{L as v}from"./Legend-DSpSu37z.js";import{B as s}from"./Bar-C-qLvCZG.js";import{R as x}from"./RechartsHookInspector-z9cebFjB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-U5xnp7fG.js";import"./Layer-C2GvyuKR.js";import"./resolveDefaultProps-g5aDd7Yf.js";import"./Text-DlTF1_pF.js";import"./DOMUtils-CfA92o7z.js";import"./Label-yJEcHIim.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DTDC0Rqe.js";import"./zIndexSlice-I2t58hxh.js";import"./immer-WiujJWUS.js";import"./types-BjP-coDb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CInncnPk.js";import"./hooks-Sri1sPLr.js";import"./axisSelectors-DXfv2Drb.js";import"./d3-scale-B8FZewzC.js";import"./string-yHBgcFlJ.js";import"./RechartsWrapper-CBADlju4.js";import"./index-DXyPKPXc.js";import"./CartesianChart-5ApupumH.js";import"./chartDataContext-D6HVVC2S.js";import"./CategoricalChart-DKDPW_6L.js";import"./Symbols-D0OvFEPa.js";import"./symbol-BgLdl-Fp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C7Quszb0.js";import"./uniqBy-DRfr_3Tm.js";import"./iteratee-DVb5hUcr.js";import"./tooltipContext-BAcgJM-p.js";import"./AnimatedItems-COwEU_uD.js";import"./useAnimationId-DLlegLLP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BGMFafl1.js";import"./ActiveShapeUtils-D-OS5cJ_.js";import"./RegisterGraphicalItemId-kL3h8ct-.js";import"./ErrorBarContext-BL5FMVHx.js";import"./GraphicalItemClipPath-BpOAg0aH.js";import"./SetGraphicalItem-BoZe1188.js";import"./getZIndexFromUnknown-BcWEO_oo.js";import"./graphicalItemSelectors-_7iDSOmF.js";import"./index-dYimQAlj.js";import"./ChartSizeDimensions-BGSkMu5K.js";import"./OffsetShower-DzS61Pg9.js";import"./PlotAreaShower-uXu1OgRK.js";const Ye={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,Ye as default};
