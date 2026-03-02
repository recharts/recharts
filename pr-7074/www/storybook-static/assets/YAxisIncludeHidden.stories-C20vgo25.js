import{r as f,e}from"./iframe-YHIi0zNq.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-EBaaYeoG.js";import{R as A}from"./arrayEqualityCheck-CiMVM-SL.js";import{C}from"./ComposedChart-Dbe-cyVJ.js";import{X as K}from"./XAxis-kqqXeMbl.js";import{L as v}from"./Legend-CR50tVr1.js";import{B as a}from"./Bar-Ow4h9FCb.js";import{R as x}from"./RechartsHookInspector-Cdc_RxXj.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DCRdhe3Y.js";import"./Layer-xP0kyya2.js";import"./resolveDefaultProps-BuJwUxEP.js";import"./Text-BfyXYVHl.js";import"./DOMUtils-B22dZqv4.js";import"./Label-DOPySTsx.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ntDhn9GI.js";import"./zIndexSlice-DeqvswTX.js";import"./immer-D_GJadju.js";import"./types-D6q9wb44.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DxRvDe1C.js";import"./hooks-CFdjgn4I.js";import"./axisSelectors-87SRvgUu.js";import"./d3-scale-DMZnVruV.js";import"./RechartsWrapper-o-AfycQs.js";import"./index-u4istH96.js";import"./CartesianChart-Bvl8nfic.js";import"./chartDataContext-BapHi4AL.js";import"./CategoricalChart-BRn4vti9.js";import"./Symbols-jxhochxb.js";import"./symbol-B8nih3Ay.js";import"./step-ByfP7lrq.js";import"./useElementOffset-Bus-3Dt3.js";import"./uniqBy-B1iZPEDj.js";import"./iteratee-lh3PvcGG.js";import"./tooltipContext-CJg7C4G4.js";import"./ReactUtils-HN0dEhAf.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BKfvV8h2.js";import"./isPlainObject-GBUylHQy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BtRVLgVP.js";import"./useAnimationId-ZghgqyXB.js";import"./Trapezoid-CkRbYMAh.js";import"./Sector-BgEwi5iM.js";import"./Curve-fcCSfps7.js";import"./RegisterGraphicalItemId-LQPm_pAb.js";import"./ErrorBarContext-CYNYOD56.js";import"./GraphicalItemClipPath-Iw5JYGhP.js";import"./SetGraphicalItem-CUARmGp-.js";import"./getZIndexFromUnknown-BXOE4--R.js";import"./graphicalItemSelectors-CSTEPztl.js";import"./index-Cat5Cyt-.js";import"./ChartSizeDimensions-CGxCw1zc.js";import"./OffsetShower-450EX_p_.js";import"./PlotAreaShower-dE-HeGlr.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Oe=["WithIncludeHidden"];export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
