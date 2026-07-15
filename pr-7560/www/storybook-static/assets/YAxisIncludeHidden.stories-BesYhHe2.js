import{r as f,R as e}from"./iframe-CkvJyCps.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DiR5kzGo.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Ui89VFRT.js";import{C as k}from"./ComposedChart-B_G7W1UH.js";import{X as K}from"./XAxis-Cs2owod8.js";import{L as v}from"./Legend-BSm1HiW3.js";import{B as s}from"./Bar-1HHzvDVH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-mgc-X0Bi.js";import"./Layer-C4byj5K8.js";import"./resolveDefaultProps-DCKyJEY4.js";import"./Text-R9sJDfcz.js";import"./DOMUtils-CxWIP_C8.js";import"./isWellBehavedNumber-DqH8GE3H.js";import"./Label-BMESeQSE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-t0g3b6Ty.js";import"./index-BX-3EqNW.js";import"./index-BsiD65Ad.js";import"./types-CzkLD6k1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BMi6DZwf.js";import"./throttle-DgDNnF1i.js";import"./RechartsWrapper-CjY8J2vT.js";import"./index-Cjf8FZO7.js";import"./index-D8Jo1LfZ.js";import"./axisSelectors-CC2H0zuo.js";import"./d3-scale-Crqr5kEu.js";import"./CartesianChart-DFWFnz0T.js";import"./chartDataContext-BT6jQe_1.js";import"./CategoricalChart-E0pKYNLO.js";import"./Symbols-BWAxmpkp.js";import"./symbol-C7v9Wwia.js";import"./path-DyVhHtw_.js";import"./useElementOffset-cxxtLqzc.js";import"./uniqBy-BHjvX3lg.js";import"./iteratee-DA1LVjZi.js";import"./tooltipContext-CE2l0mBM.js";import"./AnimatedItems-CNADXJdo.js";import"./useAnimationId-jBCdM9CL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-_yFhjmBj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DlrbS-G4.js";import"./RegisterGraphicalItemId-p5LXpBOx.js";import"./ErrorBarContext-CbXX-ZBj.js";import"./GraphicalItemClipPath-Ci1KSEKS.js";import"./SetGraphicalItem-BSfhP0b_.js";import"./getZIndexFromUnknown-CAQutVKG.js";import"./graphicalItemSelectors-BppvdMk2.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
