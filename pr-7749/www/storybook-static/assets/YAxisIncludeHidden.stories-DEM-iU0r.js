import{r as f,R as e}from"./iframe-DTRlEa3u.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Ds-oNmVm.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CDXLYYsJ.js";import{C as k}from"./ComposedChart-sAjY7YWJ.js";import{X as K}from"./XAxis-C0dwGi3V.js";import{L as v}from"./Legend-CwwnoIaV.js";import{B as a}from"./Bar-GmA7ObGT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CwRVD2C4.js";import"./Text-BwGttioZ.js";import"./resolveDefaultProps-BJzTCoJ3.js";import"./DOMUtils-BlPhfohB.js";import"./isWellBehavedNumber-BJiDbB8v.js";import"./useId-DA93zQ1i.js";import"./useBackwardsCompatibleTheme-Tyqh7EHZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B42FtzLK.js";import"./index-CS48B7tj.js";import"./index-o_WhDpRH.js";import"./RechartsWrapper-BBFKLgiK.js";import"./axisSelectors-DdPePiMV.js";import"./throttle-D6N_0nid.js";import"./d3-scale-5lZtxq-z.js";import"./index-CpmklETy.js";import"./index-Cvz-VVDw.js";import"./renderedTicksSlice-CMohq2ew.js";import"./index-BE7ByIQm.js";import"./CartesianAxis-CKsN-hMj.js";import"./Layer-Cxb9aykb.js";import"./types-BPUiziHz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C0fRKmIL.js";import"./chartDataContext-0lwkG_AO.js";import"./CategoricalChart-Br64IOu-.js";import"./Symbols-COL8E8J0.js";import"./symbol-QVFjQA5Q.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DrFdHzWk.js";import"./uniqBy-C9ZtxYQ4.js";import"./iteratee-BjsuC6vd.js";import"./AnimatedItems-D3NTNo-L.js";import"./useAnimationId-BQWcd1jo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DwF3_6Yk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0NSyvuwL.js";import"./tooltipContext-DfxumADO.js";import"./RegisterGraphicalItemId-NS8Y_EHr.js";import"./ErrorBarContext-B04e9oFc.js";import"./GraphicalItemClipPath-DCT6ZGzY.js";import"./SetGraphicalItem-D-a-mss5.js";import"./getZIndexFromUnknown-BJiZVUJQ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CL95YKlR.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
