import{r as f,R as e}from"./iframe-Sgab1gUe.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-B3Csn4tH.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BrzbkbEI.js";import{C as k}from"./ComposedChart-DQqePUzc.js";import{X as K}from"./XAxis-Be4f_XLH.js";import{L as v}from"./Legend-C53AcP9l.js";import{B as s}from"./Bar-BkFeW9r4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BJyukGiE.js";import"./CartesianAxis-s1UQ10e0.js";import"./Layer-Dy3UQ8V8.js";import"./resolveDefaultProps-CNXENHcX.js";import"./Text-Bwmob33r.js";import"./DOMUtils-CmwtFJfy.js";import"./isWellBehavedNumber-CJXdc3tU.js";import"./Label-pFFfknml.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DBRcOItw.js";import"./index-BLkVzwy_.js";import"./index-90Rz6XAP.js";import"./types-CA2ETL4c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CVwVFFGF.js";import"./immer-jmjMSL8D.js";import"./RechartsWrapper-DTduNXvU.js";import"./index-BkOZFEZb.js";import"./index-BsnSQtU-.js";import"./axisSelectors-8GhzU9TS.js";import"./d3-scale-Bg12AftI.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CY44eXB-.js";import"./chartDataContext-NIXL8iaZ.js";import"./CategoricalChart-DwEPGx0k.js";import"./Symbols-CZkuTCUm.js";import"./symbol-BXAKInVH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-aoLYr1Hs.js";import"./uniqBy-D-eprie9.js";import"./iteratee-DfxU7rfy.js";import"./tooltipContext-DiIFYHNf.js";import"./AnimatedItems-CFJVJstG.js";import"./useAnimationId-D0bn0X4e.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CGR64IYi.js";import"./ActiveShapeUtils-CypivSKC.js";import"./RegisterGraphicalItemId-BSYxTo0u.js";import"./ErrorBarContext-WB4epqm3.js";import"./GraphicalItemClipPath-BB2uZM8Q.js";import"./SetGraphicalItem-Cu_IpSGW.js";import"./getZIndexFromUnknown-BmwQbQid.js";import"./graphicalItemSelectors-B2HDnJwF.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
