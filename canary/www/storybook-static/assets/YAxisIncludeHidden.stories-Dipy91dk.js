import{r as f,e}from"./iframe-Dbih6tM_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-x6PKBVdt.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-F7HsGAhb.js";import{C as k}from"./ComposedChart-hkcoJXW_.js";import{X as K}from"./XAxis-UKVsyr7-.js";import{L as v}from"./Legend-cJzfLKeh.js";import{B as s}from"./Bar-BSkfuJDV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DVIR8H8G.js";import"./CartesianAxis-sMFUgupR.js";import"./Layer-B42S8g5T.js";import"./resolveDefaultProps-C6XhIduD.js";import"./Text-BD0wWctz.js";import"./DOMUtils-DtcMNyN4.js";import"./isWellBehavedNumber-C76PNx6x.js";import"./Label-CzYO866A.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DaMCCGdS.js";import"./index-C3fYT42t.js";import"./index-VrctuRm7.js";import"./types-Bhc7gOzP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CY1pIMUb.js";import"./immer-u9L_0Kl5.js";import"./RechartsWrapper-CzkBSRjy.js";import"./index-yjWx6Bgh.js";import"./axisSelectors-DGtb_paL.js";import"./d3-scale-QFZ3DYXF.js";import"./CartesianChart-sZ1KYKyT.js";import"./chartDataContext-CumcEPMe.js";import"./CategoricalChart-BUbHs2Eq.js";import"./Symbols-BGSIVaqN.js";import"./symbol-C1rCDija.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BXd0grxf.js";import"./uniqBy-ByRFrmC2.js";import"./iteratee-DEDrKpvz.js";import"./tooltipContext-CFa6YsOM.js";import"./ReactUtils-Bj9mmMxB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DeVdQqm5.js";import"./useAnimationId-CWLhhp_H.js";import"./ActiveShapeUtils-B7EaMEP1.js";import"./RegisterGraphicalItemId-CoMv7TZ7.js";import"./ErrorBarContext-CaITZn-H.js";import"./GraphicalItemClipPath-BqpiOJ0K.js";import"./SetGraphicalItem-C_rRFyeV.js";import"./getZIndexFromUnknown-bgn1uqz8.js";import"./graphicalItemSelectors-BbOSuOCl.js";const Ke={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
