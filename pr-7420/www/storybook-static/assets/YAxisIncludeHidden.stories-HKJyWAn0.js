import{r as f,R as e}from"./iframe-ebWVliJd.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CXtDAlyU.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BrrGtknp.js";import{C as k}from"./ComposedChart-BOJ1HV40.js";import{X as K}from"./XAxis-BweeNrXM.js";import{L as v}from"./Legend-DMKSuMke.js";import{B as s}from"./Bar-DpeW8n5w.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D4k_mNx-.js";import"./CartesianAxis-R8Sp45dD.js";import"./Layer-CrSVK8w0.js";import"./resolveDefaultProps-B5O-6-WI.js";import"./Text-C6J-h8kC.js";import"./DOMUtils-D1VV_WMD.js";import"./isWellBehavedNumber-DRTDdH6f.js";import"./Label-CEbu9yOv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DymXXG8t.js";import"./index-CMkBnQa6.js";import"./index-Ca07HsLe.js";import"./types-DIjbaJzk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Ba1ooYto.js";import"./immer-u2yF5cyx.js";import"./RechartsWrapper-DUxjIduK.js";import"./index-DF02JQD9.js";import"./index-r7VIACUV.js";import"./axisSelectors-BiXUDLnL.js";import"./d3-scale-BkusLtz6.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BJML043z.js";import"./chartDataContext-DV3K9IA2.js";import"./CategoricalChart-DdVMa29B.js";import"./Symbols-B3k_HJlQ.js";import"./symbol-DwyeBK49.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DUZdlllQ.js";import"./uniqBy-O9s4KUKR.js";import"./iteratee-ftXPOfk-.js";import"./tooltipContext-XWcfhW_R.js";import"./AnimatedItems-VPYkwJ4F.js";import"./index-BPJnJB5S.js";import"./useAnimationId-n62HywHx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cbetr6hK.js";import"./ActiveShapeUtils-WXdDf590.js";import"./RegisterGraphicalItemId-YmUQslDz.js";import"./ErrorBarContext-4bUYjOjX.js";import"./GraphicalItemClipPath-CLalv2k5.js";import"./SetGraphicalItem-DrFDycKg.js";import"./getZIndexFromUnknown-CKtdBG35.js";import"./graphicalItemSelectors-D4vnKPw5.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
