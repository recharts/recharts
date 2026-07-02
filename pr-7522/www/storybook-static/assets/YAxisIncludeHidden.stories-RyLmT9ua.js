import{r as f,R as e}from"./iframe-BieQWE3D.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-ChNLm74a.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BYxygo-S.js";import{C as k}from"./ComposedChart-NGCBYeb_.js";import{X as K}from"./XAxis-G4vRwmKg.js";import{L as v}from"./Legend-CgVWCWtz.js";import{B as s}from"./Bar-BgC33EeK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DpF5IQ2O.js";import"./Layer-NUCJMvF3.js";import"./resolveDefaultProps-0J6uDFJb.js";import"./Text-DkEmFVu0.js";import"./DOMUtils-B828G3hP.js";import"./isWellBehavedNumber-By2uQy27.js";import"./Label-D0PWYGmJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BHodRoAu.js";import"./index-DS0rELK-.js";import"./index-CiDtTrDL.js";import"./types-CIzADBdv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BWxb2yva.js";import"./throttle-C6pqxX0n.js";import"./RechartsWrapper-BQPdhE90.js";import"./index-BK9-NO1n.js";import"./index-D3zDokgn.js";import"./axisSelectors-CKN_GV_q.js";import"./d3-scale-Sw7i2UsL.js";import"./CartesianChart-D6JA1RXb.js";import"./chartDataContext-DiNSnyrd.js";import"./CategoricalChart-BTFUnlUn.js";import"./Symbols-D18tkWgS.js";import"./symbol-C7neZgKU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DsSZYmDt.js";import"./uniqBy-CU_ixT1X.js";import"./iteratee-WoDKDUag.js";import"./tooltipContext-COzl_PjR.js";import"./AnimatedItems-fhCf9-7A.js";import"./useAnimationId-3OlCfqca.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-2NfmC8rx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CZK7c2Ij.js";import"./RegisterGraphicalItemId-DxgNfXcN.js";import"./ErrorBarContext-D6txdMKi.js";import"./GraphicalItemClipPath-O6SSxJbU.js";import"./SetGraphicalItem-ucOefQZ-.js";import"./getZIndexFromUnknown-DR8hrgQK.js";import"./graphicalItemSelectors-CY30Tz3v.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
