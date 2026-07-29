import{r as f,R as e}from"./iframe-Bx8H2Ifg.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DhvpkuSq.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CibQQwTH.js";import{C as k}from"./ComposedChart-wQ-fmNIT.js";import{X as K}from"./XAxis-DdmuYybV.js";import{L as v}from"./Legend-C_d28AlB.js";import{B as s}from"./Bar-T6ht_xZt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DzJ0MnYC.js";import"./Layer-B1Bv1tpm.js";import"./resolveDefaultProps-atv84skJ.js";import"./Text-DTS3udCG.js";import"./DOMUtils-B-4npwaq.js";import"./isWellBehavedNumber-BjCfjx0l.js";import"./Label-DbBEn_Ke.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C7frmUa_.js";import"./index-D7D5zQI-.js";import"./index--RF86Un6.js";import"./types-Dz5mzedy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BNkNmyy9.js";import"./throttle-DcH5jY9T.js";import"./RechartsThemeContext-CzAT56ie.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DXti2BhE.js";import"./index-DZMfkQNN.js";import"./index-CDB7Uuo1.js";import"./axisSelectors-Cw32qcc-.js";import"./d3-scale-DWE49Teg.js";import"./CartesianChart-B8KEQc2q.js";import"./chartDataContext-TCBOpZph.js";import"./CategoricalChart-D_-fj6zl.js";import"./Symbols-0Jm-HtWQ.js";import"./symbol-DAvIO-EU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DNIfR18S.js";import"./uniqBy-Dxv0QDCx.js";import"./iteratee-BhoZeZsJ.js";import"./tooltipContext-BUmusmOg.js";import"./AnimatedItems-CwxdPZKw.js";import"./useAnimationId-BtPQFk12.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BXj7PHVN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D4eokJlb.js";import"./RegisterGraphicalItemId-B2iGTOcQ.js";import"./ErrorBarContext-BI-oQ816.js";import"./GraphicalItemClipPath-B35L0Cvh.js";import"./SetGraphicalItem-CrnQ6XAB.js";import"./getZIndexFromUnknown-CP1rFc8E.js";import"./graphicalItemSelectors-CqQ9gRtD.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
