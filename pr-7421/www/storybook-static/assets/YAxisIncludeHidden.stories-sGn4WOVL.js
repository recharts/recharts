import{r as f,R as e}from"./iframe-D2mK0_SY.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-C4SnN1OG.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CurYRJ-V.js";import{C as k}from"./ComposedChart-FHYKcVPV.js";import{X as K}from"./XAxis-BpVV2nBf.js";import{L as v}from"./Legend-1qBdK27m.js";import{B as s}from"./Bar-DvcXNhIG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-gd89bvM7.js";import"./CartesianAxis-DT-BfhYh.js";import"./Layer-CVGFJ3pT.js";import"./resolveDefaultProps-BDJLCGQq.js";import"./Text-Bc_u3T2m.js";import"./DOMUtils-DX7CaFR_.js";import"./isWellBehavedNumber-PwrDSI0r.js";import"./Label-BWAfqYWX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cbwietl0.js";import"./index-EKI16Vl3.js";import"./index-c7pUvxdZ.js";import"./types-CH3UhPbC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cv_tPpdR.js";import"./immer-Cds45GwY.js";import"./RechartsWrapper-Da4b3ttl.js";import"./index-CTpZBZDJ.js";import"./index-DFlAh1f1.js";import"./axisSelectors-BOYHxsHM.js";import"./d3-scale-D7S-A9mQ.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Dl9STlZO.js";import"./chartDataContext-DcfIEZUC.js";import"./CategoricalChart-DE8yrV95.js";import"./Symbols-C6f4ZPAl.js";import"./symbol-UOHidxyy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ccdl1agf.js";import"./uniqBy-xkGer2is.js";import"./iteratee-CjetG5zr.js";import"./tooltipContext-Cy6nUCQt.js";import"./AnimatedItems-9-Gv8yfc.js";import"./useAnimationId-Bv48rb4m.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CuIMbGOo.js";import"./ActiveShapeUtils-C7mnGY80.js";import"./RegisterGraphicalItemId-DKtf33UE.js";import"./ErrorBarContext-ClEcDtft.js";import"./GraphicalItemClipPath-C_n5kW10.js";import"./SetGraphicalItem-2IunVx_0.js";import"./getZIndexFromUnknown-FUmlMGEh.js";import"./graphicalItemSelectors-aGu2s7Mg.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
