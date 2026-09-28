import{r as f,R as e}from"./iframe-DVTI7asB.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B0eGMGZi.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-VrE65LwJ.js";import{C as k}from"./ComposedChart-D0z3ruTF.js";import{X as K}from"./XAxis-B8cGJGN2.js";import{L as v}from"./Legend-KbPbtBqc.js";import{B as a}from"./Bar-Or1Jwi_e.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C5sDum5_.js";import"./Text-XQRKlDnX.js";import"./resolveDefaultProps-Brh9VJsQ.js";import"./DOMUtils--MlKRlg5.js";import"./isWellBehavedNumber-D3Ee2F4O.js";import"./useId-D-envRVe.js";import"./useBackwardsCompatibleTheme-CTYeO19p.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-MKguLFMj.js";import"./index-CBeOLa_K.js";import"./index-x2lkdleK.js";import"./RechartsWrapper-0XjKEbs7.js";import"./axisSelectors-BpjWm-Lu.js";import"./throttle-BWtzmmFP.js";import"./d3-scale-CTgt3q-T.js";import"./index-Dxlfd81A.js";import"./index-BME0E5Ea.js";import"./renderedTicksSlice-Dm0DClKF.js";import"./index-B1fyioQZ.js";import"./CartesianAxis-B7c0SFW_.js";import"./Layer-CKEADoVi.js";import"./types-BbyfnRjt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-TlzU5q-y.js";import"./chartDataContext-5tueJF_N.js";import"./CategoricalChart-DDdawTFM.js";import"./Symbols-BiOVdGD0.js";import"./symbol-ESR152s0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-rrBJTLuZ.js";import"./uniqBy-BgA3F1Vh.js";import"./iteratee-BvFp8pOf.js";import"./AnimatedItems-DqWEvMcn.js";import"./useAnimationId-CwgRschT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DR9uOGHN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DaFsN-Ec.js";import"./tooltipContext-BxZtXLsC.js";import"./RegisterGraphicalItemId-BCvN7nSY.js";import"./ErrorBarContext-BzIynu6X.js";import"./GraphicalItemClipPath-DpsQ0BRT.js";import"./SetGraphicalItem-Co1iXM8q.js";import"./getZIndexFromUnknown-BiZ_5tBQ.js";import"./useGraphicalItemIdentity-Bs2hvtnA.js";import"./dataEntryStyles-Cddtf00Q.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
